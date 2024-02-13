package com.lavsystems.goodluckbingo.pages.dashboard.domain

import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.domain.usecase.BaseUseCase
import com.lavsystems.goodluckbingo.domain.usecase.parseData
import com.varabyte.kobweb.browser.api
import kotlinx.browser.window

class GetBingoListUseCase : BaseUseCase<Unit, List<Bingo>> {

    override suspend fun execute(param: Unit): List<Bingo> {
        return try {
            window.api.tryGet(apiPath = "bingo/bingos")?.decodeToString().parseData()
        } catch (e: Exception) {
            listOf()
        }
    }
}