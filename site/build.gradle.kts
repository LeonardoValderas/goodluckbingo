import com.varabyte.kobweb.gradle.application.extensions.AppBlock.LegacyRouteRedirectStrategy
import com.varabyte.kobweb.gradle.application.util.configAsKobwebApplication
import kotlinx.html.link
import kotlinx.html.script

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.jetbrains.compose)
    alias(libs.plugins.kobweb.application)
    alias(libs.plugins.kotlin.serialization)
    // alias(libs.plugins.kobwebx.markdown)
}

group = "com.lavsystems.goodluckbingo"
version = "1.0-SNAPSHOT"

kobweb {
    app {
        index {
            description.set("Powered by Kobweb")
            head.add {
//                script {
//                    src = "/highlight.min.js"
//                }
//                link {
//                    rel = "stylesheet"
//                    href = "/github-dark.css"
//                }
                script {
                    src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                }
                link {
                    rel = "stylesheet"
                    href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                }
            }
        }

        // Only legacy sites need this set. Sites built after 0.16.0 should default to DISALLOW.
        // See https://github.com/varabyte/kobweb#legacy-routes for more information.
        legacyRouteRedirectStrategy.set(LegacyRouteRedirectStrategy.DISALLOW)
    }
}

kotlin {
    configAsKobwebApplication("goodluckbingo", includeServer = true)

    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(libs.kotlinx.serialization)
            implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.5.0")
        }

        jsMain.dependencies {
            implementation(compose.html.core)
            implementation(libs.kobweb.core)
            implementation(libs.kobweb.silk)
            implementation(libs.silk.icons.fa)
            implementation(libs.kotlinx.serialization)
           // implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.3.3")
        }
        jvmMain.dependencies {
            compileOnly(libs.kobweb.api)
            implementation(libs.k.mongo.coroutine)
            implementation(libs.kotlinx.serialization)
            implementation("org.litote.kmongo:kmongo-async:4.11.0")
            implementation("org.litote.kmongo:kmongo-coroutine-serialization:4.9.0")
           // implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.3.3")
        }
    }
}
