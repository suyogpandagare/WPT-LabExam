var array = ["str1","str2","str3","str4","str5"];

//getting string array values of index1 and index 4 in v1 and v2
//using array destructuring

var [,v1,,,v2] = array;
console.log(v1);
console.log(v2);

