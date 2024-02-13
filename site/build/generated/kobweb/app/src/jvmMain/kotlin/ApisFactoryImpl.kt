import com.varabyte.kobweb.api.Apis
import com.varabyte.kobweb.api.ApisFactory
import com.varabyte.kobweb.api.`data`.MutableData
import com.varabyte.kobweb.api.`init`.InitApiContext
import com.varabyte.kobweb.api.env.Environment
import com.varabyte.kobweb.api.event.Events
import com.varabyte.kobweb.api.log.Logger

public class ApisFactoryImpl : ApisFactory {
    override fun create(
        env: Environment,
        events: Events,
        logger: Logger,
    ): Apis {
        val data = MutableData()
        val apis = Apis(env, data, logger)
        apis.register("/bingo/addbingo") { ctx ->
                com.lavsystems.goodluckbingo.api.bingo.BingoApi.addBingo(ctx) }
        apis.register("/bingo/bingos") { ctx ->
                com.lavsystems.goodluckbingo.api.bingo.BingoApi.getBingoList(ctx) }
        apis.register("/bingo/updatebingo") { ctx ->
                com.lavsystems.goodluckbingo.api.bingo.BingoApi.updateBingo(ctx) }
        apis.register("/user/user") { ctx ->
                com.lavsystems.goodluckbingo.api.user.UserApi.getUserByCode(ctx) }
        val initCtx = InitApiContext(env, apis, data, events, logger)
        com.lavsystems.goodluckbingo.data.database.KMongoDB(initCtx)

        return apis
    }
}
