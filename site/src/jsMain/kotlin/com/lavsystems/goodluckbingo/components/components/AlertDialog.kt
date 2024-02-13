package com.lavsystems.goodluckbingo.components.components

import androidx.compose.runtime.Composable
import com.lavsystems.goodluckbingo.components.ui.Fonts
import com.lavsystems.goodluckbingo.components.ui.Fonts.FONT_FAMILY
import com.lavsystems.goodluckbingo.components.ui.Theme
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button

@Composable
fun AlertDialog(
    title: String,
    description: String,
    positiveText: String,
    negativeText: String,
    onPositive: () -> Unit,
    onNegative: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .position(Position.Fixed)
            .zIndex(19)
            .backgroundColor(Colors.Gray.copy(alpha = 60)),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .width(30.percent)
                .padding(all = 24.px)
                .backgroundColor(Colors.White)
                .borderRadius(r = 4.px)
        ) {
            SpanText(
                modifier = Modifier
                    .fillMaxWidth()
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(22.px)
                    .textAlign(TextAlign.Center)
                    .padding(4.px)
                    .fontWeight(FontWeight.SemiBold),
                text = title
            )
            SpanText(
                modifier = Modifier
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(18.px)
                    .padding(4.px)
                    .fontWeight(FontWeight.Medium),
                text = description
            )
            Row(
                modifier = Modifier.fillMaxWidth().margin(top = 32.px),

                ) {

                Button(
                    attrs = Modifier
                        .onClick {
                            onNegative.invoke()
                        }
                        .fillMaxWidth()
                        .margin(right = 4.px)
                        .height(54.px)
                        .borderRadius(r = 4.px)
                        .backgroundColor(Theme.Primary.rgb)
                        .color(Colors.White)
                        .fontFamily(FONT_FAMILY)
                        .fontSize(14.px)
                        .toAttrs()
                ) {
                    SpanText(text = negativeText)
                }

                Button(
                    attrs = Modifier
                        .onClick {
                            onPositive.invoke()
                        }
                        .fillMaxWidth()
                        .margin(left = 4.px)
                        .height(54.px)
                        .borderRadius(r = 4.px)
                        .backgroundColor(Theme.Primary.rgb)
                        .color(Colors.White)
                        .fontFamily(FONT_FAMILY)
                        .fontSize(14.px)
                        .toAttrs()
                ) {
                    SpanText(text = positiveText)
                }
            }
        }
    }
}