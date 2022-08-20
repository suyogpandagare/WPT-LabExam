var shape = {
    shapeName : "Rectangle",
    shapeColor : "Blue",
    shapeArea : "100mm2"
}

//deep copy of json object using spread operator

var shapeCopy = {...shape};
shapeCopy.shapeColor = "Red";

//due to deep copy 2 seperate objects are created 
//changing value in shapeCpoy object won't affect shape Object

console.log("shapeCopy object details are : ",shapeCopy);
console.log("shape object details are : ",shape);