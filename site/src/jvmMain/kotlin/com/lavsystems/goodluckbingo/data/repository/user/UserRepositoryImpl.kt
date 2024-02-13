package com.lavsystems.goodluckbingo.data.repository.user

import com.lavsystems.goodluckbingo.data.models.UserEntity
import com.mongodb.reactivestreams.client.MongoDatabase
import com.varabyte.kobweb.api.init.InitApiContext
import kotlinx.coroutines.reactive.awaitFirst
import org.litote.kmongo.eq
import org.litote.kmongo.reactivestreams.getCollectionOfName

class UserRepositoryImpl(
    private val database: MongoDatabase,
    private val context: InitApiContext
) : UserRepository {

    private val collection = database.getCollectionOfName<UserEntity>("users")

    override suspend fun getUserByCode(code: Int): UserEntity? {
        context.logger.error("ddasdsadsad")
        return try {
            context.logger.error("ddasdsadsad$code")
            collection.find(
                UserEntity::code eq code
            ).awaitFirst()
        } catch (e: Exception) {
            context.logger.error(e.message.toString())
            null
        }
    }
}