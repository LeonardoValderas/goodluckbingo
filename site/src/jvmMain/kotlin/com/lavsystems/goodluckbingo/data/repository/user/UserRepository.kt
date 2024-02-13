package com.lavsystems.goodluckbingo.data.repository.user

import com.lavsystems.goodluckbingo.data.models.UserEntity

interface UserRepository {
    suspend fun getUserByCode(code: Int): UserEntity?
}