// memory 对象，大小为 1 页（page），1 页为 64 KB
const memory = new WebAssembly.Memory({ initial: 1 });

// wasm 无法直接返回字符串，但可以修改线性内存
// 然后再指定线性内存的区间让 js 去截取需要的 ArrayBuffer
// 最后 ArrayBuffer 转 字符串
function consoleLogString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder('utf-8').decode(bytes);
  console.log(string);
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch('./memory.wasm'), importObject).then(
  (res) => {
    res.instance.exports.writeHi();
  }
);
