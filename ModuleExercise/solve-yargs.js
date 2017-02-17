var rect = require('./rectangle-cb');
var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand('l','b')
    .argv;

function printRectInfo(l,b) {
    console.log("Printing info for rectangle of dim. (" + l + "," + b + ")");
    rect(l,b, function(err, rectangle) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Area of rectangle of dim. (" + l + "," + b + ") = "  
                        + rectangle.area());
            console.log("Perimeter of rectangle of dim. (" + l + "," + b + ") = "  
                        + rectangle.perimeter());
        }
    })
}

printRectInfo(argv.l, argv.b);

