(module
  (import "console" "log" (func $log (param i32 i32)))
  ;; 传入的 memory 大小为 1 页
  (import "js" "mem" (memory 1))
  ;; 在 memory 的地址 0 处设置数据 Hi
  (data (i32.const 0) "Hi")
  
  (func (export "writeHi")
    i32.const 0  ;; 字符串起始位置
    i32.const 2  ;; 字符串长度
    call $log
  )
)
