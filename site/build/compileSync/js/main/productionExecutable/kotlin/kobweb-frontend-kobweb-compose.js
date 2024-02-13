(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    root['kobweb-frontend-kobweb-compose'] = factory(typeof this['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-compose'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ha;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var equals = kotlin_kotlin.$_$.b9;
  var isInterface = kotlin_kotlin.$_$.t9;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var hashCode = kotlin_kotlin.$_$.i9;
  var classMeta = kotlin_kotlin.$_$.y8;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toString = kotlin_kotlin.$_$.ma;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var coerceIn = kotlin_kotlin.$_$.qa;
  var numberToInt = kotlin_kotlin.$_$.da;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta);
  setMetadataFor(End, 'End', objectMeta);
  setMetadataFor(Start, 'Start', objectMeta);
  setMetadataFor(Top, 'Top', objectMeta);
  setMetadataFor(Bottom, 'Bottom', objectMeta);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(TopStart, 'TopStart', objectMeta);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta);
  setMetadataFor(Center_0, 'Center', objectMeta);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta);
  setMetadataFor(Top_0, 'Top', objectMeta);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta);
  setMetadataFor(Start_0, 'Start', objectMeta);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta);
  setMetadataFor(End_0, 'End', objectMeta);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta);
  function then(other) {
    return other === Companion_instance_6 ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [Element]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [Element]);
  setMetadataFor(Rgb, 'Rgb', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  //endregion
  function HorizontalOrVertical() {
  }
  function End() {
    this.m3d_1 = 0;
  }
  var End_instance;
  function End_getInstance() {
    return End_instance;
  }
  function Start() {
    this.n3d_1 = 0;
  }
  var Start_instance;
  function Start_getInstance() {
    return Start_instance;
  }
  function Top() {
    this.o3d_1 = 0;
  }
  var Top_instance;
  function Top_getInstance() {
    return Top_instance;
  }
  function Bottom() {
    this.p3d_1 = 0;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    return Bottom_instance;
  }
  function Center() {
    this.q3d_1 = 0;
  }
  var Center_instance;
  function Center_getInstance() {
    return Center_instance;
  }
  function SpaceEvenly() {
    this.r3d_1 = 0;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    this.s3d_1 = 0;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    this.t3d_1 = 0;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    return SpaceAround_instance;
  }
  function FromStyle() {
    this.u3d_1 = 0;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    return FromStyle_instance;
  }
  function Box$composable(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(921036704);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.r12(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.r12(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.r12(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.t12(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.v11()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_6;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().v3d_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(921036704, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable (Box.kt:44)');
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 721727587, true, Box$composable$lambda(ref_0, content_0));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.q12(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.z11();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.d1h(Box$composable$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:43)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.v3d_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().w3d_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
    this.y3d_1 = 0;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.w3d_1 = TopStart_instance;
    this.x3d_1 = 8;
  }
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$composable$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.r12($this$Div) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(721727587, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous> (Box.kt:46)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content._v(BoxScopeInstance_instance, $composer_0, 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.j12();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function Box$composable$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box$composable($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(-1435219930);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.r12(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.r12(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.r12(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.r12(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t12(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.v11()) {
      $composer_0.c12();
      if (($changed & 1) === 0 ? true : $composer_0.w11()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().z3d_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().a3e_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.j12();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d12();
      if (isTraceInProgress()) {
        traceEventStart(-1435219930, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable (Column.kt:48)');
      }
      var tmp = toAttrs(columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1861113368, true, Column$composable$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q12(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.z11();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.d1h(Column$composable$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.z3d_1 = Top_instance;
    this.a3e_1 = Start_instance_0;
    this.b3e_1 = 0;
  }
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().z3d_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().a3e_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-col', toClassName_3(verticalArrangement), toClassName_1(horizontalAlignment)]);
  }
  function ColumnScopeInstance() {
    this.c3e_1 = 0;
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function Column$composable$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.r12($this$Div) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(1861113368, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous> (Column.kt:50)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content(ColumnScopeInstance_instance, $composer_0, 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.j12();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function Column$composable$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column$composable($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().d3e_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().e3e_1 : verticalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-row', toClassName_2(horizontalArrangement), toClassName(verticalAlignment)]);
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.d3e_1 = Start_instance;
    this.e3e_1 = Top_instance_0;
    this.f3e_1 = 0;
  }
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance_0)) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_instance)) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_instance_0)) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_instance)) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_instance)) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_instance)) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_instance)) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_instance_0)) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_instance)) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_instance)) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_instance)) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_instance)) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_instance_0)) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_instance)) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_instance_0)) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, End_instance)) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(_this__u8e3s4, Start_instance)) {
        tmp = 'kobweb-arrange-start';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_3(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance)) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(_this__u8e3s4, Bottom_instance)) {
        tmp = 'kobweb-arrange-bottom';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_4(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Center_instance)) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(_this__u8e3s4, SpaceAround_instance)) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(_this__u8e3s4, SpaceBetween_instance)) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(_this__u8e3s4, SpaceEvenly_instance)) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(_this__u8e3s4, FromStyle_instance)) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.e2b('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.e2b('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.e2b('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.e2b('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.e2b('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.e2b('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.e2b('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.e2b('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.e2b('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.e2b('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.e2b('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.e2b('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.e2b('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.e2b('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.e2b('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.e2b('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.e2b('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.e2b('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.e2b('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.e2b('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.e2b('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.e2b('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.e2b('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.e2b('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.e2b('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.e2b('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.e2b('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.e2b('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.e2b('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.e2b('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.e2b('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.e2b('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.e2b('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.e2b('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.e2b('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.e2b('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.e2b('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.e2b('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.e2b('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.e2b('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.e2b('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.e2b('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.e2b('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.e2b('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.e2b('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.e2b('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.e2b('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.p2i(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.q2i(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.q2g(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.q2g(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.g2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.f2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.h2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.g2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.f2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.h2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.g2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.f2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.h2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.g2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.f2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.h2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.g2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.f2f());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.h2f());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.g2f());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.f2f());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.h2f());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet.call(this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
    this.k3e_1 = 0;
  }
  protoOf(KobwebComposeStyleSheet).c2b = function (selector, cssRule) {
    return this.b2b(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function TopStart() {
    this.l3e_1 = 0;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    return TopStart_instance;
  }
  function TopCenter() {
    this.m3e_1 = 0;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    return TopCenter_instance;
  }
  function TopEnd() {
    this.n3e_1 = 0;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    return TopEnd_instance;
  }
  function CenterStart() {
    this.o3e_1 = 0;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    return CenterStart_instance;
  }
  function Center_0() {
    this.p3e_1 = 0;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    return Center_instance_0;
  }
  function CenterEnd() {
    this.q3e_1 = 0;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    return CenterEnd_instance;
  }
  function BottomStart() {
    this.r3e_1 = 0;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    return BottomStart_instance;
  }
  function BottomCenter() {
    this.s3e_1 = 0;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    return BottomCenter_instance;
  }
  function BottomEnd() {
    this.t3e_1 = 0;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    return BottomEnd_instance;
  }
  function Top_0() {
    this.u3e_1 = 0;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    return Top_instance_0;
  }
  function CenterVertically() {
    this.v3e_1 = 0;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    return CenterVertically_instance;
  }
  function Bottom_0() {
    this.w3e_1 = 0;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    return Bottom_instance_0;
  }
  function Start_0() {
    this.x3e_1 = 0;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    return Start_instance_0;
  }
  function CenterHorizontally() {
    this.y3e_1 = 0;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    return CenterHorizontally_instance;
  }
  function End_0() {
    this.z3e_1 = 0;
  }
  var End_instance_0;
  function End_getInstance_0() {
    return End_instance_0;
  }
  function FromStyle_0() {
    this.a3f_1 = 0;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    return FromStyle_instance_0;
  }
  function Element() {
  }
  function Companion() {
  }
  protoOf(Companion).b3f = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).c3f = function (other) {
    return other;
  };
  var Companion_instance_6;
  function Companion_getInstance_0() {
    return Companion_instance_6;
  }
  function Modifier() {
  }
  function ChainedModifier(current, next) {
    this.d3f_1 = current;
    this.e3f_1 = next;
  }
  protoOf(ChainedModifier).b3f = function (initial, operation) {
    return this.e3f_1.b3f(this.d3f_1.b3f(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.d3f_1, other.d3f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.e3f_1, other.e3f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.d3f_1) + imul(31, hashCode(this.e3f_1)) | 0;
  };
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.c3f(new StyleModifier(styles));
  }
  function AttrsModifier(attrs) {
    this.f3f_1 = attrs;
    this.g3f_1 = 0;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.f3f_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.f3f_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.f3f_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function StyleModifier(styles) {
    this.h3f_1 = styles;
    this.i3f_1 = 0;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.h3f_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.h3f_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.h3f_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.c3f(new AttrsModifier(attrs));
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.h3f_1($this$style);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.f3f_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.w21(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.b3f(Unit_instance, toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.h3f_1($this_null);
      }
      return Unit_instance;
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.b3f(Unit_instance, toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function Rgb(value) {
    this.j3f_1 = value;
    this.k3f_1 = 0;
  }
  protoOf(Rgb).l3f = function () {
    return this.j3f_1 >> 16 & 255;
  };
  protoOf(Rgb).m3f = function () {
    return this.j3f_1 >> 8 & 255;
  };
  protoOf(Rgb).n3f = function () {
    return this.j3f_1 >> 0 & 255;
  };
  protoOf(Rgb).o3f = function () {
    return this.j3f_1 >> 24 & 255;
  };
  protoOf(Rgb).p3f = function () {
    return toColorFloat(this.l3f());
  };
  protoOf(Rgb).q3f = function () {
    return toColorFloat(this.m3f());
  };
  protoOf(Rgb).r3f = function () {
    return toColorFloat(this.n3f());
  };
  protoOf(Rgb).s3f = function () {
    return toColorFloat(this.o3f());
  };
  protoOf(Rgb).t3f = function () {
    return Companion_instance_7.v3f(255 - this.l3f() | 0, 255 - this.m3f() | 0, 255 - this.n3f() | 0, this.o3f());
  };
  protoOf(Rgb).w3f = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_instance_7.x3f(this.p3f() * darkeningMultiplier, this.q3f() * darkeningMultiplier, this.r3f() * darkeningMultiplier, this.s3f());
  };
  protoOf(Rgb).y3f = function (red, green, blue, alpha) {
    return Companion_instance_7.x3f(red, green, blue, alpha);
  };
  protoOf(Rgb).z3f = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.p3f() : red;
    green = green === VOID ? this.q3f() : green;
    blue = blue === VOID ? this.r3f() : blue;
    alpha = alpha === VOID ? this.s3f() : alpha;
    return $super === VOID ? this.y3f(red, green, blue, alpha) : $super.y3f.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).a3g = function () {
    return this;
  };
  protoOf(Rgb).toString = function () {
    return this.o3f() === 255 ? 'rgb(' + this.l3f() + ', ' + this.m3f() + ', ' + this.n3f() + ')' : 'rgba(' + this.l3f() + ', ' + this.m3f() + ', ' + this.n3f() + ', ' + this.s3f() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.l3f() === other.l3f();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.m3f() === other.m3f();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.n3f() === other.n3f();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.o3f() === other.o3f();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.l3f();
    result = imul(31, result) + this.m3f() | 0;
    result = imul(31, result) + this.n3f() | 0;
    result = imul(31, result) + this.o3f() | 0;
    return result;
  };
  function Companion_0() {
    this.u3f_1 = 0.3;
  }
  protoOf(Companion_0).b3g = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).c3g = function (r, g, b) {
    return this.v3f(r, g, b, 255);
  };
  protoOf(Companion_0).v3f = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).x3f = function (r, g, b, a) {
    return this.v3f(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_7;
  function Companion_getInstance_1() {
    return Companion_instance_7;
  }
  function Colors() {
    this.d3g_1 = 0;
  }
  protoOf(Colors).e3g = function () {
    return Companion_instance_7.v3f(0, 0, 0, 0);
  };
  protoOf(Colors).f3g = function () {
    return Companion_instance_7.c3g(0, 0, 0);
  };
  protoOf(Colors).g3g = function () {
    return Companion_instance_7.c3g(0, 0, 255);
  };
  protoOf(Colors).h3g = function () {
    return Companion_instance_7.c3g(100, 149, 237);
  };
  protoOf(Colors).i3g = function () {
    return Companion_instance_7.c3g(0, 255, 255);
  };
  protoOf(Colors).j3g = function () {
    return Companion_instance_7.c3g(169, 169, 169);
  };
  protoOf(Colors).k3g = function () {
    return Companion_instance_7.c3g(47, 79, 79);
  };
  protoOf(Colors).l3g = function () {
    return Companion_instance_7.c3g(30, 144, 255);
  };
  protoOf(Colors).m3g = function () {
    return Companion_instance_7.c3g(211, 211, 211);
  };
  protoOf(Colors).n3g = function () {
    return Companion_instance_7.c3g(135, 206, 250);
  };
  protoOf(Colors).o3g = function () {
    return Companion_instance_7.c3g(128, 0, 128);
  };
  protoOf(Colors).p3g = function () {
    return Companion_instance_7.c3g(238, 130, 238);
  };
  protoOf(Colors).q3g = function () {
    return Companion_instance_7.c3g(255, 255, 255);
  };
  protoOf(Colors).r3g = function () {
    return Companion_instance_7.c3g(245, 245, 245);
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.t3f().w3f(byPercent).t3f();
  }
  function ariaHidden_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaDisabled_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      ariaHidden($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda(scope));
  }
  function BorderScope(styleScope) {
    this.s3g_1 = styleScope;
    this.t3g_1 = 8;
  }
  protoOf(BorderScope).u3g = function (color) {
    return borderColor(this.s3g_1, color);
  };
  protoOf(BorderScope).v3g = function (lineStyle) {
    return borderStyle(this.s3g_1, lineStyle);
  };
  protoOf(BorderScope).w3g = function (width) {
    return borderWidth(this.s3g_1, width);
  };
  function borderRadius_0(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_1(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda_0(width, style, color));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.apply' call
      var this_0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(this_0);
      return Unit_instance;
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_instance;
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return styleModifier(_this__u8e3s4, boxShadow$lambda(offsetX, offsetY, blurRadius, spreadRadius, color, inset));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset);
      return Unit_instance;
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_instance;
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function appearance_0(_this__u8e3s4, appearance) {
    return styleModifier(_this__u8e3s4, appearance$lambda(appearance));
  }
  function id(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.y21($classes.slice());
      return Unit_instance;
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_instance;
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.z21($value);
      return Unit_instance;
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontWeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_instance;
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.a22($value);
      return Unit_instance;
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_instance;
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_instance;
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.c22($listener);
      return Unit_instance;
    };
  }
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function OverflowScope(styleScope) {
    this.x3g_1 = styleScope;
    this.y3g_1 = 8;
  }
  protoOf(OverflowScope).z3g = function (overflowY_0) {
    return overflowY(this.x3g_1, overflowY_0);
  };
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function margin_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(all));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function margin_2(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, right, bottom, left));
  }
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_instance;
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_instance;
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_instance;
    };
  }
  function margin$lambda_0($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_instance;
    };
  }
  function margin$lambda_1($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, $type, $position, $image);
      return Unit_instance;
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_instance;
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_instance;
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_instance;
    };
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_instance;
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_instance;
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_instance;
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function transition_0(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(ChainedModifier).c3f = then;
  protoOf(AttrsModifier).b3f = fold;
  protoOf(AttrsModifier).c3f = then;
  protoOf(StyleModifier).b3f = fold;
  protoOf(StyleModifier).c3f = then;
  //endregion
  //region block: init
  End_instance = new End();
  Start_instance = new Start();
  Top_instance = new Top();
  Bottom_instance = new Bottom();
  Center_instance = new Center();
  SpaceEvenly_instance = new SpaceEvenly();
  SpaceBetween_instance = new SpaceBetween();
  SpaceAround_instance = new SpaceAround();
  FromStyle_instance = new FromStyle();
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  TopStart_instance = new TopStart();
  TopCenter_instance = new TopCenter();
  TopEnd_instance = new TopEnd();
  CenterStart_instance = new CenterStart();
  Center_instance_0 = new Center_0();
  CenterEnd_instance = new CenterEnd();
  BottomStart_instance = new BottomStart();
  BottomCenter_instance = new BottomCenter();
  BottomEnd_instance = new BottomEnd();
  Top_instance_0 = new Top_0();
  CenterVertically_instance = new CenterVertically();
  Bottom_instance_0 = new Bottom_0();
  Start_instance_0 = new Start_0();
  CenterHorizontally_instance = new CenterHorizontally();
  End_instance_0 = new End_0();
  FromStyle_instance_0 = new FromStyle_0();
  Companion_instance_6 = new Companion();
  Companion_instance_7 = new Companion_0();
  Colors_instance = new Colors();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = Column$composable;
  _.$_$.c = rowClasses;
  _.$_$.d = lightened;
  _.$_$.e = appearance_0;
  _.$_$.f = ariaDisabled_0;
  _.$_$.g = ariaHidden_0;
  _.$_$.h = backgroundColor_0;
  _.$_$.i = borderBottom_0;
  _.$_$.j = borderLeft_0;
  _.$_$.k = borderRadius_0;
  _.$_$.l = borderTop_0;
  _.$_$.m = border_1;
  _.$_$.n = border_0;
  _.$_$.o = bottom_0;
  _.$_$.p = boxShadow_0;
  _.$_$.q = boxSizing_0;
  _.$_$.r = classNames;
  _.$_$.s = color_0;
  _.$_$.t = cursor_0;
  _.$_$.u = display_0;
  _.$_$.v = fillMaxSize;
  _.$_$.w = fillMaxWidth;
  _.$_$.x = flexGrow_0;
  _.$_$.y = fontFamily_0;
  _.$_$.z = fontSize_0;
  _.$_$.a1 = fontWeight_0;
  _.$_$.b1 = gap_0;
  _.$_$.c1 = gridTemplateColumns_0;
  _.$_$.d1 = height_0;
  _.$_$.e1 = id;
  _.$_$.f1 = left_0;
  _.$_$.g1 = lineHeight_0;
  _.$_$.h1 = listStyle_0;
  _.$_$.i1 = margin_2;
  _.$_$.j1 = margin_1;
  _.$_$.k1 = margin_0;
  _.$_$.l1 = minHeight_0;
  _.$_$.m1 = minWidth_0;
  _.$_$.n1 = objectFit_0;
  _.$_$.o1 = onClick;
  _.$_$.p1 = opacity_0;
  _.$_$.q1 = outline_0;
  _.$_$.r1 = overflow_0;
  _.$_$.s1 = overflow_1;
  _.$_$.t1 = paddingInline_0;
  _.$_$.u1 = padding_0;
  _.$_$.v1 = padding_1;
  _.$_$.w1 = position_0;
  _.$_$.x1 = right_0;
  _.$_$.y1 = setVariable_0;
  _.$_$.z1 = size;
  _.$_$.a2 = tabIndex;
  _.$_$.b2 = textAlign_0;
  _.$_$.c2 = textDecorationLine_0;
  _.$_$.d2 = top_0;
  _.$_$.e2 = transition_0;
  _.$_$.f2 = transition_1;
  _.$_$.g2 = translateX_0;
  _.$_$.h2 = userSelect_0;
  _.$_$.i2 = verticalAlign_0;
  _.$_$.j2 = whiteSpace_0;
  _.$_$.k2 = width_0;
  _.$_$.l2 = styleModifier;
  _.$_$.m2 = toAttrs;
  _.$_$.n2 = toStyles;
  _.$_$.o2 = KobwebComposeStyleSheet_getInstance;
  _.$_$.p2 = Companion_instance_7;
  _.$_$.q2 = Colors_instance;
  _.$_$.r2 = CenterVertically_instance;
  _.$_$.s2 = Center_instance_0;
  _.$_$.t2 = TopStart_instance;
  _.$_$.u2 = Companion_instance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map
