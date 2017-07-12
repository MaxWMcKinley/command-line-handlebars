var handlebars = require('handlebars');
var fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// This is the context that will be given to the handlebars template
var context =
{
    data: [
        {
            pid: 'P1002650',
            mod: 'M0100',
            success: true
        },
        {
            pid: 'P1002650',
            mod: 'M0101',
            success: false
        },
        {
            pid: 'P1002650',
            mod: 'M0111',
            success: false
        },
        {
            pid: 'P1002677',
            mod: 'M0100',
            success: true
        },
        {
            pid: 'P1005600',
            mod: 'M0111',
            success: false
        }
    ]
}

// JSDOM replicates a browser environment when running from the command line
// This is necessary to interact with the html file
JSDOM.fromFile("handlebars.html").then(dom => {
    // Grab the template source code
    var source = dom.window.document.getElementById('template').innerHTML;

    // Compile the template into html
    var template = handlebars.compile(source);
    var html = template(context);

    // Save resultant html file to disk
    fs.writeFile("handlebarsCompiled.html", html, function(err) {
        if(err) {
            return console.log(err);
        }
    });
});