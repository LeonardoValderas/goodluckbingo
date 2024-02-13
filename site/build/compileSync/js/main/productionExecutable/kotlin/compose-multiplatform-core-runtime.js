(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ha;
  var interfaceMeta = kotlin_kotlin.$_$.k9;
  var setMetadataFor = kotlin_kotlin.$_$.ia;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.ma;
  var classMeta = kotlin_kotlin.$_$.y8;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Companion_instance = kotlin_kotlin.$_$.b4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i2;
  var createFailure = kotlin_kotlin.$_$.be;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.oe;
  var intercepted = kotlin_kotlin.$_$.z7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.h8;
  var fold = kotlin_kotlin.$_$.g8;
  var minusKey = kotlin_kotlin.$_$.i8;
  var plus = kotlin_kotlin.$_$.k8;
  var isInterface = kotlin_kotlin.$_$.t9;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var Enum = kotlin_kotlin.$_$.bd;
  var IllegalStateException = kotlin_kotlin.$_$.fd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.s8;
  var defineProp = kotlin_kotlin.$_$.a9;
  var equals = kotlin_kotlin.$_$.b9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var fill = kotlin_kotlin.$_$.z5;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var rotateLeft = kotlin_kotlin.$_$.le;
  var hashCode = kotlin_kotlin.$_$.i9;
  var emptyList = kotlin_kotlin.$_$.w5;
  var toMutableList = kotlin_kotlin.$_$.p7;
  var rotateRight = kotlin_kotlin.$_$.me;
  var sortWith = kotlin_kotlin.$_$.i7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.qe;
  var plus_0 = kotlin_kotlin.$_$.c7;
  var compareValues = kotlin_kotlin.$_$.v7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var lazy = kotlin_kotlin.$_$.he;
  var firstOrNull = kotlin_kotlin.$_$.b6;
  var compareTo = kotlin_kotlin.$_$.z8;
  var KProperty1 = kotlin_kotlin.$_$.ya;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var isArray = kotlin_kotlin.$_$.l9;
  var Set = kotlin_kotlin.$_$.c5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var plus_1 = kotlin_kotlin.$_$.y6;
  var Exception = kotlin_kotlin.$_$.dd;
  var Map = kotlin_kotlin.$_$.x4;
  var fillArrayVal = kotlin_kotlin.$_$.c9;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var toString_0 = kotlin_kotlin.$_$.pe;
  var Element = kotlin_kotlin.$_$.j8;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var Collection = kotlin_kotlin.$_$.q4;
  var addAll = kotlin_kotlin.$_$.e5;
  var CoroutineImpl = kotlin_kotlin.$_$.l8;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x7;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toList = kotlin_kotlin.$_$.m7;
  var flatten = kotlin_kotlin.$_$.d6;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CancellationException = kotlin_kotlin.$_$.w7;
  var addSuppressed = kotlin_kotlin.$_$.xd;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var Long = kotlin_kotlin.$_$.gd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var removeFirst = kotlin_kotlin.$_$.e7;
  var arrayCopy = kotlin_kotlin.$_$.f5;
  var fill_0 = kotlin_kotlin.$_$.a6;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var first = kotlin_kotlin.$_$.c6;
  var last = kotlin_kotlin.$_$.q6;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var copyOf = kotlin_kotlin.$_$.t5;
  var joinToString = kotlin_kotlin.$_$.j6;
  var copyOf_0 = kotlin_kotlin.$_$.s5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var AbstractList = kotlin_kotlin.$_$.i4;
  var List = kotlin_kotlin.$_$.v4;
  var coerceAtMost = kotlin_kotlin.$_$.pa;
  var arrayIterator = kotlin_kotlin.$_$.q8;
  var AbstractMutableList = kotlin_kotlin.$_$.l4;
  var MutableList = kotlin_kotlin.$_$.y4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var indexOf = kotlin_kotlin.$_$.g6;
  var lastIndexOf = kotlin_kotlin.$_$.o6;
  var AbstractMap = kotlin_kotlin.$_$.j4;
  var AbstractMutableMap = kotlin_kotlin.$_$.m4;
  var MutableMap = kotlin_kotlin.$_$.a5;
  var MutableEntry = kotlin_kotlin.$_$.z4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var AbstractMutableSet = kotlin_kotlin.$_$.n4;
  var MutableSet = kotlin_kotlin.$_$.b5;
  var AbstractMutableCollection = kotlin_kotlin.$_$.k4;
  var Entry = kotlin_kotlin.$_$.w4;
  var AbstractSet = kotlin_kotlin.$_$.o4;
  var AbstractCollection = kotlin_kotlin.$_$.h4;
  var objectCreate = kotlin_kotlin.$_$.fa;
  var until = kotlin_kotlin.$_$.ta;
  var step = kotlin_kotlin.$_$.sa;
  var countOneBits = kotlin_kotlin.$_$.zd;
  var takeLowestOneBit = kotlin_kotlin.$_$.ne;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var longArray = kotlin_kotlin.$_$.z9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Char = kotlin_kotlin.$_$.yc;
  var isCharSequence = kotlin_kotlin.$_$.p9;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var contains = kotlin_kotlin.$_$.i5;
  var plus_2 = kotlin_kotlin.$_$.b7;
  var primitiveArrayConcat = kotlin_kotlin.$_$.f;
  var SequenceScope = kotlin_kotlin.$_$.ab;
  var intArrayIterator = kotlin_kotlin.$_$.j9;
  var Companion_getInstance = kotlin_kotlin.$_$.a4;
  var toIntArray = kotlin_kotlin.$_$.l7;
  var sequence = kotlin_kotlin.$_$.bb;
  var anyToString = kotlin_kotlin.$_$.p8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.wc;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.d2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.d1;
  var println = kotlin_kotlin.$_$.o8;
  var printStackTrace = kotlin_kotlin.$_$.ke;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.s12(value);
  }
  function changedInstance(value) {
    return this.r12(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta, VOID, VOID, IdentityArrayIntMap);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta, VOID, VOID, IdentityScopeMap);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, Collection, MutableList]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableSet, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [Collection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta, VOID, VOID, DeltaCounter);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [MutableList, StateObject], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.oz_1 = applier;
    this.pz_1 = offset;
    this.qz_1 = 0;
  }
  protoOf(OffsetApplier).fz = function () {
    return this.oz_1.fz();
  };
  protoOf(OffsetApplier).iz = function (node) {
    this.qz_1 = this.qz_1 + 1 | 0;
    this.oz_1.iz(node);
  };
  protoOf(OffsetApplier).jz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.qz_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.qz_1 = this.qz_1 - 1 | 0;
    this.oz_1.jz();
  };
  protoOf(OffsetApplier).kz = function (index, instance) {
    this.oz_1.kz(index + (this.qz_1 === 0 ? this.pz_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).lz = function (index, instance) {
    this.oz_1.lz(index + (this.qz_1 === 0 ? this.pz_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).mz = function (index, count) {
    this.oz_1.mz(index + (this.qz_1 === 0 ? this.pz_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).nz = function (from, to, count) {
    var effectiveOffset = this.qz_1 === 0 ? this.pz_1 : 0;
    this.oz_1.nz(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.rz_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.sz_1 = ArrayList_init_$Create$();
    this.tz_1 = this.rz_1;
    this.uz_1 = 8;
  }
  protoOf(AbstractApplier).vz = function (_set____db54di) {
    this.tz_1 = _set____db54di;
  };
  protoOf(AbstractApplier).fz = function () {
    return this.tz_1;
  };
  protoOf(AbstractApplier).wz = function (node) {
    this.sz_1.z(this.fz());
    this.vz(node);
  };
  protoOf(AbstractApplier).iz = function (node) {
    return this.wz((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).jz = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sz_1.t()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.vz(this.sz_1.l1(this.sz_1.m() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.xz_1 = onFrame;
    this.yz_1 = continuation;
  }
  protoOf(FrameAwaiter).zz = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.xz_1(timeNanos);
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
    var tmp$ret$3 = tmp;
    this.yz_1.v6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b10_1;
    if (!($this.c10_1 == null))
      return Unit_instance;
    $this.c10_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.d10_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.yz_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.v6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.d10_1.g1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b10_1;
      var tmp = this$0.d10_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.a1(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.a10_1 = onNewAwaiters;
    this.b10_1 = createSynchronizedObject();
    this.c10_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d10_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e10_1 = ArrayList_init_$Create$();
    this.f10_1 = 8;
  }
  protoOf(BroadcastFrameClock).g10 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b10_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.d10_1.t();
  };
  protoOf(BroadcastFrameClock).h10 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b10_1;
    var toResume = this.d10_1;
    this.d10_1 = this.e10_1;
    this.e10_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.n(i).zz(timeNanos);
      }
       while (inductionVariable < last);
    toResume.g1();
  };
  protoOf(BroadcastFrameClock).i10 = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.io();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.b10_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.c10_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.v6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.d10_1.t();
      var tmp = this.d10_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.z(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.ym(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.a10_1 == null) : false) {
        try {
          this.a10_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.km();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.h11();
    while (tmp0_iterator.c1()) {
      var slot = tmp0_iterator.e1();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.i11(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.j11(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.rp();
      }
    }
    _this__u8e3s4.r11();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.s11_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.h12(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.i12();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.z12_1 = compositionLocal;
    this.a13_1 = value;
    this.b13_1 = canOverride;
    this.c13_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.g12(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.d13() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e13(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f13();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.g13_1 = content;
    this.h13_1 = parameter;
    this.i13_1 = composition;
    this.j13_1 = slotTable;
    this.k13_1 = anchor;
    this.l13_1 = invalidations;
    this.m13_1 = locals;
    this.n13_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.o13_1 = message;
  }
  protoOf(ComposeRuntimeError).y6 = function () {
    return this.o13_1;
  };
  function startRoot($this) {
    $this.w14_1 = $this.r13_1.z15();
    startGroup($this, 100);
    $this.q13_1.b16();
    $this.j14_1 = $this.q13_1.c16();
    $this.m14_1.f16(asInt($this.l14_1));
    $this.l14_1 = $this.r12($this.j14_1);
    $this.a15_1 = null;
    if (!$this.e14_1) {
      $this.e14_1 = $this.q13_1.g16();
    }
    var tmp0_safe_receiver = read($this.j14_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.z($this.r13_1);
      $this.q13_1.h16(tmp0_safe_receiver);
    }
    startGroup($this, $this.q13_1.i16());
  }
  function endRoot($this) {
    endGroup($this);
    $this.q13_1.j16();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.w14_1.w16();
    $this.f14_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.w13_1.g1();
    $this.z13_1.g1();
    $this.b14_1.g1();
    $this.i14_1.g1();
    $this.m14_1.g1();
    $this.k14_1.g1();
    if (!$this.w14_1.p16_1) {
      $this.w14_1.w16();
    }
    if (!$this.y14_1.f11_1) {
      $this.y14_1.w16();
    }
    $this.d15_1.g1();
    createFreshInsertTable($this);
    $this.f15_1 = 0;
    $this.p14_1 = 0;
    $this.g14_1 = false;
    $this.e15_1 = false;
    $this.n14_1 = false;
    $this.u14_1 = false;
    $this.f14_1 = false;
    $this.o14_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().z16_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().z16_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.a14_1 = $this.a14_1 + $this.w14_1.c17() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.a15_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.w14_1.s16_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.e15_1 ? $this.z14_1 : false) {
      var current = $this.y14_1.e11_1;
      while (current > 0) {
        if ($this.y14_1.f17(current) === 202 ? equals($this.y14_1.e17(current), get_compositionLocalMap()) : false) {
          var tmp = $this.y14_1.d17(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.a15_1 = providers;
          return providers;
        }
        current = $this.y14_1.g17(current);
      }
    }
    if ($this.w14_1.m() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.w14_1.f17(current_0) === 202 ? equals($this.w14_1.e17(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.k14_1.n(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.w14_1.d17(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.a15_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.w14_1.g17(current_0);
      }
    }
    $this.a15_1 = $this.j14_1;
    return $this.j14_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = parentScope.h17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    this_0.p2(currentProviders);
    var providerScope = this_0.f3();
    startGroup_0($this, 204, get_providerMaps());
    $this.r12(providerScope);
    $this.r12(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.y14_1.f11_1) {
      $this.y14_1 = $this.x14_1.i17();
      $this.y14_1.j12();
      $this.z14_1 = false;
      $this.a15_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.y14_1.f11_1);
    $this.x14_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.x14_1.i17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.w16();
    tmp.y14_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.w14_1.k12();
    } else {
      if (!(data == null) ? !($this.w14_1.j17() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.w14_1.k17();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().z16_1));
    if ($this.e15_1) {
      $this.w14_1.l17();
      var startIndex = $this.y14_1.d11_1;
      if (isNode) {
        $this.y14_1.o17(key, Companion_getInstance_0().s11_1);
      } else if (!(data == null)) {
        var tmp = $this.y14_1;
        tmp.n17(key, objectKey == null ? Companion_getInstance_0().s11_1 : objectKey, data);
      } else {
        var tmp_0 = $this.y14_1;
        tmp_0.m17(key, objectKey == null ? Companion_getInstance_0().s11_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.x13_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.v17(insertKeyInfo, $this.y13_1 - tmp2_safe_receiver.q17_1 | 0);
        tmp2_safe_receiver.w17(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().a17_1))) {
      tmp_1 = $this.n14_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.x13_1 == null) {
      var slotKey = $this.w14_1.x17();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.w14_1.z17()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.x13_1 = new Pending($this.w14_1.y17(), $this.y13_1);
      }
    }
    var pending = $this.x13_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.a18(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.w17(keyInfo);
        var location = keyInfo.f18_1;
        $this.y13_1 = pending.i18(keyInfo) + pending.q17_1 | 0;
        var relativePosition = pending.j18(keyInfo);
        var currentRelativePosition = relativePosition - pending.r17_1 | 0;
        pending.k18(relativePosition, pending.r17_1);
        recordReaderMoving($this, location);
        $this.w14_1.l18(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.w14_1.l17();
        $this.e15_1 = true;
        $this.a15_1 = null;
        ensureWriter($this);
        $this.y14_1.b18();
        var startIndex_0 = $this.y14_1.d11_1;
        if (isNode) {
          $this.y14_1.o17(key, Companion_getInstance_0().s11_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.y14_1;
          tmp_2.n17(key, objectKey == null ? Companion_getInstance_0().s11_1 : objectKey, data);
        } else {
          var tmp_3 = $this.y14_1;
          tmp_3.m17(key, objectKey == null ? Companion_getInstance_0().s11_1 : objectKey);
        }
        $this.c15_1 = $this.y14_1.c18(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.v17(insertKeyInfo_0, $this.y13_1 - pending.q17_1 | 0);
        pending.w17(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.y13_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.w13_1.m18($this.x13_1);
    $this.x13_1 = newPending;
    $this.z13_1.f16($this.y13_1);
    if (isNode)
      $this.y13_1 = 0;
    $this.b14_1.f16($this.a14_1);
    $this.a14_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.w13_1.n18();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.r17_1 = previousPending.r17_1 + 1 | 0;
    }
    $this.x13_1 = previousPending;
    $this.y13_1 = $this.z13_1.n18() + expectedNodeCount | 0;
    $this.a14_1 = $this.b14_1.n18() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.e15_1) {
      var parent = $this.y14_1.e11_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.y14_1.f17(parent), $this.y14_1.e17(parent), $this.y14_1.d17(parent));
    } else {
      var parent_0 = $this.w14_1.s16_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.w14_1.f17(parent_0), $this.w14_1.e17(parent_0), $this.w14_1.d17(parent_0));
    }
    var expectedNodeCount = $this.a14_1;
    var pending = $this.x13_1;
    if (!(pending == null) ? pending.p17_1.m() > 0 : false) {
      var previous = pending.p17_1;
      var current = pending.o18();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.m();
      var previousIndex = 0;
      var previousEnd = previous.m();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.n(previousIndex);
        if (!usedKeys.r(previousInfo)) {
          var deleteOffset = pending.i18(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.q17_1 | 0, previousInfo.g18_1);
          pending.p18(previousInfo.f18_1, 0);
          recordReaderMoving($this, previousInfo.f18_1);
          $this.w14_1.l18(previousInfo.f18_1);
          recordDelete($this);
          $this.w14_1.c17();
          removeRange($this.h14_1, previousInfo.f18_1, previousInfo.f18_1 + $this.w14_1.q18(previousInfo.f18_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.r(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.n(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.i18(currentInfo);
            placedKeys.z(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.r18(currentInfo);
              recordMoveNode($this, nodePosition + pending.q17_1 | 0, nodeOffset + pending.q17_1 | 0, updatedCount);
              pending.s18(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.r18(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.m() > 0) {
        recordReaderMoving($this, $this.w14_1.t18());
        $this.w14_1.j12();
      }
    }
    var removeIndex = $this.y13_1;
    while (!$this.w14_1.u18()) {
      var startSlot = $this.w14_1.q16_1;
      recordDelete($this);
      var nodesToRemove = $this.w14_1.c17();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.h14_1, startSlot, $this.w14_1.q16_1);
    }
    var inserting = $this.e15_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.w14_1.w18();
      var parentGroup = $this.y14_1.e11_1;
      $this.y14_1.x18();
      if (!$this.w14_1.a19()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.y14_1.y18();
        $this.y14_1.w16();
        recordInsert($this, $this.c15_1);
        $this.e15_1 = false;
        if (!$this.r13_1.z18()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.w14_1.s16_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.w14_1.v18();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.u14_1;
    $this.u14_1 = true;
    var recomposed = false;
    var parent = $this.w14_1.s16_1;
    var end = parent + $this.w14_1.q18(parent) | 0;
    var recomposeIndex = $this.y13_1;
    var recomposeCompoundKey = $this.f15_1;
    var oldGroupNodeCount = $this.a14_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.h14_1, $this.w14_1.q16_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.c19_1;
      removeLocation($this.h14_1, location);
      if (firstInRange_0.h19()) {
        recomposed = true;
        $this.w14_1.l18(location);
        var newGroup = $this.w14_1.q16_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.y13_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.f15_1 = compoundKeyOf($this, $this.w14_1.g17(newGroup), parent, recomposeCompoundKey);
        $this.a15_1 = null;
        firstInRange_0.b19_1.f19($this);
        $this.a15_1 = null;
        $this.w14_1.g19(parent);
      } else {
        $this.t14_1.m18(firstInRange_0.b19_1);
        firstInRange_0.b19_1.e19();
        $this.t14_1.n18();
      }
      firstInRange_0 = firstInRange($this.h14_1, $this.w14_1.q16_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.w14_1.j12();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.y13_1 = recomposeIndex + parentGroupNodes | 0;
      $this.a14_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.f15_1 = recomposeCompoundKey;
    $this.u14_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.w13_1.m() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.w13_1.i19(pendingIndex);
            if (!(pending == null) ? pending.p18(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.w14_1.s16_1;
        } else {
          if ($this.w14_1.j19(current))
            break $l$loop_0;
          current = $this.w14_1.g17(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.w14_1.g17(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.w14_1.j19(anchorGroup)) {
      anchorGroup = $this.w14_1.g17(anchorGroup);
    }
    var index = $this.w14_1.j19(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.w14_1.k19(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.w14_1.q18(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.d14_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.y2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.c14_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.w14_1.k19(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.d14_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.d14_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.o2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.c14_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.w14_1.m());
          fill(newCounts_0, -1);
          $this.c14_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.c14_1 = null;
    $this.d14_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.w14_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.j19(current)) {
        recordUp($this);
      }
      current = reader.g17(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.w14_1.g17(group), nearestCommonRoot);
      if ($this.w14_1.j19(group)) {
        recordDown($this, nodeAt($this.w14_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.w14_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.w14_1.g17(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.l19(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.e17(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.sa_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.f17(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.d17(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().s11_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.a14_1 = $this.w14_1.m19();
    $this.w14_1.j12();
  }
  function addRecomposeScope($this) {
    if ($this.e15_1) {
      var tmp = $this.v13_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.t14_1.m18(scope);
      $this.n19(scope);
      scope.p19($this.q14_1);
    } else {
      var invalidation = removeLocation($this.h14_1, $this.w14_1.s16_1);
      var slot = $this.w14_1.e1();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().s11_1)) {
        var tmp_1 = $this.v13_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.n19(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.o19(!(invalidation == null));
      $this.t14_1.m18(scope_0);
      scope_0.p19($this.q14_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.a12(get_movableContentKey(), content);
    $this.r12(parameter);
    var savedCompoundKeyHash = $this.f15_1;
    try {
      $this.f15_1 = get_movableContentKey();
      if ($this.e15_1) {
        $this.y14_1.q19();
      }
      var providersChanged = $this.e15_1 ? false : !equals($this.w14_1.j17(), locals);
      if (providersChanged) {
        $this.k14_1.r19($this.w14_1.q16_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().z16_1, locals);
      if ($this.e15_1 ? !force : false) {
        $this.z14_1 = true;
        $this.a15_1 = null;
        var anchor = $this.y14_1.c18($this.y14_1.g17($this.y14_1.e11_1));
        var reference = new MovableContentStateReference(content, parameter, $this.v13_1, $this.x14_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.q13_1.s19(reference);
      } else {
        var savedProvidersInvalid = $this.l14_1;
        $this.l14_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.l14_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.f15_1 = savedCompoundKeyHash;
      $this.b12();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var newChanges = $this.u13_1;
      var savedChanges = $this.t13_1;
      try {
        $this.t13_1 = newChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.n(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.c7();
            var from = item.d7();
            var anchor = to.k13_1;
            var location = to.j13_1.t19(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.j13_1;
              if (equals(toSlotTable, $this.x14_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader = to.j13_1.z15();
              var tmp;
              try {
                reader.l18(location);
                $this.i15_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, reader, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.t()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_instance;
                }
                tmp = tmp_0;
              }finally {
                reader.w16();
              }
            } else {
              var resolvedState = $this.q13_1.u19(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.v19_1;
              var fromTable = tmp1_elvis_lhs == null ? from.j13_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.v19_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c18(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.k13_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.t()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.j13_1, $this.r13_1)) {
                  var group = $this.r13_1.t19(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.m() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader_0 = fromTable.z15();
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.w14_1;
                  var savedCountOverrides = $this.c14_1;
                  $this.c14_1 = null;
                  try {
                    $this.w14_1 = reader_0;
                    var newLocation = fromTable.t19(fromAnchor);
                    reader_0.l18(newLocation);
                    $this.i15_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.t13_1;
                      try {
                        $this.t13_1 = offsetChanges_0;
                        var tmp_2 = reader_0.q16_1;
                        var tmp_3 = from.l13_1;
                        recomposeMovableContent($this, from.i13_1, to.i13_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.t13_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.t()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_instance;
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.w14_1 = savedReader;
                    $this.c14_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                reader_0.w16();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.i15_1 = 0;
        break $l$block_1;
      }finally {
        $this.t13_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.k15_1;
    var savedIsComposing = $this.u14_1;
    var savedNodeIndex = $this.y13_1;
    try {
      $this.k15_1 = false;
      $this.u14_1 = true;
      $this.y13_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.n(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.c7();
          var instances = item.d7();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.z19_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.y19_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.x19(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.x19(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.a1a(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.k15_1 = savedImplicitRootStart;
      $this.u14_1 = savedIsComposing;
      $this.y13_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.b1a(_this__u8e3s4.s16_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.b1a(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.g14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.g14_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.g14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.t13_1.z(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.g15_1;
    if (count > 0) {
      $this.g15_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.h15_1.c1a()) {
      realizeDowns($this, $this.h15_1.i3());
      $this.h15_1.g1();
    }
  }
  function recordDown($this, node) {
    $this.h15_1.m18(node);
  }
  function recordUp($this) {
    if ($this.h15_1.c1a()) {
      $this.h15_1.n18();
    } else {
      $this.g15_1 = $this.g15_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.w14_1.s16_1 : $this.w14_1.q16_1;
    var distance = location - $this.i15_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.i15_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.d15_1.t()) {
      var insertTable = $this.x14_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.d15_1);
      $this.d15_1.g1();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.x14_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.d15_1.z(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.m15_1.m18(change);
  }
  function registerInsertUpFixup($this) {
    $this.d15_1.z($this.m15_1.n18());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.w14_1.q16_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.i15_1 = $this.i15_1 + $this.w14_1.d1a() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.i17();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.b18();
      writer.m17(get_movableContentKey(), reference.g13_1);
      writer.q19();
      writer.e1a(reference.h13_1);
      var anchors = slots.f1a(reference.k13_1, 1, writer);
      writer.c17();
      writer.x18();
      writer.y18();
      tmp = anchors;
    }finally {
      writer.w16();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.h1a(slotTable, anchors_0)) {
      var composition = $this.v13_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.i17();
      var tmp_0;
      try {
        Companion_instance_2.g1a(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.w16();
      }
    }
    $this.q13_1.i1a(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.r13_1.j1a()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.b15_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.r13_1.z15();
      var tmp;
      try {
        $this.w14_1 = reader;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.t13_1;
          try {
            $this.t13_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.j15_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_instance;
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.t13_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        reader.w16();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.w14_1.q16_1 - $this.i15_1 | 0;
    $this.i15_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.w14_1.m() > 0) {
      var reader = $this.w14_1;
      var location = reader.s16_1;
      if (!($this.l15_1.k1a(-2) === location)) {
        if (!$this.j15_1 ? $this.k15_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.j15_1 = true;
        }
        if (location > 0) {
          var anchor = reader.c18(location);
          $this.l15_1.f16(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.w14_1.s16_1;
    var currentStartedGroup = $this.l15_1.k1a(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.l15_1.k1a(-1) === location) {
      $this.l15_1.n18();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.j15_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.j15_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.w13_1.t()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.l15_1.t()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.x13_1 = null;
    $this.y13_1 = 0;
    $this.a14_1 = 0;
    $this.i15_1 = 0;
    $this.f15_1 = 0;
    $this.g14_1 = false;
    $this.j15_1 = false;
    $this.l15_1.g1();
    $this.t14_1.g1();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.n15_1 === nodeIndex) {
        $this.q15_1 = $this.q15_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.n15_1 = nodeIndex;
        $this.q15_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.q15_1 > 0 ? $this.o15_1 === (from - $this.q15_1 | 0) : false) ? $this.p15_1 === (to - $this.q15_1 | 0) : false) {
        $this.q15_1 = $this.q15_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.o15_1 = from;
        $this.p15_1 = to;
        $this.q15_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.q15_1;
    $this.q15_1 = 0;
    if (count > 0) {
      if ($this.n15_1 >= 0) {
        var removeIndex = $this.n15_1;
        $this.n15_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.o15_1;
        $this.o15_1 = -1;
        var to = $this.p15_1;
        $this.p15_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s11_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.sa_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.f15_1;
    tmp.f15_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().s11_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.sa_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.f15_1 ^ groupKey;
    tmp.f15_1 = rotateRight(this_0, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.l1a(sectionName);
      try {
        $this.q14_1 = currentSnapshot().r1a();
        $this.k14_1.g1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.u1a_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.s1a_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.t1a_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.m11_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1a_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.h14_1.z(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var this_0 = $this.h14_1;
        if (this_0.m() > 1) {
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(this_0, tmp$ret$1);
        }
        $this.y13_1 = 0;
        var complete = false;
        $this.u14_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.w1a();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.n19((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.s14_1;
          var observers = derivedStateObservers_0();
          try {
            observers.b1b(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.f14_1 ? true : $this.l14_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().s11_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.c1b();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$2 = observers.z1a_1 - 1 | 0;
            observers.l1(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_instance;
        }finally {
          $this.u14_1 = false;
          $this.h14_1.g1();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_instance.d1b(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.e1b_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ia = function (a, b) {
    return this.e1b_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ia(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.f1b(index)) {
      slots.j12();
      if (slots.j19(slots.e11_1)) {
        applier.jz();
      }
      slots.x18();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.d11_1;
    var current = slots.e11_1;
    while (current >= 0 ? !slots.j19(current) : false) {
      current = slots.g17(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.g1b(original, current)) {
        if (slots.j19(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.j19(current) ? 1 : slots.k19(current)) | 0;
        current = current + slots.q18(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.t19(anchor);
    runtimeCheck(slots.d11_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.d11_1 < destination) {
      if (slots.i1b(destination)) {
        if (slots.h1b()) {
          applier.iz(slots.b1a(slots.d11_1));
          nodeIndex = 0;
        }
        slots.k17();
      } else
        nodeIndex = nodeIndex + slots.c17() | 0;
    }
    runtimeCheck(slots.d11_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.w14_1.v1b(group)) {
      var key = this$0.w14_1.f17(group);
      var objectKey = this$0.w14_1.e17(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.w14_1.k1b(group, 0);
        var anchor = this$0.w14_1.c18(group);
        var end = group + this$0.w14_1.q18(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.h14_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.m());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.b19_1, item.d19_1);
            target.z(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.v13_1, this$0.r13_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.q13_1.u1b(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.w14_1.j19(group) ? 1 : this$0.w14_1.k19(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.w14_1.k19(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.w14_1.k1b(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.l1b_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.q1b_1.o();
            while (tmp0_iterator.c1()) {
              var element_0 = tmp0_iterator.e1();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.q13_1.t1b(element_0.v13_1);
            }
          }
          tmp_0 = this$0.w14_1.k19(group);
        } else {
          tmp_0 = this$0.w14_1.k19(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.w14_1.j1b(group)) {
      var size = this$0.w14_1.q18(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.w14_1.j19(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.w14_1.b1a(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.w14_1.q18(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.w14_1.k19(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.w1b_1 = this$0;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.x1b($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.kz($insertIndex, node);
      applier.iz(node);
      return Unit_instance;
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.y1b($groupAnchor);
      applier.jz();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.lz($insertIndex, nodeToInsert);
      return Unit_instance;
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.fz();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).j10();
    return Unit_instance;
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.fz();
      $block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), $value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.z1b($value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.z1b($value);
        tmp = Unit_instance;
      }
      var previous = slots.a1c($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.j11(previous);
        tmp_0 = Unit_instance;
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.rp();
          tmp_0 = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y11(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_instance;
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.z11();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.b1c($data);
      return Unit_instance;
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.c1c($currentRelativePosition);
      return Unit_instance;
    };
  }
  function ComposerImpl$endRestartGroup$lambda($this, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $this(this$0.v13_1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.e1c_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (!isInterface(applier, Applier))
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $reader, $to) {
    return function () {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var this_0 = this$0;
        var newChanges = $offsetChanges;
        var savedChanges = this_0.t13_1;
        try {
          this_0.t13_1 = newChanges;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var this_1 = this$0;
            var reader = $reader;
            var savedReader = this_1.w14_1;
            var savedCountOverrides = this_1.c14_1;
            this_1.c14_1 = null;
            try {
              this_1.w14_1 = reader;
              invokeMovableContentLambda(this$0, $to.g13_1, $to.m13_1, $to.h13_1, true);
              break $l$block;
            }finally {
              this_1.w14_1 = savedReader;
              this_1.c14_1 = savedCountOverrides;
            }
          }
          break $l$block_0;
        }finally {
          this_0.t13_1 = savedChanges;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      var this_0 = $nodesToInsert;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!isInterface(applier, Applier))
            THROW_CCE();
          applier.lz(base + index | 0, item);
          applier.kz(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.q13_1.u19($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.f1c(1, state.v19_1, 2);
      var tmp_0 = Companion_instance_2;
      var tmp_1 = $to.i13_1;
      tmp_0.g1a(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.g13_1, $to.m13_1, $to.h13_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.x18();
    return Unit_instance;
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var times = $count;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < times) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.jz();
        }
         while (inductionVariable < times);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.iz($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.g1c($distance);
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.b18();
      slots.i1c($insertTable, $anchor.h1c($insertTable), false);
      slots.y18();
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer = $insertTable.i17();
      var tmp;
      try {
        var this_0 = $fixups;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.m() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.n(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, writer, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }finally {
        writer.w16();
      }
      slots.b18();
      slots.i1c($insertTable, $anchor.h1c($insertTable), false);
      slots.y18();
      return Unit_instance;
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.j1c_1 = $composition;
    this.k1c_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).l1c = function (scope, instance) {
    var tmp = this.j1c_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1c(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.k1c_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.l13_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.m1c(this_0);
        tmp_2 = this_0;
      }
      tmp_0.l13_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).n1c = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).o1c = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.p1c($anchor);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.mz($removeIndex, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.nz($from, $to, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.c19_1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp$ret$1 = b.c19_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.p13_1 = applier;
    this.q13_1 = parentContext;
    this.r13_1 = slotTable;
    this.s13_1 = abandonSet;
    this.t13_1 = changes;
    this.u13_1 = lateChanges;
    this.v13_1 = composition;
    this.w13_1 = new Stack();
    this.x13_1 = null;
    this.y13_1 = 0;
    this.z13_1 = new IntStack();
    this.a14_1 = 0;
    this.b14_1 = new IntStack();
    this.c14_1 = null;
    this.d14_1 = null;
    this.e14_1 = false;
    this.f14_1 = false;
    this.g14_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h14_1 = ArrayList_init_$Create$();
    this.i14_1 = new IntStack();
    this.j14_1 = persistentCompositionLocalHashMapOf();
    this.k14_1 = new IntMap();
    this.l14_1 = false;
    this.m14_1 = new IntStack();
    this.n14_1 = false;
    this.o14_1 = -1;
    this.p14_1 = 0;
    this.q14_1 = 0;
    this.r14_1 = true;
    var tmp_0 = this;
    tmp_0.s14_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.t14_1 = new Stack();
    this.u14_1 = false;
    this.v14_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.r13_1.z15();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.w16();
    tmp_1.w14_1 = this_0;
    this.x14_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.x14_1.i17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.w16();
    tmp_2.y14_1 = this_1;
    this.z14_1 = false;
    this.a15_1 = null;
    this.b15_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.x14_1.z15();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.c18(0);
    }finally {
      reader.w16();
    }
    tmp_3.c15_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.d15_1 = ArrayList_init_$Create$();
    this.e15_1 = false;
    this.f15_1 = 0;
    this.g15_1 = 0;
    this.h15_1 = new Stack();
    this.i15_1 = 0;
    this.j15_1 = false;
    this.k15_1 = true;
    this.l15_1 = new IntStack();
    this.m15_1 = new Stack();
    this.n15_1 = -1;
    this.o15_1 = -1;
    this.p15_1 = -1;
    this.q15_1 = 0;
  }
  protoOf(ComposerImpl).t11 = function () {
    return this.p13_1;
  };
  protoOf(ComposerImpl).q1c = function () {
    return this.p14_1 > 0;
  };
  protoOf(ComposerImpl).y12 = function () {
    return this.q13_1.r1c();
  };
  protoOf(ComposerImpl).y11 = function (key) {
    return start(this, key, null, Companion_getInstance_1().z16_1, null);
  };
  protoOf(ComposerImpl).z11 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).c12 = function () {
    return start(this, -127, null, Companion_getInstance_1().z16_1, null);
  };
  protoOf(ComposerImpl).d12 = function () {
    endGroup(this);
    var scope = this.s1c();
    if (!(scope == null) ? scope.o18() : false) {
      scope.t1c(true);
    }
  };
  protoOf(ComposerImpl).w11 = function () {
    var tmp;
    if (this.l14_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.s1c();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w11()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a12 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().z16_1, null);
  };
  protoOf(ComposerImpl).b12 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).u1c = function () {
    createFreshInsertTable(this);
    this.k14_1.g1();
  };
  protoOf(ComposerImpl).u11 = function () {
    return this.e15_1;
  };
  protoOf(ComposerImpl).v11 = function () {
    var tmp;
    var tmp_0;
    if ((!this.e15_1 ? !this.n14_1 : false) ? !this.l14_1 : false) {
      var tmp0_safe_receiver = this.s1c();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1c()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.f14_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).k12 = function () {
    start(this, 125, null, Companion_getInstance_1().a17_1, null);
    this.g14_1 = true;
  };
  protoOf(ComposerImpl).l12 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.e15_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.z13_1.w1c();
    var groupAnchor = this.y14_1.c18(this.y14_1.e11_1);
    this.a14_1 = this.a14_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).m12 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.e15_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.w14_1, this);
    recordDown(this, node);
    var tmp;
    if (this.n14_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).n12 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).o12 = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.e15_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).w1a = function () {
    var tmp;
    if (this.e15_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().s11_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.w14_1.e1();
      tmp = this.n14_1 ? Companion_getInstance_0().s11_1 : it;
    }
    return tmp;
  };
  protoOf(ComposerImpl).r12 = function (value) {
    var tmp;
    if (!equals(this.w1a(), value)) {
      this.n19(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).t12 = function (value) {
    var tmp;
    if (!(this.w1a() === value)) {
      this.n19(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).s12 = function (value) {
    var next = this.w1a();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.n19(value);
    return true;
  };
  protoOf(ComposerImpl).n19 = function (value) {
    if (this.e15_1) {
      this.y14_1.e1a(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.s13_1.z(value);
      }
    } else {
      var groupSlotIndex = this.w14_1.x1c() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.s13_1.z(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).w12 = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.e15_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.z14_1 = true;
    } else {
      var tmp = this.w14_1.y1c(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.w14_1.y1c(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.v11() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.e15_1 : false) {
      this.k14_1.r19(this.w14_1.q16_1, providers);
    }
    this.m14_1.f16(asInt(this.l14_1));
    this.l14_1 = invalid;
    this.a15_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().z16_1, providers);
  };
  protoOf(ComposerImpl).x12 = function () {
    endGroup(this);
    endGroup(this);
    this.l14_1 = asBool(this.m14_1.n18());
    this.a15_1 = null;
  };
  protoOf(ComposerImpl).v12 = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).s1c = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.t14_1;
    return (this.p14_1 === 0 ? it.c1a() : false) ? it.w1c() : null;
  };
  protoOf(ComposerImpl).x19 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.m11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.w14_1.k16_1;
    var location = anchor.h1c(slotTable);
    if (this.u14_1 ? location >= this.w14_1.q16_1 : false) {
      insertIfMissing(this.h14_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).c1b = function () {
    if (this.h14_1.t()) {
      skipGroup(this);
    } else {
      var reader = this.w14_1;
      var key = reader.x17();
      var dataKey = reader.z17();
      var aux = reader.j17();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.h1b(), null);
      recomposeToGroupEnd(this);
      reader.v18();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).j12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.a14_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.s1c();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1c();
    }
    if (this.h14_1.t()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).e12 = function (key) {
    start(this, key, null, Companion_getInstance_1().z16_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).f12 = function () {
    var scope = this.t14_1.c1a() ? this.t14_1.n18() : null;
    if (scope != null) {
      scope.o19(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.a1d(this.q14_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.c1d() : false) ? scope.o18() ? true : this.e14_1 : false) {
      if (scope.m11_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.e15_1) {
          tmp_1 = this.y14_1.c18(this.y14_1.e11_1);
        } else {
          tmp_1 = this.w14_1.c18(this.w14_1.s16_1);
        }
        tmp_0.m11_1 = tmp_1;
      }
      scope.b1d(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).d1d = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).g12 = function (sourceInformation) {
    if (this.e15_1 ? this.r14_1 : false) {
      this.y14_1.e1d(sourceInformation);
    }
  };
  protoOf(ComposerImpl).h12 = function (key, sourceInformation) {
    if (this.r14_1) {
      start(this, key, null, Companion_getInstance_1().z16_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).i12 = function () {
    if (this.r14_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).f1d = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.u14_1 = true;
    try {
      block();
    }finally {
      this.u14_1 = false;
    }
  };
  protoOf(ComposerImpl).g1d = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.t13_1.t()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.c1a()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.h14_1.t();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.f14_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.t13_1.t();
    }
    return false;
  };
  protoOf(ComposerImpl).x11 = function () {
    return this.s1c();
  };
  protoOf(ComposerImpl).p12 = function () {
    return this.w1a();
  };
  protoOf(ComposerImpl).q12 = function (value) {
    return this.n19(value);
  };
  protoOf(ComposerImpl).u12 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.h1d(true);
    }
  };
  protoOf(ComposerImpl).i1d = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.t13_1.t()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.v19_1 = slotTable;
    this.w19_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.p17_1.m();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.p17_1.n(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.p17_1 = keyInfos;
    this.q17_1 = startIndex;
    this.r17_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q17_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s17_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.p17_1.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.p17_1.n(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.f18_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.g18_1);
        result.o2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.g18_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.t17_1 = result;
    var tmp_1 = this;
    tmp_1.u17_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).j1d = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.u17_1;
    keyMap$factory();
    return this_0.r2();
  };
  protoOf(Pending).a18 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.j1d(), joinedKey);
  };
  protoOf(Pending).w17 = function (keyInfo) {
    return this.s17_1.z(keyInfo);
  };
  protoOf(Pending).o18 = function () {
    return this.s17_1;
  };
  protoOf(Pending).k18 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.t17_1.m2().o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.k1d_1;
        if (position === from)
          element.k1d_1 = to;
        else if (to <= position ? position < from : false)
          element.k1d_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.t17_1.m2().o();
      while (tmp0_iterator_0.c1()) {
        var element_0 = tmp0_iterator_0.e1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.k1d_1;
        if (position_0 === from)
          element_0.k1d_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.k1d_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).s18 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.t17_1.m2().o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.l1d_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.l1d_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.l1d_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.t17_1.m2().o();
      while (tmp0_iterator_0.c1()) {
        var element_0 = tmp0_iterator_0.e1();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.l1d_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.l1d_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.l1d_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).v17 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.t17_1;
    var key = keyInfo.f18_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.o2(key, value);
  };
  protoOf(Pending).p18 = function (group, newCount) {
    var groupInfo = this.t17_1.y2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.l1d_1;
      var difference = newCount - groupInfo.m1d_1 | 0;
      groupInfo.m1d_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.t17_1.m2().o();
        while (tmp0_iterator.c1()) {
          var element = tmp0_iterator.e1();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.l1d_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.l1d_1 + difference | 0;
            if (newIndex >= 0)
              element.l1d_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).j18 = function (keyInfo) {
    var tmp0_safe_receiver = this.t17_1.y2(keyInfo.f18_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1d_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).i18 = function (keyInfo) {
    var tmp0_safe_receiver = this.t17_1.y2(keyInfo.f18_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1d_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).r18 = function (keyInfo) {
    var tmp0_safe_receiver = this.t17_1.y2(keyInfo.f18_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1d_1;
    return tmp1_elvis_lhs == null ? keyInfo.g18_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.b19_1 = scope;
    this.c19_1 = location;
    this.d19_1 = instances;
  }
  protoOf(Invalidation).h19 = function () {
    return this.b19_1.n1d(this.d19_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.z16_1 = _GroupKind___init__impl__iwqg06(0);
    this.a17_1 = _GroupKind___init__impl__iwqg06(1);
    this.b17_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var validation = _this__u8e3s4.n(index);
      if (validation.c19_1 < end) {
        _this__u8e3s4.l1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.m()) {
      var firstInvalidation = _this__u8e3s4.n(index);
      if (firstInvalidation.c19_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.l1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.g17(a) === b)
      return b;
    if (_this__u8e3s4.g17(b) === a)
      return a;
    if (_this__u8e3s4.g17(a) === _this__u8e3s4.g17(b))
      return _this__u8e3s4.g17(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.g17(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.g17(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.g17(currentA);
      currentB = _this__u8e3s4.g17(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.m1c(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.y1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.n(index).d19_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.n(index).d19_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.m1c(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.z15();
    var tmp;
    try {
      var index = _this__u8e3s4.t19(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.w16();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.m()) {
      var invalidation = _this__u8e3s4.n(index);
      if (invalidation.c19_1 < end) {
        result.z(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.k1d_1 = slotIndex;
    this.l1d_1 = nodeIndex;
    this.m1d_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.y2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.o2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.z(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.e18_1 == null) ? new JoinedKey(_this__u8e3s4.d18_1, _this__u8e3s4.e18_1) : _this__u8e3s4.d18_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.y2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.n(mid);
      var cmp = compareTo(midVal.c19_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.g17(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.y2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a1(value);
      var tmp_0;
      if (tmp0_safe_receiver.t()) {
        _this__u8e3s4.s2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.u11() ? true : !equals($this$with.p12(), value)) {
      $this$with.q12(value);
      _Updater___get_composer__impl__9ty7av($this).o12(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.j19(group)) {
      result.z($reader.b1a(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.q18(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.q18(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_instance;
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.j12();
    return Unit_instance;
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.x18();
    return Unit_instance;
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.o1d(0);
    return Unit_instance;
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.p1d();
    return Unit_instance;
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.j1d();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.g1e_1.q1c();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.s1d_1.n1e(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s1d_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.s1d_1.n1e(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s1d_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.w1d_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.z19_1;
      var inductionVariable = 0;
      var last = this_1.y19_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (!$this.b1e_1.u1e(value, scope) ? !scope.p1e(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (scope.o1e() ? !forgetConditionalScopes : false) {
              $this.x1d_1.z(scope);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.z(scope);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.z19_1;
      var inductionVariable = 0;
      var last = values.y19_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.p1e(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var this_0 = $this.y1d_1;
            var index = find_2(this_0, value);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var this_1 = scopeSetAt(this_0, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = this_1.z19_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.y19_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, it, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.p1e(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var this_2 = $this.y1d_1;
          var index_0 = find_2(this_2, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_3 = scopeSetAt(this_2, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = this_3.z19_1;
            var inductionVariable_1 = 0;
            var last_1 = this_3.y19_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var it_0 = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, it_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.x1d_1.t();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var this_4 = $this.w1d_1;
      var valueOrder = this_4.q1e_1;
      var scopeSets = this_4.s1e_1;
      var values_3 = this_4.r1e_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = this_4.t1e_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.z19_1;
          var size = set.y19_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.x1d_1.r(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.r(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.y19_1 = destinationIndex_0;
          if (set.y19_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = this_4.t1e_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      this_4.t1e_1 = destinationIndex;
      $this.x1d_1.g1();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var this_5 = $this.w1d_1;
        var valueOrder_0 = this_5.q1e_1;
        var scopeSets_0 = this_5.s1e_1;
        var values_5 = this_5.r1e_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = this_5.t1e_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.z19_1;
            var size_0 = set_0.y19_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = !(tmp_6 == null) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.r(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.y19_1 = destinationIndex_2;
            if (set_0.y19_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = this_5.t1e_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        this_5.t1e_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var this_0 = $this.y1d_1;
    var valueOrder = this_0.q1e_1;
    var scopeSets = this_0.s1e_1;
    var values = this_0.r1e_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this_0.t1e_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.z19_1;
        var size = set.y19_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = !(tmp == null) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.w1d_1.v1e(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.y19_1 = destinationIndex_0;
        if (set.y19_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = this_0.t1e_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    this_0.t1e_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.x1d_1.t()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.x1d_1.o();
      while (iter.c1()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.e1().o1e()) {
          iter.d1();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.w1d_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.z19_1;
      var inductionVariable = 0;
      var last = this_1.y19_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (scope.p1e(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.b1e_1.w1e(value, scope);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.u1d_1);
    try {
      if (changes.t())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.l1a(sectionName);
        try {
          $this.r1d_1.gz();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.v1d_1.i17();
          var tmp;
          try {
            var applier = $this.r1d_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.m() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.n(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, writer, manager);
              }
               while (inductionVariable <= last);
            changes.g1();
            tmp = Unit_instance;
          }finally {
            writer.w16();
          }
          $this.r1d_1.hz();
          break $l$block;
        }finally {
          Trace_instance.d1b(token);
        }
      }
      manager.d1f();
      manager.e1f();
      if ($this.d1e_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.l1a(sectionName_0);
          try {
            $this.d1e_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var this_0 = $this.w1d_1;
            var valueOrder = this_0.q1e_1;
            var scopeSets = this_0.s1e_1;
            var values = this_0.r1e_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = this_0.t1e_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.z19_1;
                var size = set.y19_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.f1f()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.y19_1 = destinationIndex_0;
                if (set.y19_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = this_0.t1e_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            this_0.t1e_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_instance.d1b(token_0);
          }
        }
      }
    }finally {
      if ($this.a1e_1.t()) {
        manager.g1f();
      }
    }
  }
  function abandonChanges($this) {
    $this.s1d_1.h1f(null);
    $this.z1d_1.g1();
    $this.a1e_1.g1();
    $this.u1d_1.g1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.i1f() ? $this.g1e_1.x19(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.t1d_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.e1e_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.v1d_1.j1f($this.f1e_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.c1e_1.k1f(scope, null);
      } else {
        addValue($this.c1e_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.q1d_1.l1f($this);
    return $this.i1f() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.c1e_1;
    $this.c1e_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.x1e_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y1e_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z1e_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.a1f_1 = ArrayList_init_$Create$();
    this.b1f_1 = null;
    this.c1f_1 = null;
  }
  protoOf(RememberEventDispatcher).z1b = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var index = this.z1e_1.a2(instance);
    var tmp;
    if (index >= 0) {
      this.z1e_1.l1(index);
      tmp = this.x1e_1.a1(instance);
    } else {
      tmp = this.y1e_1.z(instance);
    }
  };
  protoOf(RememberEventDispatcher).j11 = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var index = this.y1e_1.a2(instance);
    var tmp;
    if (index >= 0) {
      this.y1e_1.l1(index);
      tmp = this.x1e_1.a1(instance);
    } else {
      tmp = this.z1e_1.z(instance);
    }
  };
  protoOf(RememberEventDispatcher).i11 = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.c1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.c1f_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.z(instance);
  };
  protoOf(RememberEventDispatcher).d1f = function () {
    var deactivating = this.b1f_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.t())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:deactivations';
        var token = Trace_instance.l1a(sectionName);
        try {
          var inductionVariable = deactivating.m() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.n(i);
              instance.k10();
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.d1b(token);
        }
      }
      deactivating.g1();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z1e_1.t()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onForgotten';
        var token_0 = Trace_instance.l1a(sectionName_0);
        try {
          var inductionVariable_0 = this.z1e_1.m() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.z1e_1.n(i_0);
              if (!this.x1e_1.r(instance_0)) {
                instance_0.m1f();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.d1b(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y1e_1.t()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_1 = 'Compose:onRemembered';
        var token_1 = Trace_instance.l1a(sectionName_1);
        try {
          var this_0 = this.y1e_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = this_0.m() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = this_0.n(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.x1e_1.a1(item);
              item.n1f();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_instance;
          }
          break $l$block_1;
        }finally {
          Trace_instance.d1b(token_1);
        }
      }
    }
    var releasing = this.c1f_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.t())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_2 = 'Compose:releases';
        var token_2 = Trace_instance.l1a(sectionName_2);
        try {
          var inductionVariable_2 = releasing.m() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.n(i_1);
              instance_1.l10();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_instance;
          }
          break $l$block_2;
        }finally {
          Trace_instance.d1b(token_2);
        }
      }
      releasing.g1();
    }
  };
  protoOf(RememberEventDispatcher).e1f = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a1f_1.t()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.l1a(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.a1f_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.n(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.a1f_1.g1();
          break $l$block;
        }finally {
          Trace_instance.d1b(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).g1f = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x1e_1.t()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.l1a(sectionName);
        try {
          var iterator = this.x1e_1.o();
          while (iterator.c1()) {
            var instance = iterator.e1();
            iterator.d1();
            instance.o1f();
          }
          break $l$block;
        }finally {
          Trace_instance.d1b(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.q1d_1 = parent;
    this.r1d_1 = applier;
    this.s1d_1 = new AtomicReference(null);
    this.t1d_1 = createSynchronizedObject();
    this.u1d_1 = HashSet_init_$Create$();
    this.v1d_1 = new SlotTable();
    this.w1d_1 = new IdentityScopeMap();
    this.x1d_1 = HashSet_init_$Create$();
    this.y1d_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z1d_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.a1e_1 = ArrayList_init_$Create$();
    this.b1e_1 = new IdentityScopeMap();
    this.c1e_1 = new IdentityArrayMap();
    this.d1e_1 = false;
    this.e1e_1 = null;
    this.f1e_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.r1d_1, this.q1d_1, this.v1d_1, this.u1d_1, this.z1d_1, this.a1e_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.q1d_1.p1f(this_0);
    tmp_1.g1e_1 = this_0;
    this.h1e_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.q1d_1;
    tmp_2.i1e_1 = tmp_3 instanceof Recomposer;
    this.j1e_1 = false;
    this.k1e_1 = ComposableSingletons$CompositionKt_getInstance().q1f_1;
  }
  protoOf(CompositionImpl).i1f = function () {
    return this.g1e_1.u14_1;
  };
  protoOf(CompositionImpl).s1f = function () {
    return this.j1e_1;
  };
  protoOf(CompositionImpl).t1f = function (values) {
    $l$loop: while (true) {
      var old = this.s1d_1.hq();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.s1d_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.s1d_1.u1f(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.t1d_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).v1f = function (values) {
    var tmp0_iterator = values.o();
    while (tmp0_iterator.c1()) {
      var value = tmp0_iterator.e1();
      if (this.w1d_1.v1e(value) ? true : this.y1d_1.v1e(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).f1d = function (block) {
    return this.g1e_1.f1d(block);
  };
  protoOf(CompositionImpl).o1c = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.g1e_1.s1c();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.h1d(true);
        var alreadyRead = tmp0_safe_receiver.w1f(value);
        var tmp;
        if (!alreadyRead) {
          this.w1d_1.w1e(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.y1d_1.x1f(value);
            var indexedObject = value.y1f().z1f();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.y1d_1.w1e(dependency, value);
            }
            tmp_0 = Unit_instance;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).a1g = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    invalidateScopeOfLocked(this, value);
    var this_0 = this.y1d_1;
    var index = find_2(this_0, value);
    var tmp;
    if (index >= 0) {
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.z19_1;
      var inductionVariable = 0;
      var last = this_1.y19_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, it);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).b1g = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var this_0 = this.g1e_1.g1d(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.c1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.u1d_1.t();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).c1g = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.a7_1.i13_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.g1e_1.d1d(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u1d_1.t();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).d1g = function (state) {
    var manager = new RememberEventDispatcher(this.u1d_1);
    var slotTable = state.v19_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.i17();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.w16();
    }
    manager.d1f();
  };
  protoOf(CompositionImpl).e1g = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.z1d_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u1d_1.t();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).f1g = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.a1e_1.t()) {
          applyChangesInLocked(this, this.a1e_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u1d_1.t();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u1c = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.g1e_1.u1c();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.u1d_1.t()) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u1d_1.t();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).g1g = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t1d_1;
    var indexedObject = this.v1d_1.t15_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.h1g();
      }
    }
  };
  protoOf(CompositionImpl).a1a = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.e1e_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.f1e_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.e1e_1 = null;
        this.f1e_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).l1c = function (scope, instance) {
    if (scope.i1g()) {
      scope.b1d(true);
    }
    var anchor = scope.m11_1;
    if (anchor == null ? true : !anchor.f1f())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.v1d_1.j1g(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.t1d_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.e1e_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.k1g())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).n1c = function (scope) {
    this.d1e_1 = true;
  };
  protoOf(CompositionImpl).l1g = function (instance, scope) {
    this.w1d_1.u1e(instance, scope);
  };
  protoOf(CompositionImpl).m1g = function (state) {
    if (!this.w1d_1.v1e(state)) {
      this.y1d_1.x1f(state);
    }
  };
  protoOf(CompositionImpl).n1g = function (set__$_ezb9bk) {
    this.k1e_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).o1g = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.j1e_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.n1g(content);
    this.q1d_1.p1g(this, this.k1e_1);
  };
  protoOf(CompositionImpl).q1g = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent$composable.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.t1d_1;
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.g1e_1.i1d(invalidations, content);
          tmp_1 = Unit_instance;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.c1e_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.u1d_1.t();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u1d_1)).g1f();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.d1c(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.v11()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.q1f_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.r1f_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.s1g(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.r1g(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.m1c(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.m1c(value);
      _this__u8e3s4.k1f(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.a16_1 = 0;
  }
  protoOf(CompositionContext).h16 = function (table) {
  };
  protoOf(CompositionContext).p1f = function (composer) {
  };
  protoOf(CompositionContext).c16 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).b16 = function () {
  };
  protoOf(CompositionContext).j16 = function () {
  };
  protoOf(CompositionContext).u19 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.t1g_1 = new LazyValueHolder(defaultFactory);
    this.u1g_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.y1g_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).z1g = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).v1g = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e12(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.w12(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.x12();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.f12();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.d1h(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.h1h_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).v1g = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.y11(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p12();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().s11_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.h1h_1);
      $composer_1.q12(value_0);
      tmp = value_0;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.z11();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.gv(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.t1g_1.r2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.v2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.y2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y11(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = result.h17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.y11(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.b13_1 ? true : !contains_0(parentScope, provided.z12_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.z12_1;
        var key = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var value = provided.z12_1.v1g(provided.a13_1, $composer_0, 0);
        this_0.o2(key, value);
      }
      $composer_0.z11();
    }
    var tmp0 = this_0.f3();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
    return tmp0;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().hq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().m1h(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.n1h_1 = 0;
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.o1h_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).n1f = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).m1f = function () {
    cancel(this.o1h_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).o1f = function () {
    cancel(this.o1h_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.fd(Key_instance) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      this_0.lp(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(this_0);
    } else {
      var applyContext = composer.y12();
      tmp = CoroutineScope(applyContext.lg(Job(applyContext.fd(Key_instance))).lg(coroutineContext));
    }
    return tmp;
  }
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.y11(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.y11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.r12(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p12();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s11_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.q12(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.z11();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  function DisposableEffect$composable_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.y11(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.y11(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.r12(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p12();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance_0().s11_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.q12(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.z11();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.y11(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.y12();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.y11(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.r12(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p12();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s11_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.q12(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.z11();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  function DisposableEffectImpl(effect) {
    this.p1h_1 = effect;
    this.q1h_1 = null;
  }
  protoOf(DisposableEffectImpl).n1f = function () {
    this.q1h_1 = this.p1h_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).m1f = function () {
    var tmp0_safe_receiver = this.q1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bn();
    }
    this.q1h_1 = null;
  };
  protoOf(DisposableEffectImpl).o1f = function () {
  };
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.r1h_1 = task;
    this.s1h_1 = CoroutineScope(parentCoroutineContext);
    this.t1h_1 = null;
  }
  protoOf(LaunchedEffectImpl).n1f = function () {
    var tmp0_safe_receiver = this.t1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel_0(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.t1h_1 = launch(this.s1h_1, VOID, VOID, this.r1h_1);
  };
  protoOf(LaunchedEffectImpl).m1f = function () {
    var tmp0_safe_receiver = this.t1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sl(new LeftCompositionCancellationException());
    }
    this.t1h_1 = null;
  };
  protoOf(LaunchedEffectImpl).o1f = function () {
    var tmp0_safe_receiver = this.t1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sl(new LeftCompositionCancellationException());
    }
    this.t1h_1 = null;
  };
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.y11(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.y11(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.r12(key1) | $composer_1.r12(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.p12();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().s11_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.q12(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.z11();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.z11();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.sa_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.u1h_1 = left;
    this.v1h_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.u1h_1), 31) + hashCodeOf(this, this.v1h_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.u1h_1) + ', right=' + toString_0(this.v1h_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.u1h_1, tmp0_other_with_cast.u1h_1))
      return false;
    if (!equals(this.v1h_1, tmp0_other_with_cast.v1h_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.fd(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.w1h_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.w1h_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.w1h_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.w1h_1 === tmp0_other_with_cast.w1h_1))
      return false;
    return true;
  };
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.k11_1 = $this.k11_1 | 32;
    } else {
      $this.k11_1 = $this.k11_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.k11_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.k11_1 = $this.k11_1 | 16;
    } else {
      $this.k11_1 = $this.k11_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).g1a = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.t()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.n(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.x1h(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.y1h(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).h1a = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.t()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.j1g(item)) {
              var tmp_1 = slots.z1h(slots.t19(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.o11_1 === $token ? equals($instances, this$0.p11_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var this_0 = $instances;
        var keys = this_0.b1i_1;
        var values = this_0.c1i_1;
        var size = this_0.a1i_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
            var value = values[i];
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.also' call
            var this_1 = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (this_1) {
              composition.l1g(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.m1g(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.q11_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.d1i(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.u1a_1 === 0) {
                    this$0.q11_1 = null;
                    tmp_3 = Unit_instance;
                  }
                  tmp_2 = Unit_instance;
                }
              }
            }
            if (!this_1) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              destinationIndex = destinationIndex + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        this_0.a1i_1 = destinationIndex;
        var tmp_4;
        if ($instances.a1i_1 === 0) {
          this$0.p11_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.k11_1 = 0;
    this.l11_1 = owner;
    this.m11_1 = null;
    this.n11_1 = null;
    this.o11_1 = 0;
    this.p11_1 = null;
    this.q11_1 = null;
  }
  protoOf(RecomposeScopeImpl).f1f = function () {
    var tmp;
    if (!(this.l11_1 == null)) {
      var tmp0_safe_receiver = this.m11_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1f();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).k1g = function () {
    return !(this.n11_1 == null);
  };
  protoOf(RecomposeScopeImpl).h1d = function (value) {
    if (value) {
      this.k11_1 = this.k11_1 | 1;
    } else {
      this.k11_1 = this.k11_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).o18 = function () {
    return !((this.k11_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).t1c = function (value) {
    if (value) {
      this.k11_1 = this.k11_1 | 2;
    } else {
      this.k11_1 = this.k11_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).i1g = function () {
    return !((this.k11_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).b1d = function (value) {
    if (value) {
      this.k11_1 = this.k11_1 | 4;
    } else {
      this.k11_1 = this.k11_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).w11 = function () {
    return !((this.k11_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).o19 = function (value) {
    if (value) {
      this.k11_1 = this.k11_1 | 8;
    } else {
      this.k11_1 = this.k11_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).v1c = function () {
    return !((this.k11_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).f19 = function (composer) {
    var tmp0_safe_receiver = this.n11_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).p1e = function (value) {
    var tmp0_safe_receiver = this.l11_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1c(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).rp = function () {
    var tmp0_safe_receiver = this.l11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n1c(this);
    }
    this.l11_1 = null;
    this.p11_1 = null;
    this.q11_1 = null;
  };
  protoOf(RecomposeScopeImpl).y1h = function (owner) {
    this.l11_1 = owner;
  };
  protoOf(RecomposeScopeImpl).h1g = function () {
    var tmp0_safe_receiver = this.l11_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.l1c(this, null);
  };
  protoOf(RecomposeScopeImpl).d1h = function (block) {
    this.n11_1 = block;
  };
  protoOf(RecomposeScopeImpl).c1d = function () {
    return !((this.k11_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).p19 = function (token) {
    this.o11_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).z1c = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).w1f = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.p11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.p11_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.e1i(instance, this.o11_1);
    if (token === this.o11_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.q11_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.q11_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.k1f(instance, instance.y1f().f1i());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).o1e = function () {
    return !(this.q11_1 == null);
  };
  protoOf(RecomposeScopeImpl).n1d = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.q11_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.c1a()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.t();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.o();
        while (tmp0_iterator.c1()) {
          var element = tmp0_iterator.e1();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.j1h();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.g1i(element.y1f().f1i(), trackedDependencies.r1g(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).e19 = function () {
    var tmp0_safe_receiver = this.l11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p11_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.b1i_1;
          var values = tmp0_safe_receiver_0.c1i_1;
          var size = tmp0_safe_receiver_0.a1i_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var value = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.o1c(value);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).a1d = function (token) {
    var tmp0_safe_receiver = this.p11_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.c1d()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.b1i_1;
          var values = tmp0_safe_receiver.c1i_1;
          var size = tmp0_safe_receiver.a1i_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              !(tmp_2 == null) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.h1i_1.r2();
      var new_0 = old.z(info);
      if (old === new_0 ? true : $this.h1i_1.hv(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.h1i_1.r2();
      var new_0 = old.a1(info);
      if (old === new_0 ? true : $this.h1i_1.hv(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.g1();
    toInsert.g1();
    toApply.g1();
    toLateApply.g1();
    toComplete.g1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.g1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.m1i_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.t1i_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.z(item);
      }
       while (inductionVariable <= last);
    this$0.t1i_1.g1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.l1a(sectionName);
          try {
            this$0.l1i_1.h10(frameTime);
            Companion_instance_10.i1j();
            break $l$block;
          }finally {
            Trace_instance.d1b(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.l1a(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.m1i_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.r1i_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.m() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.n(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.z(item);
            }
             while (inductionVariable <= last);
          this$0.r1i_1.g1();
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.t()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.t();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.n(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.m1c(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.z(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.g1();
            }
            if (modifiedValues.c1a()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.m1i_1;
              var this_2 = this$0.p1i_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.m() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.n(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.j1j(item_1) ? item_1.v1f(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.z(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.t()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.t()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.t()) {
            var tmp0_this = this$0;
            tmp0_this.k1i_1 = tmp0_this.k1i_1.gc();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.m() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.n(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.z(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.m() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.n(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.e1g();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.g1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.t()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.o();
              while (tmp0_iterator.c1()) {
                var element = tmp0_iterator.e1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.f1g();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.g1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.t()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.o();
              while (tmp0_iterator_0.c1()) {
                var element_0 = tmp0_iterator_0.e1();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.u1c();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.g1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.m1i_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_10.k1j();
          this$0.x1i_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.d1b(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1i_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.d1j_1.r2().ta(State_Idle_getInstance()) >= 0) {
        this$0.q1i_1.l1j(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.v6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.u1j_1 = $block;
    this.v1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).wy = function ($this$coroutineScope, $completion) {
    var tmp = this.xy($this$coroutineScope, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).wd = function (p1, $completion) {
    return this.wy((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 2;
            this.yc_1 = 1;
            suspendResult = this.u1j_1(this.w1j_1, this.v1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).xy = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.u1j_1, this.v1j_1, completion);
    i.w1j_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.wy($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.c1j_1 ? $this.l1i_1.g10() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.d1j_1.r2().ta(State_ShuttingDown_getInstance()) <= 0) {
      $this.p1i_1.g1();
      $this.q1i_1 = new IdentityArraySet();
      $this.r1i_1.g1();
      $this.s1i_1.g1();
      $this.t1i_1.g1();
      $this.w1i_1 = null;
      var tmp0_safe_receiver = $this.y1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.xm();
      $this.y1i_1 = null;
      $this.b1j_1 = null;
      return null;
    }
    var tmp;
    if (!($this.b1j_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.n1i_1 == null) {
        $this.q1i_1 = new IdentityArraySet();
        $this.r1i_1.g1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.r1i_1.t()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.q1i_1.c1a();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.s1i_1.t();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.t1i_1.t();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.z1i_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.d1j_1.gv(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.y1i_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.y1i_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.a1j_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.e1j_1.jq().o();
        while (tmp0_iterator.c1()) {
          var element = tmp0_iterator.e1();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.nk()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.x1j_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.y1j_1 = recoverable;
    this.z1j_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.q1i_1.t())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.q1i_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.q1i_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.p1i_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.m() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.n(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.t1f(changes);
            if ($this.d1j_1.r2().ta(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.q1i_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.m1i_1;
        $this.q1i_1.l1j(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.o1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.d1j_1.r2().ta(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.n1i_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.n1i_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().i1i_1.hq()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.m1i_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.s1i_1.g1();
      $this.r1i_1.g1();
      $this.q1i_1 = new IdentityArraySet();
      $this.t1i_1.g1();
      $this.u1i_1.g1();
      $this.v1i_1.g1();
      $this.b1j_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.w1i_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.w1i_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.r(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.z(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.p1i_1.a1(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.q1i_1.c1a()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.r1i_1.t();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.l1i_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.t1i_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.i13_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.t()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.i1f() ? true : composition.s1f()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.x1i_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_10.j1k(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.k1k();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.c1a()) === true) {
              composition.f1d(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.b1g();
            break $l$block;
          }finally {
            snapshot.l1k(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.m());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.n(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.i13_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.y2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.o2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.z(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.n2().o();
    while (tmp0_iterator.c1()) {
      var tmp1_loop_parameter = tmp0_iterator.e1();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.q2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.r2();
      runtimeCheck(!composition.i1f());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_10.j1k(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.k1k();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.m1i_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.m());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.m() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.n(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.u1i_1, item_0.g13_1));
                  target.z(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.c1g(pairs);
              break $l$block;
            }finally {
              snapshot.l1k(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.l2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.u1i_1.t()) {
      var references = flatten($this.u1i_1.m2());
      $this.u1i_1.g1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.m());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.v1i_1.y2(item));
          target.z(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.v1i_1.g1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.n(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.c7();
        var state = item_0.d7();
        if (!(state == null)) {
          reference.i13_1.d1g(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.b1l();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.bn();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.r1i_1.t()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.h1i_1 = MutableStateFlow(persistentSetOf());
    this.i1i_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.g1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.m1i_1;
    var iterator = this$0.t1i_1.o();
    while (iterator.c1()) {
      var value = iterator.e1();
      if (equals(value.i13_1, $composition)) {
        toInsert.z(value);
        iterator.d1();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1i_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.d1j_1.r2().ta(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.o1i_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.v6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1i_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.o1i_1 = tmp_0;
      this$0.d1j_1.gv(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.m1i_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.n1i_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.d1j_1.gv(State_ShuttingDown_getInstance());
        if (!this$0.a1j_1) {
          runnerJob.sl(cancellation);
        } else if (!(this$0.y1i_1 == null)) {
          continuationToResume = this$0.y1i_1;
        }
        this$0.y1i_1 = null;
        tmp = runnerJob.nl(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.o1i_1 = cancellation;
        this$0.d1j_1.gv(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.v6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.k1l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).s1l = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.t1l($this$recompositionRunner, parentFrameClock, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).yh = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.s1l(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 6;
            var tmp_0 = this;
            tmp_0.n1l_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.o1l_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.p1l_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.q1l_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.r1l_1 = LinkedHashSet_init_$Create$();
            this.yc_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.k1l_1)) {
              this.yc_1 = 5;
              continue $sm;
            }

            this.yc_1 = 2;
            suspendResult = awaitWorkAvailable(this.k1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.k1l_1)) {
              this.yc_1 = 1;
              continue $sm;
            } else {
              this.yc_1 = 3;
              continue $sm;
            }

          case 3:
            this.yc_1 = 4;
            suspendResult = this.m1l_1.i10(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.k1l_1, this.n1l_1, this.o1l_1, this.p1l_1, this.q1l_1, this.r1l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.k1l_1);
            this.yc_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.bd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.zc_1 === 6) {
          throw e;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).t1l = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.k1l_1, completion);
    i.l1l_1 = $this$recompositionRunner;
    i.m1l_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.s1l($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.c1m_1 = this$0;
    this.d1m_1 = $block;
    this.e1m_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).wy = function ($this$withContext, $completion) {
    var tmp = this.xy($this$withContext, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(Recomposer$recompositionRunner$slambda).wd = function (p1, $completion) {
    return this.wy((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 5;
            this.g1m_1 = get_job(this.f1m_1.mk());
            registerRunnerJob(this.c1m_1, this.g1m_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_10;
            tmp_0.h1m_1 = tmp_1.j1m(Recomposer$recompositionRunner$slambda$lambda(this.c1m_1));
            addRunning(Companion_getInstance_3(), this.c1m_1.g1j_1);
            this.yc_1 = 1;
            continue $sm;
          case 1:
            this.zc_1 = 4;
            this.c1m_1.m1i_1;
            var this_0 = toMutableList(this.c1m_1.p1i_1);
            var inductionVariable = 0;
            var last = this_0.m() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.n(index);
                item.g1g();
              }
               while (inductionVariable <= last);
            this.yc_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.d1m_1, this.e1m_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i1m_1 = suspendResult;
            this.zc_1 = 5;
            this.yc_1 = 3;
            continue $sm;
          case 3:
            this.zc_1 = 5;
            this.h1m_1.bn();
            this.c1m_1.m1i_1;
            if (this.c1m_1.n1i_1 === this.g1m_1) {
              this.c1m_1.n1i_1 = null;
            }

            deriveStateLocked(this.c1m_1);
            removeRunning(Companion_getInstance_3(), this.c1m_1.g1j_1);
            return Unit_instance;
          case 4:
            this.zc_1 = 5;
            var t = this.bd_1;
            this.h1m_1.bn();
            this.c1m_1.m1i_1;
            if (this.c1m_1.n1i_1 === this.g1m_1) {
              this.c1m_1.n1i_1 = null;
            }

            deriveStateLocked(this.c1m_1);
            removeRunning(Companion_getInstance_3(), this.c1m_1.g1j_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).xy = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.c1m_1, this.d1m_1, this.e1m_1, completion);
    i.f1m_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.wy($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.z19_1;
      var inductionVariable = 0;
      var last = this_0.y19_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.a1g(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.o1c(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.a1g(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.m1c(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1k_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.i1k_1)) {
              this.yc_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.io();
              this.i1k_1.m1i_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.i1k_1)) {
                tmp_0 = cancellable;
              } else {
                this.i1k_1.y1i_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.v6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.km(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.yc_1 = 2;
              continue $sm;
            }

          case 1:
            this.yc_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.k1i_1 = new Long(0, 0);
    var tmp = this;
    tmp.l1i_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.m1i_1 = createSynchronizedObject();
    this.n1i_1 = null;
    this.o1i_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p1i_1 = ArrayList_init_$Create$();
    this.q1i_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.r1i_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.s1i_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.t1i_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.u1i_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.v1i_1 = LinkedHashMap_init_$Create$();
    this.w1i_1 = null;
    this.x1i_1 = null;
    this.y1i_1 = null;
    this.z1i_1 = 0;
    this.a1j_1 = false;
    this.b1j_1 = null;
    this.c1j_1 = false;
    this.d1j_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.fd(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.nl(Recomposer$effectJob$lambda(this));
    tmp_6.e1j_1 = this_0;
    this.f1j_1 = effectCoroutineContext.lg(this.l1i_1).lg(this.e1j_1);
    this.g1j_1 = new RecomposerInfoImpl(this);
    this.h1j_1 = 8;
  }
  protoOf(Recomposer).r1c = function () {
    return this.f1j_1;
  };
  protoOf(Recomposer).k1m = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).i16 = function () {
    return 1000;
  };
  protoOf(Recomposer).g16 = function () {
    return false;
  };
  protoOf(Recomposer).h16 = function (table) {
  };
  protoOf(Recomposer).l1f = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.r1i_1.r(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.r1i_1.z(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.v6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).s19 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.t1i_1.z(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.v6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).u1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.u1i_1, reference.g13_1, reference);
  };
  protoOf(Recomposer).i1a = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    this.v1i_1.o2(reference, data);
  };
  protoOf(Recomposer).t1b = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.x1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.x1i_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.z(composition);
  };
  protoOf(Recomposer).u19 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.v1i_1.s2(reference);
  };
  protoOf(Recomposer).p1g = function (composition, content) {
    var composerWasComposing = composition.i1f();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_10.j1k(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.k1k();
            try {
              composition.q1g(content);
              break $l$block;
            }finally {
              snapshot.l1k(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_10.k1j();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1i_1;
    var tmp;
    if (this.d1j_1.r2().ta(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.p1i_1.r(composition)) {
        this.p1i_1.z(composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.e1g();
      composition.f1g();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_10.k1j();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.y2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.t()) {
        _this__u8e3s4.s2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.y2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.o2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.z(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.q18(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.d11_1);
    if (fromWriter.q10_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.v10_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.n10_1;
    var currentGroup = toWriter.d11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.n10_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.o10_1;
    var currentSlot = toWriter.t10_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.o10_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.e11_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.x10_1;
    var slotsGapLen = toWriter.w10_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.v10_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.x10_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.p10_1, fromIndex, fromWriter.m());
    var endAnchors = locationOf(fromWriter.p10_1, sourceGroupsEnd, fromWriter.m());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.p10_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.n(anchorIndex);
          sourceAnchor.v1a_1 = sourceAnchor.v1a_1 + anchorDelta | 0;
          anchors.z(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.p10_1, toWriter.d11_1, toWriter.m());
      toWriter.p10_1.h3(insertLocation, anchors);
      sourceAnchors.c2(startAnchors, endAnchors).g1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.g17(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.k17();
        fromWriter.g1c(parentGroup - fromWriter.d11_1 | 0);
        fromWriter.k17();
      }
      fromWriter.g1c(fromIndex - fromWriter.d11_1 | 0);
      var anchorsRemoved = fromWriter.r11();
      if (needsStartGroups) {
        fromWriter.j12();
        fromWriter.x18();
        fromWriter.j12();
        fromWriter.x18();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.z10_1 = toWriter.z10_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.d11_1 = currentGroup + groupsToMove | 0;
      toWriter.t10_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.y10_1 > 0;
    $this.c11_1.f16($this.z10_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.d11_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().s11_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().s11_1) : false;
      initGroup($this.n10_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.e11_1, $this.t10_1);
      $this.u10_1 = $this.t10_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.o10_1;
        var currentSlot = $this.t10_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.t10_1 = currentSlot;
      }
      $this.z10_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.e11_1 = current;
      $this.d11_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.e11_1;
      $this.a11_1.f16(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.d11_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().s11_1)) {
        if (isNode) {
          $this.l1m(aux);
        } else {
          $this.b1c(aux);
        }
      }
      $this.t10_1 = slotIndex($this.n10_1, $this, currentGroupAddress);
      $this.u10_1 = dataIndex_0($this.n10_1, $this, groupIndexToAddress($this, $this.d11_1 + 1 | 0));
      $this.z10_1 = nodeCount($this.n10_1, currentGroupAddress);
      $this.e11_1 = currentGroup;
      $this.d11_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.n10_1, currentGroupAddress) | 0;
    }
    tmp.s10_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.n10_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.n10_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.g11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.c1a()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.n1m(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.g11_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.g11_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.o1m(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.n10_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.n10_1, groupAddress, containsAnyMarks);
      var parent = $this.g17(group);
      if (parent >= 0) {
        set.o1m(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.q18(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.n10_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.q18(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.b11_1.f16((_get_capacity__a9k9f3($this) - $this.r10_1 | 0) - $this.s10_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.r10_1 | 0) - $this.b11_1.n18() | 0;
    $this.s10_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.q10_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.n10_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.n10_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.r10_1;
    var gapStart = $this.q10_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.p10_1.t()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.n10_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.n10_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.n10_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.q10_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.w10_1;
    var gapStart = $this.v10_1;
    var slotsGapOwner = $this.x10_1;
    if (!(gapStart === index)) {
      var slots = $this.o10_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.m();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.o10_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.q10_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.n10_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.n10_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.r10_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.n10_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.n10_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.q10_1)
            updateAddress_0 = updateAddress_0 + $this.r10_1 | 0;
        }
      }
      $this.x10_1 = newSlotsGapOwner;
    }
    $this.v10_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.v10_1;
    var slotsGapEnd = slotsGapStart + $this.w10_1 | 0;
    fill_0($this.o10_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.d11_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.q10_1;
      var gapLen = $this.r10_1;
      var oldCapacity = $this.n10_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.n10_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.n10_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.s10_1;
      if (currentEnd >= gapStart)
        $this.s10_1 = currentEnd + size | 0;
      $this.q10_1 = gapStart + size | 0;
      $this.r10_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.x10_1 < gapStart ? 0 : $this.v10_1, $this.w10_1, $this.o10_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.n10_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.x10_1;
      if (slotsGapOwner >= gapStart) {
        $this.x10_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.t10_1, group);
      var gapStart = $this.v10_1;
      var gapLen = $this.w10_1;
      if (gapLen < size) {
        var slots = $this.o10_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.o10_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.u10_1;
      if (currentDataEnd >= gapStart)
        $this.u10_1 = currentDataEnd + size | 0;
      $this.v10_1 = gapStart + size | 0;
      $this.w10_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.p10_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.t())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.q10_1 = start;
      var previousGapLen = $this.r10_1;
      var newGapLen = previousGapLen + len | 0;
      $this.r10_1 = newGapLen;
      var slotsGapOwner = $this.x10_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.x10_1 = Math.max(start, b);
      }
      if ($this.s10_1 >= $this.q10_1) {
        $this.s10_1 = $this.s10_1 - len | 0;
      }
      if (containsGroupMark($this, $this.e11_1)) {
        updateContainsMark($this, $this.e11_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.w10_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.v10_1 = start;
      $this.w10_1 = gapLen + len | 0;
      fill_0($this.o10_1, null, start, start + len | 0);
      var currentDataEnd = $this.u10_1;
      if (currentDataEnd >= start)
        $this.u10_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.n10_1.length ? isNode($this.n10_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.o10_1[dataIndexToDataAddress($this, nodeIndex($this.n10_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.r10_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.p10_1, previousGapStart, size);
      $l$loop_0: while (index < $this.p10_1.m()) {
        var anchor = $this.p10_1.n(index);
        var location = anchor.v1a_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.v1a_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.p10_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.p10_1.m()) {
        var anchor_0 = $this.p10_1.n(index_0);
        var location_0 = anchor_0.v1a_1;
        if (location_0 >= 0) {
          anchor_0.v1a_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.r10_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.p10_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.p10_1.m() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.p10_1.n(index);
      var location = $this.t19(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.v1a_1 = IntCompanionObject_instance.MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.p10_1.c2(removeAnchorStart, removeAnchorEnd).g1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.m();
    var index = locationOf($this.p10_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.p10_1.m()) {
        var anchor = $this.p10_1.n(index);
        var location = $this.t19(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.z(anchor);
          $this.p10_1.l1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.n(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.t19(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.q10_1) {
          item.v1a_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.v1a_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.p10_1, newAnchorIndex, groupsSize);
        $this.p10_1.y1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.n10_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.q10_1 ? index : index + $this.r10_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.v10_1 ? dataIndex : dataIndex + $this.w10_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.n10_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o10_1.length - $this.w10_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.w10_1, $this.o10_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o10_1.length - $this.w10_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.w10_1, $this.o10_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.v10_1, $this.w10_1, $this.o10_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.m() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.m() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.q1m_1 = $end;
    this.r1m_1 = this$0;
    this.p1m_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).c1 = function () {
    return this.p1m_1 < this.q1m_1;
  };
  protoOf(SlotWriter$groupSlots$1).e1 = function () {
    var tmp;
    if (this.c1()) {
      var tmp_0 = this.r1m_1.o10_1;
      var tmp1 = this.p1m_1;
      this.p1m_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.r1m_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.m10_1 = table;
    this.n10_1 = this.m10_1.r15_1;
    this.o10_1 = this.m10_1.t15_1;
    this.p10_1 = this.m10_1.y15_1;
    this.q10_1 = this.m10_1.s15_1;
    this.r10_1 = (this.n10_1.length / 5 | 0) - this.m10_1.s15_1 | 0;
    this.s10_1 = this.m10_1.s15_1;
    this.t10_1 = 0;
    this.u10_1 = 0;
    this.v10_1 = this.m10_1.u15_1;
    this.w10_1 = this.o10_1.length - this.m10_1.u15_1 | 0;
    this.x10_1 = this.m10_1.s15_1;
    this.y10_1 = 0;
    this.z10_1 = 0;
    this.a11_1 = new IntStack();
    this.b11_1 = new IntStack();
    this.c11_1 = new IntStack();
    this.d11_1 = 0;
    this.e11_1 = -1;
    this.f11_1 = false;
    this.g11_1 = null;
  }
  protoOf(SlotWriter).h1b = function () {
    return this.d11_1 < this.s10_1 ? isNode(this.n10_1, groupIndexToAddress(this, this.d11_1)) : false;
  };
  protoOf(SlotWriter).j19 = function (index) {
    return isNode(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).k19 = function (index) {
    return nodeCount(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).f17 = function (index) {
    return key(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).e17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.n10_1, address) ? this.o10_1[objectKeyIndex(this.n10_1, address)] : null;
  };
  protoOf(SlotWriter).q18 = function (index) {
    return groupSize(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).d17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.n10_1, address) ? this.o10_1[auxIndex(this.n10_1, this, address)] : Companion_getInstance_0().s11_1;
  };
  protoOf(SlotWriter).f1b = function (index) {
    return (index > this.e11_1 ? index < this.s10_1 : false) ? true : this.e11_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).i1b = function (index) {
    return this.g1b(index, this.d11_1);
  };
  protoOf(SlotWriter).g1b = function (index, group) {
    var tmp;
    if (group === this.e11_1) {
      tmp = this.s10_1;
    } else if (group > this.a11_1.k1a(0)) {
      tmp = group + this.q18(group) | 0;
    } else {
      var openIndex = this.a11_1.s1m(group);
      tmp = openIndex < 0 ? group + this.q18(group) | 0 : (_get_capacity__a9k9f3(this) - this.r10_1 | 0) - this.b11_1.i19(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).b1a = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.n10_1, address) ? this.o10_1[dataIndexToDataAddress(this, nodeIndex(this.n10_1, this, address))] : null;
  };
  protoOf(SlotWriter).y1b = function (anchor) {
    return this.b1a(anchor.t1m(this));
  };
  protoOf(SlotWriter).g17 = function (index) {
    return parent(this.n10_1, this, index);
  };
  protoOf(SlotWriter).w16 = function () {
    this.f11_1 = true;
    if (this.a11_1.t()) {
      moveGroupGapTo(this, this.m());
      moveSlotGapTo(this, this.o10_1.length - this.w10_1 | 0, this.q10_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.m10_1.u1m(this, this.n10_1, this.q10_1, this.o10_1, this.v10_1, this.p10_1);
  };
  protoOf(SlotWriter).p1d = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.d11_1 = 0;
    this.s10_1 = _get_capacity__a9k9f3(this) - this.r10_1 | 0;
    this.t10_1 = 0;
    this.u10_1 = 0;
    this.z10_1 = 0;
  };
  protoOf(SlotWriter).e1a = function (value) {
    var result = this.v1m();
    this.w1m(value);
    return result;
  };
  protoOf(SlotWriter).b1c = function (value) {
    var address = groupIndexToAddress(this, this.d11_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.n10_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.o10_1[dataIndexToDataAddress(this, auxIndex(this.n10_1, this, address))] = value;
  };
  protoOf(SlotWriter).e1d = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.e11_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.n10_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.n10_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.t10_1 > auxIndex_0) {
      var slotsToMove = this.t10_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.o10_1[auxAddress + 2 | 0] = this.o10_1[auxAddress + 1 | 0];
      }
      this.o10_1[auxAddress + 1 | 0] = this.o10_1[auxAddress];
    }
    addAux(this.n10_1, parentGroupAddress);
    this.o10_1[auxAddress] = value;
    this.t10_1 = this.t10_1 + 1 | 0;
  };
  protoOf(SlotWriter).l1m = function (value) {
    return updateNodeOfGroup(this, this.d11_1, value);
  };
  protoOf(SlotWriter).x1b = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.t1m(this), value);
  };
  protoOf(SlotWriter).w1m = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t10_1 <= this.u10_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.o10_1[dataIndexToDataAddress(this, this.t10_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).a1c = function (index, value) {
    var address = groupIndexToAddress(this, this.d11_1);
    var slotsStart = slotIndex(this.n10_1, this, address);
    var slotsEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, this.d11_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.d11_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.o10_1[slotAddress];
    this.o10_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).v1m = function () {
    if (this.y10_1 > 0) {
      insertSlots(this, 1, this.e11_1);
    }
    var tmp = this.o10_1;
    var tmp1 = this.t10_1;
    this.t10_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).x1h = function (anchor, index) {
    return this.z1h(this.t19(anchor), index);
  };
  protoOf(SlotWriter).z1h = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.n10_1, this, address);
    var slotsEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().s11_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.o10_1[slotAddress];
  };
  protoOf(SlotWriter).g1c = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y10_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.d11_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.e11_1 ? index <= this.s10_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.e11_1 + '-' + this.s10_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.d11_1 = index;
    var newSlot = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, index));
    this.t10_1 = newSlot;
    this.u10_1 = newSlot;
  };
  protoOf(SlotWriter).j12 = function () {
    var newGroup = this.s10_1;
    this.d11_1 = newGroup;
    this.t10_1 = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).b18 = function () {
    var tmp1 = this.y10_1;
    this.y10_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).y18 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y10_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y10_1 = this.y10_1 - 1 | 0;
    if (this.y10_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.c11_1.m() === this.a11_1.m())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).k17 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().s11_1, false, Companion_getInstance_0().s11_1);
  };
  protoOf(SlotWriter).m17 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().s11_1);
  };
  protoOf(SlotWriter).o17 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().s11_1);
  };
  protoOf(SlotWriter).n17 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).x18 = function () {
    var inserting = this.y10_1 > 0;
    var currentGroup = this.d11_1;
    var currentGroupEnd = this.s10_1;
    var groupIndex = this.e11_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.z10_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.n10_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.n10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n10_1, groupAddress, newNodes);
      this.z10_1 = this.c11_1.n18() + (isNode_0 ? 1 : newNodes) | 0;
      this.e11_1 = parent(this.n10_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.n10_1, groupAddress);
      var oldNodes = nodeCount(this.n10_1, groupAddress);
      updateGroupSize(this.n10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n10_1, groupAddress, newNodes);
      var newParent = this.a11_1.n18();
      restoreCurrentGroupEnd(this);
      this.e11_1 = newParent;
      var groupParent = parent(this.n10_1, this, groupIndex);
      this.z10_1 = this.c11_1.n18();
      if (groupParent === newParent) {
        this.z10_1 = this.z10_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.n10_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.n10_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.n10_1, currentAddress, nodeCount(this.n10_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.n10_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.n10_1, this, current);
          }
        }
        this.z10_1 = this.z10_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).o1d = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.e11_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.s10_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.d11_1;
      var oldCurrentSlot = this.t10_1;
      var oldCurrentSlotEnd = this.u10_1;
      this.d11_1 = index;
      this.k17();
      this.d11_1 = oldCurrent;
      this.t10_1 = oldCurrentSlot;
      this.u10_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).p1c = function (anchor) {
    return this.o1d(anchor.t1m(this));
  };
  protoOf(SlotWriter).c17 = function () {
    var groupAddress = groupIndexToAddress(this, this.d11_1);
    var newGroup = this.d11_1 + groupSize(this.n10_1, groupAddress) | 0;
    this.d11_1 = newGroup;
    this.t10_1 = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.n10_1, groupAddress) ? 1 : nodeCount(this.n10_1, groupAddress);
  };
  protoOf(SlotWriter).r11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.d11_1;
    var oldSlot = this.t10_1;
    var count = this.c17();
    var tmp0_safe_receiver = this.g11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.c1a() ? tmp0_safe_receiver.w1c() >= oldGroup : false) {
        tmp0_safe_receiver.n1m();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.d11_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.t10_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.d11_1 = oldGroup;
    this.t10_1 = oldSlot;
    this.z10_1 = this.z10_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).h11 = function () {
    var start = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, this.d11_1));
    var end = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, this.d11_1 + this.q18(this.d11_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).c1c = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.d11_1;
    var parent = this.e11_1;
    var parentEnd = this.s10_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.n10_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.n10_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.t10_1;
    var dataStart = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.d11_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.n10_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.o10_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.v10_1;
    var slotsGapLen = this.w10_1;
    var slotsCapacity = this.o10_1.length;
    var slotsGapOwner = this.x10_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.s10_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).f1a = function (anchor, offset, writer) {
    runtimeCheck(writer.y10_1 > 0);
    runtimeCheck(this.y10_1 === 0);
    runtimeCheck(anchor.f1f());
    var location = this.t19(anchor) + offset | 0;
    var currentGroup = this.d11_1;
    runtimeCheck(currentGroup <= location ? location < this.s10_1 : false);
    var parent = this.g17(location);
    var size = this.q18(location);
    var nodes = this.j19(location) ? 1 : this.k19(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.n10_1, currentAddress, groupSize(this.n10_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.n10_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.n10_1, currentAddress, nodeCount(this.n10_1, currentAddress) - nodes | 0);
        }
      }
      current = this.g17(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.z10_1 >= nodes);
      this.z10_1 = this.z10_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).i1c = function (table, index, removeSourceGroup) {
    runtimeCheck(this.y10_1 > 0);
    if (((index === 0 ? this.d11_1 === 0 : false) ? this.m10_1.s15_1 === 0 : false) ? groupSize(table.r15_1, index) === table.s15_1 : false) {
      var myGroups = this.n10_1;
      var mySlots = this.o10_1;
      var myAnchors = this.p10_1;
      var groups = table.r15_1;
      var groupsSize = table.s15_1;
      var slots = table.t15_1;
      var slotsSize = table.u15_1;
      this.n10_1 = groups;
      this.o10_1 = slots;
      this.p10_1 = table.y15_1;
      this.q10_1 = groupsSize;
      this.r10_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.v10_1 = slotsSize;
      this.w10_1 = slots.length - slotsSize | 0;
      this.x10_1 = groupsSize;
      table.x1m(myGroups, 0, mySlots, 0, myAnchors);
      return this.p10_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.i17();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.w16();
    }
    return tmp;
  };
  protoOf(SlotWriter).f1c = function (offset, table, index) {
    runtimeCheck(this.y10_1 <= 0 ? this.q18(this.d11_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.d11_1;
    var previousCurrentSlot = this.t10_1;
    var previousCurrentSlotEnd = this.u10_1;
    this.g1c(offset);
    this.k17();
    this.b18();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.i17();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.w16();
    }
    var anchors = tmp;
    this.y18();
    this.x18();
    this.d11_1 = previousCurrentGroup;
    this.t10_1 = previousCurrentSlot;
    this.u10_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).c18 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.p10_1;
    var effectiveSize = this.m();
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.q10_1 ? index : -(this.m() - index | 0) | 0);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).y1m = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.n10_1, groupAddress)) {
      updateMark(this.n10_1, groupAddress, true);
      if (!containsMark(this.n10_1, groupAddress)) {
        updateContainsMark(this, this.g17(group));
      }
    }
  };
  protoOf(SlotWriter).q19 = function (group, $super) {
    group = group === VOID ? this.e11_1 : group;
    var tmp;
    if ($super === VOID) {
      this.y1m(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.y1m.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).t19 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.v1a_1;
    return it < 0 ? this.m() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.d11_1 + ' end=' + this.s10_1 + ' size = ' + this.m() + ' ' + ('gap=' + this.q10_1 + '-' + (this.q10_1 + this.r10_1 | 0) + ')');
  };
  protoOf(SlotWriter).m = function () {
    return _get_capacity__a9k9f3(this) - this.r10_1 | 0;
  };
  function Anchor(loc) {
    this.v1a_1 = loc;
  }
  protoOf(Anchor).f1f = function () {
    return !(this.v1a_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).h1c = function (slots) {
    return slots.t19(this);
  };
  protoOf(Anchor).t1m = function (writer) {
    return writer.t19(this);
  };
  function SlotTable() {
    this.r15_1 = new Int32Array(0);
    this.s15_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.t15_1 = tmp_1;
    this.u15_1 = 0;
    this.v15_1 = 0;
    this.w15_1 = false;
    this.x15_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.y15_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).z18 = function () {
    return this.s15_1 === 0;
  };
  protoOf(SlotTable).z15 = function () {
    if (this.w15_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.v15_1 = this.v15_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).i17 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v15_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.w15_1 = true;
    this.x15_1 = this.x15_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).c18 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.s15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.y15_1;
    var effectiveSize = this.s15_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  protoOf(SlotTable).t19 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.f1f()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.v1a_1;
  };
  protoOf(SlotTable).j1g = function (anchor) {
    var tmp;
    if (anchor.f1f()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$10fp17g(this.y15_1, anchor.v1a_1, this.s15_1);
      tmp = it >= 0 ? equals(this.y15_1.n(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).j1f = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.s15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.j1g(anchor)) {
      var containsUpper = groupIndex + groupSize(this.r15_1, groupIndex) | 0;
      var containsArg = anchor.v1a_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).z1m = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.k16_1 === this ? this.v15_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.v15_1 = this.v15_1 - 1 | 0;
  };
  protoOf(SlotTable).u1m = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.m10_1 === this ? this.w15_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.w15_1 = false;
    this.x1m(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).x1m = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.r15_1 = groups;
    this.s15_1 = groupsSize;
    this.t15_1 = slots;
    this.u15_1 = slotsSize;
    this.y15_1 = anchors;
  };
  protoOf(SlotTable).j1a = function () {
    return this.s15_1 > 0 ? containsMark(this.r15_1, 0) : false;
  };
  protoOf(SlotTable).z1h = function (group, slotIndex) {
    var start = slotAnchor(this.r15_1, group);
    var end = (group + 1 | 0) < this.s15_1 ? dataAnchor(this.r15_1, group + 1 | 0) : this.t15_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.t15_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().s11_1;
    }
    return tmp;
  };
  protoOf(SlotTable).o = function () {
    return new GroupIterator(this, 0, this.s15_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.m1m_1 = list;
  }
  protoOf(PrioritySet).o1m = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m1m_1.t()) {
      tmp = this.m1m_1.n(0) === value ? true : this.m1m_1.n(this.m1m_1.m() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.m1m_1.m();
    this.m1m_1.z(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.m1m_1.n(parent);
      if (value > parentValue) {
        this.m1m_1.w(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.m1m_1.w(index, value);
  };
  protoOf(PrioritySet).c1a = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.m1m_1.t();
  };
  protoOf(PrioritySet).w1c = function () {
    return first(this.m1m_1);
  };
  protoOf(PrioritySet).n1m = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.m1m_1.m() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.m1m_1.n(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.m1m_1.t()) {
        tmp = this.m1m_1.n(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.m1m_1.w(0, last(this.m1m_1));
      this.m1m_1.l1(this.m1m_1.m() - 1 | 0);
      var index = 0;
      var size = this.m1m_1.m();
      var max = this.m1m_1.m() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.m1m_1.n(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.m1m_1.n(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.m1m_1.n(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.m1m_1.w(index, rightValue);
              this.m1m_1.w(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.m1m_1.w(index, leftValue);
          this.m1m_1.w(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$10fp17g(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.n16_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s11_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.n16_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().s11_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.n16_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.k16_1 = table;
    this.l16_1 = this.k16_1.r15_1;
    this.m16_1 = this.k16_1.s15_1;
    this.n16_1 = this.k16_1.t15_1;
    this.o16_1 = this.k16_1.u15_1;
    this.p16_1 = false;
    this.q16_1 = 0;
    this.r16_1 = this.m16_1;
    this.s16_1 = -1;
    this.t16_1 = 0;
    this.u16_1 = 0;
    this.v16_1 = 0;
  }
  protoOf(SlotReader).m = function () {
    return this.m16_1;
  };
  protoOf(SlotReader).g17 = function (index) {
    return parentAnchor(this.l16_1, index);
  };
  protoOf(SlotReader).h1b = function () {
    return isNode(this.l16_1, this.q16_1);
  };
  protoOf(SlotReader).j19 = function (index) {
    return isNode(this.l16_1, index);
  };
  protoOf(SlotReader).k19 = function (index) {
    return nodeCount(this.l16_1, index);
  };
  protoOf(SlotReader).b1a = function (index) {
    return isNode(this.l16_1, index) ? node(this.l16_1, this, index) : null;
  };
  protoOf(SlotReader).u18 = function () {
    return this.a19() ? true : this.q16_1 === this.r16_1;
  };
  protoOf(SlotReader).a19 = function () {
    return this.t16_1 > 0;
  };
  protoOf(SlotReader).d1a = function () {
    return groupSize(this.l16_1, this.q16_1);
  };
  protoOf(SlotReader).q18 = function (index) {
    return groupSize(this.l16_1, index);
  };
  protoOf(SlotReader).t18 = function () {
    return this.r16_1;
  };
  protoOf(SlotReader).x17 = function () {
    var tmp;
    if (this.q16_1 < this.r16_1) {
      tmp = key(this.l16_1, this.q16_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).f17 = function (index) {
    return key(this.l16_1, index);
  };
  protoOf(SlotReader).x1c = function () {
    return this.u16_1 - slotAnchor(this.l16_1, this.s16_1) | 0;
  };
  protoOf(SlotReader).l19 = function (index) {
    return hasObjectKey(this.l16_1, index);
  };
  protoOf(SlotReader).z17 = function () {
    return this.q16_1 < this.r16_1 ? objectKey(this.l16_1, this, this.q16_1) : null;
  };
  protoOf(SlotReader).e17 = function (index) {
    return objectKey(this.l16_1, this, index);
  };
  protoOf(SlotReader).j17 = function () {
    return this.q16_1 < this.r16_1 ? aux(this.l16_1, this, this.q16_1) : 0;
  };
  protoOf(SlotReader).d17 = function (index) {
    return aux(this.l16_1, this, index);
  };
  protoOf(SlotReader).v1b = function (index) {
    return hasMark(this.l16_1, index);
  };
  protoOf(SlotReader).j1b = function (index) {
    return containsMark(this.l16_1, index);
  };
  protoOf(SlotReader).m19 = function () {
    return this.s16_1 >= 0 ? nodeCount(this.l16_1, this.s16_1) : 0;
  };
  protoOf(SlotReader).y1c = function (index) {
    return this.k1b(this.q16_1, index);
  };
  protoOf(SlotReader).k1b = function (group, index) {
    var start = slotAnchor(this.l16_1, group);
    var next = group + 1 | 0;
    var end = next < this.m16_1 ? dataAnchor(this.l16_1, next) : this.o16_1;
    var address = start + index | 0;
    return address < end ? this.n16_1[address] : Companion_getInstance_0().s11_1;
  };
  protoOf(SlotReader).e1 = function () {
    if (this.t16_1 > 0 ? true : this.u16_1 >= this.v16_1)
      return Companion_getInstance_0().s11_1;
    var tmp1 = this.u16_1;
    this.u16_1 = tmp1 + 1 | 0;
    return this.n16_1[tmp1];
  };
  protoOf(SlotReader).l17 = function () {
    this.t16_1 = this.t16_1 + 1 | 0;
  };
  protoOf(SlotReader).w18 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t16_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t16_1 = this.t16_1 - 1 | 0;
  };
  protoOf(SlotReader).w16 = function () {
    this.p16_1 = true;
    this.k16_1.z1m(this);
  };
  protoOf(SlotReader).k17 = function () {
    if (this.t16_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.l16_1, this.q16_1) === this.s16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.s16_1 = this.q16_1;
      this.r16_1 = this.q16_1 + groupSize(this.l16_1, this.q16_1) | 0;
      var tmp1 = this.q16_1;
      this.q16_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.u16_1 = slotAnchor(this.l16_1, current);
      this.v16_1 = current >= (this.m16_1 - 1 | 0) ? this.o16_1 : dataAnchor(this.l16_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).k12 = function () {
    if (this.t16_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.l16_1, this.q16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.k17();
    }
  };
  protoOf(SlotReader).c17 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.l16_1, this.q16_1) ? 1 : nodeCount(this.l16_1, this.q16_1);
    this.q16_1 = this.q16_1 + groupSize(this.l16_1, this.q16_1) | 0;
    return count;
  };
  protoOf(SlotReader).j12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.q16_1 = this.r16_1;
  };
  protoOf(SlotReader).l18 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.q16_1 = index;
    var parent = index < this.m16_1 ? parentAnchor(this.l16_1, index) : -1;
    this.s16_1 = parent;
    if (parent < 0)
      this.r16_1 = this.m16_1;
    else
      this.r16_1 = parent + groupSize(this.l16_1, parent) | 0;
    this.u16_1 = 0;
    this.v16_1 = 0;
  };
  protoOf(SlotReader).g19 = function (index) {
    var newCurrentEnd = index + groupSize(this.l16_1, index) | 0;
    var current = this.q16_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.s16_1 = index;
    this.r16_1 = newCurrentEnd;
    this.u16_1 = 0;
    this.v16_1 = 0;
  };
  protoOf(SlotReader).v18 = function () {
    if (this.t16_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.q16_1 === this.r16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.l16_1, this.s16_1);
      this.s16_1 = parent;
      this.r16_1 = parent < 0 ? this.m16_1 : parent + groupSize(this.l16_1, parent) | 0;
    }
  };
  protoOf(SlotReader).y17 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.t16_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.q16_1;
    while (childIndex < this.r16_1) {
      var tmp = key(this.l16_1, childIndex);
      var tmp_0 = objectKey(this.l16_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.l16_1, childIndex) ? 1 : nodeCount(this.l16_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.z(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.l16_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.q16_1 + ', key=' + this.x17() + ', ' + ('parent=' + this.s16_1 + ', end=' + this.r16_1 + ')');
  };
  protoOf(SlotReader).c18 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.k16_1.y15_1;
    var effectiveSize = this.m16_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.n(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.m() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.n(mid).v1a_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.a1n_1.x15_1 === $this.d1n_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.a1n_1 = table;
    this.b1n_1 = end;
    this.c1n_1 = start;
    this.d1n_1 = this.a1n_1.x15_1;
    if (this.a1n_1.w15_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).c1 = function () {
    return this.c1n_1 < this.b1n_1;
  };
  protoOf(GroupIterator).e1 = function () {
    validateRead(this);
    var group = this.c1n_1;
    this.c1n_1 = this.c1n_1 + groupSize(this.a1n_1.r15_1, group) | 0;
    return new SlotTableGroup(this.a1n_1, group, this.d1n_1);
  };
  function validateRead_0($this) {
    if (!($this.e1n_1.x15_1 === $this.g1n_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.x15_1 : version;
    this.e1n_1 = table;
    this.f1n_1 = group;
    this.g1n_1 = version;
  }
  protoOf(SlotTableGroup).o = function () {
    validateRead_0(this);
    return new GroupIterator(this.e1n_1, this.f1n_1 + 1 | 0, this.f1n_1 + groupSize(this.e1n_1.r15_1, this.f1n_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.d18_1 = key;
    this.e18_1 = objectKey;
    this.f18_1 = location;
    this.g18_1 = nodes;
    this.h18_1 = index;
  }
  function search$accessor$10fp17g(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).i1n = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).g1i = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.i1n(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.m1n_1 = myValue;
  }
  protoOf(StateStateRecord).n1n = function (value) {
    var tmp = this;
    tmp.m1n_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).m1n_1;
  };
  protoOf(StateStateRecord).o1n = function () {
    return new StateStateRecord(this.m1n_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.p1n_1 = policy;
    this.q1n_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).j1h = function () {
    return this.p1n_1;
  };
  protoOf(SnapshotMutableStateImpl).gv = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.q1n_1;
    var it = current(this_0);
    var tmp;
    if (!this.j1h().g1i(it.m1n_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.q1n_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      overwritableRecord(this_1, this, snapshot, it).m1n_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).r2 = function () {
    return readable_0(this.q1n_1, this).m1n_1;
  };
  protoOf(SnapshotMutableStateImpl).r1n = function () {
    return this.q1n_1;
  };
  protoOf(SnapshotMutableStateImpl).s1n = function (value) {
    var tmp = this;
    tmp.q1n_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).t1n = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.j1h().g1i(currentRecord.m1n_1, appliedRecord.m1n_1)) {
      tmp = current;
    } else {
      var merged = this.j1h().h1n(previousRecord.m1n_1, currentRecord.m1n_1, appliedRecord.m1n_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.o1n();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).m1n_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.q1n_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).m1n_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.k1h_1 = new AtomicReference(get_emptyThreadMap());
    this.l1h_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).hq = function () {
    var tmp = this.k1h_1.hq().x1n(getCurrentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).m1h = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.l1h_1;
    var current = this.k1h_1.hq();
    if (current.y1n(key, value))
      return Unit_instance;
    this.k1h_1.h1f(current.z1n(key, value));
  };
  function IntStack() {
    this.d16_1 = new Int32Array(10);
    this.e16_1 = 0;
  }
  protoOf(IntStack).m = function () {
    return this.e16_1;
  };
  protoOf(IntStack).f16 = function (value) {
    if (this.e16_1 >= this.d16_1.length) {
      this.d16_1 = copyOf(this.d16_1, imul(this.d16_1.length, 2));
    }
    var tmp = this.d16_1;
    var tmp1 = this.e16_1;
    this.e16_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).n18 = function () {
    var tmp = this.d16_1;
    this.e16_1 = this.e16_1 - 1 | 0;
    return tmp[this.e16_1];
  };
  protoOf(IntStack).k1a = function (default_0) {
    return this.e16_1 > 0 ? this.w1c() : default_0;
  };
  protoOf(IntStack).w1c = function () {
    return this.d16_1[this.e16_1 - 1 | 0];
  };
  protoOf(IntStack).i19 = function (index) {
    return this.d16_1[index];
  };
  protoOf(IntStack).t = function () {
    return this.e16_1 === 0;
  };
  protoOf(IntStack).g1 = function () {
    this.e16_1 = 0;
  };
  protoOf(IntStack).s1m = function (value) {
    var inductionVariable = 0;
    var last = this.e16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.d16_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.x16_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).m = function () {
    return this.x16_1.m();
  };
  protoOf(Stack).m18 = function (value) {
    return this.x16_1.z(value);
  };
  protoOf(Stack).n18 = function () {
    return this.x16_1.l1(this.m() - 1 | 0);
  };
  protoOf(Stack).w1c = function () {
    return this.x16_1.n(this.m() - 1 | 0);
  };
  protoOf(Stack).i19 = function (index) {
    return this.x16_1.n(index);
  };
  protoOf(Stack).t = function () {
    return this.x16_1.t();
  };
  protoOf(Stack).c1a = function () {
    return !this.t();
  };
  protoOf(Stack).g1 = function () {
    return this.x16_1.g1();
  };
  protoOf(Stack).i3 = function () {
    var tmp = 0;
    var tmp_0 = this.x16_1.m();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.x16_1.n(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.i1h_1;
    current$factory();
    return this_0.r2();
  }
  function LazyValueHolder(valueProducer) {
    this.i1h_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).r2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.a1o_1 = value;
  }
  protoOf(StaticValueHolder).r2 = function () {
    return this.a1o_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.a1o_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.a1o_1 == null ? 0 : hashCode(this.a1o_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.a1o_1, tmp0_other_with_cast.a1o_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.a1i_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.b1i_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.b1i_1;
    var size = $this.a1i_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.a1i_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b1i_1 = fillArrayVal(Array(4), null);
    this.c1i_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).e1i = function (key, value) {
    var values = this.c1i_1;
    var index;
    if (this.a1i_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.b1i_1;
    var size = this.a1i_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(size_0), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.b1i_1 = newKeys;
      this.c1i_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(keys, keys, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, destinationOffset_2, insertIndex, size);
    }
    this.b1i_1[insertIndex] = key;
    this.c1i_1[insertIndex] = value;
    this.a1i_1 = this.a1i_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.u1a_1 - 1 | 0;
    var keys = $this.s1a_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.s1a_1;
    var size = $this.u1a_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.s1a_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.t1a_1 = fillArrayVal(Array(capacity), null);
    this.u1a_1 = 0;
  }
  protoOf(IdentityArrayMap).c1a = function () {
    return this.u1a_1 > 0;
  };
  protoOf(IdentityArrayMap).s1g = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).r1g = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.t1a_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).k1f = function (key, value) {
    var keys = this.s1a_1;
    var values = this.t1a_1;
    var size = this.u1a_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.s1a_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.t1a_1 = destValues;
      this.u1a_1 = this.u1a_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).d1i = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.t1a_1[index];
      var size = this.u1a_1;
      var keys = this.s1a_1;
      var values = this.t1a_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(keys, keys, index, startIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = index + 1 | 0;
      arrayCopy(values, values, index, startIndex_0, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.u1a_1 = newSize;
      return (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.y19_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.z19_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.z19_1;
    var size = $this.y19_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.c1o_1 = this$0;
    this.b1o_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).c1 = function () {
    return this.b1o_1 < this.c1o_1.y19_1;
  };
  protoOf(IdentityArraySet$iterator$1).e1 = function () {
    var tmp = this.c1o_1.z19_1;
    var tmp1 = this.b1o_1;
    this.b1o_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.y19_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.z19_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).m = function () {
    return this.y19_1;
  };
  protoOf(IdentityArraySet).j1j = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).r = function (element) {
    if (!!(element == null))
      return false;
    return this.j1j(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).m1c = function (value) {
    var index;
    var size = this.y19_1;
    var values = this.z19_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.z19_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.z19_1[insertIndex] = value;
    this.y19_1 = this.y19_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).l1j = function (collection) {
    if (collection.t())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.o();
      while (tmp0_iterator.c1()) {
        var value = tmp0_iterator.e1();
        this.m1c(value);
      }
    } else {
      var thisValues = this.z19_1;
      var otherValues = collection.z19_1;
      var thisSize = this.y19_1;
      var otherSize = collection.y19_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.z19_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.y19_1 = this.y19_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.z19_1 = newArray;
        this.y19_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).t = function () {
    return this.y19_1 === 0;
  };
  protoOf(IdentityArraySet).c1a = function () {
    return this.y19_1 > 0;
  };
  protoOf(IdentityArraySet).d1o = function (value) {
    var index = find_1(this, value);
    var values = this.z19_1;
    var size = this.y19_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.y19_1 = this.y19_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).af = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.t();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.j1j(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).s = function (elements) {
    return this.af(elements);
  };
  protoOf(IdentityArraySet).o = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.s1e_1[$this.q1e_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.t1e_1;
    var valueOrder = $this.q1e_1;
    var values = $this.r1e_1;
    var scopeSets = $this.s1e_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, destinationOffset, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.t1e_1 = $this.t1e_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, destinationOffset_0, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.s1e_1 = newScopeSets;
    $this.r1e_1 = newValues;
    $this.q1e_1 = newKeyOrder;
    $this.t1e_1 = $this.t1e_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.t1e_1 - 1 | 0;
    var values = $this.r1e_1;
    var valueOrder = $this.q1e_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.r1e_1;
    var valueOrder = $this.q1e_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.t1e_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.t1e_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q1e_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.r1e_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.s1e_1 = fillArrayVal(Array(50), null);
    this.t1e_1 = 0;
  }
  protoOf(IdentityScopeMap).w1e = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.m1c(scope);
  };
  protoOf(IdentityScopeMap).v1e = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).u1e = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.q1e_1;
    var scopeSets = this.s1e_1;
    var values = this.r1e_1;
    var size = this.t1e_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.d1o(scope);
      if (set.y19_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.t1e_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).x1f = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.q1e_1;
    var scopeSets = this.s1e_1;
    var values = this.r1e_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.t1e_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.d1o(scope);
        if (set.y19_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.t1e_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.t1e_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.x1a_1 = content;
    this.y1a_1 = null;
    this.z1a_1 = size;
    this.a1b_1 = 8;
  }
  protoOf(MutableVector).b1b = function (element) {
    this.g3(this.z1a_1 + 1 | 0);
    this.x1a_1[this.z1a_1] = element;
    this.z1a_1 = this.z1a_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).g3 = function (capacity) {
    var oldContent = this.x1a_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.x1a_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).l1 = function (index) {
    var content = this.x1a_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.z1a_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.z1a_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.z1a_1 = this.z1a_1 - 1 | 0;
    content[this.z1a_1] = null;
    return item;
  };
  function persistentSetOf() {
    return Companion_getInstance_8().f1o();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.g1o_1 = index;
    this.h1o_1 = size;
  }
  protoOf(AbstractListIterator).c1 = function () {
    return this.g1o_1 < this.h1o_1;
  };
  protoOf(AbstractListIterator).r1 = function () {
    return this.g1o_1 > 0;
  };
  protoOf(AbstractListIterator).s1 = function () {
    return this.g1o_1;
  };
  protoOf(AbstractListIterator).i1o = function () {
    if (!this.c1())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).j1o = function () {
    if (!this.r1())
      throw NoSuchElementException_init_$Create$();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).f1 = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.h17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.f1(elements);
    return this_0.f3();
  };
  protoOf(AbstractPersistentList).a1 = function (element) {
    var index = this.p(element);
    if (!(index === -1)) {
      return this.l1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).r = function (element) {
    return !(this.p(element) === -1);
  };
  protoOf(AbstractPersistentList).s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.t();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.r(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).o = function () {
    return this.tb();
  };
  protoOf(AbstractPersistentList).tb = function () {
    return this.q(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.n1o_1 = buffer;
  }
  protoOf(BufferIterator).e1 = function () {
    if (!this.c1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp1 = this.g1o_1;
    this.g1o_1 = tmp1 + 1 | 0;
    return this.n1o_1[tmp1];
  };
  protoOf(BufferIterator).t1 = function () {
    if (!this.r1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.g1o_1 = this.g1o_1 - 1 | 0;
    return this.n1o_1[this.g1o_1];
  };
  function rootSize($this) {
    return rootSize_1($this.q1o_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.q1o_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.r1o_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.r1o_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.q1o_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.r1o_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.q1o_1 + 1 | 0, $this.r1o_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.q1o_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(size), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.q1o_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.p1o_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.p1o_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.q1o_1 + 1 | 0, $this.r1o_1);
    }
    var lastElement = $this.p1o_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.p1o_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, endIndex);
      elementCarry.s1o_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.s1o_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.q1o_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.p1o_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.p1o_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.s1o_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.s1o_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, startIndex, endIndex);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.s1o_1;
      tailCarry.s1o_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.p1o_1;
    }
    var buffer = $this.o1o_1;
    var shift = $this.r1o_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.o1o_1 = root;
    this.p1o_1 = tail;
    this.q1o_1 = size;
    this.r1o_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q1o_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.q1o_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.q1o_1 - rootSize_1(this.q1o_1) | 0) <= coerceAtMost(this.p1o_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).m = function () {
    return this.q1o_1;
  };
  protoOf(PersistentVector).z = function (element) {
    var tailSize = this.q1o_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.p1o_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.o1o_1, newTail, this.q1o_1 + 1 | 0, this.r1o_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.o1o_1, this.p1o_1, newTail_0);
  };
  protoOf(PersistentVector).k1o = function (index, element) {
    ListImplementation_instance.q1(index, this.q1o_1);
    if (index === this.q1o_1) {
      return this.z(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.o1o_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.o1o_1, this.r1o_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.s1o_1);
  };
  protoOf(PersistentVector).l1 = function (index) {
    ListImplementation_instance.z1(index, this.q1o_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.o1o_1, rootSize_0, this.r1o_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.o1o_1, this.r1o_1, index, new ObjectRef(this.p1o_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.r1o_1, 0);
  };
  protoOf(PersistentVector).h17 = function () {
    return new PersistentVectorBuilder(this, this.o1o_1, this.p1o_1, this.r1o_1);
  };
  protoOf(PersistentVector).q = function (index) {
    ListImplementation_instance.q1(index, this.q1o_1);
    var tmp = this.p1o_1;
    return new PersistentVectorIterator(this.o1o_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.q1o_1, (this.r1o_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).n = function (index) {
    ListImplementation_instance.z1(index, this.q1o_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).w = function (index, element) {
    ListImplementation_instance.z1(index, this.q1o_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.p1o_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.o1o_1, newTail, this.q1o_1, this.r1o_1);
    }
    var newRoot = setInRoot(this, this.o1o_1, this.r1o_1, index, element);
    return new PersistentVector(newRoot, this.p1o_1, this.q1o_1, this.r1o_1);
  };
  function rootSize_0($this) {
    if ($this.b1p_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.b1p_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.b1p_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.y1o_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.y1o_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.y1o_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.b1p_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.x1o_1) {
      $this.z1o_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.x1o_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.a1p_1 = newTail;
      $this.x1o_1 = $this.x1o_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.b1p_1 = $this.b1p_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.z1o_1 = filledTail;
      $this.a1p_1 = newTail;
      $this.b1p_1 = $this.b1p_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.z1o_1 = pushTail_0($this, root, filledTail, $this.x1o_1);
      $this.a1p_1 = newTail;
      $this.b1p_1 = $this.b1p_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.b1p_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.c1() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.e1();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.x1o_1 ? pushBuffers($this, root, rootSize, $this.x1o_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.c1()) {
      $this.x1o_1 = $this.x1o_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.x1o_1, $this.x1o_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.c1()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.e1();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.c1();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.a1p_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.a1p_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.z1o_1 = root;
      $this.a1p_1 = mutableTail;
      $this.b1p_1 = $this.b1p_1 + 1 | 0;
    } else {
      var lastElement = $this.a1p_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.a1p_1;
      var destinationOffset_0 = index + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, endIndex);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.s1o_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, destination, destinationOffset, bufferIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.s1o_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.a1p_1;
    }
    var buffer = ensureNotNull($this.z1o_1);
    var shift = $this.x1o_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.b1p_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.a1p_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.a1p_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.a1p_1;
      var destination = makeMutable($this, $this.a1p_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.z1o_1 = root;
      $this.a1p_1 = mutableTail;
      $this.b1p_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.x1o_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, destination, bufferIndex, startIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.s1o_1;
      tailCarry.s1o_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.z1o_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.a1p_1 = tmp_0;
      $this.b1p_1 = rootSize;
      $this.x1o_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.s1o_1;
    tmp_1.a1p_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.b1p_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.z1o_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.x1o_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.z1o_1 = newRoot;
      $this.x1o_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.s1o_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.k1_1 = $this.k1_1 + 1 | 0;
      }
      oldElementCarry.s1o_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.u1o_1 = vector;
    this.v1o_1 = vectorRoot;
    this.w1o_1 = vectorTail;
    this.x1o_1 = rootShift;
    this.y1o_1 = new MutabilityOwnership();
    this.z1o_1 = this.v1o_1;
    this.a1p_1 = this.w1o_1;
    this.b1p_1 = this.u1o_1.m();
  }
  protoOf(PersistentVectorBuilder).m = function () {
    return this.b1p_1;
  };
  protoOf(PersistentVectorBuilder).c1p = function () {
    return this.k1_1;
  };
  protoOf(PersistentVectorBuilder).f3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.z1o_1 === this.v1o_1 ? this.a1p_1 === this.w1o_1 : false) {
      tmp_0 = this.u1o_1;
    } else {
      this.y1o_1 = new MutabilityOwnership();
      this.v1o_1 = this.z1o_1;
      this.w1o_1 = this.a1p_1;
      var tmp_1;
      if (this.z1o_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.a1p_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.a1p_1, this.b1p_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.z1o_1), this.a1p_1, this.b1p_1, this.x1o_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.u1o_1 = tmp_0;
    return this.u1o_1;
  };
  protoOf(PersistentVectorBuilder).z = function (element) {
    this.k1_1 = this.k1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.a1p_1);
      mutableTail[tailSize] = element;
      this.a1p_1 = mutableTail;
      this.b1p_1 = this.b1p_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.z1o_1, this.a1p_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).f1 = function (elements) {
    if (elements.t()) {
      return false;
    }
    this.k1_1 = this.k1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.o();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.m()) {
      this.a1p_1 = copyToBuffer(this, makeMutable(this, this.a1p_1), tailSize, elementsIterator);
      this.b1p_1 = this.b1p_1 + elements.m() | 0;
    } else {
      var buffersSize = ((elements.m() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.a1p_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.z1o_1;
      var tmp_1 = rootSize_0(this);
      tmp.z1o_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.a1p_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.b1p_1 = this.b1p_1 + elements.m() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).y1 = function (index, element) {
    ListImplementation_instance.q1(index, this.b1p_1);
    if (index === this.b1p_1) {
      this.z(element);
      return Unit_instance;
    }
    this.k1_1 = this.k1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.z1o_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.z1o_1), this.x1o_1, index, element, elementCarry);
    var tmp = elementCarry.s1o_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).n = function (index) {
    ListImplementation_instance.z1(index, this.b1p_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).l1 = function (index) {
    ListImplementation_instance.z1(index, this.b1p_1);
    this.k1_1 = this.k1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.z1o_1, rootSize, this.x1o_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.a1p_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.z1o_1), this.x1o_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.x1o_1, 0);
    var tmp_0 = elementCarry.s1o_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).w = function (index, element) {
    ListImplementation_instance.z1(index, this.b1p_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.a1p_1);
      if (!(mutableTail === this.a1p_1)) {
        this.k1_1 = this.k1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.a1p_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.z1o_1 = setInRoot_0(this, ensureNotNull(this.z1o_1), this.x1o_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.s1o_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).o = function () {
    return this.tb();
  };
  protoOf(PersistentVectorBuilder).tb = function () {
    return this.q(0);
  };
  protoOf(PersistentVectorBuilder).q = function (index) {
    ListImplementation_instance.q1(index, this.b1p_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.f1p_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.g1p_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).e1 = function () {
    this.i1o();
    if (this.g1p_1.c1()) {
      this.g1o_1 = this.g1o_1 + 1 | 0;
      return this.g1p_1.e1();
    }
    var tmp3 = this.g1o_1;
    this.g1o_1 = tmp3 + 1 | 0;
    return this.f1p_1[tmp3 - this.g1p_1.h1o_1 | 0];
  };
  protoOf(PersistentVectorIterator).t1 = function () {
    this.j1o();
    if (this.g1o_1 > this.g1p_1.h1o_1) {
      this.g1o_1 = this.g1o_1 - 1 | 0;
      return this.f1p_1[this.g1o_1 - this.g1p_1.h1o_1 | 0];
    }
    this.g1o_1 = this.g1o_1 - 1 | 0;
    return this.g1p_1.t1();
  };
  function reset($this) {
    $this.h1o_1 = $this.o1p_1.b1p_1;
    $this.p1p_1 = $this.o1p_1.c1p();
    $this.r1p_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.o1p_1.z1o_1;
    if (root == null) {
      $this.q1p_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.o1p_1.b1p_1);
    var trieIndex = coerceAtMost($this.g1o_1, trieSize);
    var trieHeight = ($this.o1p_1.x1o_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.q1p_1 == null) {
      $this.q1p_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.q1p_1).s1p(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.p1p_1 === $this.o1p_1.c1p()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.r1p_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.b1p_1);
    this.o1p_1 = builder;
    this.p1p_1 = this.o1p_1.c1p();
    this.q1p_1 = null;
    this.r1p_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).t1 = function () {
    checkForComodification(this);
    this.j1o();
    this.r1p_1 = this.g1o_1 - 1 | 0;
    var tmp1_elvis_lhs = this.q1p_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.o1p_1.a1p_1;
      this.g1o_1 = this.g1o_1 - 1 | 0;
      var tmp_1 = tmp_0[this.g1o_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.g1o_1 > trieIterator.h1o_1) {
      var tmp_2 = this.o1p_1.a1p_1;
      this.g1o_1 = this.g1o_1 - 1 | 0;
      var tmp_3 = tmp_2[this.g1o_1 - trieIterator.h1o_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.g1o_1 = this.g1o_1 - 1 | 0;
    return trieIterator.t1();
  };
  protoOf(PersistentVectorMutableIterator).e1 = function () {
    checkForComodification(this);
    this.i1o();
    this.r1p_1 = this.g1o_1;
    var tmp2_elvis_lhs = this.q1p_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.o1p_1.a1p_1;
      var tmp1 = this.g1o_1;
      this.g1o_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.c1()) {
      this.g1o_1 = this.g1o_1 + 1 | 0;
      return trieIterator.e1();
    }
    var tmp_2 = this.o1p_1.a1p_1;
    var tmp6 = this.g1o_1;
    this.g1o_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.h1o_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).d1 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.o1p_1.l1(this.r1p_1);
    if (this.r1p_1 < this.g1o_1)
      this.g1o_1 = this.r1p_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.t1p_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_5();
    AbstractPersistentList.call(this);
    this.u1p_1 = buffer;
    assert(this.u1p_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).m = function () {
    return this.u1p_1.length;
  };
  protoOf(SmallPersistentVector).z = function (element) {
    if (this.m() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.u1p_1, this.m() + 1 | 0);
      newBuffer[this.m()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.u1p_1, tail, this.m() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).f1 = function (elements) {
    if ((this.m() + elements.m() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.u1p_1, this.m() + elements.m() | 0);
      var index = this.m();
      var tmp0_iterator = elements.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.h17();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.f1(elements);
    return this_0.f3();
  };
  protoOf(SmallPersistentVector).k1o = function (index, element) {
    ListImplementation_instance.q1(index, this.m());
    if (index === this.m()) {
      return this.z(element);
    }
    if (this.m() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.m() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.u1p_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.u1p_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.m();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.u1p_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.u1p_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.m() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.u1p_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.m() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).l1 = function (index) {
    ListImplementation_instance.z1(index, this.m());
    if (this.m() === 1) {
      return Companion_getInstance_5().t1p_1;
    }
    var newBuffer = copyOf_0(this.u1p_1, this.m() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.u1p_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.m();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).h17 = function () {
    return new PersistentVectorBuilder(this, null, this.u1p_1, 0);
  };
  protoOf(SmallPersistentVector).p = function (element) {
    return indexOf(this.u1p_1, element);
  };
  protoOf(SmallPersistentVector).a2 = function (element) {
    return lastIndexOf(this.u1p_1, element);
  };
  protoOf(SmallPersistentVector).q = function (index) {
    ListImplementation_instance.q1(index, this.m());
    var tmp = this.u1p_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.m());
  };
  protoOf(SmallPersistentVector).n = function (index) {
    ListImplementation_instance.z1(index, this.m());
    var tmp = this.u1p_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).w = function (index, element) {
    ListImplementation_instance.z1(index, this.m());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.u1p_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.j1p_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.j1p_1) {
      var tmp = $this.k1p_1;
      var tmp_0 = i;
      var tmp_1 = $this.k1p_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.g1o_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.j1p_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.g1o_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.g1o_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.k1p_1[$this.j1p_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.j1p_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.j1p_1;
    tmp.k1p_1 = fillArrayVal(Array(size_0), null);
    this.l1p_1 = index === size;
    this.k1p_1[0] = root;
    fillPath(this, index - (this.l1p_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).s1p = function (root, index, size, height) {
    this.g1o_1 = index;
    this.h1o_1 = size;
    this.j1p_1 = height;
    if (this.k1p_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.k1p_1 = fillArrayVal(Array(height), null);
    }
    this.k1p_1[0] = root;
    this.l1p_1 = index === size;
    fillPath(this, index - (this.l1p_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).e1 = function () {
    if (!this.c1()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    this.g1o_1 = this.g1o_1 + 1 | 0;
    if (this.g1o_1 === this.h1o_1) {
      this.l1p_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).t1 = function () {
    if (!this.r1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.g1o_1 = this.g1o_1 - 1 | 0;
    if (this.l1p_1) {
      this.l1p_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_5().t1p_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.s1o_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.v1p_1 = new PersistentHashMap(Companion_getInstance_7().w1p_1, 0);
  }
  protoOf(Companion_5).x1p = function () {
    var tmp = this.v1p_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.a1q_1 = node;
    this.b1q_1 = size;
  }
  protoOf(PersistentHashMap).m = function () {
    return this.b1q_1;
  };
  protoOf(PersistentHashMap).l2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).m2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).n2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).v2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.a1q_1.g1q(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).y2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.a1q_1.h1q(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).o2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.a1q_1.i1q(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.j1q_1, this.m() + newNodeResult.k1q_1 | 0);
  };
  protoOf(PersistentHashMap).s2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.a1q_1.l1q(tmp$ret$0, key, 0);
    if (this.a1q_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().x1p();
    }
    return new PersistentHashMap(newNode, this.m() - 1 | 0);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.q1q_1 = map;
    this.r1q_1 = new MutabilityOwnership();
    this.s1q_1 = this.q1q_1.a1q_1;
    this.t1q_1 = null;
    this.u1q_1 = 0;
    this.v1q_1 = this.q1q_1.m();
  }
  protoOf(PersistentHashMapBuilder).w1q = function (value) {
    this.v1q_1 = value;
    this.u1q_1 = this.u1q_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).m = function () {
    return this.v1q_1;
  };
  protoOf(PersistentHashMapBuilder).f3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.s1q_1 === this.q1q_1.a1q_1) {
      tmp_0 = this.q1q_1;
    } else {
      this.r1q_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.s1q_1, this.m());
    }
    tmp.q1q_1 = tmp_0;
    return this.q1q_1;
  };
  protoOf(PersistentHashMapBuilder).n2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).l2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).m2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).v2 = function (key) {
    var tmp = this.s1q_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.g1q(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).y2 = function (key) {
    var tmp = this.s1q_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.h1q(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).o2 = function (key, value) {
    this.t1q_1 = null;
    var tmp = this;
    var tmp_0 = this.s1q_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.s1q_1 = tmp_0.x1q(tmp$ret$0, key, value, 0, this);
    return this.t1q_1;
  };
  protoOf(PersistentHashMapBuilder).p2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f3();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.m();
      var tmp_0 = this;
      var tmp_1 = this.s1q_1;
      var tmp_2 = map.a1q_1;
      tmp_0.s1q_1 = tmp_1.y1q(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.m() | 0) - intersectionCounter.z1q_1 | 0;
      if (!(oldSize === newSize)) {
        this.w1q(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).p2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).s2 = function (key) {
    this.t1q_1 = null;
    var tmp = this;
    var tmp_0 = this.s1q_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.a1r(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().w1p_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.s1q_1 = tmp_1;
    return this.t1q_1;
  };
  protoOf(PersistentHashMapBuilder).b1r = function (key, value) {
    var oldSize = this.m();
    var tmp = this;
    var tmp_0 = this.s1q_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.c1r(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().w1p_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.s1q_1 = tmp_1;
    return !(oldSize === this.m());
  };
  protoOf(PersistentHashMapBuilder).g1 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().w1p_1;
    tmp.s1q_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.w1q(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.d1r_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).c1 = function () {
    return this.d1r_1.c1();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e1 = function () {
    return this.d1r_1.e1();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).d1 = function () {
    return this.d1r_1.d1();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.e1r_1[pathIndex].s1r(node.f1q_1, node.f1q_1.length, 0);
      while (!equals($this.e1r_1[pathIndex].o1r(), key)) {
        $this.e1r_1[pathIndex].t1r();
      }
      $this.f1r_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.w1r(keyPositionMask)) {
      var keyIndex = node.u1r(keyPositionMask);
      $this.e1r_1[pathIndex].s1r(node.f1q_1, imul(get_ENTRY_SIZE(), node.v1r()), keyIndex);
      $this.f1r_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.x1r(keyPositionMask);
    var targetNode = node.y1r(nodeIndex);
    $this.e1r_1[pathIndex].s1r(node.f1q_1, imul(get_ENTRY_SIZE(), node.v1r()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.m1r_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.k1r_1.u1q_1 === $this.n1r_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.s1q_1, path);
    this.k1r_1 = builder;
    this.l1r_1 = null;
    this.m1r_1 = false;
    this.n1r_1 = this.k1r_1.u1q_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e1 = function () {
    checkForComodification_0(this);
    this.l1r_1 = this.o1r();
    this.m1r_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e1.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).d1 = function () {
    checkNextWasInvoked(this);
    if (this.c1()) {
      var currentKey = this.o1r();
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.k1r_1;
      var key = this.l1r_1;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).s2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.k1r_1.s1q_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var this_1 = this.k1r_1;
      var key_0 = this.l1r_1;
      (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).s2(key_0);
    }
    this.l1r_1 = null;
    this.m1r_1 = false;
    this.n1r_1 = this.k1r_1.u1q_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.c1s_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e1 = function () {
    assert(this.d1s());
    this.r1r_1 = this.r1r_1 + 2 | 0;
    var tmp = this.p1r_1[this.r1r_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.p1r_1[this.r1r_1 - 1 | 0];
    return new MutableMapEntry(this.c1s_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.k1s_1 = parentIterator;
    this.l1s_1 = value;
  }
  protoOf(MutableMapEntry).r2 = function () {
    return this.l1s_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.o1s_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).p1s = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).z = function (element) {
    return this.p1s((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).g1 = function () {
    this.o1s_1.g1();
  };
  protoOf(PersistentHashMapBuilderEntries).o = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.o1s_1);
  };
  protoOf(PersistentHashMapBuilderEntries).g4 = function (element) {
    return this.o1s_1.b1r(element.q2(), element.r2());
  };
  protoOf(PersistentHashMapBuilderEntries).m = function () {
    return this.o1s_1.m();
  };
  protoOf(PersistentHashMapBuilderEntries).f4 = function (element) {
    var tmp0_safe_receiver = this.o1s_1.y2(element.q2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.r2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.r2() == null ? this.o1s_1.v2(element.q2()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.q1s_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).k4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).z = function (element) {
    return this.k4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).g1 = function () {
    this.q1s_1.g1();
  };
  protoOf(PersistentHashMapBuilderKeys).o = function () {
    return new PersistentHashMapBuilderKeysIterator(this.q1s_1);
  };
  protoOf(PersistentHashMapBuilderKeys).s2 = function (element) {
    if (this.q1s_1.v2(element)) {
      this.q1s_1.s2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.s2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).m = function () {
    return this.q1s_1.m();
  };
  protoOf(PersistentHashMapBuilderKeys).p3 = function (element) {
    return this.q1s_1.v2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.r1s_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).m = function () {
    return this.r1s_1.m();
  };
  protoOf(PersistentHashMapBuilderValues).t3 = function (element) {
    return this.r1s_1.w2(element);
  };
  protoOf(PersistentHashMapBuilderValues).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).u3 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).z = function (element) {
    return this.u3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).o = function () {
    return new PersistentHashMapBuilderValuesIterator(this.r1s_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).c4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.f4(element);
  };
  protoOf(AbstractMapBuilderEntries).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.c4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).e4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.g4(element);
  };
  protoOf(AbstractMapBuilderEntries).a1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.e4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.e1r_1[pathIndex].d1s()) {
      return pathIndex;
    }
    if ($this.e1r_1[pathIndex].f1s()) {
      var node = $this.e1r_1[pathIndex].g1s();
      if (pathIndex === 6) {
        $this.e1r_1[pathIndex + 1 | 0].e1s(node.f1q_1, node.f1q_1.length);
      } else {
        $this.e1r_1[pathIndex + 1 | 0].e1s(node.f1q_1, imul(get_ENTRY_SIZE(), node.v1r()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.e1r_1[$this.f1r_1].d1s()) {
      return Unit_instance;
    }
    var inductionVariable = $this.f1r_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.e1r_1[i].f1s() : false) {
          $this.e1r_1[i].h1s();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.f1r_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.e1r_1[i - 1 | 0].h1s();
        }
        $this.e1r_1[i].e1s(Companion_getInstance_7().w1p_1.f1q_1, 0);
      }
       while (0 <= inductionVariable);
    $this.g1r_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.c1())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.e1r_1 = path;
    this.f1r_1 = 0;
    this.g1r_1 = true;
    this.e1r_1[0].e1s(node.f1q_1, imul(get_ENTRY_SIZE(), node.v1r()));
    this.f1r_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).o1r = function () {
    checkHasNext(this);
    return this.e1r_1[this.f1r_1].o1r();
  };
  protoOf(PersistentHashMapBaseIterator).c1 = function () {
    return this.g1r_1;
  };
  protoOf(PersistentHashMapBaseIterator).e1 = function () {
    checkHasNext(this);
    var result = this.e1r_1[this.f1r_1].e1();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.p1r_1 = Companion_getInstance_7().w1p_1.f1q_1;
    this.q1r_1 = 0;
    this.r1r_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).s1r = function (buffer, dataSize, index) {
    this.p1r_1 = buffer;
    this.q1r_1 = dataSize;
    this.r1r_1 = index;
  };
  protoOf(TrieNodeBaseIterator).e1s = function (buffer, dataSize) {
    this.s1r(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).d1s = function () {
    return this.r1r_1 < this.q1r_1;
  };
  protoOf(TrieNodeBaseIterator).o1r = function () {
    assert(this.d1s());
    var tmp = this.p1r_1[this.r1r_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).t1r = function () {
    assert(this.d1s());
    this.r1r_1 = this.r1r_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).f1s = function () {
    assert(this.r1r_1 >= this.q1r_1);
    return this.r1r_1 < this.p1r_1.length;
  };
  protoOf(TrieNodeBaseIterator).g1s = function () {
    assert(this.f1s());
    var tmp = this.p1r_1[this.r1r_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).h1s = function () {
    assert(this.f1s());
    this.r1r_1 = this.r1r_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).c1 = function () {
    return this.d1s();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e1 = function () {
    assert(this.d1s());
    this.r1r_1 = this.r1r_1 + 2 | 0;
    var tmp = this.p1r_1[this.r1r_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e1 = function () {
    assert(this.d1s());
    this.r1r_1 = this.r1r_1 + 2 | 0;
    var tmp = this.p1r_1[this.r1r_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e1 = function () {
    assert(this.d1s());
    this.r1r_1 = this.r1r_1 + 2 | 0;
    var tmp = this.p1r_1[this.r1r_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.p1r_1[this.r1r_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.m1s_1 = key;
    this.n1s_1 = value;
  }
  protoOf(MapEntry).q2 = function () {
    return this.m1s_1;
  };
  protoOf(MapEntry).r2 = function () {
    return this.n1s_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.q2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.r2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.q2(), this.q2()) ? equals(tmp0_safe_receiver.r2(), this.r2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.q2()) + '=' + toString_0(this.r2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.b1t_1 = map;
  }
  protoOf(PersistentHashMapKeys).m = function () {
    return this.b1t_1.m();
  };
  protoOf(PersistentHashMapKeys).p3 = function (element) {
    return this.b1t_1.v2(element);
  };
  protoOf(PersistentHashMapKeys).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).o = function () {
    return new PersistentHashMapKeysIterator(this.b1t_1.a1q_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.c1t_1 = map;
  }
  protoOf(PersistentHashMapValues).m = function () {
    return this.c1t_1.m();
  };
  protoOf(PersistentHashMapValues).t3 = function (element) {
    return this.c1t_1.w2(element);
  };
  protoOf(PersistentHashMapValues).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).o = function () {
    return new PersistentHashMapValuesIterator(this.c1t_1.a1q_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.d1t_1 = map;
  }
  protoOf(PersistentHashMapEntries).m = function () {
    return this.d1t_1.m();
  };
  protoOf(PersistentHashMapEntries).e1t = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.d1t_1.y2(element.q2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.r2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.r2() == null ? this.d1t_1.v2(element.q2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.e1t((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).o = function () {
    return new PersistentHashMapEntriesIterator(this.d1t_1.a1q_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.j1q_1 = node;
    this.k1q_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.d1q_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.f1q_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.f1q_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.u1r(positionMask);
    var newBuffer = insertEntryAtIndex($this.f1q_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.c1q_1 | positionMask, $this.d1q_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.u1r(positionMask);
    if ($this.e1q_1 === owner) {
      $this.f1q_1 = insertEntryAtIndex($this.f1q_1, keyIndex, key, value);
      $this.c1q_1 = $this.c1q_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.f1q_1, keyIndex, key, value);
    return new TrieNode($this.c1q_1 | positionMask, $this.d1q_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.f1q_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.c1q_1, $this.d1q_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.e1q_1 === mutator.r1q_1) {
      $this.f1q_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.u1q_1 = mutator.u1q_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.f1q_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.c1q_1, $this.d1q_1, newBuffer, mutator.r1q_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.f1q_1;
    if (newNodeBuffer.length === 2 ? newNode.d1q_1 === 0 : false) {
      if ($this.f1q_1.length === 1) {
        newNode.c1q_1 = $this.d1q_1;
        return newNode;
      }
      var keyIndex = $this.u1r(positionMask);
      var newBuffer = replaceNodeWithEntry($this.f1q_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.c1q_1 ^ positionMask, $this.d1q_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.f1q_1, $this.f1q_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.c1q_1, $this.d1q_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.f1q_1.length === 1 ? newNode.f1q_1.length === 2 : false) ? newNode.d1q_1 === 0 : false) {
      newNode.c1q_1 = $this.d1q_1;
      return newNode;
    }
    if ($this.e1q_1 === owner) {
      $this.f1q_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.f1q_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.c1q_1, $this.d1q_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.f1q_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.f1q_1, nodeIndex);
    return TrieNode_init_$Create$($this.c1q_1, $this.d1q_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.f1q_1.length === 1)
      return null;
    if ($this.e1q_1 === owner) {
      $this.f1q_1 = removeNodeAtIndex_0($this.f1q_1, nodeIndex);
      $this.d1q_1 = $this.d1q_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.f1q_1, nodeIndex);
    return new TrieNode($this.c1q_1, $this.d1q_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.x1r(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.f1q_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.c1q_1 ^ positionMask, $this.d1q_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.e1q_1 === owner) {
      $this.f1q_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.c1q_1 = $this.c1q_1 ^ positionMask;
      $this.d1q_1 = $this.d1q_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.c1q_1 ^ positionMask, $this.d1q_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.f1q_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.f1q_1, keyIndex);
    return TrieNode_init_$Create$($this.c1q_1 ^ positionMask, $this.d1q_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.m();
    mutator.w1q(tmp1 - 1 | 0);
    mutator.t1q_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.f1q_1.length === 2)
      return null;
    if ($this.e1q_1 === mutator.r1q_1) {
      $this.f1q_1 = removeEntryAtIndex_0($this.f1q_1, keyIndex);
      $this.c1q_1 = $this.c1q_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.f1q_1, keyIndex);
    return new TrieNode($this.c1q_1 ^ positionMask, $this.d1q_1, newBuffer, mutator.r1q_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.f1q_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.f1q_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.m();
    mutator.w1q(tmp1 - 1 | 0);
    mutator.t1q_1 = valueAtKeyIndex($this, i);
    if ($this.f1q_1.length === 2)
      return null;
    if ($this.e1q_1 === mutator.r1q_1) {
      $this.f1q_1 = removeEntryAtIndex_0($this.f1q_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.f1q_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.r1q_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.f1q_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.f1q_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.f1q_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.t1q_1 = valueAtKeyIndex($this, i);
          if ($this.e1q_1 === mutator.r1q_1) {
            $this.f1q_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.u1q_1 = mutator.u1q_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.f1q_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.r1q_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.m();
    mutator.w1q(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.f1q_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.r1q_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.d1q_1 === 0);
    assert($this.c1q_1 === 0);
    assert(otherNode.d1q_1 === 0);
    assert(otherNode.c1q_1 === 0);
    var tempBuffer = copyOf_0($this.f1q_1, $this.f1q_1.length + otherNode.f1q_1.length | 0);
    var i = $this.f1q_1.length;
    var progression = step(until(0, otherNode.f1q_1.length), 2);
    var inductionVariable = progression.ab_1;
    var last = progression.bb_1;
    var step_0 = progression.cb_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.f1q_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.f1q_1[j];
          tempBuffer[i + 1 | 0] = otherNode.f1q_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.z1q_1 = intersectionCounter.z1q_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.f1q_1.length ? $this : newSize === otherNode.f1q_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.y1r($this.x1r(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.y1r(otherNode.x1r(positionMask));
        tmp_0 = targetNode.y1q(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.w1r(positionMask)) {
        var keyIndex = otherNode.u1r(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.m();
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var this_0 = targetNode.x1q(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.m() === oldSize) {
          intersectionCounter.z1q_1 = intersectionCounter.z1q_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.y1r(otherNode.x1r(positionMask));
      var tmp_1;
      if ($this.w1r(positionMask)) {
        var keyIndex_0 = $this.u1r(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.g1q(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.z1q_1 = intersectionCounter.z1q_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.x1q(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.u1r(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.u1r(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.r1q_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.d1q_1 === 0)
      return $this.f1q_1.length / 2 | 0;
    var numValues = countOneBits($this.c1q_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.f1q_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.y1r(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.d1q_1 === otherNode.d1q_1))
      return false;
    if (!($this.c1q_1 === otherNode.c1q_1))
      return false;
    var inductionVariable = 0;
    var last = $this.f1q_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.f1q_1[i] === otherNode.f1q_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.e1q_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.w1p_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.c1q_1 = dataMap;
    this.d1q_1 = nodeMap;
    this.e1q_1 = ownedBy;
    this.f1q_1 = buffer;
  }
  protoOf(TrieNode).v1r = function () {
    return countOneBits(this.c1q_1);
  };
  protoOf(TrieNode).w1r = function (positionMask) {
    return !((this.c1q_1 & positionMask) === 0);
  };
  protoOf(TrieNode).u1r = function (positionMask) {
    return imul(2, countOneBits(this.c1q_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).x1r = function (positionMask) {
    return (this.f1q_1.length - 1 | 0) - countOneBits(this.d1q_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).y1r = function (nodeIndex) {
    var tmp = this.f1q_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).g1q = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.u1r(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.y1r(this.x1r(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.g1q(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).h1q = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.y1r(this.x1r(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.h1q(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).y1q = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.f1t(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.r1q_1);
    }
    var newNodeMap = this.d1q_1 | otherNode.d1q_1;
    var newDataMap = (this.c1q_1 ^ otherNode.c1q_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.c1q_1 & otherNode.c1q_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.u1r(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.u1r(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.e1q_1, mutator.r1q_1) ? this.c1q_1 === newDataMap : false) ? this.d1q_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(size), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.f1q_1.length - 1 | 0) - index_1 | 0;
      mutableNode.f1q_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.w1r(bit_1)) {
        var oldKeyIndex = this.u1r(bit_1);
        mutableNode.f1q_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.f1q_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.u1r(bit_1);
        mutableNode.f1q_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.f1q_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.w1r(bit_1)) {
          intersectionCounter.z1q_1 = intersectionCounter.z1q_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).i1q = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1r(keyPositionMask);
      var targetNode = this.y1r(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.i1q(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.j1q_1;
      tmp_2.j1q_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).x1q = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.t1q_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.m();
      mutator.w1q(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.r1q_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1r(keyPositionMask);
      var targetNode = this.y1r(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.x1q(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.r1q_1);
    }
    var tmp3 = mutator.m();
    mutator.w1q(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.r1q_1);
  };
  protoOf(TrieNode).l1q = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1r(keyPositionMask);
      var targetNode = this.y1r(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.l1q(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).a1r = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1r(keyPositionMask);
      var targetNode = this.y1r(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.a1r(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.r1q_1);
    }
    return this;
  };
  protoOf(TrieNode).c1r = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.w1r(keyPositionMask)) {
      var keyIndex = this.u1r(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.x1r(keyPositionMask);
      var targetNode = this.y1r(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.c1r(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.r1q_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.e1o_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_6().x1p());
  }
  protoOf(Companion_7).f1o = function () {
    return this.e1o_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.g1t_1 = firstElement;
    this.h1t_1 = lastElement;
    this.i1t_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).m = function () {
    return this.i1t_1.m();
  };
  protoOf(PersistentOrderedSet).r = function (element) {
    return this.i1t_1.v2(element);
  };
  protoOf(PersistentOrderedSet).z = function (element) {
    if (this.i1t_1.v2(element)) {
      return this;
    }
    if (this.t()) {
      var newMap = this.i1t_1.o2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.h1t_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.i1t_1.y2(lastElement));
    var newMap_0 = this.i1t_1.o2(lastElement, lastLinks.l1t(element)).o2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.g1t_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).a1 = function (element) {
    var tmp0_elvis_lhs = this.i1t_1.y2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.i1t_1.s2(element);
    if (links.m1t()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.j1t_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).y2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.j1t_1;
      newMap = tmp_0.o2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.l1t(links.k1t_1));
    }
    if (links.o1t()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.k1t_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).y2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.k1t_1;
      newMap = tmp_2.o2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.n1t(links.j1t_1));
    }
    var newFirstElement = !links.m1t() ? links.k1t_1 : this.g1t_1;
    var newLastElement = !links.o1t() ? links.j1t_1 : this.h1t_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).o = function () {
    return new PersistentOrderedSetIterator(this.g1t_1, this.i1t_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.j1t_1 = previous;
    this.k1t_1 = next;
  }
  protoOf(Links).l1t = function (newNext) {
    return new Links(this.j1t_1, newNext);
  };
  protoOf(Links).n1t = function (newPrevious) {
    return new Links(newPrevious, this.k1t_1);
  };
  protoOf(Links).o1t = function () {
    return !(this.k1t_1 === EndOfChain_instance);
  };
  protoOf(Links).m1t = function () {
    return !(this.j1t_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.c1())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.p1t_1 = nextElement;
    this.q1t_1 = map;
    this.r1t_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).c1 = function () {
    return this.r1t_1 < this.q1t_1.m();
  };
  protoOf(PersistentOrderedSetIterator).e1 = function () {
    checkHasNext_0(this);
    var tmp = this.p1t_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.r1t_1 = this.r1t_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.q1t_1.y2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.p1t_1 = tmp_1.k1t_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).z1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).q1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.z1q_1 = count;
  }
  protoOf(DeltaCounter).f1t = function (that) {
    this.z1q_1 = this.z1q_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.z1q_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.z1q_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.z1q_1 === tmp0_other_with_cast.z1q_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    this_0.x1t(block);
    return this_0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.f1f() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.m11_1, other.m11_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.y11(key);
    var slot = composer.p12();
    var tmp;
    if (slot === Companion_getInstance_0().s11_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.q12(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.x1t(block);
    composer.z11();
    return result;
  }
  function illegalDecoyCallException(fName) {
    throw IllegalStateException_init_$Create$('Function ' + fName + ' should have been replaced by compiler.');
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.i1u_1 = map;
    this.j1u_1 = 8;
  }
  protoOf(Builder).f3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.s1q_1 === this.i1u_1.a1q_1) {
      tmp_0 = this.i1u_1;
    } else {
      this.r1q_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.s1q_1, this.m());
    }
    tmp.i1u_1 = tmp_0;
    return this.i1u_1;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().w1p_1;
    tmp.k1u_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_9();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).n2 = function () {
    return protoOf(PersistentHashMap).n2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).h17 = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_9().k1u_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.u1n_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.v1n_1[0].equals(key) ? 0 : $this.v1n_1[0].wa(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.v1n_1[mid];
      var comparison = midVal.ec(key);
      if (comparison.wa(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.wa(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.u1n_1 = size;
    this.v1n_1 = keys;
    this.w1n_1 = values;
  }
  protoOf(ThreadMap).x1n = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.w1n_1[index] : null;
  };
  protoOf(ThreadMap).y1n = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.w1n_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).z1n = function (key, value) {
    var size = this.u1n_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.w1n_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.v1n_1[source];
        var oldValue = this.w1n_1[source];
        if (oldKey.wa(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.v1n_1[source];
          var oldValue_0 = this.w1n_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.r8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.n(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.r8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.r8(truncated);
    }
    buffer.r8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.r8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.r8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.a6(element.hb_1);
        } else {
          _this__u8e3s4.r8(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.m());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.n(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.z(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.p1u_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).bn = function () {
    return this.p1u_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.q1u_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).bn = function () {
    return this.q1u_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      get_applyObservers().a1($observer);
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      get_globalWriteObservers().a1($observer);
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_9() {
  }
  protoOf(Companion_9).fz = function () {
    return currentSnapshot();
  };
  protoOf(Companion_9).j1k = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1u(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_9).j1m = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().z(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_9).s1u = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().z(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_9).k1j = function () {
    return currentSnapshot().k1j();
  };
  protoOf(Companion_9).i1j = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().hq().t1u();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1a()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function Snapshot(id, invalid) {
    this.m1a_1 = invalid;
    this.n1a_1 = id;
    this.o1a_1 = false;
    this.p1a_1 = !(id === 0) ? trackPinning(id, this.u1u()) : -1;
    this.q1a_1 = 8;
  }
  protoOf(Snapshot).v1u = function (_set____db54di) {
    this.m1a_1 = _set____db54di;
  };
  protoOf(Snapshot).u1u = function () {
    return this.m1a_1;
  };
  protoOf(Snapshot).w1u = function (_set____db54di) {
    this.n1a_1 = _set____db54di;
  };
  protoOf(Snapshot).r1a = function () {
    return this.n1a_1;
  };
  protoOf(Snapshot).x1u = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).y1u = function () {
    return 0;
  };
  protoOf(Snapshot).bn = function () {
    this.o1a_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.a1v();
  };
  protoOf(Snapshot).k1k = function () {
    var previous = get_threadSnapshot().hq();
    get_threadSnapshot().m1h(this);
    return previous;
  };
  protoOf(Snapshot).l1k = function (snapshot) {
    get_threadSnapshot().m1h(snapshot);
  };
  protoOf(Snapshot).e1v = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.f1v();
    this.g1v();
  };
  protoOf(Snapshot).f1v = function () {
    set_openSnapshots(get_openSnapshots().l1v(this.r1a()));
  };
  protoOf(Snapshot).g1v = function () {
    this.a1v();
  };
  protoOf(Snapshot).m1v = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.o1a_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).a1v = function () {
    if (this.p1a_1 >= 0) {
      releasePinningLocked(this.p1a_1);
      this.p1a_1 = -1;
    }
  };
  protoOf(Snapshot).n1v = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.p1a_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.p1a_1 = -1;
    return this_0;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().t()) {
      tmp = toMutableList(get_globalWriteObservers());
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
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).r1u = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).k1j = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).d1w = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).e1w = function (snapshot) {
    return this.d1w(snapshot);
  };
  protoOf(GlobalSnapshot).f1w = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).g1w = function (snapshot) {
    return this.f1w(snapshot);
  };
  protoOf(GlobalSnapshot).b1l = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).bn = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.a1v();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.o1w(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().u1w(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().v1w(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().hq();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().hq() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.z1k_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.z1k_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.p1a_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.t1u();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.n1w(null);
      var id = $this.r1a();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.z19_1;
      var inductionVariable = 0;
      var last = modified.y19_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).r1n();
          while (!(current == null)) {
            if (current.w1w_1 === id ? true : contains($this.w1k_1, current.w1w_1)) {
              current.w1w_1 = 0;
            }
            current = current.x1w_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.e1v();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.x1k_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.x1k_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_10() {
    Companion_instance_11 = this;
    this.z1w_1 = new Int32Array(0);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_11();
    Snapshot.call(this, id, invalid);
    this.r1k_1 = readObserver;
    this.s1k_1 = writeObserver;
    this.t1k_1 = 0;
    this.u1k_1 = null;
    this.v1k_1 = null;
    this.w1k_1 = Companion_getInstance_12().a1x_1;
    this.x1k_1 = Companion_getInstance_11().z1w_1;
    this.y1k_1 = 1;
    this.z1k_1 = false;
    this.a1l_1 = 8;
  }
  protoOf(MutableSnapshot).b1v = function () {
    return this.r1k_1;
  };
  protoOf(MutableSnapshot).c1v = function () {
    return this.s1k_1;
  };
  protoOf(MutableSnapshot).r1u = function (readObserver, writeObserver) {
    this.m1v();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.j1w(this.r1a());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().b1x(newId));
    var currentInvalid = this.u1u();
    this.v1u(currentInvalid.b1x(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.r1a() + 1 | 0, newId), mergedReadObserver(readObserver, this.b1v()), mergedWriteObserver(writeObserver, this.c1v()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.z1k_1 ? !this.o1a_1 : false) {
      var previousId = this.r1a();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.w1u(tmp0_0);
      set_openSnapshots(get_openSnapshots().b1x(this.r1a()));
      this.v1u(addRange(this.u1u(), previousId + 1 | 0, this.r1a()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).b1l = function () {
    var modified = this.t1u();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().hq(), this, get_openSnapshots().l1v(get_currentGlobalSnapshot().hq().r1a())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.y19_1 === 0) {
      this.f1v();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().hq();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.t1u();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.t())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().hq();
      var result = this.h1w(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().l1v(previousGlobalSnapshot_0.r1a()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.f1v();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.t1u();
      this.n1w(null);
      previousGlobalSnapshot_0.n1w(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.z1k_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.t())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.t())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.m() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.n(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.g1v();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.z19_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.y19_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.z19_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.y19_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.v1k_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.m() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.n(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.v1k_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).z1u = function () {
    return false;
  };
  protoOf(MutableSnapshot).bn = function () {
    if (!this.o1a_1) {
      protoOf(Snapshot).bn.call(this);
      this.e1w(this);
    }
  };
  protoOf(MutableSnapshot).g1w = function (snapshot) {
    this.y1k_1 = this.y1k_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).e1w = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y1k_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y1k_1 = this.y1k_1 - 1 | 0;
    if (this.y1k_1 === 0) {
      if (!this.z1k_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).k1j = function () {
    if (this.z1k_1 ? true : this.o1a_1)
      return Unit_instance;
    this.i1w();
  };
  protoOf(MutableSnapshot).f1v = function () {
    set_openSnapshots(get_openSnapshots().l1v(this.r1a()).c1x(this.w1k_1));
  };
  protoOf(MutableSnapshot).g1v = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).g1v.call(this);
  };
  protoOf(MutableSnapshot).h1w = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.u1u().b1x(this.r1a()).d1x(this.w1k_1);
    var modified = ensureNotNull(this.t1u());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.z19_1;
    var inductionVariable = 0;
    var last = modified.y19_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.r1n();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.r1a(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.r1a(), this.u1u());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.y2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.t1n(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.z(to(state, current.o1n()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.z(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.z(!equals(merged, previous) ? to(state, merged) : to(state, previous.o1n()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.i1w();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.m() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.n(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.c7();
          var stateRecord = item.d7();
          stateRecord.w1w_1 = this.r1a();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.x1w_1 = state_0.r1n();
          state_0.s1n(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.m() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.n(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.d1o(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.v1k_1;
      this.v1k_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).i1w = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.j1w(this.r1a());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.z1k_1 ? !this.o1a_1 : false) {
      var previousId = this.r1a();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.w1u(tmp0);
      set_openSnapshots(get_openSnapshots().b1x(this.r1a()));
      this.v1u(addRange(this.u1u(), previousId + 1 | 0, this.r1a()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).j1w = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.w1k_1 = this.w1k_1.b1x(id);
  };
  protoOf(MutableSnapshot).k1w = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.x1k_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.x1k_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).l1w = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.x1k_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.x1k_1 = tmp_0;
  };
  protoOf(MutableSnapshot).m1w = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.w1k_1 = this.w1k_1.d1x(snapshots);
  };
  protoOf(MutableSnapshot).d1v = function (state) {
    var tmp0_elvis_lhs = this.t1u();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.n1w(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.m1c(state);
  };
  protoOf(MutableSnapshot).x1u = function (_set____db54di) {
    this.t1k_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).y1u = function () {
    return this.t1k_1;
  };
  protoOf(MutableSnapshot).n1w = function (_set____db54di) {
    this.u1k_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).t1u = function () {
    return this.u1k_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.f1x_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.h1x_1 = snapshot;
    this.i1x_1 = 8;
  }
  function SnapshotApplyResult() {
    this.j1x_1 = 0;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().hq();
    modified = previousGlobalSnapshot.t1u();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().u1w(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.m() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.n(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().u1w(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.z19_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.y19_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.w1w_1 = currentSnapshot().r1a();
    this.x1w_1 = null;
    this.y1w_1 = 8;
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.b1y_1) {
      $this.b1y_1 = true;
      $this.a1y_1.e1w($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.a1y_1 = parent;
    this.b1y_1 = false;
    this.a1y_1.g1w(this);
  }
  protoOf(NestedMutableSnapshot).bn = function () {
    if (!this.o1a_1) {
      protoOf(MutableSnapshot).bn.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).b1l = function () {
    if (this.a1y_1.z1k_1 ? true : this.a1y_1.o1a_1)
      return new Failure(this);
    var modified = this.t1u();
    var id = this.r1a();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.a1y_1, this, this.a1y_1.u1u()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.y19_1 === 0) {
      this.e1v();
    } else {
      var result = this.h1w(this.a1y_1.r1a(), optimisticMerges_0, this.a1y_1.u1u());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.a1y_1.t1u();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.l1j(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.a1y_1.n1w(modified);
        this.n1w(null);
      }
    }
    if (this.a1y_1.r1a() < id) {
      this.a1y_1.i1w();
    }
    this.a1y_1.v1u(this.a1y_1.u1u().l1v(id).c1x(this.w1k_1));
    this.a1y_1.j1w(id);
    this.a1y_1.k1w(this.n1v());
    this.a1y_1.m1w(this.w1k_1);
    this.a1y_1.l1w(this.x1k_1);
    this.z1k_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.b1x(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.t1u();
    var id = currentSnapshot.r1a();
    if (modified == null)
      return null;
    var start = applyingSnapshot.u1u().b1x(applyingSnapshot.r1a()).d1x(applyingSnapshot.w1k_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.z19_1;
    var inductionVariable = 0;
    var last = modified.y19_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.r1n();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.r1a(), applyingSnapshot.u1u());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.t1n(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.o2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().n(snapshot.r1a())) {
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().l1v(previousGlobalSnapshot.r1a()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().l1v(previousGlobalSnapshot.r1a()));
    get_currentGlobalSnapshot().h1f(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.bn();
    set_openSnapshots(get_openSnapshots().b1x(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.c1y_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.e1y_1[i];
        var value = entry == null ? null : entry.hq();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.e1y_1[currentUsed] = entry;
            this_0.d1y_1[currentUsed] = this_0.d1y_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.e1y_1[i_0] = null;
        this_0.d1y_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.c1y_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().m1c(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.w1w_1 < current.w1w_1 ? current : candidate;
      }
      current = current.x1w_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.r1n();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().g1y(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.w1w_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.w1w_1 < validRecord.w1w_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.r1n();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.w1w_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.w1w_1 < current_0.w1w_1)
                    youngest = current_0;
                  current_0 = current_0.x1w_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.w1w_1 = 0;
            recordToOverwrite.n1n(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.x1w_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.w1w_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.n(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_10.fz();
    var tmp0_safe_receiver = snapshot.b1v();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.r1a(), snapshot.u1u());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_10.fz();
      var tmp_0 = state.r1n();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.r1a(), syncSnapshot.u1u());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_10.fz();
    var tmp0_elvis_lhs = readable(r, snapshot.r1a(), snapshot.u1u());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_10.fz();
      tmp = readable(r, syncSnapshot.r1a(), syncSnapshot.u1u());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.x1u(snapshot.y1u() + 1 | 0);
    var tmp1_safe_receiver = snapshot.c1v();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.z1u()) {
      snapshot.d1v(state);
    }
    var id = snapshot.r1a();
    if (candidate.w1w_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.w1w_1 = id;
    snapshot.d1v(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.w1w_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.o1n();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.w1w_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.x1w_1 = state.r1n();
      state.s1n(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.r1n();
    var validRecord = null;
    var reuseLimit = get_pinningTable().g1y(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_12().a1x_1;
    while (!(current == null)) {
      var currentId = current.w1w_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.w1w_1 < validRecord.w1w_1 ? current : validRecord;
        }
      }
      current = current.x1w_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.z1u()) {
      snapshot.d1v(state);
    }
    var id = snapshot.r1a();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.u1u());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.w1w_1 === snapshot.r1a())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.d1v(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.n1n(_this__u8e3s4);
    newData.w1w_1 = snapshot.r1a();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().b1x(result.r1a()));
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_12().a1x_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_12().a1x_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().b1x(this_0.r1a()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().hq();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.q1w_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.q1w_1;
    var half = $this.p1w_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.p1w_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.q1w_1;
    var index = $this.r1w_1;
    var handles = $this.s1w_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.q1w_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.q1w_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.r1w_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.q1w_1 = newValues;
    $this.r1w_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.s1w_1.length;
    if ($this.t1w_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.s1w_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.s1w_1 = newHandles;
    }
    var handle = $this.t1w_1;
    $this.t1w_1 = $this.s1w_1[$this.t1w_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.s1w_1[handle] = $this.t1w_1;
    $this.t1w_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.p1w_1 = 0;
    this.q1w_1 = new Int32Array(16);
    this.r1w_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s1w_1 = tmp_1;
    this.t1w_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).g1y = function (default_0) {
    return this.p1w_1 > 0 ? this.q1w_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).u1w = function (value) {
    ensure(this, this.p1w_1 + 1 | 0);
    var tmp1 = this.p1w_1;
    this.p1w_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.q1w_1[i] = value;
    this.r1w_1[i] = handle;
    this.s1w_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).v1w = function (handle) {
    var i = this.s1w_1[handle];
    swap(this, i, this.p1w_1 - 1 | 0);
    this.p1w_1 = this.p1w_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_11() {
    Companion_instance_12 = this;
    this.a1x_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.p1y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).y1y = function ($this$sequence, $completion) {
    var tmp = this.z1y($this$sequence, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  protoOf(SnapshotIdSet$iterator$slambda).wd = function (p1, $completion) {
    return this.y1y(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 15;
            this.r1y_1 = this.p1y_1.k1v_1;
            if (!(this.r1y_1 == null)) {
              this.s1y_1 = intArrayIterator(this.r1y_1);
              this.yc_1 = 1;
              continue $sm;
            } else {
              this.yc_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.s1y_1.c1()) {
              this.yc_1 = 3;
              continue $sm;
            }

            this.t1y_1 = this.s1y_1.e1();
            this.yc_1 = 2;
            suspendResult = this.q1y_1.kf(this.t1y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.yc_1 = 1;
            continue $sm;
          case 3:
            this.yc_1 = 4;
            continue $sm;
          case 4:
            if (!this.p1y_1.i1v_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.u1y_1 = until(0, 64).o();
              this.yc_1 = 5;
              continue $sm;
            } else {
              this.yc_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.u1y_1.c1()) {
              this.yc_1 = 8;
              continue $sm;
            }

            this.v1y_1 = this.u1y_1.e1();
            if (!this.p1y_1.i1v_1.mc((new Long(1, 0)).jc(this.v1y_1)).equals(new Long(0, 0))) {
              this.yc_1 = 6;
              suspendResult = this.q1y_1.kf(this.v1y_1 + this.p1y_1.j1v_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.yc_1 = 7;
              continue $sm;
            }

          case 6:
            this.yc_1 = 7;
            continue $sm;
          case 7:
            this.yc_1 = 5;
            continue $sm;
          case 8:
            this.yc_1 = 9;
            continue $sm;
          case 9:
            if (!this.p1y_1.h1v_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.w1y_1 = until(0, 64).o();
              this.yc_1 = 10;
              continue $sm;
            } else {
              this.yc_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.w1y_1.c1()) {
              this.yc_1 = 13;
              continue $sm;
            }

            this.x1y_1 = this.w1y_1.e1();
            if (!this.p1y_1.h1v_1.mc((new Long(1, 0)).jc(this.x1y_1)).equals(new Long(0, 0))) {
              this.yc_1 = 11;
              Companion_getInstance();
              suspendResult = this.q1y_1.kf((this.x1y_1 + 64 | 0) + this.p1y_1.j1v_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.yc_1 = 12;
              continue $sm;
            }

          case 11:
            this.yc_1 = 12;
            continue $sm;
          case 12:
            this.yc_1 = 10;
            continue $sm;
          case 13:
            this.yc_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.bd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.zc_1 === 15) {
          throw e;
        } else {
          this.yc_1 = this.zc_1;
          this.bd_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).z1y = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.p1y_1, completion);
    i.q1y_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.y1y($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_12();
    this.h1v_1 = upperSet;
    this.i1v_1 = lowerSet;
    this.j1v_1 = lowerBound;
    this.k1v_1 = belowBound;
  }
  protoOf(SnapshotIdSet).n = function (bit) {
    var offset = bit - this.j1v_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).jc(offset).mc(this.i1v_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.jc(offset - 64 | 0).mc(this.h1v_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.k1v_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).b1x = function (bit) {
    var offset = bit - this.j1v_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).jc(offset);
      if (this.i1v_1.mc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.h1v_1, this.i1v_1.nc(mask), this.j1v_1, this.k1v_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.jc(offset - 64 | 0);
        if (this.h1v_1.mc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.h1v_1.nc(mask_0), this.i1v_1, this.j1v_1, this.k1v_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.n(bit)) {
            var newUpperSet = this.h1v_1;
            var newLowerSet = this.i1v_1;
            var newLowerBound = this.j1v_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.k1v_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.z(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.mc((new Long(1, 0)).jc(index)).equals(new Long(0, 0))) {
                      newBelowBound.z(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.k1v_1 : tmp1_elvis_lhs)).b1x(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.k1v_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.h1v_1, this.i1v_1, this.j1v_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.h1v_1, this.i1v_1, this.j1v_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).l1v = function (bit) {
    var offset = bit - this.j1v_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).jc(offset);
      if (!this.i1v_1.mc(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.h1v_1, this.i1v_1.mc(mask.ic()), this.j1v_1, this.k1v_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.jc(offset - 64 | 0);
        if (!this.h1v_1.mc(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.h1v_1.mc(mask_0.ic()), this.i1v_1, this.j1v_1, this.k1v_1);
        }
      } else {
        if (offset < 0) {
          var array = this.k1v_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.h1v_1, this.i1v_1, this.j1v_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.h1v_1, this.i1v_1, this.j1v_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).c1x = function (bits) {
    if (bits === Companion_getInstance_12().a1x_1)
      return this;
    if (this === Companion_getInstance_12().a1x_1)
      return Companion_getInstance_12().a1x_1;
    var tmp;
    if (bits.j1v_1 === this.j1v_1 ? bits.k1v_1 === this.k1v_1 : false) {
      tmp = new SnapshotIdSet(this.h1v_1.mc(bits.h1v_1.ic()), this.i1v_1.mc(bits.i1v_1.ic()), this.j1v_1, this.k1v_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.o();
      while (tmp0_iterator.c1()) {
        var element = tmp0_iterator.e1();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.l1v(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).d1x = function (bits) {
    if (bits === Companion_getInstance_12().a1x_1)
      return this;
    if (this === Companion_getInstance_12().a1x_1)
      return bits;
    var tmp;
    if (bits.j1v_1 === this.j1v_1 ? bits.k1v_1 === this.k1v_1 : false) {
      tmp = new SnapshotIdSet(this.h1v_1.nc(bits.h1v_1), this.i1v_1.nc(bits.i1v_1), this.j1v_1, this.k1v_1);
    } else {
      var tmp_0;
      if (this.k1v_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.o();
        while (tmp0_iterator.c1()) {
          var element = tmp0_iterator.e1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.b1x(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.o();
        while (tmp0_iterator_0.c1()) {
          var element_0 = tmp0_iterator_0.e1();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.b1x(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).o = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).o();
  };
  protoOf(SnapshotIdSet).o1w = function (default_0) {
    var belowBound = this.k1v_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.i1v_1.equals(new Long(0, 0)))
      return this.j1v_1 + lowestBitOf(this.i1v_1) | 0;
    if (!this.h1v_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.j1v_1 + 64 | 0) + lowestBitOf(this.h1v_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.o();
    while (tmp0_iterator.c1()) {
      var item = tmp0_iterator.e1();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.z(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.mc(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.kc(32);
    }
    if (b.mc(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.kc(16);
    }
    if (b.mc(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.kc(8);
    }
    if (b.mc(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.kc(4);
    }
    if (!b.mc(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.mc(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.mc(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.mc(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.d1z_1 = list;
    this.e1z_1 = 0;
  }
  protoOf(StateListStateRecord).n1n = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$tjv5ep_bz2qmh();
    var tmp = this;
    tmp.d1z_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).d1z_1;
    this.e1z_1 = value.e1z_1;
  };
  protoOf(StateListStateRecord).o1n = function () {
    return new StateListStateRecord(this.d1z_1);
  };
  function SnapshotStateList() {
    this.f1z_1 = new StateListStateRecord(persistentListOf());
    this.g1z_1 = 0;
  }
  protoOf(SnapshotStateList).r1n = function () {
    return this.f1z_1;
  };
  protoOf(SnapshotStateList).s1n = function (value) {
    value.x1w_1 = this.f1z_1;
    var tmp = this;
    tmp.f1z_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).h1z = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.f1z_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    return current(this_0).e1z_1;
  };
  protoOf(SnapshotStateList).i1z = function () {
    var tmp = this.f1z_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).m = function () {
    return this.i1z().d1z_1.m();
  };
  protoOf(SnapshotStateList).ze = function (element) {
    return this.i1z().d1z_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ze((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).af = function (elements) {
    return this.i1z().d1z_1.s(elements);
  };
  protoOf(SnapshotStateList).s = function (elements) {
    return this.af(elements);
  };
  protoOf(SnapshotStateList).n = function (index) {
    return this.i1z().d1z_1.n(index);
  };
  protoOf(SnapshotStateList).j1z = function (element) {
    return this.i1z().d1z_1.p(element);
  };
  protoOf(SnapshotStateList).p = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.j1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).t = function () {
    return this.i1z().d1z_1.t();
  };
  protoOf(SnapshotStateList).o = function () {
    return this.tb();
  };
  protoOf(SnapshotStateList).k1z = function (element) {
    return this.i1z().d1z_1.a2(element);
  };
  protoOf(SnapshotStateList).a2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.k1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).tb = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).q = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).b1b = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).z(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).z = function (element) {
    return this.b1b((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).l1z = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).k1o(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).y1 = function (index, element) {
    return this.l1z(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).m1z = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).f1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).f1 = function (elements) {
    return this.m1z(elements);
  };
  protoOf(SnapshotStateList).g1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.f1z_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_10.fz();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$tjv5ep_bz2qmh();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.d1z_1 = persistentListOf();
    $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).n1z = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).a1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).l1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.n(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).l1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).o1z = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.n(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.f1z_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.e1z_1;
      oldList = current_0.d1z_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).w(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.f1z_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.fz();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.e1z_1 === currentModification) {
        $this$writable.d1z_1 = newList;
        $this$writable.e1z_1 = $this$writable.e1z_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).w = function (index, element) {
    return this.o1z(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.p1z_1.h1z() === $this.r1z_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.p1z_1 = list;
    this.q1z_1 = offset - 1 | 0;
    this.r1z_1 = this.p1z_1.h1z();
  }
  protoOf(StateListIterator).r1 = function () {
    return this.q1z_1 >= 0;
  };
  protoOf(StateListIterator).s1 = function () {
    return this.q1z_1 + 1 | 0;
  };
  protoOf(StateListIterator).t1 = function () {
    validateModification(this);
    validateRange(this.q1z_1, this.p1z_1.m());
    // Inline function 'kotlin.also' call
    var this_0 = this.p1z_1.n(this.q1z_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.q1z_1 = this.q1z_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).c1 = function () {
    return this.q1z_1 < (this.p1z_1.m() - 1 | 0);
  };
  protoOf(StateListIterator).e1 = function () {
    validateModification(this);
    var newIndex = this.q1z_1 + 1 | 0;
    validateRange(newIndex, this.p1z_1.m());
    // Inline function 'kotlin.also' call
    var this_0 = this.p1z_1.n(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.q1z_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).d1 = function () {
    validateModification(this);
    this.p1z_1.l1(this.q1z_1);
    this.q1z_1 = this.q1z_1 - 1 | 0;
    this.r1z_1 = this.p1z_1.h1z();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$tjv5ep_bz2qmh() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.c1y_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.d1y_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.e1y_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hq();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.d1y_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.e1y_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.hq();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.c1y_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.d1y_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.e1y_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hq();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.c1y_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.c1y_1 = 0;
    this.d1y_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e1y_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).m1c = function (value) {
    var index;
    var size = this.c1y_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.e1y_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.e1y_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.e1y_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.d1y_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.d1y_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.e1y_1 = newValues;
      this.d1y_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.e1y_1;
      var destination = this.e1y_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.d1y_1;
      var destination_0 = this.d1y_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.e1y_1[insertIndex] = new WeakReference(value);
    this.d1y_1[insertIndex] = hash;
    this.c1y_1 = this.c1y_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.l1e_1 = value;
    this.m1e_1 = 8;
  }
  protoOf(AtomicReference).hq = function () {
    return this.l1e_1;
  };
  protoOf(AtomicReference).h1f = function (value) {
    this.l1e_1 = value;
  };
  protoOf(AtomicReference).n1e = function (value) {
    var oldValue = this.l1e_1;
    this.l1e_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).u1f = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.l1e_1)) {
      this.l1e_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.k1x_1 = value;
  }
  protoOf(AtomicInt).u1w = function (amount) {
    this.k1x_1 = this.k1x_1 + amount | 0;
    return this.k1x_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.v6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a20_1 = _this__u8e3s4;
    this.b20_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).kd = function () {
    var suspendResult = this.ad_1;
    $sm: do
      try {
        var tmp = this.yc_1;
        switch (tmp) {
          case 0:
            this.zc_1 = 2;
            this.yc_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.b20_1, safe));
            suspendResult = returnIfSuspended(safe.w6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).i10 = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.ad_1 = Unit_instance;
    tmp.bd_1 = null;
    return tmp.kd();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).l1a = function (name) {
    return null;
  };
  protoOf(Trace).d1b = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.t1t_1) {
      var scope = $this.v1t_1;
      if (!(scope == null)) {
        scope.h1g();
        $this.v1t_1 = null;
      }
      var scopes = $this.w1t_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.m();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.n(index);
            item.h1g();
          }
           while (inductionVariable < last);
        scopes.g1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.t1t_1) {
      var scope = composer.x11();
      if (!(scope == null)) {
        composer.u12(scope);
        var lastScope = $this.v1t_1;
        if (replacableWith(lastScope, scope)) {
          $this.v1t_1 = scope;
        } else {
          var lastScopes = $this.w1t_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.w1t_1 = newScopes;
            newScopes.z(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.m();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.n(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.w(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.z(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.d1c(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.c20($p1, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.s1t_1 = key;
    this.t1t_1 = tracked;
    this.u1t_1 = null;
    this.v1t_1 = null;
    this.w1t_1 = null;
  }
  protoOf(ComposableLambdaImpl).x1t = function (block) {
    if (!equals(this.u1t_1, block)) {
      var oldBlockNull = this.u1t_1 == null;
      this.u1t_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).d1c = function (c, changed) {
    var c_0 = c.e12(this.s1t_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.r12(this) ? differentBits(0) : sameBits(0));
    var tmp = this.u1t_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.f12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1h(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).c20 = function (p1, c, changed) {
    var c_0 = c.e12(this.s1t_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.r12(this) ? differentBits(1) : sameBits(1));
    var tmp = this.u1t_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.f12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1h(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.y16_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).n = function (key) {
    return this.y16_1.y2(key);
  };
  protoOf(IntMap).r19 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.y16_1.o2(key, value);
  };
  protoOf(IntMap).g1 = function () {
    this.y16_1.g1();
  };
  function WeakReference(reference) {
    this.f1y_1 = reference;
  }
  protoOf(WeakReference).hq = function () {
    return this.f1y_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).gz = onBeginChanges;
  protoOf(OffsetApplier).hz = onEndChanges;
  protoOf(AbstractApplier).gz = onBeginChanges;
  protoOf(AbstractApplier).hz = onEndChanges;
  protoOf(BroadcastFrameClock).q2 = get_key;
  protoOf(BroadcastFrameClock).fd = get;
  protoOf(BroadcastFrameClock).kg = fold;
  protoOf(BroadcastFrameClock).jg = minusKey;
  protoOf(BroadcastFrameClock).lg = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.y6();
  });
  protoOf(StructuralEqualityPolicy).h1n = merge;
  protoOf(SnapshotStateList).t1n = mergeRecords;
  protoOf(MonotonicClockImpl).q2 = get_key;
  protoOf(MonotonicClockImpl).fd = get;
  protoOf(MonotonicClockImpl).kg = fold;
  protoOf(MonotonicClockImpl).jg = minusKey;
  protoOf(MonotonicClockImpl).lg = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_10 = new Companion_9();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = illegalDecoyCallException;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionLocalProvider$composable;
  _.$_$.f = CompositionScopedCoroutineScopeCanceller;
  _.$_$.g = ControlledComposition;
  _.$_$.h = get_DefaultMonotonicFrameClock;
  _.$_$.i = DisposableEffect$composable_1;
  _.$_$.j = DisposableEffect$composable_0;
  _.$_$.k = DisposableEffect$composable;
  _.$_$.l = LaunchedEffect$composable;
  _.$_$.m = Recomposer;
  _.$_$.n = compositionLocalOf;
  _.$_$.o = createCompositionCoroutineScope;
  _.$_$.p = invalidApplier;
  _.$_$.q = isTraceInProgress;
  _.$_$.r = mutableStateListOf;
  _.$_$.s = mutableStateOf;
  _.$_$.t = sourceInformationMarkerEnd;
  _.$_$.u = sourceInformationMarkerStart;
  _.$_$.v = sourceInformation;
  _.$_$.w = staticCompositionLocalOf;
  _.$_$.x = traceEventEnd;
  _.$_$.y = traceEventStart;
  _.$_$.z = updateChangedFlags;
  _.$_$.a1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.b1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.c1 = _Updater___init__impl__rbfxm8;
  _.$_$.d1 = Updater__set_impl_v7kwss;
  _.$_$.e1 = Companion_instance_10;
  _.$_$.f1 = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
