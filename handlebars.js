var handlebars = require('handlebars');
var fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

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

JSDOM.fromFile("handlebars.html").then(dom => {
    var source = dom.window.document.getElementById('template').innerHTML;

    var template = handlebars.compile(source);
    var html = template(context);

    fs.writeFile("handlebarsCompiled.html", html, function(err) {
        if(err) {
            return console.log(err);
        }
    });
});