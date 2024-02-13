package com.lavsystems.goodluckbingo.domain.models

import com.lavsystems.goodluckbingo.utils.dateStringFormatted
import kotlinx.datetime.Clock
import kotlinx.serialization.Serializable

@Serializable
data class Bingo(
    val id: String = "",
    val code: Int,
    val description: String,
    val isFinished: Boolean = false,
    val date: String = Clock.System.now().toString().dateStringFormatted(),
    val isDelete: Boolean = false,
    val games: List<Game> = listOf()
)