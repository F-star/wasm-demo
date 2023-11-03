WebAssembly.instantiateStreaming(fetch('./type.wasm')).then((res) => {
  const { instance } = res;
  const { add } = instance.exports;
  console.log(add(2, 3));
});
