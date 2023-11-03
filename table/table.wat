(module
   ;; table 大小为 2，且为函数引用类型。
  (table 2 funcref)
  ;; table 从 0 偏移值填充声明的两个函数
  ;; 0 指向 $f1，1 指向 $f2
  (elem (i32.const 0) $f1 $f2)

  ;; 函数声明可以在任何位置
  (func $f1 (result i32)
    i32.const 22
  )
  (func $f2 (result i32)
    i32.const 33
  )

  ;; 定义函数类型，一个返回 i32 的函数（类比 ts 的函数类型）
  (type $return_i32 (func (result i32)))
  ;; 暴露一个 callByIndex 方法给 js
  ;; callByIndex(0) 表示调用 table 上索引为 0 的函数。
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    ;; （间接）调用 $i 索引值在 table 中指向的方法
    call_indirect (type $return_i32)
  )
)
