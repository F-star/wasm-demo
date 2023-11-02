const importObject = {
  js: {
    // 一个初始值为 233 的 i32 变量
    global: new WebAssembly.Global(
      {
        value: 'i32',
        mutable: true,
      },
      233
    ),
  },
};

WebAssembly.instantiateStreaming(fetch('./global.wasm'), importObject).then(
  (res) => {
    const { instance } = res;
    console.log(instance);
    const { getGlobal, incGlobal } = res.instance.exports;

    console.log('全局变量');
    console.log(getGlobal()); // 输出：233
    incGlobal();
    incGlobal();
    console.log(getGlobal()); // 输出：235
  }
);
