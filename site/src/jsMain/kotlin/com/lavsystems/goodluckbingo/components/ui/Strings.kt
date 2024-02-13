package com.lavsystems.goodluckbingo.components.ui

object Strings {
    object Common {
        const val APP_NAME = "Good Luck Bingo"
        const val DASHBOARD_NAME = "Panel Principal"
        const val GAME_NAME = "Panel de Jugadas"
        const val ATTENTION_TITLE = "Atención"
        const val ACCEPT_TITLE = "Aceptar"
        const val CANCEL_TITLE = "Cancelar"
        const val BINGO_ID = "bingoId"
    }
    object Login {
        const val ACCESS_CODE = "Código de acceso"
        const  val ENTER_TITLE = "Ingresar"
        const  val INVALID_CODE = "Código invalido"
        object API{
            const val GET_USER_BY_CODE = "user"
        }
    }
    object Dashboard {
        const val ACCESS_BINGO_CODE = "Código bingo"
        const  val DESCRIPTION_BINGO_TITLE = "Descripción"
        const  val BUTTON_BINGO_TITLE = "Crear bingo"
        const  val FINISHED_BINGO = "Finalizado"
        const  val ACTIVE_BINGO = "Activo"
        const val WANT_TO_DELETE_BINGO = "Desea eliminar el Bingo?"
        const val ERROR_TO_DELETE_BINGO = "Error inesperado al eliminar el Bingo"
        const val ERROR_TO_UPDATE_BINGO = "Error inesperado al actualizar el Bingo"
        const val ERROR_TO_SAVE_BINGO = "Error inesperado al guardar el Bingo"
        const val WANT_TO_ACTIVE_BINGO_STATUS = "Desea activar el Bingo?"
        const val WANT_TO_FINISH_BINGO_STATUS = "Desea finalizar el Bingo?"
    }
    object Id {
        object Login {
            const val INPUT_CODE_ID = "input_code_id"
        }

        object Dashboard {
            const val INPUT_BINGO_CODE_ID = "input_bingo_code_id"
            const val INPUT_BINGO_DESCRIPTION_ID = "input_bingo_description_id"
        }
    }
}