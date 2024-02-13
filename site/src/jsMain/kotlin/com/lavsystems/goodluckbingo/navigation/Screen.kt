package com.lavsystems.goodluckbingo.navigation

import com.lavsystems.goodluckbingo.components.ui.Strings.Common.BINGO_ID

sealed class Screen(val route: String) {
    data object Dashboard : Screen(route = "/dashboard/")
    data object Game : Screen(route = "/game"){
        fun setBingoId(id: String) = "/game/game?${BINGO_ID}=$id"
    }
    data object Login : Screen(route = "/login/")
}

