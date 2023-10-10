const wBtn1 = document.getElementById("w_btn1");
const wBtn2 = document.getElementById("w_btn2");
const mBtn = document.getElementById("m_btn");
const demo = document.getElementById("demo");

const worker1 = new Worker("worker1.js");
const worker2 = new Worker("worker2.js");

wBtn1.addEventListener("click", (e) => {
  alert(
    "A CPU-intensive heavy task is going to be executed in background in Worker Thread-1."
  );
  worker1.postMessage("do_sum");
});

wBtn2.addEventListener("click", (e) => {
  alert(
    "A CPU-intensive heavy task is going to be executed in background in Worker Thread-2."
  );
  worker2.postMessage("do_multi");
});

worker1.onmessage = function (message) {
  alert(
    "From Worker Thread-1. The final summation of all the integers between 0 to 10000000000 is: " +
      message.data
  );
};

worker2.onmessage = function (message) {
  alert(
    "From Worker Thread-2. The final multiplition of all the integers between 0 to 10000000000 is: " +
      message.data
  );
};

mBtn.addEventListener("click", (e) => {
  if (demo.style.background !== "red") {
    demo.style.background = "red";
  } else {
    demo.style.background = "blue";
  }
});
