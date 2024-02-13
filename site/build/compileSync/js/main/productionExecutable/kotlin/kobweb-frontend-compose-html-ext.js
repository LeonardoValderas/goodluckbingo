(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ha;
  var objectCreate = kotlin_kotlin.$_$.fa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var equals = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var classMeta = kotlin_kotlin.$_$.y8;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var VOID = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var toString = kotlin_kotlin.$_$.ma;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var copyToArray = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var joinToString = kotlin_kotlin.$_$.k6;
  var lastOrNull = kotlin_kotlin.$_$.p6;
  var get_lastIndex = kotlin_kotlin.$_$.n6;
  var joinToString_0 = kotlin_kotlin.$_$.j6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var listOf = kotlin_kotlin.$_$.s6;
  var emptyList = kotlin_kotlin.$_$.w5;
  var addAll = kotlin_kotlin.$_$.e5;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var listOfNotNull = kotlin_kotlin.$_$.r6;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var isNumber = kotlin_kotlin.$_$.v9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.vb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var charSequenceGet = kotlin_kotlin.$_$.v8;
  var isWhitespace = kotlin_kotlin.$_$.rb;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var toList = kotlin_kotlin.$_$.n7;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Appearance, 'Appearance', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.w2e_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x2e_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.y2e_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.z2e_1 = LinkedHashSet_init_$Create$();
    this.a2f_1 = null;
    this.b2f_1 = 8;
  }
  protoOf(ComparableAttrsScope).v21 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.x2e_1.o2(attr, value);
    this.w2e_1.v21(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).x21 = function (classes) {
    this.y2e_1.f1(classes);
  };
  protoOf(ComparableAttrsScope).b22 = function (listener) {
    this.z2e_1.z(listener);
    this.w2e_1.b22(listener);
  };
  protoOf(ComparableAttrsScope).w21 = function (builder) {
    var tmp0_elvis_lhs = this.a2f_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.a2f_1 = style;
    this.w2e_1.w21(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.x2e_1, this.x2e_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.y2e_1, this.y2e_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.z2e_1, this.z2e_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.a2f_1, this.a2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.x2e_1);
    result = imul(31, result) + hashCode(this.y2e_1) | 0;
    result = imul(31, result) + hashCode(this.z2e_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.a2f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).v21 = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).x21 = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).b22 = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).w21 = function (builder) {
    return Unit_instance;
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.v21('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.v21('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.e2a('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.e2f_1 = 0;
  }
  function Companion() {
  }
  protoOf(Companion).f2f = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).g2f = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).h2f = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.i2f_1 = value;
    this.j2f_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.i2f_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.e2a('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.m2f_1 = 0;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).f2f = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).g2f = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).h2f = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.n2f_1 = value;
    this.o2f_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.n2f_1;
  };
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.e2a('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.z29('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.e2a('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.e2a('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.e2a('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.e2a('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).p2f = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.q2f_1 = value;
    this.r2f_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.q2f_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      this_0.z5('inset');
      this_0.a6(_Char___init__impl__6a9atx(32));
    }
    this_0.y5(offsetX);
    this_0.a6(_Char___init__impl__6a9atx(32));
    this_0.y5(offsetY);
    if (!(blurRadius == null)) {
      this_0.a6(_Char___init__impl__6a9atx(32));
      this_0.y5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.a6(_Char___init__impl__6a9atx(32));
        this_0.a6(_Char___init__impl__6a9atx(48));
      }
      this_0.a6(_Char___init__impl__6a9atx(32));
      this_0.y5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.a6(_Char___init__impl__6a9atx(32));
      this_0.y5(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.z29('box-shadow', value);
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s2f_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.t2f_1 = LinkedHashMap_init_$Create$();
    this.u2f_1 = 0;
  }
  protoOf(ComparableStyleScope).e2a = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.s2f_1;
    var value_0 = toString(value);
    this_0.o2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).g2a = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.t2f_1;
    var value_0 = toString(value);
    this_0.o2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.s2f_1, other.s2f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.t2f_1, other.t2f_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.s2f_1);
    result = imul(31, result) + hashCode(this.t2f_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.s2f_1.t()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.t2f_1.t();
    }
    return tmp;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).v2f = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).w2f = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Cursor(value) {
    this.x2f_1 = value;
    this.y2f_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.x2f_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.e2a('cursor', cursor);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).z2f = function () {
    return new Appearance('none');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Appearance(value) {
    this.a2g_1 = value;
    this.b2g_1 = 0;
  }
  protoOf(Appearance).toString = function () {
    return this.a2g_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.e2a('appearance', appearance);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).c2g = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_4).d2g = function () {
    return new FontWeight('600');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function FontWeight(value) {
    this.e2g_1 = value;
    this.f2g_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.e2g_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.e2a('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.i2g_1 = 0;
  }
  protoOf(GridTrackBuilder).j2g = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.k2g_1;
    var repeatTracks = copyToArray(this_1);
    this.k2g_1.z(Companion_instance_7.m2g(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2g_1 = ArrayList_init_$Create$();
    this.l2g_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).n2g = function (track) {
    this.k2g_1.z(track);
  };
  protoOf(GridTrackBuilderInRepeat).o2g = function (value) {
    return this.n2g(Companion_instance_6.r2g(value));
  };
  protoOf(GridTrackBuilderInRepeat).p2g = function (min, max) {
    return this.n2g(Companion_instance_6.s2g(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).q2g = function (min, max) {
    return this.p2g(Companion_instance_6.t2g(min), Companion_instance_6.r2g(max));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.k2g_1));
  }
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.x2g_1 = min;
    this.y2g_1 = max;
    this.z2g_1 = 0;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
    this.d2h_1 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.h2h_1 = 0;
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
    this.m2h_1 = 0;
  }
  function Companion_5() {
  }
  protoOf(Companion_5).t2g = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).r2g = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).s2g = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
    this.r2h_1 = 0;
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
    this.u2h_1 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.x2h_1 = entries;
    this.y2h_1 = 0;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.b2i_1 = names;
    this.c2i_1 = 0;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).m2g = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function GridEntry(value) {
    this.d2i_1 = value;
    this.e2i_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.d2i_1;
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function toTrackListString_0(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.b2i_1;
        var elements = element.b2i_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.w(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.z(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.x2h_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.z(element_0);
              }
            }
            var tmp_0;
            if (destination_0.t()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.t()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.o();
    while (tmp0_iterator.c1()) {
      var element_2 = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.x2g_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.y2g_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              }
            }
          }
        }
      }
    }
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.j2i(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.o2i_1 = 0;
  }
  function GridBuilderInAuto() {
    this.f2i_1 = null;
    this.g2i_1 = null;
    this.h2i_1 = null;
    this.i2i_1 = 8;
  }
  protoOf(GridBuilderInAuto).p2i = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.f2i_1 = this_0.k2g_1;
  };
  protoOf(GridBuilderInAuto).q2i = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.g2i_1 = this_0.k2g_1;
  };
  protoOf(GridBuilderInAuto).j2i = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.f2i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.g2i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.h2i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.f2i_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.g2i_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  function Companion_7() {
  }
  protoOf(Companion_7).r2i = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    this.s2i_1 = value;
    this.t2i_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.s2i_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.e2a('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.z29('padding-inline', joinToString(value, ' '));
  }
  function Companion_8() {
  }
  protoOf(Companion_8).z2f = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    this.u2i_1 = value;
    this.v2i_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.u2i_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.e2a('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.e2a('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.e2a('list-style-image', image);
    }
  }
  function Companion_9() {
  }
  protoOf(Companion_9).w2i = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    this.x2i_1 = value;
    this.y2i_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.x2i_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.e2a('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.e2a('outline', this_0);
  }
  function CSSOutline() {
    this.z2i_1 = null;
    this.a2j_1 = null;
    this.b2j_1 = null;
    this.c2j_1 = 8;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.z2i_1, other.z2i_1) ? equals(this.a2j_1, other.a2j_1) : false) ? equals(this.b2j_1, other.b2j_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.b2j_1, this.a2j_1, this.z2i_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.z2i_1 = $width;
      $this$outline.a2j_1 = $style;
      $this$outline.b2j_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_10() {
  }
  protoOf(Companion_10).d2j = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_10).e2j = function () {
    return new Overflow('auto');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Overflow(value) {
    this.f2j_1 = value;
    this.g2j_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.f2j_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.e2a('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.e2a('overflow', overflow);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
    this.k2j_1 = 0;
  }
  protoOf(PropertyValue).l2j = function (fallback) {
    return this.p2j(fallback);
  };
  protoOf(PropertyValue).q2j = function (fallback) {
    return this.l2j((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
    this.v2j_1 = 0;
  }
  protoOf(NumberValue).w2j = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.p2j(tmp);
  };
  protoOf(NumberValue).q2j = function (fallback) {
    return this.w2j((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.m2j_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.n2j_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.o2j_1 = 0;
  }
  protoOf(StyleVariable).r2j = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.q2j(fallback) : $super.q2j.call(this, fallback);
  };
  protoOf(StyleVariable).p2j = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.m2j_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.n2j_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.x2j_1 = defaultFallback;
    this.y2j_1 = prefix;
    this.z2j_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).a2k = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.x2j_1, this.y2j_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.b2k_1 = defaultFallback;
    this.c2k_1 = prefix;
    this.d2k_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).a2k = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.b2k_1, this.c2k_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.e2a('--' + variable.n2j_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.z5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).h7())), '-vars'), '-variables'));
      this_0.a6(_Char___init__impl__6a9atx(45));
    }
    this_0.z5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function Companion_11() {
  }
  protoOf(Companion_11).z2f = function () {
    return new UserSelect('none');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function UserSelect(value) {
    this.e2k_1 = value;
    this.f2k_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.e2k_1;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).g2k = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_12).h2k = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function WhiteSpace(value) {
    this.i2k_1 = value;
    this.j2k_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.i2k_1;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).g2f = function () {
    return new TextAlign('start');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function TextAlign(value) {
    this.k2k_1 = value;
    this.l2k_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.k2k_1;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).m2k = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_14).z2f = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function TextDecorationLine(value) {
    this.n2k_1 = value;
    this.o2k_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.n2k_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.e2a('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.e2a('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.e2a('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.z29('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.e2a('translate', tx);
  }
  function Companion_15() {
  }
  protoOf(Companion_15).p2k = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.z(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_15).q2k = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.p2k(properties, duration, timingFunction, delay) : $super.p2k.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_17.r2k(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.s2k_1 = property;
    this.t2k_1 = duration;
    this.u2k_1 = timingFunction;
    this.v2k_1 = delay;
    this.w2k_1 = 0;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.z(this.s2k_1.toString());
    var tmp0_safe_receiver = this.t2k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.z(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.u2k_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.z(toString(tmp1_safe_receiver));
    }
    if (!(this.v2k_1 == null)) {
      if (this.t2k_1 == null) {
        this_0.z('0s');
      }
      this_0.z(toString(this.v2k_1));
    }
    var tmp$ret$6 = this_0.f3();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.s2k_1);
    result = imul(result, 31) + (this.t2k_1 == null ? 0 : hashCode(this.t2k_1)) | 0;
    result = imul(result, 31) + (this.u2k_1 == null ? 0 : hashCode(this.u2k_1)) | 0;
    result = imul(result, 31) + (this.v2k_1 == null ? 0 : hashCode(this.v2k_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.s2k_1, tmp0_other_with_cast.s2k_1))
      return false;
    if (!equals(this.t2k_1, tmp0_other_with_cast.t2k_1))
      return false;
    if (!equals(this.u2k_1, tmp0_other_with_cast.u2k_1))
      return false;
    if (!equals(this.v2k_1, tmp0_other_with_cast.v2k_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.z29('transition', joinToString(transitions));
    }
  }
  function Companion_16() {
  }
  protoOf(Companion_16).r2k = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function TransitionProperty(value) {
    this.x2k_1 = value;
    this.y2k_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.x2k_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
    this.a2l_1 = 0;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).bn = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.c2l_1 = handle;
    this.d2l_1 = 0;
  }
  protoOf(Simple).e2l = function (scope, element) {
    this.c2l_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
    this.f2l_1 = 0;
  }
  function KeysToEffect(keys, refCallback) {
    this.g2l_1 = keys;
    this.h2l_1 = refCallback;
    this.i2l_1 = 8;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.g2l_1 + ', refCallback=' + this.h2l_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.g2l_1);
    result = imul(result, 31) + hashCode(this.h2l_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.g2l_1, tmp0_other_with_cast.g2l_1))
      return false;
    if (!equals(this.h2l_1, tmp0_other_with_cast.h2l_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j2l_1 = ArrayList_init_$Create$();
    this.k2l_1 = 8;
  }
  protoOf(Builder).l2l = function (keys, handle) {
    this.j2l_1.z(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).m2l = function (other) {
    if (!(other == null)) {
      this.j2l_1.f1(other.n2l_1);
    }
  };
  protoOf(Builder).f3 = function () {
    return new ElementRefScope(this.j2l_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.n2l_1 = keyedCallbacks;
    this.o2l_1 = 8;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.n2l_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.n2l_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.n2l_1, tmp0_other_with_cast.n2l_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(1682539725);
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    $composer_0.y11(217452019);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.p12();
    var tmp;
    if (false ? true : it === Companion_getInstance().s11_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda;
      $composer_0.q12(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.z11();
    registerRefScope$composable_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 384 | 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(886891411);
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.z11();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.n2l_1.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.g2l_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.f3();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($keyedCallback, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.h2l_1.e2l($this$DisposableEffect, $transform($this_registerRefScope$composable.r28($this$DisposableEffect)));
    };
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).y21 = classes;
  protoOf(ComparableAttrsScope).z21 = id;
  protoOf(ComparableAttrsScope).a22 = tabIndex;
  protoOf(ComparableAttrsScope).c22 = onClick;
  protoOf(DummyAttrsScope).y21 = classes;
  protoOf(DummyAttrsScope).z21 = id;
  protoOf(DummyAttrsScope).a22 = tabIndex;
  protoOf(DummyAttrsScope).c22 = onClick;
  protoOf(ComparableStyleScope).z29 = property;
  protoOf(ComparableStyleScope).a2a = property_0;
  protoOf(ComparableStyleScope).f2a = variable;
  protoOf(CalcScopeInstance).z2k = unaryMinus;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  CalcScopeInstance_instance = new CalcScopeInstance();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_3;
  _.$_$.e = StyleVariable_2;
  _.$_$.f = StyleVariable_0;
  _.$_$.g = StyleVariable_1;
  _.$_$.h = appearance;
  _.$_$.i = ariaDisabled;
  _.$_$.j = ariaHidden;
  _.$_$.k = borderBottom;
  _.$_$.l = borderColor;
  _.$_$.m = borderLeft;
  _.$_$.n = borderStyle;
  _.$_$.o = borderTop;
  _.$_$.p = borderWidth;
  _.$_$.q = boxShadow;
  _.$_$.r = boxSizing_0;
  _.$_$.s = cursor;
  _.$_$.t = fontWeight;
  _.$_$.u = gridTemplateColumns_0;
  _.$_$.v = grid;
  _.$_$.w = isNotEmpty;
  _.$_$.x = justifyItems;
  _.$_$.y = justifySelf;
  _.$_$.z = listStyle;
  _.$_$.a1 = objectFit;
  _.$_$.b1 = outline;
  _.$_$.c1 = overflowY;
  _.$_$.d1 = overflow;
  _.$_$.e1 = paddingInline;
  _.$_$.f1 = setVariable;
  _.$_$.g1 = textAlign;
  _.$_$.h1 = textDecorationLine;
  _.$_$.i1 = transition;
  _.$_$.j1 = translateX;
  _.$_$.k1 = userSelect;
  _.$_$.l1 = verticalAlign;
  _.$_$.m1 = whiteSpace;
  _.$_$.n1 = refScope;
  _.$_$.o1 = registerRefScope$composable;
  _.$_$.p1 = ComparableAttrsScope_init_$Create$;
  _.$_$.q1 = CSSTransition_init_$Create$;
  _.$_$.r1 = Companion_instance_4;
  _.$_$.s1 = Companion_instance_2;
  _.$_$.t1 = Companion_instance_16;
  _.$_$.u1 = Companion_instance_3;
  _.$_$.v1 = Companion_instance_5;
  _.$_$.w1 = Companion_instance_0;
  _.$_$.x1 = Companion_instance_1;
  _.$_$.y1 = Companion_instance_9;
  _.$_$.z1 = Companion_instance_10;
  _.$_$.a2 = Companion_instance_11;
  _.$_$.b2 = Companion_instance_14;
  _.$_$.c2 = Companion_instance_15;
  _.$_$.d2 = Companion_instance_12;
  _.$_$.e2 = Companion_instance_8;
  _.$_$.f2 = Companion_instance_13;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
