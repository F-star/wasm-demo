const importObject = {
  js: {
    invokeFunction: (fn) => {
      fn();
    },
  },
};

WebAssembly.instantiateStreaming(fetch('./externref.wasm'), importObject).then(
  (res) => {
    const { instance } = res;
    const { callJSFunction } = instance.exports;

    callJSFunction(() => {
      console.log('被执行的是来自 js 函数');
    });
  }
);
