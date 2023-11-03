WebAssembly.instantiateStreaming(fetch('./table.wasm')).then((res) => {
  const { callByIndex } = res.instance.exports;
  console.log(callByIndex(0)); // 22
  console.log(callByIndex(1)); // 33
});
