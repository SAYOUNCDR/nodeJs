/**
 * =========================
 * 📄 Express Middleware Guide
 * =========================
 *
 * ✅ What is Middleware?
 * Middleware functions are functions that have access to:
 * - The request object (req)
 * - The response object (res)
 * - The next middleware function (next)
 *
 * They are executed in sequence during the request-response cycle.
 *
 * =========================
 * ✅ Purpose of Middleware:
 * =========================
 * - Logging requests
 * - Parsing request bodies (JSON, URL-encoded)
 * - Authentication and authorization
 * - Handling errors
 * - Serving static files
 *
 * =========================
 * ✅ Middleware Syntax:
 * =========================
 * app.use((req, res, next) => {
 *      - Your middleware logic here
 *   next(); // Pass control to the next middleware
 * });
 *
 * =========================
 * ✅ Types of Middleware:
 * =========================
 * 1. Application-level middleware: app.use()
 * 2. Router-level middleware: router.use()
 * 3. Built-in middleware: express.json(), express.urlencoded()
 * 4. Error-handling middleware: middleware with 4 parameters (err, req, res, next)
 *
 * =========================
 * ✅ Example:
 * =========================
 * // Logging Middleware
 * app.use((req, res, next) => {
 *   console.log(`${req.method} ${req.url}`);
 *   next();
 * });
 *
 * =========================
 * ✅ Important:
 * Always call 'next()' to pass control to the next middleware or route handler.
 * If you don't call next(), the request will hang.
 *
 * =========================
 * ✅ Error Middleware Example:
 * app.use((err, req, res, next) => {
 *   console.error(err.stack);
 *   res.status(500).send('Something broke!');
 * });
 */
