(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ha;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var VOID = kotlin_kotlin.$_$.g;
  var asList = kotlin_kotlin.$_$.g5;
  var objectCreate = kotlin_kotlin.$_$.fa;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.w3;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var emptyList = kotlin_kotlin.$_$.w5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ge;
  var classMeta = kotlin_kotlin.$_$.y8;
  var KProperty1 = kotlin_kotlin.$_$.ya;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var Entry = kotlin_kotlin.$_$.w4;
  var isInterface = kotlin_kotlin.$_$.t9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var zip = kotlin_kotlin.$_$.u7;
  var toMap = kotlin_kotlin.$_$.o7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.ma;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var mapCapacity = kotlin_kotlin.$_$.u6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var Map = kotlin_kotlin.$_$.x4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.s8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.n1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ed;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var KClass = kotlin_kotlin.$_$.ua;
  var Triple = kotlin_kotlin.$_$.md;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.hd;
  var LinkedHashMap = kotlin_kotlin.$_$.t4;
  var MutableMap = kotlin_kotlin.$_$.a5;
  var HashMap = kotlin_kotlin.$_$.r4;
  var LinkedHashSet = kotlin_kotlin.$_$.u4;
  var MutableSet = kotlin_kotlin.$_$.b5;
  var Set = kotlin_kotlin.$_$.c5;
  var HashSet = kotlin_kotlin.$_$.s4;
  var ArrayList = kotlin_kotlin.$_$.p4;
  var MutableList = kotlin_kotlin.$_$.y4;
  var List = kotlin_kotlin.$_$.v4;
  var Collection = kotlin_kotlin.$_$.q4;
  var copyToArray = kotlin_kotlin.$_$.u5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.l2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.k2;
  var Result = kotlin_kotlin.$_$.id;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var equals = kotlin_kotlin.$_$.b9;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var isBlank = kotlin_kotlin.$_$.ob;
  var toList = kotlin_kotlin.$_$.n7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var toHashSet = kotlin_kotlin.$_$.k7;
  var toBooleanArray = kotlin_kotlin.$_$.j7;
  var withIndex = kotlin_kotlin.$_$.t7;
  var to = kotlin_kotlin.$_$.qe;
  var lazy_0 = kotlin_kotlin.$_$.he;
  var contentEquals = kotlin_kotlin.$_$.j5;
  var until = kotlin_kotlin.$_$.ta;
  var joinToString = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.gd;
  var Char = kotlin_kotlin.$_$.yc;
  var Companion_getInstance = kotlin_kotlin.$_$.y3;
  var Duration = kotlin_kotlin.$_$.vc;
  var toIntOrNull = kotlin_kotlin.$_$.mc;
  var hashCode = kotlin_kotlin.$_$.i9;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.w;
  var isArray = kotlin_kotlin.$_$.l9;
  var step = kotlin_kotlin.$_$.sa;
  var getValue = kotlin_kotlin.$_$.f6;
  var longArray = kotlin_kotlin.$_$.z9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a4;
  var get_lastIndex = kotlin_kotlin.$_$.m6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ae;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.r;
  var KTypeParameter = kotlin_kotlin.$_$.za;
  var fillArrayVal = kotlin_kotlin.$_$.c9;
  var booleanArray = kotlin_kotlin.$_$.r8;
  var emptyMap = kotlin_kotlin.$_$.x5;
  var contentHashCode = kotlin_kotlin.$_$.k5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z3;
  var isCharArray = kotlin_kotlin.$_$.o9;
  var charArray = kotlin_kotlin.$_$.u8;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var isDoubleArray = kotlin_kotlin.$_$.q9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var isFloatArray = kotlin_kotlin.$_$.r9;
  var isLongArray = kotlin_kotlin.$_$.u9;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.e4;
  var ULongArray = kotlin_kotlin.$_$.rd;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.c3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var isIntArray = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.d4;
  var UIntArray = kotlin_kotlin.$_$.pd;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.v2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.t2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var isShortArray = kotlin_kotlin.$_$.w9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.f4;
  var UShortArray = kotlin_kotlin.$_$.td;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.j3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var isByteArray = kotlin_kotlin.$_$.n9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.c4;
  var UByteArray = kotlin_kotlin.$_$.nd;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.p2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.m2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var isBooleanArray = kotlin_kotlin.$_$.m9;
  var coerceAtLeast = kotlin_kotlin.$_$.oa;
  var copyOf = kotlin_kotlin.$_$.o5;
  var copyOf_0 = kotlin_kotlin.$_$.q5;
  var copyOf_1 = kotlin_kotlin.$_$.r5;
  var copyOf_2 = kotlin_kotlin.$_$.m5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.f3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.g3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.d3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.e3;
  var copyOf_3 = kotlin_kotlin.$_$.t5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.y2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.z2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.w2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.x2;
  var copyOf_4 = kotlin_kotlin.$_$.l5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.m3;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.n3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.k3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.l3;
  var copyOf_5 = kotlin_kotlin.$_$.p5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.r2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.s2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.o2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.q2;
  var copyOf_6 = kotlin_kotlin.$_$.n5;
  var trimIndent = kotlin_kotlin.$_$.sc;
  var equals_0 = kotlin_kotlin.$_$.lb;
  var charSequenceLength = kotlin_kotlin.$_$.w8;
  var charSequenceGet = kotlin_kotlin.$_$.v8;
  var toString_0 = kotlin_kotlin.$_$.h2;
  var titlecase = kotlin_kotlin.$_$.jc;
  var isLowerCase = kotlin_kotlin.$_$.pb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.x3;
  var ULong = kotlin_kotlin.$_$.sd;
  var UInt = kotlin_kotlin.$_$.qd;
  var UShort = kotlin_kotlin.$_$.ud;
  var UByte = kotlin_kotlin.$_$.od;
  var Unit = kotlin_kotlin.$_$.vd;
  var mapOf = kotlin_kotlin.$_$.w6;
  var lastOrNull = kotlin_kotlin.$_$.p6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n6;
  var get_js = kotlin_kotlin.$_$.x9;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.i6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_indices_0 = kotlin_kotlin.$_$.h6;
  var Companion_instance = kotlin_kotlin.$_$.b4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i2;
  var createFailure = kotlin_kotlin.$_$.be;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.q2l(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.c2p(descriptor, index, deserializer, previousValue) : $super.c2p.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.s2l_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c2m('type', serializer_0(StringCompanionObject_instance).p2l());
      $this$buildSerialDescriptor.c2m('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.r2l_1.h7() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.w2l_1 = this$0.s2l_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.r2l_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.r2l_1 = baseClass;
    this.s2l_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t2l_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).d2m = function () {
    return this.r2l_1;
  };
  protoOf(PolymorphicSerializer).p2l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.t2l_1;
    descriptor$factory();
    return this_0.r2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.r2l_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.e2m(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.d2m());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.p2l();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.g2m_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this$0.j2m_1.n2().o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.q2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.r2();
        $this$buildSerialDescriptor.c2m(name, serializer.p2l());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c2m('type', serializer_0(StringCompanionObject_instance).p2l());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.f2m_1.h7() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.c2m('value', elementDescriptor);
      $this$buildSerialDescriptor.w2l_1 = this$0.g2m_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($this) {
    this.k2m_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).l2m = function () {
    return this.k2m_1.o();
  };
  protoOf(_no_name_provided__qut3iv).m2m = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.r2().p2l().n2m();
  };
  protoOf(_no_name_provided__qut3iv).o2m = function (element) {
    return this.m2m((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.f2m_1 = baseClass;
    this.g2m_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.h2m_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.f2m_1.h7() + ' should be marked @Serializable');
    }
    this.i2m_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.i2m_1.n2();
    // Inline function 'kotlin.collections.aggregateTo' call
    var this_1 = new _no_name_provided__qut3iv(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_1.l2m();
    while (tmp0_iterator.c1()) {
      var e = tmp0_iterator.e1();
      var key = this_1.o2m(e);
      var accumulator = destination.y2(key);
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.v2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + this.f2m_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.q2() + "', '" + e.q2() + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      destination.o2(key, e);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.n2().o();
    while (tmp0_iterator_0.c1()) {
      var element = tmp0_iterator_0.e1();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.q2();
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp$ret$7 = element.r2().r2();
      destination_0.o2(tmp_2, tmp$ret$7);
    }
    tmp_1.j2m_1 = destination_0;
  }
  protoOf(SealedClassSerializer).d2m = function () {
    return this.f2m_1;
  };
  protoOf(SealedClassSerializer).p2l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.h2m_1;
    descriptor$factory_0();
    return this_0.r2();
  };
  protoOf(SealedClassSerializer).e2m = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.j2m_1;
    var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).y2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).e2m.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.p2l();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.m() === 1 ? "Field '" + missingFields.n(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.p2m_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.o();
      while (tmp0_iterator.c1()) {
        var item = tmp0_iterator.e1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.z(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.o();
      while (tmp0_iterator_0.c1()) {
        var item_0 = tmp0_iterator_0.e1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.z(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.n(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.n(0), serializers.n(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.n(0), serializers.n(1), serializers.n(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.n(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.w7();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.v7();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.zg_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      destination.z(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.t()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.t()) {
      tmp_2 = _this__u8e3s4.r2m(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.q2m(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.n(0).u7();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().s2m(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().s2m(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().t2m(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().t2m(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.n(0).u7();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.n(0).u7();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.p2l().u2m()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.v2m_1 = original;
    this.w2m_1 = kClass;
    this.x2m_1 = this.v2m_1.n2m() + '<' + this.w2m_1.h7() + '>';
  }
  protoOf(ContextDescriptor).y2m = function () {
    return this.v2m_1.y2m();
  };
  protoOf(ContextDescriptor).z2m = function () {
    return this.v2m_1.z2m();
  };
  protoOf(ContextDescriptor).a2n = function () {
    return this.v2m_1.a2n();
  };
  protoOf(ContextDescriptor).u2m = function () {
    return this.v2m_1.u2m();
  };
  protoOf(ContextDescriptor).b2n = function () {
    return this.v2m_1.b2n();
  };
  protoOf(ContextDescriptor).c2n = function (index) {
    return this.v2m_1.c2n(index);
  };
  protoOf(ContextDescriptor).d2n = function (index) {
    return this.v2m_1.d2n(index);
  };
  protoOf(ContextDescriptor).e2n = function (name) {
    return this.v2m_1.e2n(name);
  };
  protoOf(ContextDescriptor).f2n = function (index) {
    return this.v2m_1.f2n(index);
  };
  protoOf(ContextDescriptor).g2n = function (index) {
    return this.v2m_1.g2n(index);
  };
  protoOf(ContextDescriptor).n2m = function () {
    return this.x2m_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.v2m_1, another.v2m_1) ? another.w2m_1.equals(this.w2m_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.w2m_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.x2m_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.w2m_1 + ', original: ' + this.v2m_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.r2m(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.p2l();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.w2m_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.h2n_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.l2n_1 = $this_elementDescriptors;
    this.k2n_1 = $this_elementDescriptors.z2m();
  }
  protoOf(elementDescriptors$1$1).c1 = function () {
    return this.k2n_1 > 0;
  };
  protoOf(elementDescriptors$1$1).e1 = function () {
    var tmp = this.l2n_1.z2m();
    var tmp1 = this.k2n_1;
    this.k2n_1 = tmp1 - 1 | 0;
    return this.l2n_1.d2n(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.m2n_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).o = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.m2n_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.x2l_1.m(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.u2l_1 = serialName;
    this.v2l_1 = false;
    this.w2l_1 = emptyList();
    this.x2l_1 = ArrayList_init_$Create$_0();
    this.y2l_1 = HashSet_init_$Create$();
    this.z2l_1 = ArrayList_init_$Create$_0();
    this.a2m_1 = ArrayList_init_$Create$_0();
    this.b2m_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).n2n = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.y2l_1.z(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.u2l_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.x2l_1.z(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.z2l_1.z(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.a2m_1.z(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.b2m_1.z(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).c2m = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.n2n(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.n2n.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.x2l_1.m(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.z2n_1;
    _hashCode$factory();
    return this_0.r2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.y2n_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.f2n(it) + ': ' + this$0.d2n(it).n2m();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.o2n_1 = serialName;
    this.p2n_1 = kind;
    this.q2n_1 = elementsCount;
    this.r2n_1 = builder.w2l_1;
    this.s2n_1 = toHashSet(builder.x2l_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.x2l_1;
    tmp.t2n_1 = copyToArray(this_0);
    this.u2n_1 = compactArray(builder.z2l_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.a2m_1;
    tmp_0.v2n_1 = copyToArray(this_1);
    this.w2n_1 = toBooleanArray(builder.b2m_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.t2n_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.cf_1, item.bf_1);
      destination.z(tmp$ret$2);
    }
    tmp_1.x2n_1 = toMap(destination);
    this.y2n_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.z2n_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).n2m = function () {
    return this.o2n_1;
  };
  protoOf(SerialDescriptorImpl).b2n = function () {
    return this.p2n_1;
  };
  protoOf(SerialDescriptorImpl).z2m = function () {
    return this.q2n_1;
  };
  protoOf(SerialDescriptorImpl).y2m = function () {
    return this.r2n_1;
  };
  protoOf(SerialDescriptorImpl).a2o = function () {
    return this.s2n_1;
  };
  protoOf(SerialDescriptorImpl).f2n = function (index) {
    return getChecked(this.t2n_1, index);
  };
  protoOf(SerialDescriptorImpl).e2n = function (name) {
    var tmp0_elvis_lhs = this.x2n_1.y2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).c2n = function (index) {
    return getChecked(this.v2n_1, index);
  };
  protoOf(SerialDescriptorImpl).d2n = function (index) {
    return getChecked(this.u2n_1, index);
  };
  protoOf(SerialDescriptorImpl).g2n = function (index) {
    return getChecked_0(this.w2n_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n2m() === other.n2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.y2n_1, other.y2n_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z2m() === other.z2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.d2n(index).n2m() === other.d2n(index).n2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.d2n(index).b2n(), other.d2n(index).b2n())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.q2n_1);
    var tmp_0 = this.o2n_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).h7());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).b2o = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).c2o = function () {
    return true;
  };
  protoOf(AbstractDecoder).d2o = function () {
    return null;
  };
  protoOf(AbstractDecoder).e2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).f2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).g2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).h2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).i2o = function () {
    var tmp = this.b2o();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).j2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).k2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).l2o = function () {
    var tmp = this.b2o();
    return tmp instanceof Char ? tmp.hb_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).m2o = function () {
    var tmp = this.b2o();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).n2o = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).o2o = function (deserializer, previousValue) {
    return this.p2o(deserializer);
  };
  protoOf(AbstractDecoder).q2o = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).r2o = function (descriptor) {
  };
  protoOf(AbstractDecoder).s2o = function (descriptor, index) {
    return this.e2o();
  };
  protoOf(AbstractDecoder).t2o = function (descriptor, index) {
    return this.f2o();
  };
  protoOf(AbstractDecoder).u2o = function (descriptor, index) {
    return this.g2o();
  };
  protoOf(AbstractDecoder).v2o = function (descriptor, index) {
    return this.h2o();
  };
  protoOf(AbstractDecoder).w2o = function (descriptor, index) {
    return this.i2o();
  };
  protoOf(AbstractDecoder).x2o = function (descriptor, index) {
    return this.j2o();
  };
  protoOf(AbstractDecoder).y2o = function (descriptor, index) {
    return this.k2o();
  };
  protoOf(AbstractDecoder).z2o = function (descriptor, index) {
    return this.l2o();
  };
  protoOf(AbstractDecoder).a2p = function (descriptor, index) {
    return this.m2o();
  };
  protoOf(AbstractDecoder).b2p = function (descriptor, index) {
    return this.n2o(descriptor.d2n(index));
  };
  protoOf(AbstractDecoder).c2p = function (descriptor, index, deserializer, previousValue) {
    return this.o2o(deserializer, previousValue);
  };
  function Decoder() {
  }
  function Companion() {
    this.i2p_1 = -1;
    this.j2p_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.a2p($this.p2l(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.d2p($this.p2l(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).q2l = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.p2l();
    var composite = decoder.q2o(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.f2p()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.g2p(this.p2l());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.a2p(this.p2l(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer(this, composite, klassName);
              value = composite.d2p(this.p2l(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.r2o(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).e2m = function (decoder, klassName) {
    return decoder.e2p().k2p(this.d2m(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.h7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.h7() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.l2p_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).p2l = function () {
    return this.l2p_1;
  };
  protoOf(NothingSerializer_0).q2l = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.m2p_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).p2l = function () {
    return this.m2p_1;
  };
  protoOf(DurationSerializer).n2p = function (decoder) {
    return Companion_getInstance().nh(decoder.m2o());
  };
  protoOf(DurationSerializer).q2l = function (decoder) {
    return new Duration(this.n2p(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).n2m = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).n2m = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).n2m = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).n2m = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.q2p_1 = elementDescriptor;
    this.r2p_1 = 1;
  }
  protoOf(ListLikeDescriptor).b2n = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).z2m = function () {
    return this.r2p_1;
  };
  protoOf(ListLikeDescriptor).f2n = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).e2n = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).g2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).c2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).d2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q2p_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.q2p_1, other.q2p_1) ? this.n2m() === other.n2m() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.q2p_1), 31) + getStringHashCode(this.n2m()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.n2m() + '(' + this.q2p_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.w2p_1 = serialName;
    this.x2p_1 = keyDescriptor;
    this.y2p_1 = valueDescriptor;
    this.z2p_1 = 2;
  }
  protoOf(MapLikeDescriptor).n2m = function () {
    return this.w2p_1;
  };
  protoOf(MapLikeDescriptor).b2n = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).z2m = function () {
    return this.z2p_1;
  };
  protoOf(MapLikeDescriptor).f2n = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).e2n = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).g2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).c2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).d2n = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.n2m() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.x2p_1;
        break;
      case 1:
        tmp = this.y2p_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.n2m() === other.n2m()))
      return false;
    if (!equals(this.x2p_1, other.x2p_1))
      return false;
    if (!equals(this.y2p_1, other.y2p_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.n2m());
    result = imul(31, result) + hashCode(this.x2p_1) | 0;
    result = imul(31, result) + hashCode(this.y2p_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.n2m() + '(' + this.x2p_1 + ', ' + this.y2p_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.e2q_1 = primitive.n2m() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).n2m = function () {
    return this.e2q_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.g2q_1 = new ArrayListClassDesc(element.p2l());
  }
  protoOf(ArrayListSerializer).p2l = function () {
    return this.g2q_1;
  };
  protoOf(ArrayListSerializer).h17 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).h2q = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ArrayListSerializer).i2q = function (_this__u8e3s4) {
    return this.h2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).j2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).k2q = function (_this__u8e3s4) {
    return this.j2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).l2q = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).m2q = function (_this__u8e3s4) {
    return this.l2q((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).n2q = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g3(size);
  };
  protoOf(ArrayListSerializer).o2q = function (_this__u8e3s4, size) {
    return this.n2q(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).p2q = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y1(index, element);
  };
  protoOf(ArrayListSerializer).q2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.p2q(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.x2q_1 = new HashSetClassDesc(eSerializer.p2l());
  }
  protoOf(HashSetSerializer).p2l = function () {
    return this.x2q_1;
  };
  protoOf(HashSetSerializer).h17 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).y2q = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(HashSetSerializer).i2q = function (_this__u8e3s4) {
    return this.y2q(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).z2q = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).k2q = function (_this__u8e3s4) {
    return this.z2q(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).a2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).m2q = function (_this__u8e3s4) {
    return this.a2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).b2r = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).o2q = function (_this__u8e3s4, size) {
    return this.b2r(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).c2r = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z(element);
  };
  protoOf(HashSetSerializer).q2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.c2r(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.e2r_1 = new LinkedHashSetClassDesc(eSerializer.p2l());
  }
  protoOf(LinkedHashSetSerializer).p2l = function () {
    return this.e2r_1;
  };
  protoOf(LinkedHashSetSerializer).h17 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).f2r = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(LinkedHashSetSerializer).i2q = function (_this__u8e3s4) {
    return this.f2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).g2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).k2q = function (_this__u8e3s4) {
    return this.g2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).a2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).m2q = function (_this__u8e3s4) {
    return this.a2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).h2r = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).o2q = function (_this__u8e3s4, size) {
    return this.h2r(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).i2r = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z(element);
  };
  protoOf(LinkedHashSetSerializer).q2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.i2r(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.l2r_1 = new HashMapClassDesc(kSerializer.p2l(), vSerializer.p2l());
  }
  protoOf(HashMapSerializer).p2l = function () {
    return this.l2r_1;
  };
  protoOf(HashMapSerializer).h17 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).m2r = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(HashMapSerializer).i2q = function (_this__u8e3s4) {
    return this.m2r(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).n2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).k2q = function (_this__u8e3s4) {
    return this.n2r(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).o2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).m2q = function (_this__u8e3s4) {
    return this.o2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).p2r = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).o2q = function (_this__u8e3s4, size) {
    return this.p2r(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.w2r_1 = new LinkedHashMapClassDesc(kSerializer.p2l(), vSerializer.p2l());
  }
  protoOf(LinkedHashMapSerializer).p2l = function () {
    return this.w2r_1;
  };
  protoOf(LinkedHashMapSerializer).h17 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).x2r = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(LinkedHashMapSerializer).i2q = function (_this__u8e3s4) {
    return this.x2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).y2r = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).k2q = function (_this__u8e3s4) {
    return this.y2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).o2r = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).m2q = function (_this__u8e3s4) {
    return this.o2r((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).z2r = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).o2q = function (_this__u8e3s4, size) {
    return this.z2r(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.b2s_1 = kClass;
    this.c2s_1 = new ArrayClassDesc(eSerializer.p2l());
  }
  protoOf(ReferenceArraySerializer).p2l = function () {
    return this.c2s_1;
  };
  protoOf(ReferenceArraySerializer).h17 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).d2s = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ReferenceArraySerializer).i2q = function (_this__u8e3s4) {
    return this.d2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).e2s = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.b2s_1);
  };
  protoOf(ReferenceArraySerializer).k2q = function (_this__u8e3s4) {
    return this.e2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).f2s = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).m2q = function (_this__u8e3s4) {
    return this.f2s((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).g2s = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g3(size);
  };
  protoOf(ReferenceArraySerializer).o2q = function (_this__u8e3s4, size) {
    return this.g2s(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).h2s = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y1(index, element);
  };
  protoOf(ReferenceArraySerializer).q2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.h2s(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.q2r_1 = keySerializer;
    this.r2r_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).s2r = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.t2r(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).s2q = function (decoder, builder, startIndex, size) {
    return this.s2r(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).t2r = function (decoder, index, builder, checkIndex) {
    var key = decoder.d2p(this.p2l(), index, this.q2r_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.g2p(this.p2l());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.v2(key)) {
      var tmp_2 = this.r2r_1.p2l().b2n();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.c2p(this.p2l(), vIndex, this.r2r_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.d2p(this.p2l(), vIndex, this.r2r_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.o2(key, value);
  };
  protoOf(MapLikeSerializer).t2q = function (decoder, index, builder, checkIndex) {
    return this.t2r(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.r2q_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).s2q = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.t2q(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).t2q = function (decoder, index, builder, checkIndex) {
    this.q2q(builder, index, decoder.d2p(this.p2l(), index, this.r2q_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.h2p($this.p2l());
    $this.o2q(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).v2q = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.m2q(previous);
    var builder = tmp1_elvis_lhs == null ? this.h17() : tmp1_elvis_lhs;
    var startIndex = this.i2q(builder);
    var compositeDecoder = decoder.q2o(this.p2l());
    if (compositeDecoder.f2p()) {
      this.s2q(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.g2p(this.p2l());
        if (index === -1)
          break $l$loop;
        this.u2q(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.r2o(this.p2l());
    return this.k2q(builder);
  };
  protoOf(AbstractCollectionSerializer).q2l = function (decoder) {
    return this.v2q(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).u2q = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.t2q(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.t2q.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.j2s_1 = new PrimitiveArrayDescriptor(primitiveSerializer.p2l());
  }
  protoOf(PrimitiveArraySerializer).p2l = function () {
    return this.j2s_1;
  };
  protoOf(PrimitiveArraySerializer).k2s = function (_this__u8e3s4) {
    return _this__u8e3s4.l2s();
  };
  protoOf(PrimitiveArraySerializer).i2q = function (_this__u8e3s4) {
    return this.k2s(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).m2s = function (_this__u8e3s4) {
    return _this__u8e3s4.f3();
  };
  protoOf(PrimitiveArraySerializer).k2q = function (_this__u8e3s4) {
    return this.m2s(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).n2s = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g3(size);
  };
  protoOf(PrimitiveArraySerializer).o2q = function (_this__u8e3s4, size) {
    return this.n2s(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).o2s = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).q2q = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.o2s(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).h17 = function () {
    return this.m2q(this.p2s());
  };
  protoOf(PrimitiveArraySerializer).q2l = function (decoder) {
    return this.v2q(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).r2s = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.l2s() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.g3(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.g3.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.s2s_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).jc(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.w2s_1[slot] = $this.w2s_1[slot].nc((new Long(1, 0)).jc(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.w2s_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.w2s_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.ic());
          slotMarks = slotMarks.nc((new Long(1, 0)).jc(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.u2s_1($this.t2s_1, index)) {
            $this.w2s_1[slot] = slotMarks;
            return index;
          }
        }
        $this.w2s_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.t2s_1 = descriptor;
    this.u2s_1 = readIfAbsent;
    var elementsCount = this.t2s_1.z2m();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).jc(elementsCount);
      }
      tmp.v2s_1 = tmp_0;
      this.w2s_1 = Companion_getInstance_7().s2s_1;
    } else {
      this.v2s_1 = new Long(0, 0);
      this.w2s_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).x2s = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.v2s_1 = this.v2s_1.nc((new Long(1, 0)).jc(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).y2s = function () {
    var elementsCount = this.t2s_1.z2m();
    while (!this.v2s_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.v2s_1.ic());
      this.v2s_1 = this.v2s_1.nc((new Long(1, 0)).jc(index));
      if (this.u2s_1(this.t2s_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.l2t_1 = true;
  }
  protoOf(InlineClassDescriptor).a2n = function () {
    return this.l2t_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n2m() === other.n2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.l2t_1 ? contentEquals(this.y2t(), other.y2t()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z2m() === other.z2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.d2n(index).n2m() === other.d2n(index).n2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.d2n(index).b2n(), other.d2n(index).b2n())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.a2u_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).b2u = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.a2u_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).p2l = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).q2l = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.d2u_1 = OBJECT_getInstance();
    this.e2u_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).b2n = function () {
    return this.d2u_1;
  };
  protoOf(NothingSerialDescriptor).n2m = function () {
    return this.e2u_1;
  };
  protoOf(NothingSerialDescriptor).z2m = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).f2n = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).e2n = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).g2n = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).d2n = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).c2n = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.e2u_1) + imul(31, this.d2u_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.f2u_1 = serializer;
    this.g2u_1 = new SerialDescriptorForNullable(this.f2u_1.p2l());
  }
  protoOf(NullableSerializer).p2l = function () {
    return this.g2u_1;
  };
  protoOf(NullableSerializer).q2l = function (decoder) {
    return decoder.c2o() ? decoder.p2o(this.f2u_1) : decoder.d2o();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.f2u_1, other.f2u_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.f2u_1);
  };
  function SerialDescriptorForNullable(original) {
    this.h2n_1 = original;
    this.i2n_1 = this.h2n_1.n2m() + '?';
    this.j2n_1 = cachedSerialNames(this.h2n_1);
  }
  protoOf(SerialDescriptorForNullable).y2m = function () {
    return this.h2n_1.y2m();
  };
  protoOf(SerialDescriptorForNullable).z2m = function () {
    return this.h2n_1.z2m();
  };
  protoOf(SerialDescriptorForNullable).a2n = function () {
    return this.h2n_1.a2n();
  };
  protoOf(SerialDescriptorForNullable).b2n = function () {
    return this.h2n_1.b2n();
  };
  protoOf(SerialDescriptorForNullable).c2n = function (index) {
    return this.h2n_1.c2n(index);
  };
  protoOf(SerialDescriptorForNullable).d2n = function (index) {
    return this.h2n_1.d2n(index);
  };
  protoOf(SerialDescriptorForNullable).e2n = function (name) {
    return this.h2n_1.e2n(name);
  };
  protoOf(SerialDescriptorForNullable).f2n = function (index) {
    return this.h2n_1.f2n(index);
  };
  protoOf(SerialDescriptorForNullable).g2n = function (index) {
    return this.h2n_1.g2n(index);
  };
  protoOf(SerialDescriptorForNullable).n2m = function () {
    return this.i2n_1;
  };
  protoOf(SerialDescriptorForNullable).a2o = function () {
    return this.j2n_1;
  };
  protoOf(SerialDescriptorForNullable).u2m = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.h2n_1, other.h2n_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.h2n_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.h2n_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.w2l_1 = this$0.i2u_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.h2u_1 = objectInstance;
    this.i2u_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.j2u_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).p2l = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.j2u_1;
    descriptor$factory_1();
    return this_0.r2();
  };
  protoOf(ObjectSerializer).q2l = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.p2l();
    var composite = decoder.q2o(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.f2p()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.g2p(this.p2l());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.r2o(descriptor);
    return this.h2u_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.p2l();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.a2o();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.z2m());
    var inductionVariable = 0;
    var last = _this__u8e3s4.z2m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.f2n(i);
        result.z(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.u7();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var message = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        var message_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.h7();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.t())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.f2n(i);
          missingFields.z(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.n2m());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.v2t_1;
    childSerializers$factory();
    return this_0.r2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.x2t_1;
    _hashCode$factory_0();
    return this_0.r2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.q2t_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.q2t_1[i];
        indices.o2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.n2t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2u();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.n2t_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2u();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.p2l();
          destination.z(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.y2t());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.f2n(i) + ': ' + this$0.d2n(i).n2m();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.m2t_1 = serialName;
    this.n2t_1 = generatedSerializer;
    this.o2t_1 = elementsCount;
    this.p2t_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.o2t_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q2t_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.o2t_1;
    tmp_3.r2t_1 = fillArrayVal(Array(size), null);
    this.s2t_1 = null;
    this.t2t_1 = booleanArray(this.o2t_1);
    this.u2t_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.v2t_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.w2t_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.x2t_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).n2m = function () {
    return this.m2t_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).z2m = function () {
    return this.o2t_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).b2n = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).y2m = function () {
    var tmp0_elvis_lhs = this.s2t_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).a2o = function () {
    return this.u2t_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).y2t = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w2t_1;
    typeParameterDescriptors$factory();
    return this_0.r2();
  };
  protoOf(PluginGeneratedSerialDescriptor).z2t = function (name, isOptional) {
    this.p2t_1 = this.p2t_1 + 1 | 0;
    this.q2t_1[this.p2t_1] = name;
    this.t2t_1[this.p2t_1] = isOptional;
    this.r2t_1[this.p2t_1] = null;
    if (this.p2t_1 === (this.o2t_1 - 1 | 0)) {
      this.u2t_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).d2n = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).p2l();
  };
  protoOf(PluginGeneratedSerialDescriptor).g2n = function (index) {
    return getChecked_0(this.t2t_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).c2n = function (index) {
    var tmp0_elvis_lhs = getChecked(this.r2t_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).f2n = function (index) {
    return getChecked(this.q2t_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).e2n = function (name) {
    var tmp0_elvis_lhs = this.u2t_1.y2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n2m() === other.n2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.y2t(), other.y2t())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z2m() === other.z2m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z2m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.d2n(index).n2m() === other.d2n(index).n2m())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.d2n(index).b2n(), other.d2n(index).b2n())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.o2t_1);
    var tmp_0 = this.n2m() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.n2m());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.o();
    while (tmp0_iterator.c1()) {
      var element = tmp0_iterator.e1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.n2m();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.o();
    while (tmp0_iterator_0.c1()) {
      var element_0 = tmp0_iterator_0.e1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.b2n();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.y2t();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).n2u = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.n2u((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).p2s = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).o2u = function (decoder, index, builder, checkIndex) {
    builder.r2u(decoder.z2o(this.j2s_1, index));
  };
  protoOf(CharArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.o2u(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.o2u(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).u2u = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.u2u((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).p2s = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).v2u = function (decoder, index, builder, checkIndex) {
    builder.y2u(decoder.y2o(this.j2s_1, index));
  };
  protoOf(DoubleArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.v2u(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.v2u(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).b2v = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.b2v((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).p2s = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).c2v = function (decoder, index, builder, checkIndex) {
    builder.f2v(decoder.x2o(this.j2s_1, index));
  };
  protoOf(FloatArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.c2v(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.c2v(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).i2v = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.i2v((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).p2s = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).j2v = function (decoder, index, builder, checkIndex) {
    builder.m2v(decoder.w2o(this.j2s_1, index));
  };
  protoOf(LongArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.j2v(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.j2v(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).p2v = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.p2v(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.nj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).q2v = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).p2s = function () {
    return new ULongArray(this.q2v());
  };
  protoOf(ULongArraySerializer_0).r2v = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.b2p(this.j2s_1, index).i2o();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.u2v(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.r2v(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.r2v(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).x2v = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.x2v((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).p2s = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).y2v = function (decoder, index, builder, checkIndex) {
    builder.b2w(decoder.v2o(this.j2s_1, index));
  };
  protoOf(IntArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.y2v(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.y2v(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).e2w = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.e2w(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.bj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).f2w = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).p2s = function () {
    return new UIntArray(this.f2w());
  };
  protoOf(UIntArraySerializer_0).g2w = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.b2p(this.j2s_1, index).h2o();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.j2w(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.g2w(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.g2w(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).m2w = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.m2w((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).p2s = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).n2w = function (decoder, index, builder, checkIndex) {
    builder.q2w(decoder.u2o(this.j2s_1, index));
  };
  protoOf(ShortArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.n2w(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.n2w(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).t2w = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.t2w(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.zj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).u2w = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).p2s = function () {
    return new UShortArray(this.u2w());
  };
  protoOf(UShortArraySerializer_0).v2w = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.b2p(this.j2s_1, index).g2o();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.y2w(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.v2w(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.v2w(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).b2x = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.b2x((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).p2s = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).c2x = function (decoder, index, builder, checkIndex) {
    builder.f2x(decoder.t2o(this.j2s_1, index));
  };
  protoOf(ByteArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.c2x(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.c2x(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).i2x = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.i2x(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.pi_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).j2x = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).p2s = function () {
    return new UByteArray(this.j2x());
  };
  protoOf(UByteArraySerializer_0).k2x = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.b2p(this.j2s_1, index).f2o();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.n2x(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.k2x(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.k2x(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).q2x = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).m2q = function (_this__u8e3s4) {
    return this.q2x((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).p2s = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).r2x = function (decoder, index, builder, checkIndex) {
    builder.u2x(decoder.s2o(this.j2s_1, index));
  };
  protoOf(BooleanArraySerializer_0).t2q = function (decoder, index, builder, checkIndex) {
    return this.r2x(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).q2s = function (decoder, index, builder, checkIndex) {
    return this.r2x(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2u_1 = bufferWithData;
    this.q2u_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(CharArrayBuilder).l2s = function () {
    return this.q2u_1;
  };
  protoOf(CharArrayBuilder).g3 = function (requiredCapacity) {
    if (this.p2u_1.length < requiredCapacity)
      this.p2u_1 = copyOf(this.p2u_1, coerceAtLeast(requiredCapacity, imul(this.p2u_1.length, 2)));
  };
  protoOf(CharArrayBuilder).r2u = function (c) {
    this.r2s();
    var tmp = this.p2u_1;
    var tmp1 = this.q2u_1;
    this.q2u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).f3 = function () {
    return copyOf(this.p2u_1, this.q2u_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2u_1 = bufferWithData;
    this.x2u_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(DoubleArrayBuilder).l2s = function () {
    return this.x2u_1;
  };
  protoOf(DoubleArrayBuilder).g3 = function (requiredCapacity) {
    if (this.w2u_1.length < requiredCapacity)
      this.w2u_1 = copyOf_0(this.w2u_1, coerceAtLeast(requiredCapacity, imul(this.w2u_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).y2u = function (c) {
    this.r2s();
    var tmp = this.w2u_1;
    var tmp1 = this.x2u_1;
    this.x2u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).f3 = function () {
    return copyOf_0(this.w2u_1, this.x2u_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2v_1 = bufferWithData;
    this.e2v_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(FloatArrayBuilder).l2s = function () {
    return this.e2v_1;
  };
  protoOf(FloatArrayBuilder).g3 = function (requiredCapacity) {
    if (this.d2v_1.length < requiredCapacity)
      this.d2v_1 = copyOf_1(this.d2v_1, coerceAtLeast(requiredCapacity, imul(this.d2v_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).f2v = function (c) {
    this.r2s();
    var tmp = this.d2v_1;
    var tmp1 = this.e2v_1;
    this.e2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).f3 = function () {
    return copyOf_1(this.d2v_1, this.e2v_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k2v_1 = bufferWithData;
    this.l2v_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(LongArrayBuilder).l2s = function () {
    return this.l2v_1;
  };
  protoOf(LongArrayBuilder).g3 = function (requiredCapacity) {
    if (this.k2v_1.length < requiredCapacity)
      this.k2v_1 = copyOf_2(this.k2v_1, coerceAtLeast(requiredCapacity, imul(this.k2v_1.length, 2)));
  };
  protoOf(LongArrayBuilder).m2v = function (c) {
    this.r2s();
    var tmp = this.k2v_1;
    var tmp1 = this.l2v_1;
    this.l2v_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).f3 = function () {
    return copyOf_2(this.k2v_1, this.l2v_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2v_1 = bufferWithData;
    this.t2v_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.g3(10);
  }
  protoOf(ULongArrayBuilder).l2s = function () {
    return this.t2v_1;
  };
  protoOf(ULongArrayBuilder).g3 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.s2v_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.s2v_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.s2v_1), 2));
      tmp.s2v_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).u2v = function (c) {
    this.r2s();
    var tmp = this.s2v_1;
    var tmp1 = this.t2v_1;
    this.t2v_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).v2x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.s2v_1;
    var newSize = this.t2v_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).f3 = function () {
    return new ULongArray(this.v2x());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2v_1 = bufferWithData;
    this.a2w_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(IntArrayBuilder).l2s = function () {
    return this.a2w_1;
  };
  protoOf(IntArrayBuilder).g3 = function (requiredCapacity) {
    if (this.z2v_1.length < requiredCapacity)
      this.z2v_1 = copyOf_3(this.z2v_1, coerceAtLeast(requiredCapacity, imul(this.z2v_1.length, 2)));
  };
  protoOf(IntArrayBuilder).b2w = function (c) {
    this.r2s();
    var tmp = this.z2v_1;
    var tmp1 = this.a2w_1;
    this.a2w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).f3 = function () {
    return copyOf_3(this.z2v_1, this.a2w_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h2w_1 = bufferWithData;
    this.i2w_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.g3(10);
  }
  protoOf(UIntArrayBuilder).l2s = function () {
    return this.i2w_1;
  };
  protoOf(UIntArrayBuilder).g3 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.h2w_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.h2w_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.h2w_1), 2));
      tmp.h2w_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).j2w = function (c) {
    this.r2s();
    var tmp = this.h2w_1;
    var tmp1 = this.i2w_1;
    this.i2w_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).w2x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.h2w_1;
    var newSize = this.i2w_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).f3 = function () {
    return new UIntArray(this.w2x());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o2w_1 = bufferWithData;
    this.p2w_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(ShortArrayBuilder).l2s = function () {
    return this.p2w_1;
  };
  protoOf(ShortArrayBuilder).g3 = function (requiredCapacity) {
    if (this.o2w_1.length < requiredCapacity)
      this.o2w_1 = copyOf_4(this.o2w_1, coerceAtLeast(requiredCapacity, imul(this.o2w_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).q2w = function (c) {
    this.r2s();
    var tmp = this.o2w_1;
    var tmp1 = this.p2w_1;
    this.p2w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).f3 = function () {
    return copyOf_4(this.o2w_1, this.p2w_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2w_1 = bufferWithData;
    this.x2w_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.g3(10);
  }
  protoOf(UShortArrayBuilder).l2s = function () {
    return this.x2w_1;
  };
  protoOf(UShortArrayBuilder).g3 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.w2w_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.w2w_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.w2w_1), 2));
      tmp.w2w_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).y2w = function (c) {
    this.r2s();
    var tmp = this.w2w_1;
    var tmp1 = this.x2w_1;
    this.x2w_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).x2x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.w2w_1;
    var newSize = this.x2w_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).f3 = function () {
    return new UShortArray(this.x2x());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2x_1 = bufferWithData;
    this.e2x_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(ByteArrayBuilder).l2s = function () {
    return this.e2x_1;
  };
  protoOf(ByteArrayBuilder).g3 = function (requiredCapacity) {
    if (this.d2x_1.length < requiredCapacity)
      this.d2x_1 = copyOf_5(this.d2x_1, coerceAtLeast(requiredCapacity, imul(this.d2x_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).f2x = function (c) {
    this.r2s();
    var tmp = this.d2x_1;
    var tmp1 = this.e2x_1;
    this.e2x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).f3 = function () {
    return copyOf_5(this.d2x_1, this.e2x_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l2x_1 = bufferWithData;
    this.m2x_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.g3(10);
  }
  protoOf(UByteArrayBuilder).l2s = function () {
    return this.m2x_1;
  };
  protoOf(UByteArrayBuilder).g3 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.l2x_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.l2x_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.l2x_1), 2));
      tmp.l2x_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).n2x = function (c) {
    this.r2s();
    var tmp = this.l2x_1;
    var tmp1 = this.m2x_1;
    this.m2x_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).y2x = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.l2x_1;
    var newSize = this.m2x_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).f3 = function () {
    return new UByteArray(this.y2x());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2x_1 = bufferWithData;
    this.t2x_1 = bufferWithData.length;
    this.g3(10);
  }
  protoOf(BooleanArrayBuilder).l2s = function () {
    return this.t2x_1;
  };
  protoOf(BooleanArrayBuilder).g3 = function (requiredCapacity) {
    if (this.s2x_1.length < requiredCapacity)
      this.s2x_1 = copyOf_6(this.s2x_1, coerceAtLeast(requiredCapacity, imul(this.s2x_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).u2x = function (c) {
    this.r2s();
    var tmp = this.s2x_1;
    var tmp1 = this.t2x_1;
    this.t2x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).f3 = function () {
    return copyOf_6(this.s2x_1, this.t2x_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().y2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.z2x_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).p2l = function () {
    return this.z2x_1;
  };
  protoOf(StringSerializer).q2l = function (decoder) {
    return decoder.m2o();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.a2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).p2l = function () {
    return this.a2y_1;
  };
  protoOf(CharSerializer).b2y = function (decoder) {
    return decoder.l2o();
  };
  protoOf(CharSerializer).q2l = function (decoder) {
    return new Char(this.b2y(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.c2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).p2l = function () {
    return this.c2y_1;
  };
  protoOf(DoubleSerializer).q2l = function (decoder) {
    return decoder.k2o();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.d2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).p2l = function () {
    return this.d2y_1;
  };
  protoOf(FloatSerializer).q2l = function (decoder) {
    return decoder.j2o();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.e2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).p2l = function () {
    return this.e2y_1;
  };
  protoOf(LongSerializer).q2l = function (decoder) {
    return decoder.i2o();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.f2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).p2l = function () {
    return this.f2y_1;
  };
  protoOf(IntSerializer).q2l = function (decoder) {
    return decoder.h2o();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.g2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).p2l = function () {
    return this.g2y_1;
  };
  protoOf(ShortSerializer).q2l = function (decoder) {
    return decoder.g2o();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.h2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).p2l = function () {
    return this.h2y_1;
  };
  protoOf(ByteSerializer).q2l = function (decoder) {
    return decoder.f2o();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.i2y_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).p2l = function () {
    return this.i2y_1;
  };
  protoOf(BooleanSerializer).q2l = function (decoder) {
    return decoder.e2o();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.j2y_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).p2l = function () {
    return this.j2y_1.p2l();
  };
  protoOf(UnitSerializer).k2y = function (decoder) {
    this.j2y_1.q2l(decoder);
  };
  protoOf(UnitSerializer).q2l = function (decoder) {
    this.k2y(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.l2y_1 = serialName;
    this.m2y_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).n2m = function () {
    return this.l2y_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).b2n = function () {
    return this.m2y_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).z2m = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).f2n = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).e2n = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).g2n = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).d2n = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).c2n = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.l2y_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.l2y_1 === other.l2y_1 ? equals(this.m2y_1, other.m2y_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.l2y_1) + imul(31, this.m2y_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().l2();
    var tmp0_iterator = keys.o();
    while (tmp0_iterator.c1()) {
      var primitive = tmp0_iterator.e1();
      var simpleName = capitalize(ensureNotNull(primitive.h7()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().h8(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().k8(), CharArraySerializer()), to(PrimitiveClasses_getInstance().f8(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().q8(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().e8(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().p8(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().o8(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().d8(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().n8(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().c8(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().m8(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().b8(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().l8(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().a8(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().j8(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().z7(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).p2y = function (_this__u8e3s4, index) {
    return this.r2y(this.q2y(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).r2y = function (nestedName) {
    var tmp0_elvis_lhs = this.u2y();
    return this.v2y(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).q2y = function (descriptor, index) {
    return descriptor.f2n(index);
  };
  protoOf(NamedValueDecoder).v2y = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.i2z(tag);
    var r = block();
    if (!$this.t2y_1) {
      $this.j2z();
    }
    $this.t2y_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.o2o($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.s2y_1 = ArrayList_init_$Create$_0();
    this.t2y_1 = false;
  }
  protoOf(TaggedDecoder).e2p = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).w2y = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).x2y = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).y2y = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z2y = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a2z = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b2z = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c2z = function (tag) {
    var tmp = this.w2y(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d2z = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e2z = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f2z = function (tag) {
    var tmp = this.w2y(tag);
    return tmp instanceof Char ? tmp.hb_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).g2z = function (tag) {
    var tmp = this.w2y(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h2z = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.i2z(tag);
    return this;
  };
  protoOf(TaggedDecoder).o2o = function (deserializer, previousValue) {
    return this.p2o(deserializer);
  };
  protoOf(TaggedDecoder).n2o = function (descriptor) {
    return this.h2z(this.j2z(), descriptor);
  };
  protoOf(TaggedDecoder).c2o = function () {
    var tmp0_elvis_lhs = this.u2y();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.x2y(currentTag);
  };
  protoOf(TaggedDecoder).d2o = function () {
    return null;
  };
  protoOf(TaggedDecoder).e2o = function () {
    return this.y2y(this.j2z());
  };
  protoOf(TaggedDecoder).f2o = function () {
    return this.z2y(this.j2z());
  };
  protoOf(TaggedDecoder).g2o = function () {
    return this.a2z(this.j2z());
  };
  protoOf(TaggedDecoder).h2o = function () {
    return this.b2z(this.j2z());
  };
  protoOf(TaggedDecoder).i2o = function () {
    return this.c2z(this.j2z());
  };
  protoOf(TaggedDecoder).j2o = function () {
    return this.d2z(this.j2z());
  };
  protoOf(TaggedDecoder).k2o = function () {
    return this.e2z(this.j2z());
  };
  protoOf(TaggedDecoder).l2o = function () {
    return this.f2z(this.j2z());
  };
  protoOf(TaggedDecoder).m2o = function () {
    return this.g2z(this.j2z());
  };
  protoOf(TaggedDecoder).q2o = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).r2o = function (descriptor) {
  };
  protoOf(TaggedDecoder).s2o = function (descriptor, index) {
    return this.y2y(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).t2o = function (descriptor, index) {
    return this.z2y(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).u2o = function (descriptor, index) {
    return this.a2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).v2o = function (descriptor, index) {
    return this.b2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).w2o = function (descriptor, index) {
    return this.c2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).x2o = function (descriptor, index) {
    return this.d2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).y2o = function (descriptor, index) {
    return this.e2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).z2o = function (descriptor, index) {
    return this.f2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).a2p = function (descriptor, index) {
    return this.g2z(this.p2y(descriptor, index));
  };
  protoOf(TaggedDecoder).b2p = function (descriptor, index) {
    return this.h2z(this.p2y(descriptor, index), descriptor.d2n(index));
  };
  protoOf(TaggedDecoder).c2p = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.p2y(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).u2y = function () {
    return lastOrNull(this.s2y_1);
  };
  protoOf(TaggedDecoder).i2z = function (name) {
    this.s2y_1.z(name);
  };
  protoOf(TaggedDecoder).j2z = function () {
    var r = this.s2y_1.l1(get_lastIndex_0(this.s2y_1));
    this.t2y_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.k2z_1 = key;
    this.l2z_1 = value;
  }
  protoOf(MapEntry).q2 = function () {
    return this.k2z_1;
  };
  protoOf(MapEntry).r2 = function () {
    return this.l2z_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.k2z_1 + ', value=' + this.l2z_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.k2z_1 == null ? 0 : hashCode(this.k2z_1);
    result = imul(result, 31) + (this.l2z_1 == null ? 0 : hashCode(this.l2z_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.k2z_1, tmp0_other_with_cast.k2z_1))
      return false;
    if (!equals(this.l2z_1, tmp0_other_with_cast.l2z_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c2m('key', $keySerializer.p2l());
      $this$buildSerialDescriptor.c2m('value', $valueSerializer.p2l());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.o2z_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).p2l = function () {
    return this.o2z_1;
  };
  protoOf(MapEntrySerializer_0).p2z = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.c2m('first', $keySerializer.p2l());
      $this$buildClassSerialDescriptor.c2m('second', $valueSerializer.p2l());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.u2z_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).p2l = function () {
    return this.u2z_1;
  };
  protoOf(PairSerializer_0).p2z = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.d2p($this.y2z_1, 0, $this.v2z_1);
    var b = composite.d2p($this.y2z_1, 1, $this.w2z_1);
    var c = composite.d2p($this.y2z_1, 2, $this.x2z_1);
    composite.r2o($this.y2z_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.g2p($this.y2z_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.d2p($this.y2z_1, 0, $this.v2z_1);
        } else {
          if (index === 1) {
            b = composite.d2p($this.y2z_1, 1, $this.w2z_1);
          } else {
            if (index === 2) {
              c = composite.d2p($this.y2z_1, 2, $this.x2z_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.r2o($this.y2z_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.c2m('first', this$0.v2z_1.p2l());
      $this$buildClassSerialDescriptor.c2m('second', this$0.w2z_1.p2l());
      $this$buildClassSerialDescriptor.c2m('third', this$0.x2z_1.p2l());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.v2z_1 = aSerializer;
    this.w2z_1 = bSerializer;
    this.x2z_1 = cSerializer;
    var tmp = this;
    tmp.y2z_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).p2l = function () {
    return this.y2z_1;
  };
  protoOf(TripleSerializer_0).q2l = function (decoder) {
    var composite = decoder.q2o(this.y2z_1);
    if (composite.f2p()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.q2z_1 = keySerializer;
    this.r2z_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).q2l = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.p2l();
    var composite = decoder.q2o(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.f2p()) {
        var key = composite.d2p(this.p2l(), 0, this.q2z_1);
        var value = composite.d2p(this.p2l(), 1, this.r2z_1);
        tmp$ret$0 = this.p2z(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.g2p(this.p2l());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.d2p(this.p2l(), 0, this.q2z_1);
          } else {
            if (idx === 1) {
              value_0 = composite.d2p(this.p2l(), 1, this.r2z_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.p2z(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.r2o(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.z2z_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).p2l = function () {
    return this.z2z_1;
  };
  protoOf(ULongSerializer).a30 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.n2o(this.z2z_1).i2o();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).q2l = function (decoder) {
    return new ULong(this.a30(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.b30_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).p2l = function () {
    return this.b30_1;
  };
  protoOf(UIntSerializer).c30 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.n2o(this.b30_1).h2o();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).q2l = function (decoder) {
    return new UInt(this.c30(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.d30_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).p2l = function () {
    return this.d30_1;
  };
  protoOf(UShortSerializer).e30 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.n2o(this.d30_1).g2o();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).q2l = function (decoder) {
    return new UShort(this.e30(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.f30_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).p2l = function () {
    return this.f30_1;
  };
  protoOf(UByteSerializer).g30 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.n2o(this.f30_1).f2o();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).q2l = function (decoder) {
    return new UByte(this.g30(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).r2m = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.q2m(kClass, typeArgumentsSerializers) : $super.q2m.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.h30_1 = class2ContextualFactory;
    this.i30_1 = polyBase2Serializers;
    this.j30_1 = polyBase2DefaultSerializerProvider;
    this.k30_1 = polyBase2NamedSerializers;
    this.l30_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).k2p = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.k30_1.y2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).y2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.l30_1.y2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).q2m = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.h30_1.y2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m30(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.n30_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n30_1.equals(tmp0_other_with_cast.n30_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n30_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.n30_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().z7()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().g8());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.k2u(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.o30_1 = $factory;
  }
  protoOf(createCache$1).s2m = function (key) {
    return this.o30_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p30_1 = $factory;
  }
  protoOf(createParametrizedCache$1).t2m = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.p30_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).u2m = get_isNullable;
  protoOf(SerialDescriptorImpl).a2n = get_isInline;
  protoOf(AbstractDecoder).d2p = decodeSerializableElement$default;
  protoOf(AbstractDecoder).p2o = decodeSerializableValue;
  protoOf(AbstractDecoder).f2p = decodeSequentially;
  protoOf(AbstractDecoder).h2p = decodeCollectionSize;
  protoOf(ListLikeDescriptor).u2m = get_isNullable;
  protoOf(ListLikeDescriptor).a2n = get_isInline;
  protoOf(ListLikeDescriptor).y2m = get_annotations;
  protoOf(MapLikeDescriptor).u2m = get_isNullable;
  protoOf(MapLikeDescriptor).a2n = get_isInline;
  protoOf(MapLikeDescriptor).y2m = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).u2m = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).a2n = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).c2u = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).u2m = get_isNullable;
  protoOf(NothingSerialDescriptor).a2n = get_isInline;
  protoOf(NothingSerialDescriptor).y2m = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).u2m = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).a2n = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).y2m = get_annotations;
  protoOf(TaggedDecoder).d2p = decodeSerializableElement$default;
  protoOf(TaggedDecoder).p2o = decodeSerializableValue;
  protoOf(TaggedDecoder).f2p = decodeSequentially;
  protoOf(TaggedDecoder).h2p = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PolymorphicSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = SerializationException_init_$Init$_0;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = CLASS_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_instance_0;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = serializer_0;
  _.$_$.r = serializer_9;
  _.$_$.s = serializer_7;
  _.$_$.t = serializer_11;
  _.$_$.u = serializer_5;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = buildSerialDescriptor;
  _.$_$.d1 = getContextualDescriptor;
  _.$_$.e1 = AbstractDecoder;
  _.$_$.f1 = CompositeDecoder;
  _.$_$.g1 = Decoder;
  _.$_$.h1 = AbstractPolymorphicSerializer;
  _.$_$.i1 = ElementMarker;
  _.$_$.j1 = typeParametersSerializers;
  _.$_$.k1 = GeneratedSerializer;
  _.$_$.l1 = InlinePrimitiveDescriptor;
  _.$_$.m1 = NamedValueDecoder;
  _.$_$.n1 = PluginGeneratedSerialDescriptor;
  _.$_$.o1 = SerializerFactory;
  _.$_$.p1 = jsonCachedSerialNames;
  _.$_$.q1 = throwMissingFieldException;
  _.$_$.r1 = EmptySerializersModule_0;
  _.$_$.s1 = DeserializationStrategy;
  _.$_$.t1 = KSerializer;
  _.$_$.u1 = MissingFieldException;
  _.$_$.v1 = SerializationException;
  _.$_$.w1 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
