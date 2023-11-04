(module
  (memory 1)
  (export "memory" (memory 0))

  (func (export "add_vectors")
    (param $aOffset i32) (param $bOffset i32)
    (local $a v128) (local $b v128)
    (local.set $a (v128.load (local.get $aOffset)))
    (local.set $b (v128.load (local.get $bOffset)))
    (v128.store (i32.const 0) (i32x4.add (local.get $a) (local.get $b)))
  )
)
