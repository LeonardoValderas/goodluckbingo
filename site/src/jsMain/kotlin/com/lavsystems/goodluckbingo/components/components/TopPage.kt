package com.lavsystems.goodluckbingo.components.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.lavsystems.goodluckbingo.components.ui.Fonts
import com.lavsystems.goodluckbingo.components.ui.Strings.Common.APP_NAME
import com.lavsystems.goodluckbingo.components.ui.Theme
import com.lavsystems.goodluckbingo.store.LocalStore.getName
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.silk.components.icons.fa.FaPowerOff
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.shapes.Circle
import com.varabyte.kobweb.silk.theme.shapes.clip
import org.jetbrains.compose.web.css.px

@Composable
fun TopPage(
    pageName: String,
    onSignOut: () -> Unit
) {
    val name = getName()

    LaunchedEffect(Unit) {
        if (name.isEmpty()) onSignOut.invoke()
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(leftRight = 30.px, topBottom = 12.px)
            .backgroundColor(Theme.Primary.rgb),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .size(50.px)
                    .padding(10.px)
                    .backgroundColor(Colors.White)
                    .clip(Circle()),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .size(25.px)
                        .padding(10.px)
                        .backgroundColor(Theme.Primary.rgb)
                        .clip(Circle()),
                    contentAlignment = Alignment.Center
                ) {
                    SpanText(
                        modifier = Modifier
                            .fontFamily(Fonts.FONT_FAMILY)
                            .fontSize(16.px)
                            .fontWeight(FontWeight.Bold)
                            .color(Colors.White),
                        text = "B"
                    )
                }
            }

            SpanText(
                modifier = Modifier
                    .margin(top = 8.px)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(16.px)
                    .fontWeight(FontWeight.Medium)
                    .color(Colors.White),
                text = name
            )
        }

        Column(
            modifier = Modifier
                .weight(1F),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            SpanText(
                modifier = Modifier
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(24.px)
                    .fontWeight(FontWeight.SemiBold)
                    .color(Colors.White)
                    .textAlign(TextAlign.Center),
                text = APP_NAME
            )
            SpanText(
                modifier = Modifier
                    .margin(top = 8.px)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(14.px)
                    .fontWeight(FontWeight.Medium)
                    .color(Colors.White)
                    .textAlign(TextAlign.Center),
                text = pageName
            )
        }
        FaPowerOff(
            modifier = Modifier
                .backgroundColor(Colors.White)
                .padding(10.px)
                .clip(Circle())
                .onClick {
                    onSignOut.invoke()
                }
        )
    }
}