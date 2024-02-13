package com.lavsystems.goodluckbingo.components.components

import androidx.compose.runtime.Composable
import com.lavsystems.goodluckbingo.components.ui.Strings
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.width
import org.jetbrains.compose.web.css.px

@Composable
fun PanelPage(
    content: @Composable () -> Unit,
    onSignOut: () -> Unit,
    onAdd: () -> Unit
) {
    Column(
        modifier = Modifier.fillMaxSize(),
    ) {

        TopPage(Strings.Common.DASHBOARD_NAME, onSignOut)

        Row(
            modifier = Modifier
                .fillMaxSize()
                .backgroundColor(Colors.Gray.copy(alpha = 10)),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .width(200.px)
                    .fillMaxHeight()
                    .margin(right = 16.px)
                    .backgroundColor(Colors.Gray.copy(alpha = 50))
            )
            Box(
                modifier = Modifier.fillMaxSize()
            ) {
                FloatingButton(onAdd)
                content()
            }

            Box(
                modifier = Modifier
                    .width(200.px)
                    .fillMaxHeight()
                    .margin(left = 16.px)
                    .backgroundColor(Colors.Gray.copy(alpha = 50))
            )
        }
    }
}