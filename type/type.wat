(module
  ;; 将两个 i32 类型的参数相加返回
  (func (export "add") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add
  )

  ;; TODO:
)
