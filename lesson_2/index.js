"use strict"

// # 1

function removeKeys(obj, arr){  
    
    for( var i = 0; i < arr.length; i += 1){   
        if (obj.hasOwnProperty(arr[i])){    
            delete obj[arr[i]];
        }
    }  
    return obj    
}

/*

function removeKeys(obj, keys){    
    for(var i = 0; i < keys.length; i += 1){    
        delete obj.[keys[i]]
    }
    return obj
}


*/

// # 2

function clearNumbers(arr){ 

    for(var i = 0; i < arr.length; i += 1){ 

        for( var j = 0; j < arr[i].length; j += 1){ 
            var value =  Number.isNaN(arr[i][j]) ? '' : arr[i][j]

            
            
            if (typeof value !== 'number'){    
                arr[i].splice(j,1);
               j -= 1;
            }
        }
    }
    return arr
    
}

/*  
function clearNumbers(data){ 
    for(var i = 0; i < arr.length; i += 1){ 
        subArr = arr[i];

        for(var j = 0; j < subArr[i].length; j += 1){  
            if(typeof subArr[j] !== 'number'){  
                subArr.splice(j, 1);
                j -= 1;
            }
        }
    }

    return arr
}

*/

// # 3

function reverse(){  
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i += 1){	
         if(typeof args[i] !== "string"){	
       continue
       }
     args[i] = args[i].split("").reverse().join("")
    }  
    
    return args
       
    }
console.log(reverse('123', '__af_'))
    
/*  

function reverse(){ 
    var result = [];
    for(var i = arguments.length - 1; i >= 0; i -= 1){  
        result.push(arguments[i].split('').reverse().join(''))
    }


    return result
}

*/
    

