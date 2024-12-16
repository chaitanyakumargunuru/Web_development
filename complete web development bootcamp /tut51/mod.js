console.log("this is mod");
function result(arr){
    sum=0;
    arr.forEach(element => {
       sum+=element; 
    });
    return sum/arr.length;
};

module.exports={avg : result
};
