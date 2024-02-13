package com.lavsystems.goodluckbingo.data.database

import com.lavsystems.goodluckbingo.data.repository.RepositoryContainer
import com.lavsystems.goodluckbingo.data.repository.bingo.BingoRepositoryImpl
import com.lavsystems.goodluckbingo.data.repository.user.UserRepositoryImpl
import com.lavsystems.goodluckbingo.domain.models.User
import com.lavsystems.goodluckbingo.utils.Constants.DATA_BASE_NAME
import com.varabyte.kobweb.api.data.add
import com.varabyte.kobweb.api.init.InitApi
import com.varabyte.kobweb.api.init.InitApiContext
import org.litote.kmongo.reactivestreams.KMongo

@InitApi
fun KMongoDB(context: InitApiContext) {
//    System.setProperty(
//        "org.litote.mongo.test.mapping.service",
//        "org.litote.kmongo.serialization.SerializationClassMappingTypeService"
//    )
    //private val client =  KMongo.createClient()
    val database = KMongo.createClient().getDatabase(DATA_BASE_NAME)

    context.data.add(
        RepositoryContainer(
            database = database,
            context = context
        )
    )
}