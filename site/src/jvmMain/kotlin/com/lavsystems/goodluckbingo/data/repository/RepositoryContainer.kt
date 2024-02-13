package com.lavsystems.goodluckbingo.data.repository

import com.lavsystems.goodluckbingo.data.repository.bingo.BingoRepositoryImpl
import com.lavsystems.goodluckbingo.data.repository.user.UserRepositoryImpl
import com.mongodb.reactivestreams.client.MongoDatabase
import com.varabyte.kobweb.api.init.InitApiContext

class RepositoryContainer(
    private val database: MongoDatabase,
    private val context: InitApiContext
) {

    private var userRepository: UserRepositoryImpl
    private var bingoRepository: BingoRepositoryImpl

    init {
        userRepository = UserRepositoryImpl(
            database = database,
            context = context
        )
        bingoRepository = BingoRepositoryImpl(
            database = database,
            context = context
        )
    }


    fun getUserRepository() = userRepository
    fun getBingoRepository() = bingoRepository
}