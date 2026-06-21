let arr=[1,2,3,4];
let output=arr.reduce((prev,curr)=>
{
    return prev>curr?prev:curr;
    
});
console.log(output);