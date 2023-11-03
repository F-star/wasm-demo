WebAssembly.instantiateStreaming(fetch('./add.wasm')).then((res) => {
  const { instance } = res;
  const { add } = instance.exports;
  console.log(add('1', 34));
  console.log(add(100.233, 34)); // 浮点数被 add 转成整数了
  console.log(add(false, 34)); // true 被转成 1，false 被转成 0
  // ...
});
