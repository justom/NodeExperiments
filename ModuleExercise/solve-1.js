var rect = require('./rectangle-1');

function printRectInfo(l,b) {
    console.log("Printing info for rectangle with l, b: (" + l + ", " + b + ")");

    if (l <= 0 || b <= 0) {
        console.log("ERROR: Rectangle dimensions must be greater than 0.");
    }
    else {
        console.log("Area: " + rect.area(l,b));
        console.log("Perimeter: " + rect.perimeter(l,b));
    }
}

printRectInfo(2,4);
printRectInfo(3,5);
printRectInfo(-3,5);
