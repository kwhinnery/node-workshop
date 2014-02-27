# node-workshop

A beginner-level intro to node.js.  For presentation slides, check out the gh-pages branch.

## Challenges

### Challenge One: Standard Libraries
Using node's standard libraries `http` and `fs` and built-in JSON support, read in a comma-seprated file of key-value pairs, and create an HTTP server which returns the file's contents as JSON.

### Challenge Two: CommonJS Modules
Create two new CommonJS modules in a project directory.  One module should expose an instantiable object called "Person". Your constructor should accept a JavaScript object literal, which will have properties to assign to the Person. Every person should have a property `knowsKungFu` set to `false`.  The constructor should be able to override this. To accomplish this, install `underscore` from npm and use it's `_.extend` function in your constructor.

Your second custom module will be a custom logger, which will have an `info` logging function.  This function should print out the current date and time, as well as the given log message.

### Challenge Three: Express and Request Routing
Create an Express application which responds to an HTTP `GET` request, and renders an HTML page using the EJS template engine. This HTML page should contain a form, which issues a `POST` action to log in a user, then redirect back to the same page.

The `POST` action should store the user's username somehow - either in memory (store in an object) or in a cookie.  On every `GET` request to the form, the app should check for a logged-in user using connect middleware.  If the username has been stored, it should be displayed in the HTML page using a context variable for the EJS template engine.

### Challenge Four: Persistence with Mongoose
Sign up for and create a free MongoDB instance at [MongoHQ](http://www.mongohq.com).  Use this connection string to authorize a Mongoose application that will have a single model, a blog post with a `title` and a `body`.  Using Express, create a simple application that will save a new blog post, and list out all existing blog posts on an HTML page.

#### Bonus Challenge
Secure the entire application with HTTP Basic Authentication middleware.

#### Bonus Challenge
Create an API for listing blog posts as JSON, secured with HTTP basic.

### Challenge Five: Chatting with Socket.io
Create a simple chat room application using socket.io.  Starting with the simple chat example, add the ability for each user to add a nickname for themselves.  You will need to store some "session" information about each socket connection.  Consult the [socket.io docs](http://socket.io/#how-to-use) for guidance on how to do this.

### Challenge Six: Browserify
Install the browserify package from npm globally - `npm install -g browserify`. The file "browser.js" contains node.js-style code that uses both core node and third party modules from npm.  Use the browserify command line utility to create a browser-ready version of `browser.js` called `commandline.js`, which should reside in the "public" directory of the project.

You will also want to check out the npm module `browserify-middleware`.  This module works with express to always serve the most recent version of your browserified source, and includes source maps so you can view and debug individual files.  In `app.js`, figure out how to use browserify-middleware to serve up a file called `middleware.js` to the browser, which contains the browserified contents of `browser.js`.
