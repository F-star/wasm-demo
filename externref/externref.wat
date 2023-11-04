(module
  (type $jsFunc (func (param externref)))
  (func $invoke (import "js" "invokeFunction") (type $jsFunc))
  
  (func (export "callJSFunction") (param externref)
    local.get 0
    call $invoke
  )
)
