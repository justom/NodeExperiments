var rect = require('./rectangle-cb');

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


printRectInfo(2,4);
printRectInfo(3,5);
printRectInfo(-3,5);
printRectInfo(222,5.9999);

