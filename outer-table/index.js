const table = new WebAssembly.Table({ initial: 1, element: 'anyfunc' });

const importObject = {
  js: { table },
};

WebAssembly.instantiateStreaming(
  fetch('./outer-table.wasm'),
  importObject
).then((res) => {
  const { call, get666 } = res.instance.exports;
  console.log(call()); // 22

  console.log(table.get(0)); // 获取 wasm 函数
  table.set(0, get666);
  console.log(call()); // 666
});
