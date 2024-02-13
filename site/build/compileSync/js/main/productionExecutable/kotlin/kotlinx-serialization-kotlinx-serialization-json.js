(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var protoOf = kotlin_kotlin.$_$.ha;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var classMeta = kotlin_kotlin.$_$.y8;
  var VOID = kotlin_kotlin.$_$.g;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var equals = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var joinToString = kotlin_kotlin.$_$.j6;
  var Map = kotlin_kotlin.$_$.x4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ge;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toString = kotlin_kotlin.$_$.ma;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var List = kotlin_kotlin.$_$.v4;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var numberRangeToNumber = kotlin_kotlin.$_$.aa;
  var ClosedRange = kotlin_kotlin.$_$.na;
  var isInterface = kotlin_kotlin.$_$.t9;
  var contains = kotlin_kotlin.$_$.ra;
  var toDouble = kotlin_kotlin.$_$.lc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.w3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var lazy_0 = kotlin_kotlin.$_$.he;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.ya;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.s8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.x8;
  var coerceAtLeast = kotlin_kotlin.$_$.oa;
  var coerceAtMost = kotlin_kotlin.$_$.pa;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var emptyMap = kotlin_kotlin.$_$.x5;
  var getValue = kotlin_kotlin.$_$.f6;
  var copyOf = kotlin_kotlin.$_$.s5;
  var copyOf_0 = kotlin_kotlin.$_$.t5;
  var fillArrayVal = kotlin_kotlin.$_$.c9;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.zc;
  var invoke = kotlin_kotlin.$_$.de;
  var CoroutineImpl = kotlin_kotlin.$_$.l8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ad;
  var Unit = kotlin_kotlin.$_$.vd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var contains_0 = kotlin_kotlin.$_$.db;
  var plus = kotlin_kotlin.$_$.je;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var toLong = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException = kotlin_kotlin.$_$.ed;
  var isFinite = kotlin_kotlin.$_$.fe;
  var isFinite_0 = kotlin_kotlin.$_$.ee;
  var charSequenceGet = kotlin_kotlin.$_$.v8;
  var toUInt = kotlin_kotlin.$_$.pc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.u2;
  var toULong = kotlin_kotlin.$_$.qc;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.b3;
  var toUByte = kotlin_kotlin.$_$.oc;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.n2;
  var toUShort = kotlin_kotlin.$_$.rc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var Companion_getInstance = kotlin_kotlin.$_$.d4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.c4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.g7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g2;
  var numberToChar = kotlin_kotlin.$_$.ba;
  var equals_0 = kotlin_kotlin.$_$.lb;
  var toString_0 = kotlin_kotlin.$_$.h2;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var toByte = kotlin_kotlin.$_$.ja;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var toShort = kotlin_kotlin.$_$.la;
  var single = kotlin_kotlin.$_$.zb;
  var Char = kotlin_kotlin.$_$.yc;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var emptySet = kotlin_kotlin.$_$.y5;
  var plus_0 = kotlin_kotlin.$_$.a7;
  var toInt = kotlin_kotlin.$_$.nc;
  var toList = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.bd;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var last = kotlin_kotlin.$_$.q6;
  var removeLast = kotlin_kotlin.$_$.f7;
  var lastIndexOf = kotlin_kotlin.$_$.tb;
  var Long = kotlin_kotlin.$_$.gd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.a4;
  var numberToLong = kotlin_kotlin.$_$.ea;
  var charArray = kotlin_kotlin.$_$.u8;
  var indexOf = kotlin_kotlin.$_$.nb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.q30_1 = configuration;
    this.r30_1 = serializersModule;
    this.s30_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).e2p = function () {
    return this.r30_1;
  };
  protoOf(Json).t30 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.p2l(), null);
    var result = input.p2o(deserializer);
    lexer.g31();
    return result;
  };
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    this.h31_1 = encodeDefaults;
    this.i31_1 = ignoreUnknownKeys;
    this.j31_1 = isLenient;
    this.k31_1 = allowStructuredMapKeys;
    this.l31_1 = prettyPrint;
    this.m31_1 = explicitNulls;
    this.n31_1 = prettyPrintIndent;
    this.o31_1 = coerceInputValues;
    this.p31_1 = useArrayPolymorphism;
    this.q31_1 = classDiscriminator;
    this.r31_1 = allowSpecialFloatingPointValues;
    this.s31_1 = useAlternativeNames;
    this.t31_1 = namingStrategy;
    this.u31_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.h31_1 + ', ignoreUnknownKeys=' + this.i31_1 + ', isLenient=' + this.j31_1 + ', ' + ('allowStructuredMapKeys=' + this.k31_1 + ', prettyPrint=' + this.l31_1 + ', explicitNulls=' + this.m31_1 + ', ') + ("prettyPrintIndent='" + this.n31_1 + "', coerceInputValues=" + this.o31_1 + ', useArrayPolymorphism=' + this.p31_1 + ', ') + ("classDiscriminator='" + this.q31_1 + "', allowSpecialFloatingPointValues=" + this.r31_1 + ', useAlternativeNames=' + this.s31_1 + ', ') + ('namingStrategy=' + this.t31_1 + ', decodeEnumsCaseInsensitive=' + this.u31_1 + ')');
  };
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.q2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.r2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.a6(_Char___init__impl__6a9atx(58));
    this_0.y5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.x31_1 = content;
  }
  protoOf(JsonObject).n2 = function () {
    return this.x31_1.n2();
  };
  protoOf(JsonObject).l2 = function () {
    return this.x31_1.l2();
  };
  protoOf(JsonObject).m = function () {
    return this.x31_1.m();
  };
  protoOf(JsonObject).m2 = function () {
    return this.x31_1.m2();
  };
  protoOf(JsonObject).y31 = function (key) {
    return this.x31_1.v2(key);
  };
  protoOf(JsonObject).v2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.y31((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).z31 = function (key) {
    return this.x31_1.y2(key);
  };
  protoOf(JsonObject).y2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.z31((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).t = function () {
    return this.x31_1.t();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.x31_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.x31_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.x31_1.n2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.b32_1.r2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.a32_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b32_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).c32 = function () {
    return this.a32_1;
  };
  protoOf(JsonNull).d32 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).k2u = function (typeParamsSerializers) {
    return this.d32();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.c32();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.e32_1 = isString;
    this.f32_1 = coerceToInlineType;
    this.g32_1 = toString(body);
    if (!(this.f32_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.f32_1.a2n()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).c32 = function () {
    return this.g32_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.e32_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.g32_1);
      tmp = this_0.toString();
    } else {
      tmp = this.g32_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.e32_1 === other.e32_1))
      return false;
    if (!(this.g32_1 === other.g32_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.e32_1);
    result = imul(31, result) + getStringHashCode(this.g32_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.h32_1 = content;
  }
  protoOf(JsonArray).m = function () {
    return this.h32_1.m();
  };
  protoOf(JsonArray).i32 = function (element) {
    return this.h32_1.r(element);
  };
  protoOf(JsonArray).r = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.i32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j32 = function (elements) {
    return this.h32_1.s(elements);
  };
  protoOf(JsonArray).s = function (elements) {
    return this.j32(elements);
  };
  protoOf(JsonArray).n = function (index) {
    return this.h32_1.n(index);
  };
  protoOf(JsonArray).k32 = function (element) {
    return this.h32_1.p(element);
  };
  protoOf(JsonArray).p = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.k32(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.h32_1.t();
  };
  protoOf(JsonArray).o = function () {
    return this.h32_1.o();
  };
  protoOf(JsonArray).q = function (index) {
    return this.h32_1.q(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.h32_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.h32_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.h32_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.c32());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.c32())).l32();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.c32() + ' is not an Int');
    return result.eb();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.c32())).l32();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.c32();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.c32());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.c32();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.c2m('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.c2m('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.c2m('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.c2m('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.c2m('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().m32_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().n32_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().o32_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().p32_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().q32_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.r32_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).p2l = function () {
    return this.r32_1;
  };
  protoOf(JsonElementSerializer).q2l = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.w31();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.s32_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).p2l();
    this.t32_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).y2m = function () {
    return this.s32_1.y2m();
  };
  protoOf(JsonObjectDescriptor).z2m = function () {
    return this.s32_1.z2m();
  };
  protoOf(JsonObjectDescriptor).a2n = function () {
    return this.s32_1.a2n();
  };
  protoOf(JsonObjectDescriptor).u2m = function () {
    return this.s32_1.u2m();
  };
  protoOf(JsonObjectDescriptor).b2n = function () {
    return this.s32_1.b2n();
  };
  protoOf(JsonObjectDescriptor).c2n = function (index) {
    return this.s32_1.c2n(index);
  };
  protoOf(JsonObjectDescriptor).d2n = function (index) {
    return this.s32_1.d2n(index);
  };
  protoOf(JsonObjectDescriptor).e2n = function (name) {
    return this.s32_1.e2n(name);
  };
  protoOf(JsonObjectDescriptor).f2n = function (index) {
    return this.s32_1.f2n(index);
  };
  protoOf(JsonObjectDescriptor).g2n = function (index) {
    return this.s32_1.g2n(index);
  };
  protoOf(JsonObjectDescriptor).n2m = function () {
    return this.t32_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.p32_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).p2l = function () {
    return this.p32_1;
  };
  protoOf(JsonObjectSerializer).q2l = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).q2l(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.u32_1 = ListSerializer(JsonElementSerializer_getInstance()).p2l();
    this.v32_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).y2m = function () {
    return this.u32_1.y2m();
  };
  protoOf(JsonArrayDescriptor).z2m = function () {
    return this.u32_1.z2m();
  };
  protoOf(JsonArrayDescriptor).a2n = function () {
    return this.u32_1.a2n();
  };
  protoOf(JsonArrayDescriptor).u2m = function () {
    return this.u32_1.u2m();
  };
  protoOf(JsonArrayDescriptor).b2n = function () {
    return this.u32_1.b2n();
  };
  protoOf(JsonArrayDescriptor).c2n = function (index) {
    return this.u32_1.c2n(index);
  };
  protoOf(JsonArrayDescriptor).d2n = function (index) {
    return this.u32_1.d2n(index);
  };
  protoOf(JsonArrayDescriptor).e2n = function (name) {
    return this.u32_1.e2n(name);
  };
  protoOf(JsonArrayDescriptor).f2n = function (index) {
    return this.u32_1.f2n(index);
  };
  protoOf(JsonArrayDescriptor).g2n = function (index) {
    return this.u32_1.g2n(index);
  };
  protoOf(JsonArrayDescriptor).n2m = function () {
    return this.v32_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.q32_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).p2l = function () {
    return this.q32_1;
  };
  protoOf(JsonArraySerializer).q2l = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).q2l(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.m32_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).p2l = function () {
    return this.m32_1;
  };
  protoOf(JsonPrimitiveSerializer).q2l = function (decoder) {
    var result = asJsonDecoder(decoder).w31();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.n32_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).p2l = function () {
    return this.n32_1;
  };
  protoOf(JsonNullSerializer).q2l = function (decoder) {
    verify(decoder);
    if (decoder.c2o()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.d2o();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.o32_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).p2l = function () {
    return this.o32_1;
  };
  protoOf(JsonLiteralSerializer).q2l = function (decoder) {
    var result = asJsonDecoder(decoder).w31();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.w32_1;
    original$factory();
    return this_0.r2();
  }
  function defer$1($deferred) {
    this.w32_1 = lazy_0($deferred);
  }
  protoOf(defer$1).n2m = function () {
    return _get_original__l7ku1m(this).n2m();
  };
  protoOf(defer$1).b2n = function () {
    return _get_original__l7ku1m(this).b2n();
  };
  protoOf(defer$1).z2m = function () {
    return _get_original__l7ku1m(this).z2m();
  };
  protoOf(defer$1).f2n = function (index) {
    return _get_original__l7ku1m(this).f2n(index);
  };
  protoOf(defer$1).e2n = function (name) {
    return _get_original__l7ku1m(this).e2n(name);
  };
  protoOf(defer$1).c2n = function (index) {
    return _get_original__l7ku1m(this).c2n(index);
  };
  protoOf(defer$1).d2n = function (index) {
    return _get_original__l7ku1m(this).d2n(index);
  };
  protoOf(defer$1).g2n = function (index) {
    return _get_original__l7ku1m(this).g2n(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function readIfAbsent($this, descriptor, index) {
    $this.y32_1 = !descriptor.g2n(index) ? descriptor.d2n(index).u2m() : false;
    return $this.y32_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.x32_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.y32_1 = false;
  }
  protoOf(JsonElementMarker).x2s = function (index) {
    this.x32_1.x2s(index);
  };
  protoOf(JsonElementMarker).y2s = function () {
    return this.x32_1.y2s();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.z32('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.n2m() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.b2n() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.e2n(name);
    if (!(index === -3))
      return index;
    if (!json.q30_1.s31_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.b2n(), CLASS_getInstance()) ? json.q30_1.t31_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.b33(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.q30_1.u31_1 ? equals(descriptor.b2n(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).y2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.z2m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.c2n(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.o();
        while (tmp0_iterator.c1()) {
          var element = tmp0_iterator.e1();
          if (element instanceof JsonNames) {
            destination.z(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c33_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.f2n(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.d33(_this__u8e3s4, i, _this__u8e3s4.f2n(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.t()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.b2n(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).v2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.f2n(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.f2n(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.o2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.g33_1, 2);
    $this.e33_1 = copyOf($this.e33_1, newSize);
    $this.f33_1 = copyOf_0($this.f33_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e33_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.f33_1 = tmp_2;
    this.g33_1 = -1;
  }
  protoOf(JsonPath).h33 = function (sd) {
    this.g33_1 = this.g33_1 + 1 | 0;
    var depth = this.g33_1;
    if (depth === this.e33_1.length) {
      resize(this);
    }
    this.e33_1[depth] = sd;
  };
  protoOf(JsonPath).i33 = function (index) {
    this.f33_1[this.g33_1] = index;
  };
  protoOf(JsonPath).j33 = function (key) {
    var tmp;
    if (!(this.f33_1[this.g33_1] === -2)) {
      this.g33_1 = this.g33_1 + 1 | 0;
      tmp = this.g33_1 === this.e33_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.e33_1[this.g33_1] = key;
    this.f33_1[this.g33_1] = -2;
  };
  protoOf(JsonPath).k33 = function () {
    if (this.f33_1[this.g33_1] === -2) {
      this.e33_1[this.g33_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).l33 = function () {
    var depth = this.g33_1;
    if (this.f33_1[depth] === -2) {
      this.f33_1[depth] = -1;
      this.g33_1 = this.g33_1 - 1 | 0;
    }
    if (!(this.g33_1 === -1)) {
      this.g33_1 = this.g33_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).m33 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.z5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.g33_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.e33_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.b2n(), LIST_getInstance())) {
            if (!(this.f33_1[index] === -1)) {
              this_0.z5('[');
              this_0.y5(this.f33_1[index]);
              this_0.z5(']');
            }
          } else {
            var idx = this.f33_1[index];
            if (idx >= 0) {
              this_0.z5('.');
              this_0.z5(element.f2n(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.z5('[');
            this_0.z5("'");
            this_0.y5(element);
            this_0.z5("'");
            this_0.z5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.m33();
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.n33_1.q33(get_TC_BEGIN_OBJ());
    if ($this.n33_1.r33() === get_TC_COMMA()) {
      $this.n33_1.z32('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.n33_1.s33()) {
      var key = $this.o33_1 ? $this.n33_1.u33() : $this.n33_1.t33();
      $this.n33_1.q33(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.v33();
      // Inline function 'kotlin.collections.set' call
      result.o2(key, element);
      lastToken = $this.n33_1.w33();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.n33_1.z32('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.n33_1.q33(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.n33_1.z32('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  }
  function readArray($this) {
    var lastToken = $this.n33_1.w33();
    if ($this.n33_1.r33() === get_TC_COMMA()) {
      $this.n33_1.z32('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.n33_1.s33()) {
      var element = $this.v33();
      result.z(element);
      lastToken = $this.n33_1.w33();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.n33_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.c31_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.z32(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.n33_1.q33(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.n33_1.z32('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.o33_1 ? true : !isString) {
      tmp = $this.n33_1.u33();
    } else {
      tmp = $this.n33_1.t33();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.t34_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y34 = function ($this$$receiver, it, $completion) {
    var tmp = this.z34($this$$receiver, it, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).yh = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.y34(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 3;
            this.w34_1 = this.t34_1.n33_1.r33();
            if (this.w34_1 === get_TC_STRING()) {
              this.x34_1 = readValue(this.t34_1, true);
              this.yc_1 = 2;
              continue $sm;
            } else {
              if (this.w34_1 === get_TC_OTHER()) {
                this.x34_1 = readValue(this.t34_1, false);
                this.yc_1 = 2;
                continue $sm;
              } else {
                if (this.w34_1 === get_TC_BEGIN_OBJ()) {
                  this.yc_1 = 1;
                  suspendResult = readObject_0(this.u34_1, this.t34_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.w34_1 === get_TC_BEGIN_LIST()) {
                    this.x34_1 = readArray(this.t34_1);
                    this.yc_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.t34_1.n33_1.z32("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.x34_1 = suspendResult;
            this.yc_1 = 2;
            continue $sm;
          case 2:
            return this.x34_1;
          case 3:
            throw this.bd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.zc_1 === 3) {
          throw e;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).z34 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.t34_1, completion);
    i.u34_1 = $this$$receiver;
    i.v34_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.y34($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f34_1 = _this__u8e3s4;
    this.g34_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 5;
            var tmp_0 = this;
            tmp_0.h34_1 = this.f34_1;
            this.i34_1 = this.h34_1.n33_1.q33(get_TC_BEGIN_OBJ());
            if (this.h34_1.n33_1.r33() === get_TC_COMMA()) {
              this.h34_1.n33_1.z32('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.j34_1 = LinkedHashMap_init_$Create$();
            this.yc_1 = 1;
            continue $sm;
          case 1:
            if (!this.h34_1.n33_1.s33()) {
              this.yc_1 = 4;
              continue $sm;
            }

            this.k34_1 = this.h34_1.o33_1 ? this.h34_1.n33_1.u33() : this.h34_1.n33_1.t33();
            this.h34_1.n33_1.q33(get_TC_COLON());
            this.yc_1 = 2;
            suspendResult = this.g34_1.qh(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.j34_1;
            var key = this.k34_1;
            this_0.o2(key, element);
            this.i34_1 = this.h34_1.n33_1.w33();
            var tmp0_subject = this.i34_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.yc_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.yc_1 = 4;
                continue $sm;
              } else {
                this.h34_1.n33_1.z32('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.yc_1 = 1;
            continue $sm;
          case 4:
            if (this.i34_1 === get_TC_BEGIN_OBJ()) {
              this.h34_1.n33_1.q33(get_TC_END_OBJ());
            } else if (this.i34_1 === get_TC_COMMA()) {
              this.h34_1.n33_1.z32('Unexpected trailing comma');
            }

            return new JsonObject(this.j34_1);
          case 5:
            throw this.bd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.zc_1 === 5) {
          throw e;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.n33_1 = lexer;
    this.o33_1 = configuration.j31_1;
    this.p33_1 = 0;
  }
  protoOf(JsonTreeReader).v33 = function () {
    var token = this.n33_1.r33();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.p33_1 = this.p33_1 + 1 | 0;
      if (this.p33_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.p33_1 = this.p33_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.n33_1.z32('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.y2m().o();
    while (tmp0_iterator.c1()) {
      var annotation = tmp0_iterator.e1();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.a35_1;
    }
    return json.q30_1.q31_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.v31().q30_1.p31_1;
    }
    if (tmp) {
      return deserializer.q2l(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.p2l(), _this__u8e3s4.v31());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.w31();
    var descriptor = deserializer.p2l();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.n2m() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.z31(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c32();
    var tmp2_elvis_lhs = deserializer.e2m(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.v31();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.a33_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).b35 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a33_1;
    var value_0 = this_0.y2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.o2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.o2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).b33 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.c35(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.b35(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).c35 = function (descriptor, key) {
    var tmp0_safe_receiver = this.a33_1.y2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.y2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.d35_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.d35_1 === unknownKey) {
      _this__u8e3s4.d35_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.g2p(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.w30_1.r33() === get_TC_COMMA()) {
      $this.w30_1.z32('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.y30_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.y30_1 === -1)) {
        hasComma = $this.w30_1.f35();
      }
    } else {
      $this.w30_1.e35(get_COLON());
    }
    var tmp;
    if ($this.w30_1.s33()) {
      if (decodingKey) {
        if ($this.y30_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.w30_1;
          var condition = !hasComma;
          var position = this_0.c31_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected trailing comma';
            this_0.z32(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.w30_1;
          var condition_0 = hasComma;
          var position_0 = this_1.c31_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.z32(tmp$ret$1, position_0);
          }
        }
      }
      $this.y30_1 = $this.y30_1 + 1 | 0;
      tmp = $this.y30_1;
    } else {
      if (hasComma) {
        $this.w30_1.z32("Expected '}', but had ',' instead");
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.u30_1;
      var elementDescriptor = descriptor.d2n(index);
      var tmp;
      if (!elementDescriptor.u2m()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.w30_1.g35(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.b2n(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.u2m()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.w30_1.g35(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.w30_1.h35($this.a31_1.j31_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.w30_1.t33();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.w30_1.f35();
    while ($this.w30_1.s33()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.w30_1.e35(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.u30_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.a31_1.o31_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.w30_1.f35();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.b31_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.x2s(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.w30_1.z32('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.b31_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y2s();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.a31_1.i31_1 ? true : trySkip($this.z30_1, $this, key)) {
      $this.w30_1.j35($this.a31_1.j31_1);
    } else {
      $this.w30_1.i35(key);
    }
    return $this.w30_1.f35();
  }
  function decodeListIndex($this) {
    var hasComma = $this.w30_1.f35();
    var tmp;
    if ($this.w30_1.s33()) {
      if (!($this.y30_1 === -1) ? !hasComma : false) {
        $this.w30_1.z32('Expected end of the array or comma');
      }
      $this.y30_1 = $this.y30_1 + 1 | 0;
      tmp = $this.y30_1;
    } else {
      if (hasComma) {
        $this.w30_1.z32('Unexpected trailing comma');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.a31_1.j31_1) {
      tmp = $this.w30_1.l35();
    } else {
      tmp = $this.w30_1.k35();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.u30_1 = json;
    this.v30_1 = mode;
    this.w30_1 = lexer;
    this.x30_1 = this.u30_1.e2p();
    this.y30_1 = -1;
    this.z30_1 = discriminatorHolder;
    this.a31_1 = this.u30_1.q30_1;
    this.b31_1 = this.a31_1.m31_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).v31 = function () {
    return this.u30_1;
  };
  protoOf(StreamingJsonDecoder).e2p = function () {
    return this.x30_1;
  };
  protoOf(StreamingJsonDecoder).w31 = function () {
    return (new JsonTreeReader(this.u30_1.q30_1, this.w30_1)).v33();
  };
  protoOf(StreamingJsonDecoder).p2o = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.u30_1.q30_1.p31_1;
      }
      if (tmp) {
        return deserializer.q2l(this);
      }
      var discriminator = classDiscriminator(deserializer.p2l(), this.u30_1);
      var type = this.w30_1.m35(discriminator, this.a31_1.j31_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.e2m(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.z30_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.q2l(this);
      var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.p2m_1, plus(e.message, ' at path: ') + this.w30_1.d31_1.m33(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).q2o = function (descriptor) {
    var newMode = switchMode(this.u30_1, descriptor);
    this.w30_1.d31_1.h33(descriptor);
    this.w30_1.e35(newMode.p35_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.sa_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.u30_1, newMode, this.w30_1, descriptor, this.z30_1);
        break;
      default:
        var tmp_0;
        if (this.v30_1.equals(newMode) ? this.u30_1.q30_1.m31_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.u30_1, newMode, this.w30_1, descriptor, this.z30_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).r2o = function (descriptor) {
    if (this.u30_1.q30_1.i31_1 ? descriptor.z2m() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.w30_1.e35(this.v30_1.q35_1);
    this.w30_1.d31_1.l33();
  };
  protoOf(StreamingJsonDecoder).c2o = function () {
    var tmp;
    var tmp0_safe_receiver = this.b31_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y32_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.w30_1.r35();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).d2o = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).c2p = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.v30_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.w30_1.d31_1.k33();
    }
    var value = protoOf(AbstractDecoder).c2p.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.w30_1.d31_1.j33(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).g2p = function (descriptor) {
    var index;
    switch (this.v30_1.sa_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.v30_1.equals(WriteMode_MAP_getInstance())) {
      this.w30_1.d31_1.i33(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).e2o = function () {
    var tmp;
    if (this.a31_1.j31_1) {
      tmp = this.w30_1.t35();
    } else {
      tmp = this.w30_1.s35();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).f2o = function () {
    var value = this.w30_1.l32();
    if (!value.equals(toLong(value.pc()))) {
      this.w30_1.z32("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.pc();
  };
  protoOf(StreamingJsonDecoder).g2o = function () {
    var value = this.w30_1.l32();
    if (!value.equals(toLong(value.qc()))) {
      this.w30_1.z32("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.qc();
  };
  protoOf(StreamingJsonDecoder).h2o = function () {
    var value = this.w30_1.l32();
    if (!value.equals(toLong(value.eb()))) {
      this.w30_1.z32("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.eb();
  };
  protoOf(StreamingJsonDecoder).i2o = function () {
    return this.w30_1.l32();
  };
  protoOf(StreamingJsonDecoder).j2o = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.w30_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.u30_1.q30_1.r31_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w30_1, result);
  };
  protoOf(StreamingJsonDecoder).k2o = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.w30_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.u30_1.q30_1.r31_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w30_1, result);
  };
  protoOf(StreamingJsonDecoder).l2o = function () {
    var string = this.w30_1.u33();
    if (!(string.length === 1)) {
      this.w30_1.z32("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).m2o = function () {
    var tmp;
    if (this.a31_1.j31_1) {
      tmp = this.w30_1.l35();
    } else {
      tmp = this.w30_1.t33();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).n2o = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.w30_1, this.u30_1) : protoOf(AbstractDecoder).n2o.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.u35_1 = lexer;
    this.v35_1 = json.e2p();
  }
  protoOf(JsonDecoderForUnsignedTypes).e2p = function () {
    return this.v35_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).g2p = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).h2o = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.u35_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).i2o = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.u35_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).f2o = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.u35_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).g2o = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.u35_1;
      var input = this_0.u33();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z32("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.a2n() ? get_unsignedNumberDescriptors().r(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).p2l(), serializer_1(Companion_getInstance_0()).p2l(), serializer_2(Companion_getInstance_1()).p2l(), serializer_3(Companion_getInstance_2()).p2l()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.a6(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.s8(value, lastPos, i);
          _this__u8e3s4.z5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.s8(value, lastPos, value.length);
    } else {
      _this__u8e3s4.z5(value);
    }
    _this__u8e3s4.a6(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.b36()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.y35_1 = json;
    this.z35_1 = value;
    this.a36_1 = this.v31().q30_1;
  }
  protoOf(AbstractJsonTreeDecoder).v31 = function () {
    return this.y35_1;
  };
  protoOf(AbstractJsonTreeDecoder).r2 = function () {
    return this.z35_1;
  };
  protoOf(AbstractJsonTreeDecoder).e2p = function () {
    return this.v31().e2p();
  };
  protoOf(AbstractJsonTreeDecoder).b36 = function () {
    var tmp0_safe_receiver = this.u2y();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.c36(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).w31 = function () {
    return this.b36();
  };
  protoOf(AbstractJsonTreeDecoder).p2o = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).v2y = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).q2o = function (descriptor) {
    var currentObject = this.b36();
    var tmp0_subject = descriptor.b2n();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.v31();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.n2m() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.v31();
        var keyDescriptor = carrierDescriptor(descriptor.d2n(0), this_0.e2p());
        var keyKind = keyDescriptor.b2n();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.v31();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.n2m() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.q30_1.k31_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.v31();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.n2m() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.v31();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.n2m() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).r2o = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).c2o = function () {
    var tmp = this.b36();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).d36 = function (tag) {
    var currentElement = this.c36(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.b36()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).e36 = function (tag) {
    return !(this.c36(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).x2y = function (tag) {
    return this.e36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f36 = function (tag) {
    var value = this.d36(tag);
    if (!this.v31().q30_1.j31_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.e32_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.b36()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).y2y = function (tag) {
    return this.f36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).z2y = function (tag) {
    return this.g36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).a2z = function (tag) {
    return this.h36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).b2z = function (tag) {
    return this.i36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).c2z = function (tag) {
    return this.j36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.v31().q30_1.r31_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.b36()));
  };
  protoOf(AbstractJsonTreeDecoder).d2z = function (tag) {
    return this.k36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.v31().q30_1.r31_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.b36()));
  };
  protoOf(AbstractJsonTreeDecoder).e2z = function (tag) {
    return this.l36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m36 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.d36(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.c32());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).f2z = function (tag) {
    return this.m36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n36 = function (tag) {
    var value = this.d36(tag);
    if (!this.v31().q30_1.j31_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.e32_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.b36()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.b36()));
    return value.c32();
  };
  protoOf(AbstractJsonTreeDecoder).g2z = function (tag) {
    return this.n36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o36 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.d36(tag).c32()), this.v31()) : protoOf(NamedValueDecoder).h2z.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).h2z = function (tag, inlineDescriptor) {
    return this.o36((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).n2o = function (descriptor) {
    return !(this.u2y() == null) ? protoOf(NamedValueDecoder).n2o.call(this, descriptor) : (new JsonPrimitiveDecoder(this.v31(), this.r2())).n2o(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.v31();
      var elementDescriptor = descriptor.d2n(index);
      var tmp;
      if (!elementDescriptor.u2m()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.c36(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.b2n(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.u2m()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.c36(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.c36(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.y36_1 = (!$this.v31().q30_1.m31_1 ? !descriptor.g2n(index) : false) ? descriptor.d2n(index).u2m() : false;
    return $this.y36_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.u36_1 = value;
    this.v36_1 = polyDiscriminator;
    this.w36_1 = polyDescriptor;
    this.x36_1 = 0;
    this.y36_1 = false;
  }
  protoOf(JsonTreeDecoder).r2 = function () {
    return this.u36_1;
  };
  protoOf(JsonTreeDecoder).g2p = function (descriptor) {
    while (this.x36_1 < descriptor.z2m()) {
      var tmp1 = this.x36_1;
      this.x36_1 = tmp1 + 1 | 0;
      var name = this.p2y(descriptor, tmp1);
      var index = this.x36_1 - 1 | 0;
      this.y36_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.r2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).v2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.a36_1.o31_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).c2o = function () {
    return !this.y36_1 ? protoOf(AbstractJsonTreeDecoder).c2o.call(this) : false;
  };
  protoOf(JsonTreeDecoder).q2y = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.v31());
    var baseName = descriptor.f2n(index);
    if (strategy == null) {
      if (!this.a36_1.s31_1)
        return baseName;
      if (this.r2().l2().r(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.v31(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.r2().l2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.y2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.d33(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).c36 = function (tag) {
    return getValue(this.r2(), tag);
  };
  protoOf(JsonTreeDecoder).q2o = function (descriptor) {
    if (descriptor === this.w36_1) {
      var tmp = this.v31();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b36();
      var descriptor_0 = this.w36_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.n2m() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.v36_1, this.w36_1);
    }
    return protoOf(AbstractJsonTreeDecoder).q2o.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).r2o = function (descriptor) {
    var tmp;
    if (this.a36_1.i31_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.b2n();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.v31());
    var tmp_1;
    if (strategy == null ? !this.a36_1.s31_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.v31(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.v31()).c35(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.r2().l2().o();
    while (tmp1_iterator.c1()) {
      var key = tmp1_iterator.e1();
      if (!names.r(key) ? !(key === this.v36_1) : false) {
        throw UnknownKeyException(key, this.r2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e37_1 = value;
    this.f37_1 = this.e37_1.m();
    this.g37_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r2 = function () {
    return this.e37_1;
  };
  protoOf(JsonTreeListDecoder).q2y = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).c36 = function (tag) {
    return this.e37_1.n(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).g2p = function (descriptor) {
    while (this.g37_1 < (this.f37_1 - 1 | 0)) {
      this.g37_1 = this.g37_1 + 1 | 0;
      return this.g37_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.m37_1 = value;
    this.i2z(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).r2 = function () {
    return this.m37_1;
  };
  protoOf(JsonPrimitiveDecoder).g2p = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).c36 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.m37_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.x37_1 = value;
    this.y37_1 = toList(this.x37_1.l2());
    this.z37_1 = imul(this.y37_1.m(), 2);
    this.a38_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r2 = function () {
    return this.x37_1;
  };
  protoOf(JsonTreeMapDecoder).q2y = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.y37_1.n(i);
  };
  protoOf(JsonTreeMapDecoder).g2p = function (descriptor) {
    while (this.a38_1 < (this.z37_1 - 1 | 0)) {
      this.a38_1 = this.a38_1 + 1 | 0;
      return this.a38_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).c36 = function (tag) {
    return (this.a38_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.x37_1, tag);
  };
  protoOf(JsonTreeMapDecoder).r2o = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.p2l())).p2o(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.p35_1 = begin;
    this.q35_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.b2n();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.d2n(0), _this__u8e3s4.e2p());
          var keyKind = keyDescriptor.b2n();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.q30_1.k31_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.b2n(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.a2n()) {
      tmp = carrierDescriptor(_this__u8e3s4.d2n(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.b38(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.b38(lastPosition, currentPosition);
    var result = $this.f31_1.toString();
    $this.f31_1.x8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.e31_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.e31_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.c38(), $this.c31_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.d38(currentPosition);
    if (currentPosition === -1) {
      $this.z32('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.c38();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.c38(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.z32("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.f31_1.a6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.c31_1 = startPos;
      $this.e38();
      if (($this.c31_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.z32('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.c31_1);
    }
    $this.f31_1.a6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.z32("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.d38(start);
    if (current >= charSequenceLength($this.c38()) ? true : current === -1) {
      $this.z32('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.c38();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.z32("Expected valid boolean literal prefix, but had '" + $this.u33() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.c38()) - current | 0) < literalSuffix.length) {
      $this.z32('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.c38(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.z32("Expected valid boolean literal prefix, but had '" + $this.u33() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.c31_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.e7();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.e7();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.c31_1 = 0;
    this.d31_1 = new JsonPath();
    this.e31_1 = null;
    this.f31_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).e38 = function () {
  };
  protoOf(AbstractJsonLexer).f38 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).g31 = function () {
    var nextToken = this.w33();
    if (!(nextToken === 10)) {
      this.z32('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.c38(), this.c31_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).q33 = function (expected) {
    var token = this.w33();
    if (!(token === expected)) {
      this.g38(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).e35 = function (expected) {
    this.e38();
    var source = this.c38();
    var cpos = this.c31_1;
    $l$loop_0: while (true) {
      cpos = this.d38(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.c31_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.h38(expected);
    }
    this.c31_1 = cpos;
    this.h38(expected);
  };
  protoOf(AbstractJsonLexer).h38 = function (expected) {
    if (this.c31_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.c31_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.c31_1 = this.c31_1 - 1 | 0;
          tmp$ret$1 = this.u33();
          break $l$block;
        }finally {
          this.c31_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.i38("Expected string literal but 'null' literal was found", this.c31_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.g38(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).j38 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.c31_1 - 1 | 0 : this.c31_1;
    var s = (this.c31_1 === charSequenceLength(this.c38()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.c38(), position));
    this.z32('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).g38 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.j38(expectedToken, wasConsumed) : $super.j38.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).r33 = function () {
    var source = this.c38();
    var cpos = this.c31_1;
    $l$loop_0: while (true) {
      cpos = this.d38(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.c31_1 = cpos;
      return charToTokenClass(ch);
    }
    this.c31_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).g35 = function (doConsume) {
    var current = this.k38();
    current = this.d38(current);
    var len = charSequenceLength(this.c38()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.c38(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.c38(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.c31_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).r35 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.g35(doConsume) : $super.g35.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).k38 = function () {
    var current = this.c31_1;
    $l$loop_0: while (true) {
      current = this.d38(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.c38(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.c31_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).h35 = function (isLenient) {
    var token = this.r33();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.u33();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t33();
    }
    var string = tmp;
    this.e31_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).l38 = function () {
    this.e31_1 = null;
  };
  protoOf(AbstractJsonLexer).m38 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.c38();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).t33 = function () {
    if (!(this.e31_1 == null)) {
      return takePeeked(this);
    }
    return this.k35();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.d38(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.z32('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.b38(lastPosition, currentPosition);
          currentPosition = this.d38(currentPosition);
          if (currentPosition === -1) {
            this.z32('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m38(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.c31_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).l35 = function () {
    var result = this.u33();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.z32("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u33 = function () {
    if (!(this.e31_1 == null)) {
      return takePeeked(this);
    }
    var current = this.k38();
    if (current >= charSequenceLength(this.c38()) ? true : current === -1) {
      this.z32('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.c38(), current));
    if (token === 1) {
      return this.t33();
    }
    if (!(token === 0)) {
      this.z32('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.c38(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.c38(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.c38())) {
        usedAppend = true;
        this.b38(this.c31_1, current);
        var eof = this.d38(current);
        if (eof === -1) {
          this.c31_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m38(this.c31_1, current);
    } else {
      tmp = decodedString(this, this.c31_1, current);
    }
    var result = tmp;
    this.c31_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).b38 = function (fromIndex, toIndex) {
    this.f31_1.s8(this.c38(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).j35 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.r33();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.u33();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.r33();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.u33();
        } else {
          this.k35();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.z(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.c31_1, 'found ] instead of } at path: ' + this.d31_1, this.c38());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.c31_1, 'found } instead of ] at path: ' + this.d31_1, this.c38());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.z32('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.w33();
      if (tokenStack.m() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.c38() + "', currentPosition=" + this.c31_1 + ')';
  };
  protoOf(AbstractJsonLexer).i35 = function (key) {
    var processed = this.m38(0, this.c31_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.i38("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).i38 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.d31_1.m33() + hintMessage, this.c38());
  };
  protoOf(AbstractJsonLexer).z32 = function (message, position, hint, $super) {
    position = position === VOID ? this.c31_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.i38(message, position, hint) : $super.i38.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).l32 = function () {
    var current = this.k38();
    current = this.d38(current);
    if (current >= charSequenceLength(this.c38()) ? true : current === -1) {
      this.z32('EOF');
    }
    var tmp;
    if (charSequenceGet(this.c38(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.c38())) {
        this.z32('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.c38()))) {
      var ch = charSequenceGet(this.c38(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.z32('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.z32("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.z32("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.z32("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.z32("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.va(toLong(10)).dc(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.va(toLong(10)).ec(toLong(digit));
      if (accumulator.wa(new Long(0, 0)) > 0) {
        this.z32('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.z32('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.z32('EOF');
      }
      if (!(charSequenceGet(this.c38(), current) === _Char___init__impl__6a9atx(34))) {
        this.z32('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.c31_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.e7() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).e7()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).e7();
      }
      if (tmp_0) {
        this.z32('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.z32("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.hc();
      } else {
        this.z32('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).s35 = function () {
    return consumeBoolean(this, this.k38());
  };
  protoOf(AbstractJsonLexer).t35 = function () {
    var current = this.k38();
    if (current === charSequenceLength(this.c38())) {
      this.z32('EOF');
    }
    var tmp;
    if (charSequenceGet(this.c38(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.c31_1 === charSequenceLength(this.c38())) {
        this.z32('EOF');
      }
      if (!(charSequenceGet(this.c38(), this.c31_1) === _Char___init__impl__6a9atx(34))) {
        this.z32('Expected closing quotation mark');
      }
      this.c31_1 = this.c31_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().o38_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().n38_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.n38_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o38_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n38_1 = charArray(117);
    this.o38_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.t38_1 = source;
  }
  protoOf(StringJsonLexer).c38 = function () {
    return this.t38_1;
  };
  protoOf(StringJsonLexer).d38 = function (position) {
    return position < this.t38_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).w33 = function () {
    var source = this.t38_1;
    $l$loop: while (!(this.c31_1 === -1) ? this.c31_1 < source.length : false) {
      var tmp1 = this.c31_1;
      this.c31_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).f35 = function () {
    var current = this.k38();
    if (current === this.t38_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.t38_1, current) === _Char___init__impl__6a9atx(44)) {
      this.c31_1 = this.c31_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).s33 = function () {
    var current = this.c31_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.t38_1.length) {
      var c = charSequenceGet(this.t38_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c31_1 = current;
      return this.f38(c);
    }
    this.c31_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).k38 = function () {
    var current = this.c31_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.t38_1.length) {
      var c = charSequenceGet(this.t38_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c31_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).e35 = function (expected) {
    if (this.c31_1 === -1) {
      this.h38(expected);
    }
    var source = this.t38_1;
    $l$loop: while (this.c31_1 < source.length) {
      var tmp1 = this.c31_1;
      this.c31_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.h38(expected);
    }
    this.c31_1 = -1;
    this.h38(expected);
  };
  protoOf(StringJsonLexer).k35 = function () {
    this.e35(get_STRING());
    var current = this.c31_1;
    var closingQuote = indexOf(this.t38_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.u33();
      this.j38(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.t38_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.t38_1, this.c31_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c31_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.t38_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).m35 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.c31_1;
    try {
      if (!(this.w33() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.h35(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.l38();
      if (!(this.w33() === get_TC_COLON()))
        return null;
      return this.h35(isLenient);
    }finally {
      this.c31_1 = positionSnapshot;
      this.l38();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.s30_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).u2m = get_isNullable;
  protoOf(defer$1).a2n = get_isInline;
  protoOf(defer$1).y2m = get_annotations;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
