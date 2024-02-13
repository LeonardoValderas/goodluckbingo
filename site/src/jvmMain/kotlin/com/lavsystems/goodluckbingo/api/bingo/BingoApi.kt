package com.lavsystems.goodluckbingo.api.bingo

import com.lavsystems.goodluckbingo.api.utils.getBody
import com.lavsystems.goodluckbingo.data.repository.RepositoryContainer
import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.mapper.toBingo
import com.lavsystems.goodluckbingo.mapper.toBingoEntity
import com.varabyte.kobweb.api.Api
import com.varabyte.kobweb.api.ApiContext
import com.varabyte.kobweb.api.data.getValue
import com.varabyte.kobweb.api.http.setBodyText
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.litote.kmongo.id.ObjectIdGenerator

object BingoApi {

    @Api("bingos")
    suspend fun getBingoList(context: ApiContext) {
        try {
            val bingoList = context.data.getValue<RepositoryContainer>().getBingoRepository().getBingoList()
            context.res.setBodyText(Json.encodeToString<List<Bingo>>(bingoList.map { it.toBingo() }))
        } catch (e: Exception) {
            e.message.toString().let {
                context.logger.error(it)
                context.res.setBodyText(it)
            }
        }
    }

    @Api("addbingo")
    suspend fun addBingo(context: ApiContext) {
        try {
            context.req.getBody<Bingo>()?.let { bingo ->
                val bingoList =
                    context.data.getValue<RepositoryContainer>().getBingoRepository().addBingo(
                        bingo.toBingoEntity()
                            .copy(id = ObjectIdGenerator.newObjectId<String>().id.toHexString())
                    )
                context.res.setBodyText(Json.encodeToString<List<Bingo>?>(bingoList?.map { it.toBingo() }) )
            }
        } catch (e: Exception) {
            println(e.localizedMessage)
            e.message.toString().let {
                context.logger.error(it)
                context.res.setBodyText(it)
            }
        }
    }

    @Api("updatebingo")
    suspend fun updateBingo(context: ApiContext) {
        try {
            context.req.getBody<Bingo>()?.let { bingo ->
                val bingoList =
                    context.data.getValue<RepositoryContainer>().getBingoRepository().updateBingo(
                        bingo.toBingoEntity()
                    )
                context.res.setBodyText(Json.encodeToString<List<Bingo>?>(bingoList?.map { it.toBingo() }) )
            }
        } catch (e: Exception) {
            println(e.localizedMessage)
            e.message.toString().let {
                context.logger.error(it)
                context.res.setBodyText(it)
            }
        }
    }
}