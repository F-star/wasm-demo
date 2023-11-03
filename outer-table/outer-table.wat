(module
   ;; 导入 table
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $f1)

  ;; 函数声明可以在任何位置
  (func $f1 (result i32)
    i32.const 22
  )

  (type $return_i32 (func (result i32)))
  (func (export "call") (result i32)
    i32.const 0
    call_indirect (type $return_i32)
  )

  (func (export "get666") (result i32)
    i32.const 666
  )
)
