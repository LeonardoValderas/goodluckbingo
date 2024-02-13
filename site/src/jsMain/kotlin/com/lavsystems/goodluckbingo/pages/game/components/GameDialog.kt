package com.lavsystems.goodluckbingo.pages.game.components

import androidx.compose.runtime.Composable
import com.lavsystems.goodluckbingo.components.ui.Fonts.FONT_FAMILY
import com.lavsystems.goodluckbingo.components.ui.Strings
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.BUTTON_BINGO_TITLE
import com.lavsystems.goodluckbingo.components.ui.Strings.Id.Dashboard.INPUT_BINGO_CODE_ID
import com.lavsystems.goodluckbingo.components.ui.Strings.Id.Dashboard.INPUT_BINGO_DESCRIPTION_ID
import com.lavsystems.goodluckbingo.components.ui.Theme
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
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.icons.fa.FaXmark
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

@Composable
fun GameDialog(
    onDialogDismiss: () -> Unit,
    onAdd: (String, String) -> Unit
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
                .width(40.percent)
                .padding(all = 24.px)
                .backgroundColor(Colors.White)
                .borderRadius(r = 4.px)
        ) {
            Box(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.CenterEnd
            ) {
                FaXmark(
                    modifier = Modifier.margin(leftRight = 6.px, bottom = 24.px)
                        .onClick { onDialogDismiss.invoke() },
                    size = IconSize.LG
                )
            }
            Input(
                type = InputType.Number,
                attrs = Modifier
                    .id(INPUT_BINGO_CODE_ID)
                    .fillMaxWidth()
                    .height(54.px)
                    .fontFamily(FONT_FAMILY)
                    .fontWeight(FontWeight.Medium)
                    .padding(leftRight = 20.px)
                    .toAttrs { attr("placeholder", Strings.Dashboard.ACCESS_BINGO_CODE) }
            )
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(INPUT_BINGO_DESCRIPTION_ID)
                    .fillMaxWidth()
                    .margin(top = 12.px)
                    .height(54.px)
                    .fontFamily(FONT_FAMILY)
                    .fontWeight(FontWeight.Medium)
                    .padding(leftRight = 20.px)
                    .toAttrs { attr("placeholder", Strings.Dashboard.DESCRIPTION_BINGO_TITLE) }
            )

            Button(
                attrs = Modifier
                    .onClick {
                        val code =
                            (document.getElementById(INPUT_BINGO_CODE_ID) as HTMLInputElement).value
                        val description =
                            (document.getElementById(INPUT_BINGO_DESCRIPTION_ID) as HTMLInputElement).value

                        if (code.isNullOrEmpty() && description.isNullOrEmpty()) return@onClick
                        onAdd(code, description)
                    }
                    .fillMaxWidth()
                    .margin(top = 32.px)
                    .height(54.px)
                    .borderRadius(r = 4.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .color(Colors.White)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(14.px)
                    .toAttrs()
            ) {
                SpanText(text = BUTTON_BINGO_TITLE)
            }
        }
    }
    // }
}