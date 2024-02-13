package com.lavsystems.goodluckbingo.domain.usecase

import kotlinx.serialization.json.Json

interface BaseUseCase<Param, Resp> {
    suspend fun execute(param: Param): Resp
}


inline fun <reified T> String?.parseData(): T {
    return Json.decodeFromString(this.toString())
}