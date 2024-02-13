package com.lavsystems.goodluckbingo.pages.dashboard.components

import androidx.compose.runtime.Composable
import com.lavsystems.goodluckbingo.components.ui.Fonts
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.ACTIVE_BINGO
import com.lavsystems.goodluckbingo.components.ui.Strings.Dashboard.FINISHED_BINGO
import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.silk.components.icons.fa.FaTrash
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px

@Composable
fun BingoItem(
    bingo: Bingo,
    goToGame: (String) -> Unit,
    onChangeStatus: (Bingo) -> Unit,
    onDelete: (Bingo) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .backgroundColor(Colors.White)
            .borderRadius(4.px)
            .border()
            .padding(24.px)
            .margin(topBottom = 8.px)
            .onClick {
                goToGame.invoke(bingo.id)
                //pageContext.router.navigateTo(Screen.Game.route)
            },
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {

            SpanText(
                modifier = Modifier
                    .backgroundColor(if (bingo.isFinished) Colors.Red else Colors.Green)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(16.px)
                    .padding(leftRight = 8.px, topBottom = 4.px)
                    .borderRadius(4.px)
                    .fontWeight(FontWeight.Medium)
                    .color(Colors.White)
                    .onClick {
                        onChangeStatus.invoke(
                            bingo
                        )
                    },
                text = if (bingo.isFinished) FINISHED_BINGO else ACTIVE_BINGO
            )
            SpanText(
                modifier = Modifier
                    .weight(1F)
                    .margin(leftRight = 24.px)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(16.px)
                    .fontWeight(FontWeight.SemiBold),
                text = bingo.code.toString()
            )
            SpanText(
                modifier = Modifier
                    .weight(1F)
                    .margin(leftRight = 24.px)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(16.px)
                    .fontWeight(FontWeight.SemiBold),
                text = bingo.date
            )
            SpanText(
                modifier = Modifier
                    .weight(1F)
                    .margin(leftRight = 24.px)
                    .fontFamily(Fonts.FONT_FAMILY)
                    .fontSize(16.px)
                    .fontWeight(FontWeight.SemiBold),
                text = bingo.description
            )
        }
        FaTrash(modifier = Modifier.onClick {
            onDelete.invoke(
                bingo
            )
        })

    }
}