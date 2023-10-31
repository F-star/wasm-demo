(module
  ;; wasm 会拿到 importObject 的 a.b 方法
  (import "a" "b" (func $getNum (param i32)))
  (func (export "getNum")
    i32.const 114514
    call $getNum ;; 这里把数字传给了 importObject 的 a.b 方法
  )
)
