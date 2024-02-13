package com.lavsystems.goodluckbingo.api.user

import com.lavsystems.goodluckbingo.data.repository.RepositoryContainer
import com.lavsystems.goodluckbingo.data.repository.user.UserRepositoryImpl
import com.lavsystems.goodluckbingo.domain.models.User
import com.lavsystems.goodluckbingo.mapper.toUser
import com.varabyte.kobweb.api.Api
import com.varabyte.kobweb.api.ApiContext
import com.varabyte.kobweb.api.data.getValue
import com.varabyte.kobweb.api.http.setBodyText
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString

object UserApi {

    @Api("user")
    suspend fun getUserByCode(context: ApiContext) {
        try {
            context.logger.error("dasdsadsadsadsadsadsad")
            context.req.params["code"]?.let {
                val user = context.data.getValue<RepositoryContainer>().getUserRepository().getUserByCode(it.toInt())
                context.res.setBodyText(Json.encodeToString<User?>(user?.toUser()))
            }

        } catch (e: Exception) {
            e.message.toString().let {
                context.logger.error(it)
                context.res.setBodyText(it)
            }
        }
    }
}