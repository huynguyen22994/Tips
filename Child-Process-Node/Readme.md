### What is Node.js and how does it work?
- Nodejs is a open-source, it is a runtime build on V8 engine and Libuv. It allow developer run Javascript code on the server. Nodejs using event-driven and non-blocking I/O model. So that Nodejs is efficient for handling concurrent request in server.

- NodeJs work on a single thread envent loop. when a request is make to a Nodejs server, it will added to event queue. And then The event loop coninuously check the event queue for any new events. if there are no events, it wait. When event loop detect a new event, it is processed asynchronus, So that it allow server to handle multiple request without blocking.

### What are the advantages of using Node.js?
- There are serveral advantages of using Nodejs
1. Asynchronous and non-blocking:
2. Javascript everywhere
3. Fast execution
4. Large ecosystem and package management
5. Scalability
6. Real-time
7. Esy to intergrate with frontend

### What is npm and what is it used for?
- Npm is node package management. it is a package manager for Nodejs that allow developer to easy install, manage dependencies, share reusable code and library. 

- It use for:
1. Package install
2. Package management
3. Dependency mananement
4. Custome script

### How does Node.js handle concurrency?
- NodeJs handle concurrency request throught event-driven and non-blocking I/O.

### Explain the concept of event-driven programming in Node.js.
- Event driven propramming in Nodejs is propraming paradigm that focus on handling events and. In Nodejs, event driven programming is a center role in Node Architecture and it alloww for efficient handling of concurrent request and I/O operations.
- Here's how event-driven programming works in Node.js:
1. Events
2. Event emmit
3. Event listener
4. Event loop
5. Asynchoronuos
6. Callback


### How does error handling work in Node.js?


### What is the purpose of the "require" function in Node.js?
- require function is a function build in Nodejs, that use to include module or file in a Nodejs Aplication.
- Purpose and functionality of require in Nodejs
 1. Module loading
 2. Code resualbility
 3. Module caching
 4. Export module function
 5. 

### Describe the difference between "spawn", "fork", and "exec" functions in Node.js.

### What is a callback in Node.js and why is it used?
- in Nodejs, callback is a function as argument to another function and is invoked when a operation or task complete. Callback is a concept in Nodejs and it use to handle the result or error of asynchronus operation.

### How can you monitor and debug Node.js applications?

### What is the purpose of the "exports" object in Node.js?
- in Nodejs, the "export" object is a special object that is used to define and expose functions, object and values from a module to other module that require it. It provide a way to encapsulate and share functionally between modules in a modules and resualble code.
