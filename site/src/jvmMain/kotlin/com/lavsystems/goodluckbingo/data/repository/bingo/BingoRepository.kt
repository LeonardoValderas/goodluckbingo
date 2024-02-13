package com.lavsystems.goodluckbingo.data.repository.bingo

import com.lavsystems.goodluckbingo.data.models.BingoEntity

interface BingoRepository {
    suspend fun getBingoList(): List<BingoEntity>
    suspend fun addBingo(bingo: BingoEntity): List<BingoEntity>?
    suspend fun updateBingo(bingo: BingoEntity): List<BingoEntity>?
}