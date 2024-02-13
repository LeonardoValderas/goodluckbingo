package com.lavsystems.goodluckbingo.api.models

import kotlinx.serialization.Serializable

@Serializable
class ApiException(private  val message: String)