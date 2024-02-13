package com.lavsystems.goodluckbingo.domain.models

import kotlinx.serialization.Serializable

@Serializable
data class Game(
    val id: String,
    val number: Int,
    val description: String,
    val isFinished: Boolean,
    val date: String,
    val isDelete: Boolean,
    val hasLine: Boolean,
    val lineRoundNumber: Int,
    val lineNumbersShown: List<Int>,
    val hasBingo: Boolean,
    val bingoRoundNumber: Int,
    val bingoNumbersShown: List<Int>,
    val numbersShown: List<Int>
)