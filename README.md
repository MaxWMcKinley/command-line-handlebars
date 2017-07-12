# command-line-handlebars

This is a basic example of how to use handlebars from the command line in node.js to generate static html files.  

It does this by using JSDOM to replicate a browser environment in node.js and then compiles the handlebars template and saves the result to disk.

To see the example work follow these steps:
1. Clone the repository to your desired directory
2. run "npm install handlebars fs jsdom" to install all of the dependencies for this example
3. run "node handlebars.js"

An html file should be generated in the current directory, which can be viewed in a browser.
