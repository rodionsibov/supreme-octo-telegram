# What are Server-Sent Events (SSE)?

Server-Sent Events (SSE) is a technology that enables a web server to push updates to a web page. As part of the HTML5 specification, it functions similarly to WebSockets by using a single, long-lived HTTP connection to deliver data in real-time.

## How do Server-Sent Events Work?

Server-sent events (SSE) work by establishing a persistent, one-way communication channel from the server to the client over a standard HTTP connection. The client initiates the connection by creating an EventSource object, which sends a request to the server to start streaming data. Once the server receives this request, it responds by sending a continuous stream of updates in a specific text/event-stream format. The client listens for these events, automatically handling any reconnections if the connection is lost.

SSE is ideal for applications that require real-time updates from the server, such as live news feeds or notifications, as it ensures a constant flow of information with minimal overhead.
