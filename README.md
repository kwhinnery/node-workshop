# node-workshop

A beginner-level intro to node.js.  For presentation slides, check out the gh-pages branch.

## Challenges

### Challenge One: Standard Libraries

Using node's standard libraries `http` and `fs` and built-in JSON support, read in a comma-seprated file of key-value pairs,
and create an HTTP server which returns the file's contents as JSON.

### Challenge Two: CommonJS Modules

Create two new CommonJS modules in a project directory.  One module should expose an instantiable object called "Person".  
Your constructor should accept a JavaScript object literal, which will have properties to assign to the Person. Every person 
should have a property `knowsKungFu` set to `false`.  The constructor should be able to override this.
To accomplish this, install `underscore` from npm and use it's `_.extend` function in your constructor.

Your second custom module will be a custom logger, which will have an `info` logging function.  This
function should print out the current date and time, as well as the given log message.

### Challenge Three: Express and Request Routing

Create an Express application which responds to an HTTP `GET` request, and renders an HTML page using the EJS template engine.
This HTML page should contain a form, which issues a `POST` action to log in a user, then redirect back to the same page.

The `POST` action should store the user's username somehow - either in memory (store in an object) or in a cookie.  On every `GET`
request to the form, the app should check for a logged-in user using connect middleware.  If the username has been stored, it
should be displayed in the HTML page using a context variable for the EJS template engine.

### Challenge Four: Persistence with Mongoose

Sign up for and create a free MongoDB instance at [MongoHQ](http://www.mongohq.com).  Use this connection string to authorize
a Mongoose application that will have a single model, a blog post with a `title` and a `body`.  Using Express, create a simple
application that will save a new blog post, and list out all existing blog posts on an HTML page.

### Challenge Five: Chatting with Socket.io

Create a simple chat room application using socket.io.
