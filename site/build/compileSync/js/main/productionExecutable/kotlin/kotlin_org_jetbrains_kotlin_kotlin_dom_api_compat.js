(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var toSet = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var isCharSequence = kotlin_kotlin.$_$.p9;
  var trim = kotlin_kotlin.$_$.uc;
  var toString = kotlin_kotlin.$_$.ma;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var joinToString = kotlin_kotlin.$_$.j6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var joinTo = kotlin_kotlin.$_$.l6;
  //endregion
  //region block: pre-declaration
  //endregion
  function hasClass(_this__u8e3s4, cssClass) {
    // Inline function 'kotlin.text.matches' call
    var this_0 = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var this_1 = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    return Regex_init_$Create$(this_1).k9(this_0);
  }
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var this_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_2 = Regex_init_$Create$('\\s+').n9(this_1, 0);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_2.o();
      while (tmp0_iterator.c1()) {
        var element_0 = tmp0_iterator.e1();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.r(element_0)) {
          destination.z(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      if (!hasClass(_this__u8e3s4, element)) {
        destination.z(element);
      }
    }
    var missingClasses = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.t()) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      this_1.z5(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        this_1.z5(' ');
      }
      joinTo(missingClasses, this_1, ' ');
      _this__u8e3s4.className = this_1.toString();
      return true;
    }
    return false;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = hasClass;
  _.$_$.c = removeClass;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
