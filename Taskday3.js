// Create Resume data in JSON format
let resume = {
    Name:'Rajagopi',age:'33',phone:9952116933,address:'Mudukulathur Ramanathapuram',pincode:623704,bloodgroup:'B+',
    Education:'MCA',Experience:'4years'

};
console.log(JSON.stringify(resume)); //this is JSON string iterate
// fron JSON iterate over all for loops
//print key name only by using for in loop
for (let keyname in resume){
    console.log(keyname);
} 
//Print key name and key value by using for in loop
for(let keyname in resume)
{
console.log(keyname,resume[keyname]);
}

