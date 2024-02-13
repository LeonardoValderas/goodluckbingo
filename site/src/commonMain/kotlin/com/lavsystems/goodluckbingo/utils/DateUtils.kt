package com.lavsystems.goodluckbingo.utils

fun String.dateStringFormatted(): String {
    if (this.length >= 10) {
        val fullSplit = this.split("T")
        if (fullSplit.size > 1) {
            val dateSplit = fullSplit[0].split("-")
            if (dateSplit.size == 3)
                return "${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}"
        }
    }
    return this
}