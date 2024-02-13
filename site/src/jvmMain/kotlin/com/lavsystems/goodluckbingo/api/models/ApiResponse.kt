package com.lavsystems.goodluckbingo.api.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

//sealed interface ResponseApi<out T>(
//    val success: Boolean,
//    val data: T?,
//    val exception: Exception?
//)

@Serializable
sealed interface ApiResponse2<out A> {
    @Serializable
    @SerialName("success")
    data class Success<out A>(val data: A): ApiResponse2<A>
    @Serializable
    @SerialName("failure")
    data class Failure(val cause: ApiException): ApiResponse2<Nothing>
}
