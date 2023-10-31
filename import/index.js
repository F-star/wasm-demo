const importObject = {
  a: {
    b: (num) => {
      console.log('a.b', num)
    }
  }
}

WebAssembly.instantiateStreaming(fetch('./import.wasm'), importObject).then(res => {
  const { instance } = res;
  const { getNum } = res.instance.exports;
  getNum();
});

