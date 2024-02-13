package com.lavsystems.goodluckbingo.store

import kotlinx.browser.localStorage
import org.w3c.dom.get
import org.w3c.dom.set

object LocalStore {
    fun storeName(
        name: String
    ) {
        localStorage["name"] = name
    }

    fun getName() = localStorage["name"].orEmpty()
}