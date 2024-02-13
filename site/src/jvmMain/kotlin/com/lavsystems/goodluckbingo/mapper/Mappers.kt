package com.lavsystems.goodluckbingo.mapper

import com.lavsystems.goodluckbingo.data.models.BingoEntity
import com.lavsystems.goodluckbingo.data.models.GameEntity
import com.lavsystems.goodluckbingo.data.models.UserEntity
import com.lavsystems.goodluckbingo.domain.models.Bingo
import com.lavsystems.goodluckbingo.domain.models.Game
import com.lavsystems.goodluckbingo.domain.models.User

fun UserEntity.toUser() = User(
    id = id,
    name = name,
    code = code
)

fun BingoEntity.toBingo() = Bingo(
    id = id,
    code = code,
    description = description,
    isFinished = isFinished,
    date = date,
    isDelete = isDelete,
    games = games.map { it.toGame() }
)

fun GameEntity.toGame() = Game(
    id = id,
    number = number,
    description = description,
    isFinished = isFinished,
    date = date,
    isDelete = isDelete,
    hasLine = hasLine,
    lineRoundNumber = lineRoundNumber,
    lineNumbersShown = lineNumbersShown,
    hasBingo = hasBingo,
    bingoRoundNumber = bingoRoundNumber,
    bingoNumbersShown = bingoNumbersShown,
    numbersShown = numbersShown
)


fun Bingo.toBingoEntity() = BingoEntity(
    id = id,
    code = code,
    description = description,
    isFinished = isFinished,
    date = date,
    isDelete = isDelete,
    games = games.map { it.toGameEntity() }
)


fun Game.toGameEntity() = GameEntity(
    id = id,
    number = number,
    description = description,
    isFinished = isFinished,
    date = date,
    isDelete = isDelete,
    hasLine = hasLine,
    lineRoundNumber = lineRoundNumber,
    lineNumbersShown = lineNumbersShown,
    hasBingo = hasBingo,
    bingoRoundNumber = bingoRoundNumber,
    bingoNumbersShown = bingoNumbersShown,
    numbersShown = numbersShown
)