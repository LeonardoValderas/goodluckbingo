package com.lavsystems.goodluckbingo.pages.game.presentation

import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.pages.dashboard.domain.AddBingoUseCase
import com.lavsystems.goodluckbingo.pages.dashboard.domain.GetBingoListUseCase
import com.lavsystems.goodluckbingo.pages.dashboard.domain.UpdateBingoUseCase

class GameViewModel(
    private val getBingoList: GetBingoListUseCase,
    private val addBingo: AddBingoUseCase,
    private val updateBingo: UpdateBingoUseCase
) {
    var showLoading = false

    suspend fun getBingoList(): List<Bingo> {
        showLoading = true
        val result = getBingoList.execute(Unit)
        showLoading = false
        return result
    }

    suspend fun addBingo(bingo: Bingo): List<Bingo>? {
        showLoading = true
        val result = addBingo.execute(bingo)
        showLoading = false
        return result
    }

    suspend fun updateBingo(bingo: Bingo): List<Bingo>? {
        showLoading = true
        val result = updateBingo.execute(bingo)
        showLoading = false
        return result
    }
}