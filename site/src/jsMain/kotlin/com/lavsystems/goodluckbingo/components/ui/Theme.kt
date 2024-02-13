package com.lavsystems.goodluckbingo.components.ui

import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.rgb

enum class Theme(
    val hex: String,
    val rgb: CSSColorValue
) {
    Primary(
        hex = "#12C9CC",
        rgb = rgb(18, 201, 204)
    )
}