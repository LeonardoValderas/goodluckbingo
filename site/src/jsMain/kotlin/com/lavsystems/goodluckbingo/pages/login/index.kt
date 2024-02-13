package com.lavsystems.goodluckbingo.pages.login

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.lavsystems.goodluckbingo.components.ui.Fonts.FONT_FAMILY
import com.lavsystems.goodluckbingo.components.ui.Strings.Id.Login.INPUT_CODE_ID
import com.lavsystems.goodluckbingo.components.ui.Strings.Login.ACCESS_CODE
import com.lavsystems.goodluckbingo.components.ui.Strings.Login.ENTER_TITLE
import com.lavsystems.goodluckbingo.components.ui.Strings.Login.INVALID_CODE
import com.lavsystems.goodluckbingo.components.ui.Theme
import com.lavsystems.goodluckbingo.navigation.Screen
import com.lavsystems.goodluckbingo.pages.login.domain.GetUserByCodeUseCase
import com.lavsystems.goodluckbingo.pages.login.presentation.LoginViewModel
import com.lavsystems.goodluckbingo.store.LocalStore.getName
import com.lavsystems.goodluckbingo.store.LocalStore.storeName
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

@Page
@Composable
fun Login() {
    val viewModel = LoginViewModel(GetUserByCodeUseCase())
    val scope = rememberCoroutineScope()
    val pageContext = rememberPageContext()
    var showError by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        if (getName().isNotEmpty()) {
            pageContext.router.navigateTo(Screen.Dashboard.route)
        }
    }
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column {
            Input(
                type = InputType.Number,
                attrs = Modifier
                    .id(INPUT_CODE_ID)
                    .width(350.px)
                    .height(54.px)
                    .fontFamily(FONT_FAMILY)
                    .fontWeight(FontWeight.Medium)
                    .padding(leftRight = 20.px)
                    .toAttrs { attr("placeholder", ACCESS_CODE) }
            )

            Button(
                attrs = Modifier
                    .margin(top = 25.px)
                    .width(350.px)
                    .height(54.px)
                    .padding(leftRight = 20.px)
                    .borderRadius(r = 4.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(16.px)
                    .fontWeight(FontWeight.Medium)
                    .color(Colors.White)
                    .onClick {
                        showError = false
                        val code =
                            (document.getElementById(INPUT_CODE_ID) as HTMLInputElement).value
                        if (code.isEmpty()) return@onClick
                        scope.launch {
                            val user = viewModel.getUserByCode(code)
                            println(user)
                            if (user == null) {
                                showError = true
                            } else {
                                storeName(user.name)
                                pageContext.router.navigateTo(Screen.Dashboard.route)
                            }
                        }
                    }
                    .toAttrs()
            ) {
                SpanText(ENTER_TITLE)
            }
            if (showError)
                SpanText(INVALID_CODE)
        }
    }
}