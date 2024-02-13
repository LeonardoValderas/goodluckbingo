(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.lavsystems.goodluckbingo:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.lavsystems.goodluckbingo:site'.");
    }
    root['com.lavsystems.goodluckbingo:site'] = factory(typeof this['com.lavsystems.goodluckbingo:site'] === 'undefined' ? {} : this['com.lavsystems.goodluckbingo:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kobweb-frontend-compose-html-ext'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var removePrefix = kotlin_kotlin.$_$.ub;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.qe;
  var mapOf = kotlin_kotlin.$_$.v6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.pe;
  var toInt = kotlin_kotlin.$_$.nc;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var toBoolean = kotlin_kotlin.$_$.kc;
  var isBlank = kotlin_kotlin.$_$.ob;
  var VOID = kotlin_kotlin.$_$.g;
  var removeSuffix = kotlin_kotlin.$_$.vb;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ha;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var objectCreate = kotlin_kotlin.$_$.fa;
  var captureStack = kotlin_kotlin.$_$.s8;
  var Exception = kotlin_kotlin.$_$.dd;
  var classMeta = kotlin_kotlin.$_$.y8;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var hashCode = kotlin_kotlin.$_$.i9;
  var equals = kotlin_kotlin.$_$.b9;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var Enum = kotlin_kotlin.$_$.bd;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var KMutableProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.ld;
  var getLocalDelegateReference = kotlin_kotlin.$_$.e9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.p3;
  var CoroutineImpl = kotlin_kotlin.$_$.l8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.t9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x7;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Number_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Input$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var replace = kotlin_kotlin.$_$.xb;
  var println = kotlin_kotlin.$_$.o8;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var arrayOf = kotlin_kotlin.$_$.yd;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ApiException, 'ApiException', classMeta, Exception, VOID, ApiException, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_0, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ApiResponse, 'ApiResponse', interfaceMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_3});
  setMetadataFor(Success, 'Success', classMeta, VOID, [ApiResponse], VOID, VOID, {0: Companion_getInstance_1});
  setMetadataFor(Failure, 'Failure', classMeta, VOID, [ApiResponse], VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_2, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(User, 'User', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Fonts, 'Fonts', objectMeta);
  setMetadataFor(API, 'API', objectMeta);
  setMetadataFor(Login, 'Login', objectMeta);
  setMetadataFor(Id, 'Id', objectMeta);
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt_0, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(LoginScreen$composable$lambda$lambda$lambda$slambda, 'LoginScreen$composable$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($getUserByCodeCOROUTINE$0, '$getUserByCodeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(UserService, 'UserService', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).x38(true);
    Companion_instance.s3a('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.d3d(LegacyRouteRedirectStrategy_DISALLOW_getInstance());
    router.e3d(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.h3d(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.i39(mapOf(to('title', 'GoodLuckBingo')));
    renderComposable$composable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:86)');
      }
      LoginScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t12(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:112)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.y11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r12(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.p12();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance().s11_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.q12(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.z11();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous> (main.kt:112)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.m49_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.n49_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.o49_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_instance;
        } else {
          forceReloadNow();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.g3a_1.k3d('/', VOID, ComposableSingletons$MainKt_getInstance().m49_1);
    ctx.g3a_1.k3d('/login/', VOID, ComposableSingletons$MainKt_getInstance().n49_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.l3d(removeSuffix(removeSuffix($this$addRouteInterceptor.x3c_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:112)');
        }
        $router.c3d(ComposableSingletons$MainKt_getInstance().o49_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:111)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1190994075, true, main$lambda$lambda($router));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.y11(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r12(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.p12();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().s11_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.q12(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.z11();
        AppEntry$composable(tmp0, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion() {
  }
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    this.q49_1 = 0;
    this.p49_1 = new PluginGeneratedSerialDescriptor('com.lavsystems.goodluckbingo.api.models.ApiException', this, 0);
  }
  protoOf($serializer).p2l = function () {
    return this.p49_1;
  };
  protoOf($serializer).b2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [];
  };
  protoOf($serializer).q2l = function (decoder) {
    var tmp0_desc = this.p49_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp5_input = decoder.q2o(tmp0_desc);
    if (!tmp5_input.f2p())
      while (tmp1_flag) {
        tmp2_index = tmp5_input.g2p(tmp0_desc);
        if (tmp2_index === -1)
          tmp1_flag = false;
        else
          throw UnknownFieldException_init_$Create$(tmp2_index);
      }
    tmp5_input.r2o(tmp0_desc);
    return ApiException_init_$Create$(0, null);
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ApiException_init_$Init$(seen1, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance().p49_1);
    }
    Exception_init_$Init$($this);
    $this.r49_1 = 0;
    return $this;
  }
  function ApiException_init_$Create$(seen1, serializationConstructorMarker) {
    var tmp = ApiException_init_$Init$(seen1, serializationConstructorMarker, objectCreate(protoOf(ApiException)));
    captureStack(tmp, ApiException_init_$Create$);
    return tmp;
  }
  function ApiException() {
    Exception_init_$Init$(this);
    captureStack(this, ApiException);
    this.r49_1 = 0;
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_0.call($this);
    $this.t49_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_0)));
  }
  function Companion_0() {
    Companion_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('success', null, 1);
    tmp0_serialDesc.z2t('data', false);
    this.v49_1 = tmp0_serialDesc;
  }
  protoOf(Companion_0).w49 = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_0).k2u = function (typeParamsSerializers) {
    return this.w49(typeParamsSerializers[0]);
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    if (Companion_instance_3 == null)
      new Companion_0();
    return Companion_instance_3;
  }
  function $serializer_0() {
    this.u49_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('success', this, 1);
    tmp0_serialDesc.z2t('data', false);
    this.s49_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).p2l = function () {
    return this.s49_1;
  };
  protoOf($serializer_0).b2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.t49_1];
  };
  protoOf($serializer_0).q2l = function (decoder) {
    var tmp0_desc = this.s49_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q2o(tmp0_desc);
    if (tmp6_input.f2p()) {
      tmp4_local0 = tmp6_input.c2p(tmp0_desc, 0, this.t49_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g2p(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c2p(tmp0_desc, 0, this.t49_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r2o(tmp0_desc);
    return Success_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).c2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.t49_1];
  };
  function Success_init_$Init$(seen1, data, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, Companion_getInstance_1().v49_1);
    }
    $this.x49_1 = data;
    $this.y49_1 = 0;
    return $this;
  }
  function Success_init_$Create$(seen1, data, serializationConstructorMarker) {
    return Success_init_$Init$(seen1, data, serializationConstructorMarker, objectCreate(protoOf(Success)));
  }
  function Companion_1() {
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_0 = this;
    this.a4a_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('failure', this, 1);
    tmp0_serialDesc.z2t('cause', false);
    this.z49_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).p2l = function () {
    return this.z49_1;
  };
  protoOf($serializer_1).b2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance()];
  };
  protoOf($serializer_1).q2l = function (decoder) {
    var tmp0_desc = this.z49_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q2o(tmp0_desc);
    if (tmp6_input.f2p()) {
      tmp4_local0 = tmp6_input.c2p(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g2p(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c2p(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r2o(tmp0_desc);
    return Failure_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_1();
    return $serializer_instance_0;
  }
  function Failure_init_$Init$(seen1, cause, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().z49_1);
    }
    $this.b4a_1 = cause;
    $this.c4a_1 = 0;
    return $this;
  }
  function Failure_init_$Create$(seen1, cause, serializationConstructorMarker) {
    return Failure_init_$Init$(seen1, cause, serializationConstructorMarker, objectCreate(protoOf(Failure)));
  }
  function Success(data) {
    Companion_getInstance_1();
    this.x49_1 = data;
    this.y49_1 = 0;
  }
  protoOf(Success).toString = function () {
    return 'Success(data=' + this.x49_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    return this.x49_1 == null ? 0 : hashCode(this.x49_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.x49_1, tmp0_other_with_cast.x49_1))
      return false;
    return true;
  };
  function Failure(cause) {
    this.b4a_1 = cause;
    this.c4a_1 = 0;
  }
  protoOf(Failure).toString = function () {
    return 'Failure(cause=' + this.b4a_1 + ')';
  };
  protoOf(Failure).hashCode = function () {
    return hashCode(this.b4a_1);
  };
  protoOf(Failure).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Failure))
      return false;
    var tmp0_other_with_cast = other instanceof Failure ? other : THROW_CCE();
    if (!equals(this.b4a_1, tmp0_other_with_cast.b4a_1))
      return false;
    return true;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).w49 = function (typeSerial0) {
    var tmp = getKClass(ApiResponse);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Failure), getKClass(Success)];
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = $serializer_getInstance_0();
    var tmp_2 = PrimitiveClasses_getInstance().x7();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = [tmp_1, $serializer_init_$Create$(PolymorphicSerializer_init_$Create$(tmp_2, tmp$ret$5))];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    return SealedClassSerializer_init_$Create$('com.lavsystems.goodluckbingo.api.models.ApiResponse', tmp, tmp_0, tmp_3, tmp$ret$11);
  };
  protoOf(Companion_2).k2u = function (typeParamsSerializers) {
    return this.w49(typeParamsSerializers[0]);
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function ApiResponse() {
  }
  function Companion_3() {
  }
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    this.e4a_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.lavsystems.goodluckbingo.domain.models.User', this, 3);
    tmp0_serialDesc.z2t('id', false);
    tmp0_serialDesc.z2t('name', false);
    tmp0_serialDesc.z2t('code', false);
    this.d4a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).p2l = function () {
    return this.d4a_1;
  };
  protoOf($serializer_2).b2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  protoOf($serializer_2).q2l = function (decoder) {
    var tmp0_desc = this.d4a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp8_input = decoder.q2o(tmp0_desc);
    if (tmp8_input.f2p()) {
      tmp4_local0 = tmp8_input.a2p(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.a2p(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v2o(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.g2p(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.a2p(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.a2p(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v2o(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.r2o(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function User_init_$Init$(seen1, id, name, code, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_1().d4a_1);
    }
    $this.f4a_1 = id;
    $this.g4a_1 = name;
    $this.h4a_1 = code;
    $this.i4a_1 = 0;
    return $this;
  }
  function User_init_$Create$(seen1, id, name, code, serializationConstructorMarker) {
    return User_init_$Init$(seen1, id, name, code, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(id, name, code) {
    this.f4a_1 = id;
    this.g4a_1 = name;
    this.h4a_1 = code;
    this.i4a_1 = 0;
  }
  protoOf(User).toString = function () {
    return 'User(id=' + this.f4a_1 + ', name=' + this.g4a_1 + ', code=' + this.h4a_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.f4a_1);
    result = imul(result, 31) + getStringHashCode(this.g4a_1) | 0;
    result = imul(result, 31) + this.h4a_1 | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.f4a_1 === tmp0_other_with_cast.f4a_1))
      return false;
    if (!(this.g4a_1 === tmp0_other_with_cast.g4a_1))
      return false;
    if (!(this.h4a_1 === tmp0_other_with_cast.h4a_1))
      return false;
    return true;
  };
  function AppEntry$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(-310302271);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t12(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-310302271, $dirty, -1, 'com.lavsystems.goodluckbingo.AppEntry$composable (AppEntry.kt:13)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1179781680, true, AppEntry$composable$lambda(content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.y11(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r12(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.p12();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().s11_1) {
        // Inline function 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.q12(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.z11();
      SilkApp$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    var tmp0_safe_receiver = $composer_0.f12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1h(AppEntry$composable$lambda_0(content, $changed));
    }
  }
  function AppEntry$composable$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(1575543242, $changed, -1, 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous>.<anonymous> (AppEntry.kt:16)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function AppEntry$composable$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(1179781680, $changed, -1, 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous> (AppEntry.kt:15)');
        }
        var tmp_0 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1575543242, true, AppEntry$composable$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.y11(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r12(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.p12();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().s11_1) {
          // Inline function 'com.lavsystems.goodluckbingo.AppEntry$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
          $composer_1.q12(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.z11();
        Surface$composable(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function AppEntry$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Fonts() {
    this.j4a_1 = 'Roboto';
    this.k4a_1 = 0;
  }
  var Fonts_instance;
  function Fonts_getInstance() {
    return Fonts_instance;
  }
  function API() {
    this.l4a_1 = 'user?code={code}';
    this.m4a_1 = 0;
  }
  var API_instance;
  function API_getInstance() {
    return API_instance;
  }
  function Login() {
    this.n4a_1 = 'C\xF3digo de acceso';
    this.o4a_1 = 'Ingresar';
    this.p4a_1 = 'C\xF3digo invalido';
    this.q4a_1 = 0;
  }
  var Login_instance;
  function Login_getInstance() {
    return Login_instance;
  }
  function Id() {
    this.r4a_1 = 'input_code_id';
    this.s4a_1 = 0;
  }
  var Id_instance;
  function Id_getInstance() {
    return Id_instance;
  }
  var Theme_Primary_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_instance;
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#12C9CC', rgb(18, 201, 204));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.v4a_1 = hex;
    this.w4a_1 = rgb;
  }
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(1846242101, $changed, -1, 'com.lavsystems.goodluckbingo.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:15)');
      }
      Text$composable('THIS PAGE INTENTIONALLY LEFT BLANK', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.x4a_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1846242101, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(-247991741);
    if (!($changed === 0) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-247991741, $changed, -1, 'com.lavsystems.goodluckbingo.pages.HomePage$composable (Index.kt:12)');
      }
      var tmp = fillMaxSize(Companion_instance_0);
      var tmp_0 = Center_instance;
      Box$composable(tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().x4a_1, $composer_0, 3120, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    var tmp0_safe_receiver = $composer_0.f12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1h(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608_0($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(565242300, $changed, -1, 'com.lavsystems.goodluckbingo.pages.login.ComposableSingletons$IndexKt.lambda-1.<anonymous> (index.kt:102)');
      }
      SpanText$composable('Ingresar', null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt_0() {
    ComposableSingletons$IndexKt_instance_0 = this;
    var tmp = this;
    tmp.y4a_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(565242300, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608_0));
  }
  var ComposableSingletons$IndexKt_instance_0;
  function ComposableSingletons$IndexKt_getInstance_0() {
    if (ComposableSingletons$IndexKt_instance_0 == null)
      new ComposableSingletons$IndexKt_0();
    return ComposableSingletons$IndexKt_instance_0;
  }
  function LoginScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(-694583205);
    if (!($changed === 0) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-694583205, $changed, -1, 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable (index.kt:51)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.y11(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = LoginScreen$composable$lambda_1;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.y11(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.p12();
      var tmp;
      if (false ? true : it === Companion_getInstance().s11_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.q12(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.z11();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.o1h_1;
      $composer_2.z11();
      var scope = tmp0_0;
      var pageContext = rememberPageContext$composable($composer_0, 0);
      $composer_0.y11(2146343118);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.p12();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().s11_1) {
        // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.q12(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.z11();
      var showError$delegate = tmp0_group;
      var tmp_3 = fillMaxSize(Companion_instance_0);
      var tmp_4 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -1985490983, true, LoginScreen$composable$lambda_2(scope, showError$delegate, pageContext));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.y11(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_4.r12(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_4.p12();
      var tmp_6;
      if (invalid ? true : it_1 === Companion_getInstance().s11_1) {
        // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_4.q12(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_4.z11();
      Box$composable(tmp_3, tmp_4, null, tmp0_1, $composer_0, 3120, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    var tmp1_safe_receiver = $composer_0.f12();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1h(LoginScreen$composable$lambda_3($changed));
    }
  }
  function LoginScreen$composable$lambda($showError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showError', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $showError$delegate.r2();
  }
  function LoginScreen$composable$lambda_0($showError$delegate, value) {
    getLocalDelegateReference('showError', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $showError$delegate.gv(value);
    return Unit_instance;
  }
  function LoginScreen$composable$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$composable$lambda$lambda$lambda($this$toAttrs) {
    $this$toAttrs.v21('placeholder', 'C\xF3digo de acceso');
    return Unit_instance;
  }
  function LoginScreen$composable$lambda$lambda$lambda$slambda($code, $pageContext, $showError$delegate, resultContinuation) {
    this.h4b_1 = $code;
    this.i4b_1 = $pageContext;
    this.j4b_1 = $showError$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).wy = function ($this$launch, $completion) {
    var tmp = this.xy($this$launch, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).wd = function (p1, $completion) {
    return this.wy((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 2;
            this.yc_1 = 1;
            suspendResult = UserService_instance.m4b(this.h4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var user = suspendResult;
            if (user == null) {
              LoginScreen$composable$lambda_0(this.j4b_1, true);
            } else {
              this.i4b_1.b3a_1.h3d('');
            }

            return Unit_instance;
          case 2:
            throw this.bd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.zc_1 === 2) {
          throw e;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e;
        }
      }
     while (true);
  };
  protoOf(LoginScreen$composable$lambda$lambda$lambda$slambda).xy = function ($this$launch, completion) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda(this.h4b_1, this.i4b_1, this.j4b_1, completion);
    i.k4b_1 = $this$launch;
    return i;
  };
  function LoginScreen$composable$lambda$lambda$lambda$slambda_0($code, $pageContext, $showError$delegate, resultContinuation) {
    var i = new LoginScreen$composable$lambda$lambda$lambda$slambda($code, $pageContext, $showError$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.wy($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginScreen$composable$lambda$lambda$lambda_0($scope, $showError$delegate, $pageContext) {
    return function (it) {
      LoginScreen$composable$lambda_0($showError$delegate, false);
      var tmp = document;
      var tmp_0 = tmp.getElementById('input_code_id');
      var code = (tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE()).value;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(code) === 0) {
        return Unit_instance;
      }
      launch($scope, VOID, VOID, LoginScreen$composable$lambda$lambda$lambda$slambda_0(code, $pageContext, $showError$delegate, null));
      return Unit_instance;
    };
  }
  function LoginScreen$composable$lambda$lambda($scope, $showError$delegate, $pageContext) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(-1594045054, $changed, -1, 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>.<anonymous> (index.kt:61)');
        }
        var tmp_0 = Number_getInstance();
        var tmp_1 = Companion_instance_0;
        var tmp_2 = padding(fontWeight(fontFamily(height(width(id(tmp_1, 'input_code_id'), get_px(350)), get_px(54)), [Fonts_instance.j4a_1]), Companion_instance_1.c2g()), VOID, get_px(20));
        $composer_0.y11(419649444);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.p12();
        var tmp_3;
        if (false ? true : it === Companion_getInstance().s11_1) {
          // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = LoginScreen$composable$lambda$lambda$lambda;
          $composer_0.q12(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.z11();
        Input$composable(tmp_0, toAttrs(tmp_2, tmp0_group), $composer_0, 6);
        var tmp_5 = color(fontWeight(fontSize(fontFamily(backgroundColor(borderRadius(padding(height(width(margin(Companion_instance_0, get_px(25)), get_px(350)), get_px(54)), VOID, get_px(20)), get_px(4)), Theme_Primary_getInstance().w4a_1), [Fonts_instance.j4a_1]), get_px(16)), Companion_instance_1.c2g()), Colors_instance.q3g());
        Button$composable(toAttrs(onClick(tmp_5, LoginScreen$composable$lambda$lambda$lambda_0($scope, $showError$delegate, $pageContext))), ComposableSingletons$IndexKt_getInstance_0().y4a_1, $composer_0, 48, 0);
        if (LoginScreen$composable$lambda($showError$delegate)) {
          SpanText$composable('C\xF3digo invalido', null, null, null, $composer_0, 6, 14);
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_2($scope, $showError$delegate, $pageContext) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(-1985490983, $changed, -1, 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous> (index.kt:60)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1594045054, true, LoginScreen$composable$lambda$lambda($scope, $showError$delegate, $pageContext));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.y11(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r12(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.p12();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().s11_1) {
          // Inline function 'com.lavsystems.goodluckbingo.pages.login.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.q12(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.z11();
        Column$composable(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.j12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function LoginScreen$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      LoginScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $getUserByCodeCOROUTINE$0(_this__u8e3s4, code, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4b_1 = _this__u8e3s4;
    this.w4b_1 = code;
  }
  protoOf($getUserByCodeCOROUTINE$0).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 3;
            this.zc_1 = 2;
            this.yc_1 = 1;
            var tmp_0 = get_api(window);
            suspendResult = tmp_0.a39(replace('user?code={code}', '{code}', this.w4b_1), VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            println(result);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.e2p();
            var this_2 = serializer(this_1, createKType(getKClass(ApiResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), true))]), false));
            var response = this_0.t30(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
            var tmp_1 = this;
            var tmp_2;
            if (response instanceof Success) {
              tmp_2 = response.x49_1;
            } else {
              tmp_2 = null;
            }

            tmp_1.x4b_1 = tmp_2;
            this.zc_1 = 3;
            this.yc_1 = 4;
            continue $sm;
          case 2:
            this.zc_1 = 3;
            var tmp_3 = this.bd_1;
            if (tmp_3 instanceof Exception) {
              var e = this.bd_1;
              var tmp_4 = this;
              println(e.message);
              tmp_4.x4b_1 = null;
              this.yc_1 = 4;
              continue $sm;
            } else {
              throw this.bd_1;
            }

          case 3:
            throw this.bd_1;
          case 4:
            this.zc_1 = 3;
            return this.x4b_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.zc_1 === 3) {
          throw e_0;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e_0;
        }
      }
     while (true);
  };
  function UserService() {
    this.l4b_1 = 0;
  }
  protoOf(UserService).m4b = function (code, $completion) {
    var tmp = new $getUserByCodeCOROUTINE$0(this, code, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  var UserService_instance;
  function UserService_getInstance() {
    return UserService_instance;
  }
  //region block: post-declaration
  protoOf($serializer).c2u = typeParametersSerializers;
  protoOf($serializer_1).c2u = typeParametersSerializers;
  protoOf($serializer_2).c2u = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  Companion_instance_6 = new Companion_3();
  Fonts_instance = new Fonts();
  API_instance = new API();
  Login_instance = new Login();
  Id_instance = new Id();
  UserService_instance = new UserService();
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=goodluckbingo.js.map
