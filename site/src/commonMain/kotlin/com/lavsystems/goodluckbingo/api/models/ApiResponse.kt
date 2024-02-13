package com.lavsystems.goodluckbingo.api.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
sealed interface ApiResponse<out A> {
    @Serializable
    @SerialName("success")
    data class Success<out A>(val data: A?): ApiResponse<A?>
    @Serializable
    @SerialName("failure")
    data class Failure(val cause: ApiException): ApiResponse<Nothing>
}