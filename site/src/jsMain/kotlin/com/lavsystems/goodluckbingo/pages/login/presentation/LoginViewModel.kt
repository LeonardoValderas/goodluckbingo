package com.lavsystems.goodluckbingo.pages.login.presentation

import com.lavsystems.goodluckbingo.pages.login.domain.GetUserByCodeUseCase

class LoginViewModel(
    private val getUserByCode: GetUserByCodeUseCase
) {
    suspend fun getUserByCode(code: String) = getUserByCode.execute(code)
}