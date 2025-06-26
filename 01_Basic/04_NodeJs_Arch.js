// 📌 Node.js Architecture

// Flow starts from the Client → sends a Request → to the Server (Node.js)

// Node.js receives the request and places it into the Event Queue

// The Event Loop continuously monitors the Event Queue
// It picks requests from the Event Queue based on FIFO (First In, First Out) principle

// Now, there are two types of requests:
// 1. Non-Blocking (Asynchronous)
// 2. Blocking (Synchronous)

// 👉 If the request is Non-Blocking:
// The Event Loop handles it directly and sends back the response

// 👉 If the request is Blocking:
// The request is sent to the Thread Pool (Worker Threads)

// In the Thread Pool:
// - If a thread is available, it handles the request
// - After completing the task, the thread returns the result to the Event Loop
// - The thread then becomes available again for new tasks

// ✅ This is how Node.js efficiently handles multiple requests using its non-blocking, event-driven architecture

const os = require("os");
console.log(os.cpus().length);
