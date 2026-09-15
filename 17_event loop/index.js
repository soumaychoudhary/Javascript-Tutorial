/*

🔹 What is the Event Loop?

        The event loop is a mechanism that makes JavaScript (which is single-threaded) handle asynchronous code (like setTimeout, promises, API calls) without blocking the main program.

        Think of it like a manager that keeps checking:
        👉 “Is the call stack empty? If yes, let’s send the next task from the queue.”

🔹 Main Parts of the Event Loop
1. Call Stack

Where JavaScript keeps track of function calls (last in → first out).

When a function finishes, it gets popped out.

2. Browser / Web APIs

The browser provides APIs like setTimeout, fetch, DOM events, etc.

When you call them, they run in the browser, not directly in the call stack.

3. Callback Queue (Task Queue)

Stores async callbacks (like from setTimeout) that are ready to run.

They wait here until the call stack is empty.

4. Event Loop

Continuously checks if the call stack is empty.

If empty → it pushes the first callback from the queue to the stack.

🔹 Flow Diagram
Code → Call Stack → (if async) → Browser APIs → Callback Queue → Event Loop → Call Stack → Executes

🔹 Example 1: setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 2000);

console.log("End");


👉 Step by step:

"Start" → printed immediately (call stack).

setTimeout goes to Browser API, timer runs in background.

"End" → printed (call stack continues).

After 2 sec, callback (console.log("Hello from setTimeout")) goes into Callback Queue.

Event Loop checks → Call stack is empty → moves callback to stack → prints message.

✅ Output order:

Start
End
Hello from setTimeout

🔹 Example 2: Mixing Sync + Async
console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");


👉 Step by step:

"1" → printed.

setTimeout registered in Browser API (0 ms timer, but still async).

"3" → printed.

Event loop sees stack empty → takes "2" from queue → prints.

✅ Output:

1
3
2


✅ In simple words:

Call Stack = execution list

Browser APIs = background helpers

Callback Queue = waiting area for async tasks

Event Loop = the gatekeeper that keeps JS running smoothly

*/

// 1. Synchronous Code
        // Executes line by line in order (blocking).
        // The next operation waits for the previous one to complete.
        // Suitable for tasks that are quick and do not involve waiting (e.g., simple calculations).

//  2. Asynchronous Code
        // Does not block execution.
        // The next operation can start before the previous one completes.
        // Common in network requests, file