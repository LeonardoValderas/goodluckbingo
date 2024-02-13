package com.lavsystems.goodluckbingo.data.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class BingoEntity(
    @SerialName("_id")
    val id: String = "",
    val code: Int,
    val description: String,
    val isFinished: Boolean,
    val date: String,
    val isDelete: Boolean,
    val games: List<GameEntity>
)