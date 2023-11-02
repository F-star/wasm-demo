(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))

  ;; 函数接受两个字符串并拼接它们
  (func $concatStrings (param $offset1 i32) (param $length1 i32) (param $offset2 i32) (param $length2 i32) (result i32) (result i32)
    ;; 这里的代码是将两个字符串拼接到内存中，并返回新字符串的偏移量和长度
    ;; 注意：为了简单起见，这里假设你有足够的内存空间来拼接字符串
    (local $newOffset i32)
    ;; 假设新的偏移量是在第一个字符串的结束处
    local.get $offset1
    local.get $length1
    i32.add
    local.set $newOffset

    ;; 将第二个字符串拷贝到新的偏移量处
    local.get $newOffset
    local.get $offset2
    local.get $length2
    memory.copy

    ;; 返回新的偏移量和长度
    local.get $offset1
    local.get $length1
    local.get $length2
    i32.add
  )

  (func (export "concatAndLog") (param $offset1 i32) (param $length1 i32) (param $offset2 i32) (param $length2 i32)
    ;; 调用上面的拼接函数
    local.get $offset1
    local.get $length1
    local.get $offset2
    local.get $length2
    call $concatStrings

    ;; 使用结果来调用$log
    call $log
  )
)
