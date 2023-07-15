//Q.NO:1
var obj1 = {"Name":"Rajagopi","age":"33","phone":9952116933,"address":"Mudukulathur Ramanathapuram","pincode":623704,"bloodgroup":"B+","Education":"MCA","Experience":"4years"};
var obj2 = {"age":"33","Name":"Rajagopi","address":"Mudukulathur Ramanathapuram","phone":9952116933,"bloodgroup":"B+","pincode":623704,"Experience":"4years","Education":"MCA"};
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);

// To Compare JSON String Properties Length not Equal to Same
var obj1 = {"Name":"Rajagopi","age":"33","phone":9952116933,"address":"Mudukulathur Ramanathapuram","pincode":623704,"bloodgroup":"B+","Education":"MCA","Experience":"4years"};
var obj2 = {"age":"33","address":"Mudukulathur Ramanathapuram","bloodgroup":"B+","pincode":623704,"Education":"MCA"};
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("JSON String Object IS Not Equal to same:" +flag);

/*DISPLAY RESTCOUNTRIES FLAGS,NAME,REGION,SUBREGION,AND POPULATION IN html File
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="nrsp.js"></script>
</body>
</html>*/

//Q.No:2 Display all the restcountries flags javascript file
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
var result=JSON.parse(request.response);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log(result[i].flags.alt,result[i].flags.png,result[i].flags.svg);
}
}

//Q.NO:3Display NAME,REGION,SUBREGION,AND POPULATION javascript file
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
var result=JSON.parse(request.response);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log("Country Common Name:"+result[i].name.common);
    console.log("Country Official Name:"+result[i].name.official);
    console.log("Region:"+result[i].region);
    console.log("SubRegion:"+result[i].subregion);
    console.log("Populations:"+result[i].population);
}
}