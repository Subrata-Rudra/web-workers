onmessage = function (message) {
  let mul = 1;
  for (let i = 1; i < 10000000000; i++) {
    mul = mul * i;
  }
  postMessage(mul);
};
