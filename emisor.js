//Nuevo hilo en background.
const theWorker = new Worker('broker.js');

let resultado = 0;

theWorker.postMessage([10, 20, 30, 40, 2]);

theWorker.onmessage = (e) => {
  result = e.data;
  console.log(`Result is ${result}`);
  theWorker.terminate();
}