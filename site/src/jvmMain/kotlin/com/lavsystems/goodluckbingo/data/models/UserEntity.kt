package com.lavsystems.goodluckbingo.data.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

//ObjectIdGenerator.newObjectId<String>().id.toHexString(),
@Serializable
data class UserEntity(
    @SerialName("_id")
    val id: String = "",
    val name: String,
    val code: Int
)