package com.lavsystems.goodluckbingo.data.repository.bingo

import com.lavsystems.goodluckbingo.data.models.BingoEntity
import com.mongodb.client.model.Updates
import com.mongodb.reactivestreams.client.MongoDatabase
import com.varabyte.kobweb.api.init.InitApiContext
import kotlinx.coroutines.reactive.awaitSingle
import org.litote.kmongo.and
import org.litote.kmongo.coroutine.toList
import org.litote.kmongo.eq
import org.litote.kmongo.reactivestreams.findOne
import org.litote.kmongo.reactivestreams.getCollectionOfName

class BingoRepositoryImpl(
    private val database: MongoDatabase,
    private val context: InitApiContext
) : BingoRepository {
    private val collection = database.getCollectionOfName<BingoEntity>("bingos")

    override suspend fun getBingoList(): List<BingoEntity> {
        return try {
            collection.find(
                BingoEntity::isDelete eq false
            ).toList()
        } catch (e: Exception) {
            context.logger.error(e.message.toString())
            listOf()
        }
    }

    override suspend fun addBingo(bingo: BingoEntity): List<BingoEntity>? {
        return try {
            val exist = collection.find(
                and(
                    BingoEntity::code eq bingo.code,
                    BingoEntity::isDelete eq false
                )
            ).toList()
            if (exist.isNotEmpty()) {
                return null
            }
            collection.insertOne(bingo).awaitSingle()
            getBingoList()
        } catch (e: Exception) {
            context.logger.error(e.message.toString())
            null
        }
    }

    override suspend fun updateBingo(bingo: BingoEntity): List<BingoEntity>? {
        return try {
            context.logger.error(bingo.toString())
            val result = collection.findOne(
                and(
                    BingoEntity::code eq bingo.code,
                    BingoEntity::isDelete eq false,
                )
            ).awaitSingle()
            context.logger.error(result.toString())
            if (result.id != bingo.id) {
                return null
            }
            collection.updateOne(
                BingoEntity::id eq bingo.id,
                mutableListOf(
                    Updates.set(BingoEntity::isFinished.name, bingo.isFinished),
                    Updates.set(BingoEntity::isDelete.name, bingo.isDelete),
                )

            ).awaitSingle()
            context.logger.error("sasdsa")
            getBingoList()
        } catch (e: Exception) {
            context.logger.error(e.message.toString())
            null
        }
    }
}