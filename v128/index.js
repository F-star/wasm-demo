WebAssembly.instantiateStreaming(fetch('./v128.wasm')).then((res) => {
  const { add_vectors, memory } = res.instance.exports;

  // 首先在内存中分配两个向量a和b
  const a = new Int32Array(memory.buffer, 0, 4);
  const b = new Int32Array(memory.buffer, 16, 4);

  // 初始化向量a和b的值
  a.set([1, 2, 3, 4]);
  b.set([5, 6, 7, 8]);

  console.log('Vector A:', a);
  console.log('Vector B:', b);

  // 调用add_vectors函数，传入向量a和b在内存中的偏移量
  add_vectors(0, 16);

  // 读取和打印结果
  const result = new Int32Array(memory.buffer, 0, 4);
  console.log('Result:', result); // [6, 8, 10, 12]
});
