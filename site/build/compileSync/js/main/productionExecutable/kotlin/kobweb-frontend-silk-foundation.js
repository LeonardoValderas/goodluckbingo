(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var protoOf = kotlin_kotlin.$_$.ha;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var mapCapacity = kotlin_kotlin.$_$.u6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var to = kotlin_kotlin.$_$.qe;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var equals = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var classMeta = kotlin_kotlin.$_$.y8;
  var listOf = kotlin_kotlin.$_$.t6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h5;
  var distinct = kotlin_kotlin.$_$.v5;
  var VOID = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.he;
  var removeSuffix = kotlin_kotlin.$_$.vb;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var KProperty0 = kotlin_kotlin.$_$.xa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var charSequenceGet = kotlin_kotlin.$_$.v8;
  var substringAfter = kotlin_kotlin.$_$.hc;
  var substringBefore = kotlin_kotlin.$_$.ic;
  var substringAfterLast = kotlin_kotlin.$_$.fc;
  var removePrefix = kotlin_kotlin.$_$.ub;
  var kebabCaseToTitleCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var joinToString = kotlin_kotlin.$_$.j6;
  var toString = kotlin_kotlin.$_$.ma;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var mutableListOf = kotlin_kotlin.$_$.x6;
  var plus = kotlin_kotlin.$_$.a7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var substringAfterLast_0 = kotlin_kotlin.$_$.ec;
  var toSet = kotlin_kotlin.$_$.r7;
  var endsWith = kotlin_kotlin.$_$.kb;
  var copyToArray = kotlin_kotlin.$_$.u5;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var getValue = kotlin_kotlin.$_$.f6;
  var toList = kotlin_kotlin.$_$.n7;
  var listOf_0 = kotlin_kotlin.$_$.s6;
  var emptyList = kotlin_kotlin.$_$.w5;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var isBlank = kotlin_kotlin.$_$.ob;
  var first = kotlin_kotlin.$_$.mb;
  var Char = kotlin_kotlin.$_$.yc;
  var setOf = kotlin_kotlin.$_$.g7;
  var enumEntries = kotlin_kotlin.$_$.n8;
  var Enum = kotlin_kotlin.$_$.bd;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var endsWith_0 = kotlin_kotlin.$_$.jb;
  var startsWith = kotlin_kotlin.$_$.dc;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.re;
  var Map = kotlin_kotlin.$_$.x4;
  var isInterface = kotlin_kotlin.$_$.t9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var trimIndent = kotlin_kotlin.$_$.sc;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var objectCreate = kotlin_kotlin.$_$.fa;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(ColorSchemes$Monochrome$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Red$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Pink$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Purple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepPurple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Indigo$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Blue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightBlue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Cyan$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Teal$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Green$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightGreen$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Lime$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Yellow$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Amber$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Orange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepOrange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Brown$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Gray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$BlueGray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes, 'ColorSchemes', objectMeta);
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(LegacyMutableSilkPalettes, 'LegacyMutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(PaletteEntry, 'PaletteEntry', classMeta);
  setMetadataFor(Button, 'Button', classMeta);
  setMetadataFor(Checkbox, 'Checkbox', classMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(Link, 'Link', classMeta);
  setMetadataFor(Switch, 'Switch', classMeta);
  setMetadataFor(Tab, 'Tab', classMeta);
  setMetadataFor(Tooltip, 'Tooltip', classMeta);
  setMetadataFor(LegacyMutableSilkPalette, 'LegacyMutableSilkPalette', classMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.sa_1) {
      case 0:
        tmp = this.x3y();
        break;
      case 1:
        tmp = this.y3y();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.z31(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation$composable(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(1934335721);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t12(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t12(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v11()) {
      if (!(($default & 1) === 0)) {
        $composer_0.y11(-1594222701);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.p12();
        var tmp;
        if (false ? true : it === Companion_getInstance().s11_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
          var value = prepareSilkFoundation$composable$lambda;
          this_0.q12(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.z11();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(1934335721, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.a12(-1594222658, Unit_instance);
      $composer_0.y11(-1594222554);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.p12();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().s11_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
        var value_0 = prepareSilkFoundation$composable$lambda_0(initSilk_1);
        this_1.q12(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.z11();
      initSilk(tmp1_group);
      $composer_0.b12();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.y11(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, styleSheet.y2a(), $composer_1, 0, 1);
      $composer_1.z11();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.y11(-168645675);
      sourceInformation($composer_2, 'CC(Style$composable)');
      Style$composable(null, styleSheet_0.y2a(), $composer_2, 0, 1);
      $composer_2.z11();
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    var tmp2_safe_receiver = $composer_0.f12();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.d1h(prepareSilkFoundation$composable$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$composable$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$composable$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$composable$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation$composable($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet.call(this);
    this.e3h_1 = 0;
  }
  protoOf(SilkStyleSheet).c2b = function (selector, cssRule) {
    return this.b2b(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.g3h_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.n2().o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.q2();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.r2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.o2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.f3h_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g3h_1 = LinkedHashMap_init_$Create$_0();
    this.h3h_1 = 8;
  }
  protoOf(KeyframesBuilder).i3h = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.g3h_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.o2(pair.a7_1, pair.b7_1);
  };
  protoOf(KeyframesBuilder).j3h = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.g3h_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.o2(pair.a7_1, pair.b7_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).k3h = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.g3h_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.m());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.n2().o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.q2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.r2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.z(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.l29(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion() {
  }
  protoOf(Companion).l3h = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.z(this_1);
    }
    return distinct(destination).m() === 1;
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_3.l3h(this$0.m3h_1);
    };
  }
  function Keyframes(name, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.m3h_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.n3h_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.o3h_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
    this.p3h_1 = 8;
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.s3h_1 = prefix;
    this.t3h_1 = init;
    this.u3h_1 = 0;
  }
  protoOf(KeyframesProvider).v3h = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.s3h_1, this.t3h_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.y3h(keyframes.n3h_1, keyframes.m3h_1);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.a2k(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.a2k(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.a2k(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.a2k(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.a2k(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.a2k(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.a2k(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.a2k(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.a2k(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.a2k(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.c3i(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.c3i(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.c3i(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.c3i(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.c3i(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.d3i(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.d3i(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.d3i(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.d3i(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.d3i(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function Companion_0() {
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.d2b(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.l3i_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.j3i_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.h3i_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.e3i_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.f3i_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.a3i_1;
    var destination = LinkedHashMap_init_$Create$_0();
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      var key = element.q2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.y2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.o2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.z(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(destination.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.n2().o();
    while (tmp0_iterator_0.c1()) {
      var element_0 = tmp0_iterator_0.e1();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.q2();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.r2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.o();
      if (!iterator.c1())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.e1();
      while (iterator.c1()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.e1();
        accumulator = acc.r3i(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.o2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.n2().o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.r2();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.n3i_1)(attrsScope);
        if (attrsScope.x2e_1.t()) {
          break $l$block;
        }
        // Inline function 'kotlin.error' call
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = "ComponentStyle declarations cannot contain Modifiers that specify attributes. Please move Modifiers associated with attributes to the ComponentStyle's `extraModifiers` parameter.";
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5(value).a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5(value_0).a6(_Char___init__impl__6a9atx(10));
        this_0.z5('\tCSS rule: ');
        this_0.z5('"' + selectorName);
        if (!(cssModifier.o3i_1 == null)) {
          this_0.y5(cssModifier.o3i_1);
        }
        if (!(cssModifier.p3i_1 == null)) {
          this_0.z5(cssModifier.p3i_1);
        }
        this_0.z5('"');
        this_0.z5(' (do you declare a property called ');
        // Inline function 'kotlin.text.count' call
        var count = 0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(selectorName)) {
          var element_0 = charSequenceGet(selectorName, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>.<anonymous>' call
          if (element_0 === _Char___init__impl__6a9atx(46)) {
            count = count + 1 | 0;
          }
        }
        var isStyle = count === 1;
        var styleName = substringBefore(substringAfter(selectorName, '.'), '.');
        if (isStyle) {
          this_0.z5('`' + kebabCaseToTitleCamelCase(styleName) + 'Style`');
        } else {
          var variantPart = removePrefix(substringAfterLast(selectorName, '.'), styleName + '-');
          this_0.z5('`' + kebabCaseToTitleCamelCase(styleName + '-' + variantPart) + 'Variant`');
          this_0.z5(' or ');
          this_0.z5('`' + kebabCaseToTitleCamelCase(variantPart + '-' + styleName) + 'Variant`');
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5('?)').a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.x2e_1.l2();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, ComponentStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5(value_1).a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5(value_2).a6(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '   // Before\n   val ExampleStyle by ComponentStyle {\n       base {\n          Modifier\n              .backgroundColor(Colors.Magenta))\n              .tabIndex(0) // <-- The offending attribute modifier\n       }\n   }\n   \n   // After\n   val ExampleStyle by ComponentStyle(extraModifiers = Modifier.tabIndex(0)) {\n       base {\n           Modifier.backgroundColor(Colors.Magenta)\n       }\n   }';
        // Inline function 'kotlin.text.appendLine' call
        this_0.z5(value_3).a6(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.s2f_1.n2().o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.z29(element.q2(), element.r2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.t2f_1.n2().o();
      while (tmp0_iterator_0.c1()) {
        var element_0 = tmp0_iterator_0.e1();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.f2a(element_0.q2(), element_0.r2());
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function ComponentStyle$addStylesInto$lambda($classNames, this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.z(name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.z(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.t3i_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0;
        if (!($cssRuleKey.s3i_1 == null)) {
          // Inline function 'kotlin.apply' call
          var this_0 = $styleSheet;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>' call
          media(this_0, $cssRuleKey.s3i_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp_0 = Unit_instance;
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  protoOf(ComponentStyle).b3j = function (styleSheet, selectorName) {
    var classNames = mutableListOf([selectorName]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this, this.x3i_1), this, selectorName);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this, this.x3i_1), this, selectorName);
    var tmp = Companion_instance_5;
    var tmp0_safe_receiver = lightModifiers.y2(Companion_getInstance_4().c3j_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n3i_1;
    var tmp1_safe_receiver = darkModifiers.y2(Companion_getInstance_4().c3j_1);
    var tmp2_safe_receiver = tmp.d3j(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n3i_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(classNames, this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.l2(), darkModifiers.l2());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().c3j_1)) {
        destination.z(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.o();
    $l$loop: while (tmp3_iterator.c1()) {
      var cssRuleKey = tmp3_iterator.e1();
      var tmp_1 = Companion_instance_5;
      var tmp4_safe_receiver = lightModifiers.y2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.n3i_1;
      var tmp5_safe_receiver = darkModifiers.y2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.d3j(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.n3i_1);
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selectorName, group, ComponentStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(ComponentStyle).e3j = function (styleSheet) {
    return this.b3j(styleSheet, '.' + this.z3i_1);
  };
  protoOf(ComponentStyle).f3j = function (classSelectors) {
    return new ImmutableComponentStyle(classSelectors, this.v3i_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.v3i_1 = extraModifiers;
    this.w3i_1 = prefix;
    this.x3i_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y3i_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.w3i_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.z3i_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.a3j_1 = 0;
  }
  protoOf(ComponentStyle).g3j = function (name, extraModifiers, init) {
    return new SimpleComponentVariant(new ComponentStyle(this.z3i_1 + '-' + name, extraModifiers, null, init), this);
  };
  protoOf(ComponentStyleProvider).v3h = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.j3j_1, this.k3j_1, this.l3j_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.j3j_1 = extraModifiers;
    this.k3j_1 = prefix;
    this.l3j_1 = init;
    this.m3j_1 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.q3j_1 = colorMode;
    this.r3j_1 = 0;
  }
  protoOf(ComponentModifiers).s3j = function () {
    return this.q3j_1;
  };
  function Light(styles) {
    this.l3i_1 = styles;
    this.m3i_1 = 0;
  }
  function Dark(styles) {
    this.j3i_1 = styles;
    this.k3i_1 = 0;
  }
  function ColorAgnostic(styles) {
    this.h3i_1 = styles;
    this.i3i_1 = 0;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.e3i_1 = lightStyles;
    this.f3i_1 = darkStyles;
    this.g3i_1 = 0;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).d3j = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast_0(item, _Char___init__impl__6a9atx(46));
      destination.z(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableComponentStyle(classSelectors, extraModifiers) {
    this.w3j_1 = extraModifiers;
    this.x3j_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
    this.y3j_1 = 8;
  }
  protoOf(ImmutableComponentStyle).z3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(512683125);
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:287)');
    }
    $composer_0.y11(1050772732);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.x3j_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.a3k($composer_0, 6).d3k().ra_1.toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.z(element);
      }
    }
    $composer_0.z11();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.t()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.c3f(this.w3j_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(-1254167608);
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:456)');
    }
    var tmp = getValue(get_SilkTheme().j3k_1, _this__u8e3s4.z3i_1).z3j($composer_0, 0);
    var tmp0_safe_receiver = combine$composable(toList(variants), $composer_0, 0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3j($composer_0, 0);
    var tmp0 = tmp.c3f(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.m3k_1 = colorMode;
    this.n3k_1 = 0;
  }
  protoOf(ComponentBaseModifier).s3j = function () {
    return this.m3k_1;
  };
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return base$composable_0(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function base$composable(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$composable$lambda(init));
  }
  function base$composable_0(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$composable$lambda_0(init));
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:427)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:439)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:396)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.q3j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.t3j(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.q3j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.t3j(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function ComponentVariant() {
    this.l3k_1 = 0;
  }
  protoOf(ComponentVariant).o3k = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.q3k_1 = style;
    this.r3k_1 = baseStyle;
    this.s3k_1 = 0;
  }
  protoOf(SimpleComponentVariant).e3j = function (styleSheet) {
    return this.q3k_1.b3j(styleSheet, '.' + this.r3k_1.z3i_1 + '.' + this.q3k_1.z3i_1);
  };
  protoOf(SimpleComponentVariant).f3j = function (classSelectors) {
    return this.q3k_1.f3j(classSelectors);
  };
  protoOf(SimpleComponentVariant).z3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentVariant.kt:49)');
    }
    var tmp0 = toModifier$composable(this.q3k_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.u3k_1 = head;
    this.v3k_1 = tail;
  }
  protoOf(CompositeComponentVariant).z3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentVariant.kt:60)');
    }
    var tmp0 = this.u3k_1.z3j($composer_0, 0).c3f(this.v3k_1.z3j($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  };
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(1446826835);
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentVariant.kt:85)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.o();
      if (!iterator.c1()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.e1();
      while (iterator.c1()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine$composable.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.e1();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.o3k(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  }
  protoOf(ComponentVariantProvider).v3h = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.y3k_1.y3i_1 + '-'), '-' + this.y3k_1.y3i_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.y3k_1.g3j(name, this.z3k_1, this.a3l_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.y3k_1 = style;
    this.z3k_1 = extraModifiers;
    this.a3l_1 = init;
    this.b3l_1 = 0;
  }
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariantBase$composable(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant$composable(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariantBase$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$composable$lambda(init));
  }
  function addVariant$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(-723673224);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-723673224, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentVariant.kt:125)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:119)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function addVariantBase$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.q3j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.t3j(addVariantBase$composable$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).c3l = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.g3l();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.z(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
    this.k3l_1 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.s3l_1 = attributeSelector;
    this.t3l_1 = 0;
  }
  protoOf(OfAttributeSelector).g3l = function () {
    return this.n3l(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.y3l_1 = pseudoClass;
    this.z3l_1 = 0;
  }
  protoOf(OfPseudoClass).g3l = function () {
    return this.n3l(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).a3m = function (other) {
    return new CompositeOpen(this.d3l_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.f3m_1 = pseudoElement;
    this.g3m_1 = 0;
  }
  protoOf(OfPseudoElement).g3l = function () {
    return this.n3l(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.l3m_1 = mediaQuery;
    this.m3m_1 = attributeSelectors;
    this.n3m_1 = pseudoClasses;
    this.o3m_1 = 0;
  }
  protoOf(CompositeOpen).m3l = function () {
    return this.l3m_1;
  };
  protoOf(CompositeOpen).g3l = function () {
    return this.n3l(this.m3m_1, this.n3m_1, null);
  };
  function CssRule(target) {
    this.d3l_1 = target;
    this.e3l_1 = null;
    this.f3l_1 = 0;
  }
  protoOf(CssRule).l3l = function (createModifier) {
    this.d3l_1.u3j(this.m3l(), this.g3l(), createModifier);
  };
  protoOf(CssRule).m3l = function () {
    return this.e3l_1;
  };
  protoOf(CssRule).g3l = function () {
    return null;
  };
  protoOf(CssRule).n3l = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.z5('[' + element.s3l_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.o();
    while (tmp0_iterator_0.c1()) {
      var element_0 = tmp0_iterator_0.e1();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.z5(':' + element_0.y3l_1);
    }
    if (!(pseudoElement == null)) {
      this_0.z5('::' + pseudoElement.f3m_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_6.c3l(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_selectorSeparators() {
    _init_properties_StyleModifiers_kt__g9u6y3();
    return selectorSeparators;
  }
  var selectorSeparators;
  function Companion_3() {
    Companion_instance_7 = this;
    this.c3j_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.s3i_1 = mediaQuery;
    this.t3i_1 = suffix;
    this.u3i_1 = 0;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.s3i_1 + ', suffix=' + this.t3i_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.s3i_1 == null ? 0 : getStringHashCode(this.s3i_1);
    result = imul(result, 31) + (this.t3i_1 == null ? 0 : getStringHashCode(this.t3i_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.s3i_1 == tmp0_other_with_cast.s3i_1))
      return false;
    if (!(this.t3i_1 == tmp0_other_with_cast.t3i_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.n3i_1 = modifier;
    this.o3i_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().r(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.p3i_1 = tmp_2;
    this.q3i_1 = 0;
  }
  protoOf(CssModifier).r3i = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.o3i_1, other.o3i_1) : false) ? this.p3i_1 == other.p3i_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.n3i_1.c3f(other.n3i_1), this.o3i_1, this.p3i_1);
  };
  protoOf(CssModifier).q2 = function () {
    var tmp0_safe_receiver = this.o3i_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.p3i_1);
  };
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z3h_1 = ArrayList_init_$Create$_0();
    this.a3i_1 = this.z3h_1;
    this.b3i_1 = 0;
  }
  protoOf(StyleModifiers).t3j = function (createModifier) {
    this.z3h_1.z(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).u3j = function (mediaQuery, suffix, createModifier) {
    this.z3h_1.z(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).v3j = function (suffix, createModifier) {
    this.z3h_1.z(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).c3i = function (mediaQuery, createModifier) {
    this.z3h_1.z(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).d3i = function (_this__u8e3s4, createModifier) {
    this.c3i(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  var properties_initialized_StyleModifiers_kt_29xuzx;
  function _init_properties_StyleModifiers_kt__g9u6y3() {
    if (!properties_initialized_StyleModifiers_kt_29xuzx) {
      properties_initialized_StyleModifiers_kt_29xuzx = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
    }
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.p3m_1 = sm;
    this.q3m_1 = md;
    this.r3m_1 = lg;
    this.s3m_1 = xl;
    this.t3m_1 = 0;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.p3m_1 + ', md=' + this.q3m_1 + ', lg=' + this.r3m_1 + ', xl=' + this.s3m_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.p3m_1);
    result = imul(result, 31) + hashCode(this.q3m_1) | 0;
    result = imul(result, 31) + hashCode(this.r3m_1) | 0;
    result = imul(result, 31) + hashCode(this.s3m_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.p3m_1, tmp0_other_with_cast.p3m_1))
      return false;
    if (!equals(this.q3m_1, tmp0_other_with_cast.q3m_1))
      return false;
    if (!equals(this.r3m_1, tmp0_other_with_cast.r3m_1))
      return false;
    if (!equals(this.s3m_1, tmp0_other_with_cast.s3m_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    sm = sm === VOID ? get_cssRem(0) : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
    this.w3m_1 = 0;
  }
  function BreakpointUnitValue(width) {
    this.x3m_1 = width;
    this.y3m_1 = 0;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.a2k(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function SpanText$composable(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(1205558567);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.r12(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.r12(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.r12(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.r12(ref_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.v11()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1205558567, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable (SpanText.kt:49)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier$composable(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).c3f(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith_0(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_1.h2k());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.c3f(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$composable$lambda(ref_0, text));
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
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.q12(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.z11();
      Span$composable(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.d1h(SpanText$composable$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$composable$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.r12($this$Span) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(-539273278, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous> (SpanText.kt:58)');
        }
        registerRefScope$composable($this$Span, $ref._v, $composer_0, 14 & $dirty);
        Text$composable($text, $composer_0, 0);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function SpanText$composable$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText$composable($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w3h_1 = LinkedHashMap_init_$Create$_0();
    this.x3h_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).a2k = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.w3h_1;
    var value = this_0.y2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.v3h(name);
      this_0.o2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$composable$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.c3n($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.z3m_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a3n_1 = ArrayList_init_$Create$_0();
    this.b3n_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).c3n = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(2016651302);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.b3n_1.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.f12();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d1h(DeferredComposablesState$forEach$composable$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(2081108668);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t12(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().z1g(state)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, state));
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
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q12(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.z11();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
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
      tmp0_safe_receiver.d1h(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.c20(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.d3n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred$composable(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.f3n_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$composable$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.c3n(ComposableSingletons$DeferredKt_getInstance().f3n_1, $composer_0, 70);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function renderWithDeferred$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.g3n_1 = config;
    this.h3n_1 = stylesheet;
    this.i3n_1 = theme;
    this.j3n_1 = 8;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.u3n(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([get_DisplayIfAtLeastZeroStyle(), get_DisplayIfAtLeastSmStyle(), get_DisplayIfAtLeastMdStyle(), get_DisplayIfAtLeastLgStyle(), get_DisplayIfAtLeastXlStyle(), get_DisplayUntilZeroStyle(), get_DisplayUntilSmStyle(), get_DisplayUntilMdStyle(), get_DisplayUntilLgStyle(), get_DisplayUntilXlStyle()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      mutableTheme.u3n(element);
    }
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().y3n(SilkStyleSheet_getInstance());
    get_SilkTheme().z3n(SilkStyleSheet_getInstance());
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.o();
      while (tmp0_iterator.c1()) {
        var item = tmp0_iterator.e1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var tmp$ret$0 = '.' + item.z3i_1;
        destination.z(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.o();
      while (tmp0_iterator_0.c1()) {
        var element = tmp0_iterator_0.e1();
        if (element instanceof CSSStyleSheet) {
          destination_0.z(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = destination_0.o();
      while (tmp0_iterator_1.c1()) {
        var element_0 = tmp0_iterator_1.e1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.z(element_0);
        }
      }
      var tmp0_iterator_2 = destination_1.o();
      while (tmp0_iterator_2.c1()) {
        var element_1 = tmp0_iterator_2.e1();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_3 = this_2.o();
        while (tmp0_iterator_3.c1()) {
          var element_2 = tmp0_iterator_3.e1();
          if (element_2 instanceof CSSGroupingRule) {
            destination_2.z(element_2);
          }
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_2.o();
        while (tmp0_iterator_4.c1()) {
          var element_3 = tmp0_iterator_4.e1();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          if (element_3.type === CSSRule.MEDIA_RULE) {
            destination_3.z(element_3);
          }
        }
        var tmp0_iterator_5 = destination_3.o();
        while (tmp0_iterator_5.c1()) {
          var element_4 = tmp0_iterator_5.e1();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_4.cssRules);
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_6 = this_3.o();
          while (tmp0_iterator_6.c1()) {
            var element_5 = tmp0_iterator_6.e1();
            if (element_5 instanceof CSSStyleRule) {
              destination_4.z(element_5);
            }
          }
          var tmp0_iterator_7 = destination_4.o();
          while (tmp0_iterator_7.c1()) {
            var element_6 = tmp0_iterator_7.e1();
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var selectorText = element_6.selectorText;
            var innerStyle = element_6.style;
            if (displayStyleSelectorNames.r(selectorText)) {
              var displayValue = innerStyle.getPropertyValue('display');
              innerStyle.setProperty('display', displayValue, 'important');
            }
          }
        }
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.a3o_1 = ColorMode_LIGHT_getInstance();
    this.b3o_1 = 8;
  }
  protoOf(MutableSilkConfig).c3o = function () {
    return this.a3o_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).d3o = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v3n_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.w3n_1 = LinkedHashMap_init_$Create$_0();
    this.x3n_1 = 0;
  }
  protoOf(SilkStylesheetInstance).y3h = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.w3n_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).v2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.w3n_1.o2(name, build);
  };
  protoOf(SilkStylesheetInstance).y3n = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.v3n_1.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.b3j(siteStyleSheet, element.z3i_1);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w3n_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.m());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.n2().o();
    while (tmp0_iterator_0.c1()) {
      var item = tmp0_iterator_0.e1();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.q2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.r2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.k3h(siteStyleSheet, name);
      } else {
        lightBuilder.k3h(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.k3h(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.z(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k3n_1 = LinkedHashMap_init_$Create$_0();
    this.l3n_1 = this.k3n_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.m3n_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.n3n_1 = LinkedHashMap_init_$Create$_0();
    this.o3n_1 = this.n3n_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.p3n_1 = LinkedHashSet_init_$Create$();
    this.q3n_1 = new MutablePalettes();
    this.r3n_1 = new LegacyMutableSilkPalettes(this.q3n_1);
    this.s3n_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.t3n_1 = 8;
  }
  protoOf(MutableSilkTheme).u3n = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    var it = this.l3n_1.y2(style.z3i_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.z3i_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.k3n_1;
    var key = style.z3i_1;
    this_0.o2(key, style);
  };
  protoOf(MutableSilkTheme).e3o = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.z(element);
      }
    }
    var tmp0_iterator = destination.o();
    while (tmp0_iterator.c1()) {
      var element_0 = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      var it = this.o3n_1.y2(element_0.q3k_1.z3i_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.q3k_1.z3i_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.n3n_1;
      var key = element_0.q3k_1.z3i_1;
      this_0.o2(key, element_0);
    }
  };
  protoOf(MutableSilkTheme).f3o = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.l3n_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.z3i_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).v2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.z3i_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.m3n_1.z(style.z3i_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.z3i_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.k3n_1;
    var key_0 = style.z3i_1;
    var value = new ComponentStyle(style.y3i_1, extraModifiers, style.w3i_1, init);
    this_1.o2(key_0, value);
  };
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.e3k_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.e3k_1.r3n_1;
    tmp.f3k_1 = isInterface(tmp_0, SilkPalettes) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this.e3k_1.q3n_1;
    tmp_1.g3k_1 = isInterface(tmp_2, Palettes) ? tmp_2 : THROW_CCE();
    this.h3k_1 = this.e3k_1.s3n_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.i3k_1 = LinkedHashMap_init_$Create$_0();
    this.j3k_1 = this.i3k_1;
    this.k3k_1 = 8;
  }
  protoOf(ImmutableSilkTheme).z3n = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.e3k_1.l3n_1.m2().o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames = element.e3j(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.i3k_1;
      var key = element.z3i_1;
      var value = element.f3j(classNames);
      this_0.o2(key, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.e3k_1.o3n_1.m2();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.o();
    while (tmp0_iterator_0.c1()) {
      var element_0 = tmp0_iterator_0.e1();
      if (element_0 instanceof SimpleComponentVariant) {
        destination.z(element_0);
      }
    }
    var tmp0_iterator_1 = destination.o();
    while (tmp0_iterator_1.c1()) {
      var element_1 = tmp0_iterator_1.e1();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames_0 = element_1.e3j(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_2 = this.i3k_1;
      var key_0 = element_1.q3k_1.z3i_1;
      var value_0 = element_1.f3j(classNames_0);
      this_2.o2(key_0, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling SilkApp";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    modifyComponentStyleBase$composable(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase$composable(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$composable$lambda(init));
  }
  function modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = _this__u8e3s4.l3n_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.z3i_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).v2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.z3i_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.v3i_1;
    var existingInit = style.x3i_1;
    var tmp = modifyComponentStyle$composable$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.f3o(style, tmp, modifyComponentStyle$composable$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:266)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$composable$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_modifyComponentStyle.q3j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyComponentStyleBase$composable$lambda($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.t3j(modifyComponentStyleBase$composable$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_instance;
    };
  }
  function modifyComponentStyle$composable$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous> (SilkTheme.kt:254)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).c3f($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function modifyComponentStyle$composable$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3m_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.sa_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().h3k_1.p3m_1;
        break;
      case 2:
        tmp = get_SilkTheme().h3k_1.q3m_1;
        break;
      case 3:
        tmp = get_SilkTheme().h3k_1.r3m_1;
        break;
      case 4:
        tmp = get_SilkTheme().h3k_1.s3m_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.r2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.ra_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).a3k = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1058079129, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.$get-current$$composable (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.v12(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.r2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).d3k = function () {
    var tmp;
    switch (this.sa_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).isLight_Deprecated = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).isDark_Deprecated = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).opposite_Deprecated = function () {
    var tmp;
    switch (this.sa_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).g3o = function () {
    return get_LocalColorMode().z1g(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_8.d3o().c3o());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function ColorSchemes$Monochrome$1() {
    this.h3o_1 = Companion_instance_2.b3g(15921906);
    this.i3o_1 = Companion_instance_2.b3g(15132390);
    this.j3o_1 = Companion_instance_2.b3g(13421772);
    this.k3o_1 = Companion_instance_2.b3g(11776947);
    this.l3o_1 = Companion_instance_2.b3g(10066329);
    this.m3o_1 = Companion_instance_2.b3g(8421504);
    this.n3o_1 = Companion_instance_2.b3g(6710886);
    this.o3o_1 = Companion_instance_2.b3g(5066061);
    this.p3o_1 = Companion_instance_2.b3g(3355443);
    this.q3o_1 = Companion_instance_2.b3g(1710618);
  }
  protoOf(ColorSchemes$Monochrome$1).r3o = function () {
    return this.j3o_1;
  };
  protoOf(ColorSchemes$Monochrome$1).s3o = function () {
    return this.k3o_1;
  };
  protoOf(ColorSchemes$Monochrome$1).t3o = function () {
    return this.m3o_1;
  };
  protoOf(ColorSchemes$Monochrome$1).u3o = function () {
    return this.n3o_1;
  };
  protoOf(ColorSchemes$Monochrome$1).v3o = function () {
    return this.q3o_1;
  };
  function ColorSchemes$Red$1() {
    this.w3o_1 = Companion_instance_2.b3g(16772078);
    this.x3o_1 = Companion_instance_2.b3g(16764370);
    this.y3o_1 = Companion_instance_2.b3g(15702682);
    this.z3o_1 = Companion_instance_2.b3g(15037299);
    this.a3p_1 = Companion_instance_2.b3g(15684432);
    this.b3p_1 = Companion_instance_2.b3g(16007990);
    this.c3p_1 = Companion_instance_2.b3g(15022389);
    this.d3p_1 = Companion_instance_2.b3g(13840175);
    this.e3p_1 = Companion_instance_2.b3g(12986408);
    this.f3p_1 = Companion_instance_2.b3g(12000284);
  }
  protoOf(ColorSchemes$Red$1).r3o = function () {
    return this.y3o_1;
  };
  protoOf(ColorSchemes$Red$1).s3o = function () {
    return this.z3o_1;
  };
  protoOf(ColorSchemes$Red$1).t3o = function () {
    return this.b3p_1;
  };
  protoOf(ColorSchemes$Red$1).u3o = function () {
    return this.c3p_1;
  };
  protoOf(ColorSchemes$Red$1).v3o = function () {
    return this.f3p_1;
  };
  function ColorSchemes$Pink$1() {
    this.g3p_1 = Companion_instance_2.b3g(16573676);
    this.h3p_1 = Companion_instance_2.b3g(16301008);
    this.i3p_1 = Companion_instance_2.b3g(16027569);
    this.j3p_1 = Companion_instance_2.b3g(15753874);
    this.k3p_1 = Companion_instance_2.b3g(15483002);
    this.l3p_1 = Companion_instance_2.b3g(15277667);
    this.m3p_1 = Companion_instance_2.b3g(14162784);
    this.n3p_1 = Companion_instance_2.b3g(12720219);
    this.o3p_1 = Companion_instance_2.b3g(11342935);
    this.p3p_1 = Companion_instance_2.b3g(8916559);
  }
  protoOf(ColorSchemes$Pink$1).r3o = function () {
    return this.i3p_1;
  };
  protoOf(ColorSchemes$Pink$1).s3o = function () {
    return this.j3p_1;
  };
  protoOf(ColorSchemes$Pink$1).t3o = function () {
    return this.l3p_1;
  };
  protoOf(ColorSchemes$Pink$1).u3o = function () {
    return this.m3p_1;
  };
  protoOf(ColorSchemes$Pink$1).v3o = function () {
    return this.p3p_1;
  };
  function ColorSchemes$Purple$1() {
    this.q3p_1 = Companion_instance_2.b3g(15984117);
    this.r3p_1 = Companion_instance_2.b3g(14794471);
    this.s3p_1 = Companion_instance_2.b3g(13538264);
    this.t3p_1 = Companion_instance_2.b3g(12216520);
    this.u3p_1 = Companion_instance_2.b3g(11225020);
    this.v3p_1 = Companion_instance_2.b3g(10233776);
    this.w3p_1 = Companion_instance_2.b3g(9315498);
    this.x3p_1 = Companion_instance_2.b3g(8069026);
    this.y3p_1 = Companion_instance_2.b3g(6953882);
    this.z3p_1 = Companion_instance_2.b3g(4854924);
  }
  protoOf(ColorSchemes$Purple$1).r3o = function () {
    return this.s3p_1;
  };
  protoOf(ColorSchemes$Purple$1).s3o = function () {
    return this.t3p_1;
  };
  protoOf(ColorSchemes$Purple$1).t3o = function () {
    return this.v3p_1;
  };
  protoOf(ColorSchemes$Purple$1).u3o = function () {
    return this.w3p_1;
  };
  protoOf(ColorSchemes$Purple$1).v3o = function () {
    return this.z3p_1;
  };
  function ColorSchemes$DeepPurple$1() {
    this.a3q_1 = Companion_instance_2.b3g(15591414);
    this.b3q_1 = Companion_instance_2.b3g(13747433);
    this.c3q_1 = Companion_instance_2.b3g(11771355);
    this.d3q_1 = Companion_instance_2.b3g(9795021);
    this.e3q_1 = Companion_instance_2.b3g(8280002);
    this.f3q_1 = Companion_instance_2.b3g(6765239);
    this.g3q_1 = Companion_instance_2.b3g(6174129);
    this.h3q_1 = Companion_instance_2.b3g(5320104);
    this.i3q_1 = Companion_instance_2.b3g(4532128);
    this.j3q_1 = Companion_instance_2.b3g(3218322);
  }
  protoOf(ColorSchemes$DeepPurple$1).r3o = function () {
    return this.c3q_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).s3o = function () {
    return this.d3q_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).t3o = function () {
    return this.f3q_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).u3o = function () {
    return this.g3q_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).v3o = function () {
    return this.j3q_1;
  };
  function ColorSchemes$Indigo$1() {
    this.k3q_1 = Companion_instance_2.b3g(15264502);
    this.l3q_1 = Companion_instance_2.b3g(12962537);
    this.m3q_1 = Companion_instance_2.b3g(10463450);
    this.n3q_1 = Companion_instance_2.b3g(7964363);
    this.o3q_1 = Companion_instance_2.b3g(6056896);
    this.p3q_1 = Companion_instance_2.b3g(4149685);
    this.q3q_1 = Companion_instance_2.b3g(3754411);
    this.r3q_1 = Companion_instance_2.b3g(3162015);
    this.s3q_1 = Companion_instance_2.b3g(2635155);
    this.t3q_1 = Companion_instance_2.b3g(1713022);
  }
  protoOf(ColorSchemes$Indigo$1).r3o = function () {
    return this.m3q_1;
  };
  protoOf(ColorSchemes$Indigo$1).s3o = function () {
    return this.n3q_1;
  };
  protoOf(ColorSchemes$Indigo$1).t3o = function () {
    return this.p3q_1;
  };
  protoOf(ColorSchemes$Indigo$1).u3o = function () {
    return this.q3q_1;
  };
  protoOf(ColorSchemes$Indigo$1).v3o = function () {
    return this.t3q_1;
  };
  function ColorSchemes$Blue$1() {
    this.u3q_1 = Companion_instance_2.b3g(14938877);
    this.v3q_1 = Companion_instance_2.b3g(12312315);
    this.w3q_1 = Companion_instance_2.b3g(9489145);
    this.x3q_1 = Companion_instance_2.b3g(6600182);
    this.y3q_1 = Companion_instance_2.b3g(4367861);
    this.z3q_1 = Companion_instance_2.b3g(2201331);
    this.a3r_1 = Companion_instance_2.b3g(2001125);
    this.b3r_1 = Companion_instance_2.b3g(1668818);
    this.c3r_1 = Companion_instance_2.b3g(1402304);
    this.d3r_1 = Companion_instance_2.b3g(870305);
  }
  protoOf(ColorSchemes$Blue$1).r3o = function () {
    return this.w3q_1;
  };
  protoOf(ColorSchemes$Blue$1).s3o = function () {
    return this.x3q_1;
  };
  protoOf(ColorSchemes$Blue$1).t3o = function () {
    return this.z3q_1;
  };
  protoOf(ColorSchemes$Blue$1).u3o = function () {
    return this.a3r_1;
  };
  protoOf(ColorSchemes$Blue$1).v3o = function () {
    return this.d3r_1;
  };
  function ColorSchemes$LightBlue$1() {
    this.e3r_1 = Companion_instance_2.b3g(14808574);
    this.f3r_1 = Companion_instance_2.b3g(11789820);
    this.g3r_1 = Companion_instance_2.b3g(8508666);
    this.h3r_1 = Companion_instance_2.b3g(5227511);
    this.i3r_1 = Companion_instance_2.b3g(2733814);
    this.j3r_1 = Companion_instance_2.b3g(240116);
    this.k3r_1 = Companion_instance_2.b3g(236517);
    this.l3r_1 = Companion_instance_2.b3g(166097);
    this.m3r_1 = Companion_instance_2.b3g(161725);
    this.n3r_1 = Companion_instance_2.b3g(87963);
  }
  protoOf(ColorSchemes$LightBlue$1).r3o = function () {
    return this.g3r_1;
  };
  protoOf(ColorSchemes$LightBlue$1).s3o = function () {
    return this.h3r_1;
  };
  protoOf(ColorSchemes$LightBlue$1).t3o = function () {
    return this.j3r_1;
  };
  protoOf(ColorSchemes$LightBlue$1).u3o = function () {
    return this.k3r_1;
  };
  protoOf(ColorSchemes$LightBlue$1).v3o = function () {
    return this.n3r_1;
  };
  function ColorSchemes$Cyan$1() {
    this.o3r_1 = Companion_instance_2.b3g(14743546);
    this.p3r_1 = Companion_instance_2.b3g(11725810);
    this.q3r_1 = Companion_instance_2.b3g(8445674);
    this.r3r_1 = Companion_instance_2.b3g(5099745);
    this.s3r_1 = Companion_instance_2.b3g(2541274);
    this.t3r_1 = Companion_instance_2.b3g(48340);
    this.u3r_1 = Companion_instance_2.b3g(44225);
    this.v3r_1 = Companion_instance_2.b3g(38823);
    this.w3r_1 = Companion_instance_2.b3g(33679);
    this.x3r_1 = Companion_instance_2.b3g(24676);
  }
  protoOf(ColorSchemes$Cyan$1).r3o = function () {
    return this.q3r_1;
  };
  protoOf(ColorSchemes$Cyan$1).s3o = function () {
    return this.r3r_1;
  };
  protoOf(ColorSchemes$Cyan$1).t3o = function () {
    return this.t3r_1;
  };
  protoOf(ColorSchemes$Cyan$1).u3o = function () {
    return this.u3r_1;
  };
  protoOf(ColorSchemes$Cyan$1).v3o = function () {
    return this.x3r_1;
  };
  function ColorSchemes$Teal$1() {
    this.y3r_1 = Companion_instance_2.b3g(14742257);
    this.z3r_1 = Companion_instance_2.b3g(11722715);
    this.a3s_1 = Companion_instance_2.b3g(8440772);
    this.b3s_1 = Companion_instance_2.b3g(5093036);
    this.c3s_1 = Companion_instance_2.b3g(2533018);
    this.d3s_1 = Companion_instance_2.b3g(38536);
    this.e3s_1 = Companion_instance_2.b3g(35195);
    this.f3s_1 = Companion_instance_2.b3g(31083);
    this.g3s_1 = Companion_instance_2.b3g(26972);
    this.h3s_1 = Companion_instance_2.b3g(19776);
  }
  protoOf(ColorSchemes$Teal$1).r3o = function () {
    return this.a3s_1;
  };
  protoOf(ColorSchemes$Teal$1).s3o = function () {
    return this.b3s_1;
  };
  protoOf(ColorSchemes$Teal$1).t3o = function () {
    return this.d3s_1;
  };
  protoOf(ColorSchemes$Teal$1).u3o = function () {
    return this.e3s_1;
  };
  protoOf(ColorSchemes$Teal$1).v3o = function () {
    return this.h3s_1;
  };
  function ColorSchemes$Green$1() {
    this.i3s_1 = Companion_instance_2.b3g(15267305);
    this.j3s_1 = Companion_instance_2.b3g(13166281);
    this.k3s_1 = Companion_instance_2.b3g(10868391);
    this.l3s_1 = Companion_instance_2.b3g(8505220);
    this.m3s_1 = Companion_instance_2.b3g(6732650);
    this.n3s_1 = Companion_instance_2.b3g(5025616);
    this.o3s_1 = Companion_instance_2.b3g(4431943);
    this.p3s_1 = Companion_instance_2.b3g(3706428);
    this.q3s_1 = Companion_instance_2.b3g(3046706);
    this.r3s_1 = Companion_instance_2.b3g(1793568);
  }
  protoOf(ColorSchemes$Green$1).r3o = function () {
    return this.k3s_1;
  };
  protoOf(ColorSchemes$Green$1).s3o = function () {
    return this.l3s_1;
  };
  protoOf(ColorSchemes$Green$1).t3o = function () {
    return this.n3s_1;
  };
  protoOf(ColorSchemes$Green$1).u3o = function () {
    return this.o3s_1;
  };
  protoOf(ColorSchemes$Green$1).v3o = function () {
    return this.r3s_1;
  };
  function ColorSchemes$LightGreen$1() {
    this.s3s_1 = Companion_instance_2.b3g(15857897);
    this.t3s_1 = Companion_instance_2.b3g(14478792);
    this.u3s_1 = Companion_instance_2.b3g(12968357);
    this.v3s_1 = Companion_instance_2.b3g(11457921);
    this.w3s_1 = Companion_instance_2.b3g(10275941);
    this.x3s_1 = Companion_instance_2.b3g(9159498);
    this.y3s_1 = Companion_instance_2.b3g(8172354);
    this.z3s_1 = Companion_instance_2.b3g(6856504);
    this.a3t_1 = Companion_instance_2.b3g(5606191);
    this.b3t_1 = Companion_instance_2.b3g(3369246);
  }
  protoOf(ColorSchemes$LightGreen$1).r3o = function () {
    return this.u3s_1;
  };
  protoOf(ColorSchemes$LightGreen$1).s3o = function () {
    return this.v3s_1;
  };
  protoOf(ColorSchemes$LightGreen$1).t3o = function () {
    return this.x3s_1;
  };
  protoOf(ColorSchemes$LightGreen$1).u3o = function () {
    return this.y3s_1;
  };
  protoOf(ColorSchemes$LightGreen$1).v3o = function () {
    return this.b3t_1;
  };
  function ColorSchemes$Lime$1() {
    this.c3t_1 = Companion_instance_2.b3g(16382951);
    this.d3t_1 = Companion_instance_2.b3g(15791299);
    this.e3t_1 = Companion_instance_2.b3g(15134364);
    this.f3t_1 = Companion_instance_2.b3g(14477173);
    this.g3t_1 = Companion_instance_2.b3g(13951319);
    this.h3t_1 = Companion_instance_2.b3g(13491257);
    this.i3t_1 = Companion_instance_2.b3g(12634675);
    this.j3t_1 = Companion_instance_2.b3g(11514923);
    this.k3t_1 = Companion_instance_2.b3g(10394916);
    this.l3t_1 = Companion_instance_2.b3g(8550167);
  }
  protoOf(ColorSchemes$Lime$1).r3o = function () {
    return this.e3t_1;
  };
  protoOf(ColorSchemes$Lime$1).s3o = function () {
    return this.f3t_1;
  };
  protoOf(ColorSchemes$Lime$1).t3o = function () {
    return this.h3t_1;
  };
  protoOf(ColorSchemes$Lime$1).u3o = function () {
    return this.i3t_1;
  };
  protoOf(ColorSchemes$Lime$1).v3o = function () {
    return this.l3t_1;
  };
  function ColorSchemes$Yellow$1() {
    this.m3t_1 = Companion_instance_2.b3g(16776679);
    this.n3t_1 = Companion_instance_2.b3g(16775620);
    this.o3t_1 = Companion_instance_2.b3g(16774557);
    this.p3t_1 = Companion_instance_2.b3g(16773494);
    this.q3t_1 = Companion_instance_2.b3g(16772696);
    this.r3t_1 = Companion_instance_2.b3g(16771899);
    this.s3t_1 = Companion_instance_2.b3g(16635957);
    this.t3t_1 = Companion_instance_2.b3g(16498733);
    this.u3t_1 = Companion_instance_2.b3g(16361509);
    this.v3t_1 = Companion_instance_2.b3g(16088855);
  }
  protoOf(ColorSchemes$Yellow$1).r3o = function () {
    return this.o3t_1;
  };
  protoOf(ColorSchemes$Yellow$1).s3o = function () {
    return this.p3t_1;
  };
  protoOf(ColorSchemes$Yellow$1).t3o = function () {
    return this.r3t_1;
  };
  protoOf(ColorSchemes$Yellow$1).u3o = function () {
    return this.s3t_1;
  };
  protoOf(ColorSchemes$Yellow$1).v3o = function () {
    return this.v3t_1;
  };
  function ColorSchemes$Amber$1() {
    this.w3t_1 = Companion_instance_2.b3g(16775393);
    this.x3t_1 = Companion_instance_2.b3g(16772275);
    this.y3t_1 = Companion_instance_2.b3g(16769154);
    this.z3t_1 = Companion_instance_2.b3g(16766287);
    this.a3u_1 = Companion_instance_2.b3g(16763432);
    this.b3u_1 = Companion_instance_2.b3g(16761095);
    this.c3u_1 = Companion_instance_2.b3g(16757504);
    this.d3u_1 = Companion_instance_2.b3g(16752640);
    this.e3u_1 = Companion_instance_2.b3g(16748288);
    this.f3u_1 = Companion_instance_2.b3g(16740096);
  }
  protoOf(ColorSchemes$Amber$1).r3o = function () {
    return this.y3t_1;
  };
  protoOf(ColorSchemes$Amber$1).s3o = function () {
    return this.z3t_1;
  };
  protoOf(ColorSchemes$Amber$1).t3o = function () {
    return this.b3u_1;
  };
  protoOf(ColorSchemes$Amber$1).u3o = function () {
    return this.c3u_1;
  };
  protoOf(ColorSchemes$Amber$1).v3o = function () {
    return this.f3u_1;
  };
  function ColorSchemes$Orange$1() {
    this.g3u_1 = Companion_instance_2.b3g(16774112);
    this.h3u_1 = Companion_instance_2.b3g(16769202);
    this.i3u_1 = Companion_instance_2.b3g(16764032);
    this.j3u_1 = Companion_instance_2.b3g(16758605);
    this.k3u_1 = Companion_instance_2.b3g(16754470);
    this.l3u_1 = Companion_instance_2.b3g(16750592);
    this.m3u_1 = Companion_instance_2.b3g(16485376);
    this.n3u_1 = Companion_instance_2.b3g(16088064);
    this.o3u_1 = Companion_instance_2.b3g(15690752);
    this.p3u_1 = Companion_instance_2.b3g(15094016);
  }
  protoOf(ColorSchemes$Orange$1).r3o = function () {
    return this.i3u_1;
  };
  protoOf(ColorSchemes$Orange$1).s3o = function () {
    return this.j3u_1;
  };
  protoOf(ColorSchemes$Orange$1).t3o = function () {
    return this.l3u_1;
  };
  protoOf(ColorSchemes$Orange$1).u3o = function () {
    return this.m3u_1;
  };
  protoOf(ColorSchemes$Orange$1).v3o = function () {
    return this.p3u_1;
  };
  function ColorSchemes$DeepOrange$1() {
    this.q3u_1 = Companion_instance_2.b3g(16509415);
    this.r3u_1 = Companion_instance_2.b3g(16764092);
    this.s3u_1 = Companion_instance_2.b3g(16755601);
    this.t3u_1 = Companion_instance_2.b3g(16747109);
    this.u3u_1 = Companion_instance_2.b3g(16740419);
    this.v3u_1 = Companion_instance_2.b3g(16733986);
    this.w3u_1 = Companion_instance_2.b3g(16011550);
    this.x3u_1 = Companion_instance_2.b3g(15092249);
    this.y3u_1 = Companion_instance_2.b3g(14172949);
    this.z3u_1 = Companion_instance_2.b3g(12531212);
  }
  protoOf(ColorSchemes$DeepOrange$1).r3o = function () {
    return this.s3u_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).s3o = function () {
    return this.t3u_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).t3o = function () {
    return this.v3u_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).u3o = function () {
    return this.w3u_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).v3o = function () {
    return this.z3u_1;
  };
  function ColorSchemes$Brown$1() {
    this.a3v_1 = Companion_instance_2.b3g(15723497);
    this.b3v_1 = Companion_instance_2.b3g(14142664);
    this.c3v_1 = Companion_instance_2.b3g(12364452);
    this.d3v_1 = Companion_instance_2.b3g(10586239);
    this.e3v_1 = Companion_instance_2.b3g(9268835);
    this.f3v_1 = Companion_instance_2.b3g(7951688);
    this.g3v_1 = Companion_instance_2.b3g(7162945);
    this.h3v_1 = Companion_instance_2.b3g(6111287);
    this.i3v_1 = Companion_instance_2.b3g(5125166);
    this.j3v_1 = Companion_instance_2.b3g(4073251);
  }
  protoOf(ColorSchemes$Brown$1).r3o = function () {
    return this.c3v_1;
  };
  protoOf(ColorSchemes$Brown$1).s3o = function () {
    return this.d3v_1;
  };
  protoOf(ColorSchemes$Brown$1).t3o = function () {
    return this.f3v_1;
  };
  protoOf(ColorSchemes$Brown$1).u3o = function () {
    return this.g3v_1;
  };
  protoOf(ColorSchemes$Brown$1).v3o = function () {
    return this.j3v_1;
  };
  function ColorSchemes$Gray$1() {
    this.k3v_1 = Companion_instance_2.b3g(16448250);
    this.l3v_1 = Companion_instance_2.b3g(16119285);
    this.m3v_1 = Companion_instance_2.b3g(15658734);
    this.n3v_1 = Companion_instance_2.b3g(14737632);
    this.o3v_1 = Companion_instance_2.b3g(12434877);
    this.p3v_1 = Companion_instance_2.b3g(10395294);
    this.q3v_1 = Companion_instance_2.b3g(7697781);
    this.r3v_1 = Companion_instance_2.b3g(6381921);
    this.s3v_1 = Companion_instance_2.b3g(4342338);
    this.t3v_1 = Companion_instance_2.b3g(2171169);
  }
  protoOf(ColorSchemes$Gray$1).r3o = function () {
    return this.m3v_1;
  };
  protoOf(ColorSchemes$Gray$1).s3o = function () {
    return this.n3v_1;
  };
  protoOf(ColorSchemes$Gray$1).t3o = function () {
    return this.p3v_1;
  };
  protoOf(ColorSchemes$Gray$1).u3o = function () {
    return this.q3v_1;
  };
  protoOf(ColorSchemes$Gray$1).v3o = function () {
    return this.t3v_1;
  };
  function ColorSchemes$BlueGray$1() {
    this.u3v_1 = Companion_instance_2.b3g(15527921);
    this.v3v_1 = Companion_instance_2.b3g(13621468);
    this.w3v_1 = Companion_instance_2.b3g(11583173);
    this.x3v_1 = Companion_instance_2.b3g(9479342);
    this.y3v_1 = Companion_instance_2.b3g(7901340);
    this.z3v_1 = Companion_instance_2.b3g(6323595);
    this.a3w_1 = Companion_instance_2.b3g(5533306);
    this.b3w_1 = Companion_instance_2.b3g(4545124);
    this.c3w_1 = Companion_instance_2.b3g(3622735);
    this.d3w_1 = Companion_instance_2.b3g(2503224);
  }
  protoOf(ColorSchemes$BlueGray$1).r3o = function () {
    return this.w3v_1;
  };
  protoOf(ColorSchemes$BlueGray$1).s3o = function () {
    return this.x3v_1;
  };
  protoOf(ColorSchemes$BlueGray$1).t3o = function () {
    return this.z3v_1;
  };
  protoOf(ColorSchemes$BlueGray$1).u3o = function () {
    return this.a3w_1;
  };
  protoOf(ColorSchemes$BlueGray$1).v3o = function () {
    return this.d3w_1;
  };
  function ColorSchemes() {
    ColorSchemes_instance = this;
    var tmp = this;
    tmp.e3w_1 = new ColorSchemes$Monochrome$1();
    var tmp_0 = this;
    tmp_0.f3w_1 = new ColorSchemes$Red$1();
    var tmp_1 = this;
    tmp_1.g3w_1 = new ColorSchemes$Pink$1();
    var tmp_2 = this;
    tmp_2.h3w_1 = new ColorSchemes$Purple$1();
    var tmp_3 = this;
    tmp_3.i3w_1 = new ColorSchemes$DeepPurple$1();
    var tmp_4 = this;
    tmp_4.j3w_1 = new ColorSchemes$Indigo$1();
    var tmp_5 = this;
    tmp_5.k3w_1 = new ColorSchemes$Blue$1();
    var tmp_6 = this;
    tmp_6.l3w_1 = new ColorSchemes$LightBlue$1();
    var tmp_7 = this;
    tmp_7.m3w_1 = new ColorSchemes$Cyan$1();
    var tmp_8 = this;
    tmp_8.n3w_1 = new ColorSchemes$Teal$1();
    var tmp_9 = this;
    tmp_9.o3w_1 = new ColorSchemes$Green$1();
    var tmp_10 = this;
    tmp_10.p3w_1 = new ColorSchemes$LightGreen$1();
    var tmp_11 = this;
    tmp_11.q3w_1 = new ColorSchemes$Lime$1();
    var tmp_12 = this;
    tmp_12.r3w_1 = new ColorSchemes$Yellow$1();
    var tmp_13 = this;
    tmp_13.s3w_1 = new ColorSchemes$Amber$1();
    var tmp_14 = this;
    tmp_14.t3w_1 = new ColorSchemes$Orange$1();
    var tmp_15 = this;
    tmp_15.u3w_1 = new ColorSchemes$DeepOrange$1();
    var tmp_16 = this;
    tmp_16.v3w_1 = new ColorSchemes$Brown$1();
    var tmp_17 = this;
    tmp_17.w3w_1 = new ColorSchemes$Gray$1();
    var tmp_18 = this;
    tmp_18.x3w_1 = new ColorSchemes$BlueGray$1();
    this.y3w_1 = 0;
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  function LegacyMutableSilkPalettes(palettes, light, dark) {
    light = light === VOID ? new LegacyMutableSilkPalette(palettes.z3w_1) : light;
    dark = dark === VOID ? new LegacyMutableSilkPalette(palettes.a3x_1) : dark;
    this.c3x_1 = light;
    this.d3x_1 = dark;
    this.e3x_1 = 0;
  }
  function SilkPalettes() {
  }
  function PaletteEntry($outer) {
    this.f3x_1 = $outer;
  }
  function Button($outer) {
    this.k3x_1 = $outer;
    this.g3x_1 = new PaletteEntry(this.k3x_1);
    this.h3x_1 = new PaletteEntry(this.k3x_1);
    this.i3x_1 = new PaletteEntry(this.k3x_1);
    this.j3x_1 = new PaletteEntry(this.k3x_1);
  }
  function Checkbox($outer) {
    this.o3x_1 = $outer;
    this.l3x_1 = new PaletteEntry(this.o3x_1);
    this.m3x_1 = new PaletteEntry(this.o3x_1);
    this.n3x_1 = new PaletteEntry(this.o3x_1);
  }
  function Input($outer) {
    this.u3x_1 = $outer;
    this.p3x_1 = new PaletteEntry(this.u3x_1);
    this.q3x_1 = new PaletteEntry(this.u3x_1);
    this.r3x_1 = new PaletteEntry(this.u3x_1);
    this.s3x_1 = new PaletteEntry(this.u3x_1);
    this.t3x_1 = new PaletteEntry(this.u3x_1);
  }
  function Link($outer) {
    this.x3x_1 = $outer;
    this.v3x_1 = new PaletteEntry(this.x3x_1);
    this.w3x_1 = new PaletteEntry(this.x3x_1);
  }
  function Switch($outer) {
    this.b3y_1 = $outer;
    this.y3x_1 = new PaletteEntry(this.b3y_1);
    this.z3x_1 = new PaletteEntry(this.b3y_1);
    this.a3y_1 = new PaletteEntry(this.b3y_1);
  }
  function Tab($outer) {
    this.k3y_1 = $outer;
    this.c3y_1 = new PaletteEntry(this.k3y_1);
    this.d3y_1 = new PaletteEntry(this.k3y_1);
    this.e3y_1 = new PaletteEntry(this.k3y_1);
    this.f3y_1 = new PaletteEntry(this.k3y_1);
    this.g3y_1 = new PaletteEntry(this.k3y_1);
    this.h3y_1 = new PaletteEntry(this.k3y_1);
    this.i3y_1 = new PaletteEntry(this.k3y_1);
    this.j3y_1 = new PaletteEntry(this.k3y_1);
  }
  function Tooltip($outer) {
    this.n3y_1 = $outer;
    this.l3y_1 = new PaletteEntry(this.n3y_1);
    this.m3y_1 = new PaletteEntry(this.n3y_1);
  }
  function LegacyMutableSilkPalette(delegatePalette) {
    this.o3y_1 = delegatePalette;
    this.p3y_1 = new Button(this);
    this.q3y_1 = new Checkbox(this);
    this.r3y_1 = new Input(this);
    this.s3y_1 = new Link(this);
    this.t3y_1 = new Switch(this);
    this.u3y_1 = new Tab(this);
    this.v3y_1 = new Tooltip(this);
    this.w3y_1 = 8;
  }
  function MutablePalettes() {
    this.z3w_1 = new MutablePalette();
    this.a3x_1 = new MutablePalette();
    this.b3x_1 = 0;
  }
  protoOf(MutablePalettes).x3y = function () {
    return this.z3w_1;
  };
  protoOf(MutablePalettes).y3y = function () {
    return this.a3x_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.b3z_1 = palette;
    this.c3z_1 = prefix;
    this.d3z_1 = 8;
  }
  protoOf(EntryDelegate).a2k = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.c3z_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.b3z_1.e3z_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).g3z = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.b3z_1.e3z_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.c3z_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.o2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.h3z_1 = palette;
    this.i3z_1 = groupName;
    this.j3z_1 = 8;
  }
  protoOf(ColorGroup).k3z = function () {
    return new EntryDelegate(this.h3z_1, this.i3z_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e3z_1 = LinkedHashMap_init_$Create$_0();
    this.f3z_1 = 8;
  }
  protoOf(MutablePalette).z31 = function (key) {
    return this.e3z_1.y2(key);
  };
  protoOf(MutablePalette).l3z = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.e3z_1.o2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().g3k_1.z3y(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.m3z();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.n3z_1 = topLeft;
    this.o3z_1 = botRight;
    this.p3z_1 = cornerRadius;
    this.q3z_1 = 0;
  }
  protoOf(RectF).m3z = function () {
    var tmp;
    if ((((!(this.n3z_1.a7_1 === 0.0) ? true : !(this.n3z_1.b7_1 === 0.0)) ? true : !(this.o3z_1.a7_1 === 100.0)) ? true : !(this.o3z_1.b7_1 === 100.0)) ? true : !equals(this.p3z_1, get_px(0))) {
      tmp = new InsetPath(this.n3z_1, this.o3z_1, this.p3z_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
    this.r3z_1 = 0;
  }
  protoOf(Path).t3z = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).u3z = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.a7_1) + '% ' + toString(_this__u8e3s4.b7_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.a7_1, 100.0 - _this__u8e3s4.b7_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.w3z_1 = topLeft;
    this.x3z_1 = roundness;
    this.y3z_1 = from100(botRight);
    this.z3z_1 = 0;
  }
  protoOf(InsetPath).s3z = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.x3z_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.w3z_1.a7_1;
    var top = this.w3z_1.b7_1;
    var right = this.y3z_1.a7_1;
    var bottom = this.y3z_1.b7_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.t3z(left) : (left === right ? top === bottom : false) ? this.u3z(to(top, left)) : this.t3z(top) + ' ' + this.t3z(right) + ' ' + this.t3z(bottom) + ' ' + this.t3z(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.z29('clip-path', $path.s3z());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).z3y = get;
  protoOf(MutablePalette).a3z = getValue_0;
  //endregion
  //region block: init
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_8 = new Companion_4();
  _SilkTheme = null;
  Companion_instance_9 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = get_entries;
  _.$_$.d = ComponentStyle$composable;
  _.$_$.e = ComponentStyle_0;
  _.$_$.f = get_active;
  _.$_$.g = addVariantBase;
  _.$_$.h = addVariant;
  _.$_$.i = get_ariaDisabled;
  _.$_$.j = get_ariaInvalid;
  _.$_$.k = base$composable;
  _.$_$.l = base;
  _.$_$.m = base_0;
  _.$_$.n = get_disabled;
  _.$_$.o = get_focusVisible;
  _.$_$.p = get_hover;
  _.$_$.q = get_link;
  _.$_$.r = not;
  _.$_$.s = get_placeholder;
  _.$_$.t = toModifier$composable;
  _.$_$.u = get_visited;
  _.$_$.v = SpanText$composable;
  _.$_$.w = renderWithDeferred$composable;
  _.$_$.x = set_additionalSilkInitialization;
  _.$_$.y = ColorGroup;
  _.$_$.z = MutablePalette;
  _.$_$.a1 = toPalette;
  _.$_$.b1 = suffixedWith;
  _.$_$.c1 = clip;
  _.$_$.d1 = modifyComponentStyleBase;
  _.$_$.e1 = prepareSilkFoundation$composable;
  _.$_$.f1 = RectF_init_$Create$_0;
  _.$_$.g1 = Companion_instance_4;
  _.$_$.h1 = Companion_instance_9;
  _.$_$.i1 = ColorSchemes_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
