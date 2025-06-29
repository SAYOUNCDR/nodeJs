/**
 * ============================================
 *              REST API DOCUMENTATION
 * ============================================
 *
 * REST (Representational State Transfer)
 * --------------------------------------------
 * REST is not a protocol, library, or framework.
 * It is a set of RULES and BEST PRACTICES for
 * building scalable and stateless web services.
 *
 * ============================================
 *             CORE PRINCIPLES
 * ============================================
 * 1. CLIENT-SERVER ARCHITECTURE
 *    - Separation of concerns: client handles UI, server handles data storage.
 *
 * 2. STATELESSNESS
 *    - Each API request must contain all necessary information.
 *    - The server does not store client session data.
 *
 * 3. CACHEABLE
 *    - Responses should define cacheability (using Cache-Control headers).
 *
 * 4. UNIFORM INTERFACE
 *    - Standard, consistent way to interact with resources.
 *    - Uses standard HTTP methods (GET, POST, PUT, DELETE, PATCH).
 *
 * 5. LAYERED SYSTEM
 *    - A client does not need to know if it is connected to the end server or an intermediary.
 *
 * 6. OPTIONAL: CODE ON DEMAND
 *    - Server can send executable code to the client (rare in modern APIs).
 *
 * ============================================
 *              HTTP METHODS
 * ============================================
 * GET    -> Retrieve resource(s)
 * POST   -> Create new resource
 * PUT    -> Update entire resource
 * PATCH  -> Update part of resource
 * DELETE -> Remove resource
 *
 * ============================================
 *            EXAMPLE ROUTES (URLs)
 * ============================================
 * GET     /users            -> Get all users
 * GET     /users/:id        -> Get a specific user by ID
 * POST    /users            -> Create a new user
 * PUT     /users/:id        -> Replace user with given ID
 * PATCH   /users/:id        -> Update user data (partial)
 * DELETE  /users/:id        -> Delete user by ID
 *
 * ============================================
 *               STATUS CODES
 * ============================================
 * 200 OK             -> Successful GET, PUT, PATCH, DELETE
 * 201 Created        -> Successful POST
 * 204 No Content     -> Successful DELETE (no response body)
 * 400 Bad Request    -> Invalid client request (validation errors)
 * 401 Unauthorized   -> Authentication required
 * 403 Forbidden      -> Client does not have access
 * 404 Not Found      -> Resource not found
 * 500 Internal Error -> Server-side problem
 *
 * ============================================
 *              NAMING CONVENTIONS
 * ============================================
 * - Use nouns, NOT verbs: /products instead of /getProducts
 * - Use plural forms: /users, /orders, /products
 * - Hierarchical structure: /users/:userId/orders/:orderId
 * - Use hyphens for multi-word: /user-orders (preferred over /userOrders)
 *
 * ============================================
 *             REQUEST STRUCTURE
 * ============================================
 * GET: Send data via URL params or query string
 * POST/PUT/PATCH: Send data in JSON body
 *
 * Example JSON body for POST:
 * {
 *    "name": "John Doe",
 *    "email": "john@example.com"
 * }
 *
 * ============================================
 *              RESPONSE STRUCTURE
 * ============================================
 * Always return JSON:
 * {
 *    "success": true,
 *    "data": {...},
 *    "message": "User fetched successfully"
 * }
 *
 * For errors:
 * {
 *    "success": false,
 *    "error": "User not found"
 * }
 *
 * ============================================
 *              BEST PRACTICES
 * ============================================
 * ✅ Use proper HTTP methods for each action.
 * ✅ Version your API: /api/v1/users
 * ✅ Validate and sanitize all input.
 * ✅ Handle errors gracefully with proper status codes.
 * ✅ Secure endpoints with authentication and authorization.
 * ✅ Use consistent response formats.
 * ✅ Paginate large results: /users?page=1&limit=10
 * ✅ Use rate limiting to prevent abuse.
 * ✅ Use HTTPS to secure data in transit.
 * ✅ Provide useful error messages but do not leak sensitive server info.
 * ✅ Use appropriate cache headers for GET requests.
 *
 * ============================================
 *            EXAMPLE FULL API URL
 * ============================================
 * GET https://api.example.com/v1/products?category=electronics&page=2
 *
 * --------------------------------------------
 * REST API is all about:
 * ✅ Proper structure
 * ✅ Stateless communication
 * ✅ Consistent and predictable behavior
 * --------------------------------------------
 */
