onmessage =  (e) => {
    console.log('Message received from main script');
    const workerResult = e.data.map(item => item ** 2);
    console.log('Posting message back to main script');
    postMessage(workerResult);
}