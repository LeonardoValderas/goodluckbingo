package com.lavsystems.goodluckbingo.pages.login.domain

import com.lavsystems.goodluckbingo.domain.models.User
import com.lavsystems.goodluckbingo.domain.usecase.BaseUseCase
import com.lavsystems.goodluckbingo.domain.usecase.parseData
import com.varabyte.kobweb.browser.api
import kotlinx.browser.window

class GetUserByCodeUseCase: BaseUseCase<String, User?> {

    override suspend fun execute(param: String): User? {
        return try {
            window.api.tryGet(apiPath = "user/user?code=$param")?.decodeToString().parseData()
        } catch (e: Exception) {
            null
        }
    }
}