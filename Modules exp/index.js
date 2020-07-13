var rect = require('./rectangle')

function solveRect(l,b)
{
    console.log("Solving for rectangle with l = "+ l + "and b =" + b)
    rect(l,b,(err, rectangle) => {
        if(!!err)
            console.log("Error",err.message)
        
        else
            console.log("Area = "+ rectangle.area() + "  Perimeter =" + rectangle.perimeter());
    })  
    /*if(l<=0 || b<=0)
    {
        console.log("L and B should be greater than 0");
    }
    else
    {
        console.log("Area of the rectangle is: " + rect.area(l,b))
        console.log("Perimeter of the rectangle is" + rect.perimeter(l,b))
    }
    */
   console.log("end");
}



solveRect(1,2);
solveRect(0,2);
solveRect(2,4);