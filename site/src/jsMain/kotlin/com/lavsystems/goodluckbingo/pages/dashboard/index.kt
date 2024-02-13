package com.lavsystems.goodluckbingo.pages.dashboard

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.lavsystems.goodluckbingo.components.components.AlertDialog
import com.lavsystems.goodluckbingo.components.components.InfoDialog
import com.lavsystems.goodluckbingo.components.components.Loading
import com.lavsystems.goodluckbingo.components.components.PanelPage
import com.lavsystems.goodluckbingo.components.ui.Strings.Common.ACCEPT_TITLE
import com.lavsystems.goodluckbingo.components.ui.Strings.Common.ATTENTION_TITLE
import com.lavsystems.goodluckbingo.components.ui.Strings.Common.CANCEL_TITLE
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.ERROR_TO_DELETE_BINGO
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.ERROR_TO_SAVE_BINGO
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.ERROR_TO_UPDATE_BINGO
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.WANT_TO_ACTIVE_BINGO_STATUS
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.WANT_TO_DELETE_BINGO
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.WANT_TO_FINISH_BINGO_STATUS
import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.navigation.Screen
import com.lavsystems.goodluckbingo.pages.dashboard.components.BingoDialog
import com.lavsystems.goodluckbingo.pages.dashboard.components.BingoItem
import com.lavsystems.goodluckbingo.pages.dashboard.domain.AddBingoUseCase
import com.lavsystems.goodluckbingo.pages.dashboard.domain.GetBingoListUseCase
import com.lavsystems.goodluckbingo.pages.dashboard.domain.UpdateBingoUseCase
import com.lavsystems.goodluckbingo.pages.dashboard.presentation.DashboardViewModel
import com.lavsystems.goodluckbingo.store.LocalStore.storeName
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Page
@Composable
fun Dashboard() {
    val viewModel =
        DashboardViewModel(GetBingoListUseCase(), AddBingoUseCase(), UpdateBingoUseCase())
    val scope = rememberCoroutineScope()
    val pageContext = rememberPageContext()
    var bingoList by remember { mutableStateOf<List<Bingo>>(listOf()) }
    var showLoading by remember { mutableStateOf(viewModel.showLoading) }
    var showDialog by remember { mutableStateOf(false) }
    var showDeleteDialog by remember { mutableStateOf(false) }
    var showStatusDialog by remember { mutableStateOf(false) }
    var showInfoDialog by remember { mutableStateOf(false) }
    var message by remember { mutableStateOf("") }
    var bingoToDelete by remember { mutableStateOf<Bingo?>(null) }
    var bingoToUpdate by remember { mutableStateOf<Bingo?>(null) }


    LaunchedEffect(Unit) {
        scope.launch {
            bingoList = viewModel.getBingoList()
        }
    }

    LaunchedEffect(viewModel.showLoading) {
        showLoading = viewModel.showLoading
    }

    if (showLoading) {
        Loading()
    }

    if (showDialog) {
        BingoDialog(
            onDialogDismiss = {
                showDialog = false
            }
        ) { code, description ->
            scope.launch {
                val bingo = Bingo(
                    code = code.toInt(),
                    description = description,
                )
                viewModel.addBingo(bingo)?.let {
                    bingoList = it
                } ?: run {
                    message = ERROR_TO_SAVE_BINGO
                    showInfoDialog = true
                    delay(2000)
                    showInfoDialog = false
                }
            }
            showDialog = false
        }
    }

    if (showInfoDialog) {
        InfoDialog(message)
    }

    if (showDeleteDialog) {
        AlertDialog(
            ATTENTION_TITLE,
            WANT_TO_DELETE_BINGO,
            ACCEPT_TITLE,
            CANCEL_TITLE,
            onPositive = {
                scope.launch {
                    bingoToDelete?.let {
                        viewModel.updateBingo(it.copy(isDelete = true))?.let { list ->
                            bingoList = list
                        } ?: run {
                            message = ERROR_TO_DELETE_BINGO
                            showInfoDialog = true
                            delay(2000)
                            showInfoDialog = false
                        }
                    }
                    showDeleteDialog = false
                }
            },
            onNegative = {
                showDeleteDialog = false
            }
        )
    }

    if (showStatusDialog) {
        AlertDialog(
            ATTENTION_TITLE,
            if (bingoToUpdate?.isFinished == true) WANT_TO_ACTIVE_BINGO_STATUS else WANT_TO_FINISH_BINGO_STATUS,
            ACCEPT_TITLE,
            CANCEL_TITLE,
            onPositive = {
                scope.launch {
                    bingoToUpdate?.let {
                        viewModel.updateBingo(it.copy(isFinished = !it.isFinished))?.let { list ->
                            bingoList = list
                        } ?: run {
                            message = ERROR_TO_UPDATE_BINGO
                            showInfoDialog = true
                            delay(2000)
                            showInfoDialog = false
                        }
                    }
                    showStatusDialog = false
                }
            },
            onNegative = {
                showStatusDialog = false
            }
        )
    }

    PanelPage(
        content = {
            Column(modifier = Modifier.fillMaxSize()) {
                bingoList.forEach { bingo ->
                    BingoItem(
                        bingo,
                        goToGame = {
                            pageContext.router.navigateTo(Screen.Game.setBingoId(it))
                        },
                        onChangeStatus = {
                            bingoToUpdate = it
                            showStatusDialog = true
                        },
                        onDelete = {
                            bingoToDelete = it
                            showDeleteDialog = true
                        }
                    )
                }
            }
        },
        onSignOut = {
            storeName("")
            pageContext.router.navigateTo(Screen.Login.route)
        },
        onAdd = {
            showDialog = true
        }
    )
}
