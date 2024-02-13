package com.lavsystems.goodluckbingo.pages.game.domain

import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.domain.usecase.BaseUseCase
import com.lavsystems.goodluckbingo.domain.usecase.parseData
import com.varabyte.kobweb.browser.api
import kotlinx.browser.window
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString

class AddGameUseCase : BaseUseCase<Bingo, List<Bingo>?> {

    override suspend fun execute(param: Bingo): List<Bingo>? {
        return try {
            window.api.tryPost(
                apiPath = "bingo/addbingo",
                body =  Json.encodeToString(param).encodeToByteArray()
            )?.decodeToString().parseData()
        } catch (e: Exception) {
            listOf()
        }
    }
}