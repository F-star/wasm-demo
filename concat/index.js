const memory = new WebAssembly.Memory({ initial: 1 });

function consoleLogString(offset, length) {
  // console.log(offset, length);
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder('utf-8').decode(bytes);
  console.log(string); // 输出 Hello, WebAssembly!
}

let currentOffset = 0; // 添加这个变量来跟踪当前可用的内存偏移量

function stringToMemory(str, mem) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  new Uint8Array(mem.buffer, currentOffset, bytes.length).set(bytes);
  const returnOffset = currentOffset;
  currentOffset += bytes.length; // 更新偏移量
  return { offset: returnOffset, length: bytes.length };
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch('./concat.wasm'), importObject).then(
  (res) => {
    const str1 = 'Hello, ';
    const str2 = 'WebAssembly!';
    const mem1 = stringToMemory(str1, memory);
    const mem2 = stringToMemory(str2, memory);
    res.instance.exports.concatAndLog(
      mem1.offset,
      mem1.length,
      mem2.offset,
      mem2.length
    );
  }
);
