"use strict";

// #1

function makeGreetings(age){  
    var dayName = ''; 
    var ds = '' + age;
    
    var dd = parseInt(ds.substr(ds.length-1));
    
    if(age > 4 && age < 21){    
        dayName = ' лет';
    }else if(dd === 1){    
        dayName = ' год';
    }else if(dd >=2 && dd <= 4){
        dayName =' года'; 
    }else{  
         dayName =' лет'; 
    }
    return "Мой возраст " + age + dayName ;
}
console.log(makeGreetings(3));

// #2

function splitArray(arr, num){    
    var arr1 = [];
    for (var i = 0; i < arr.length/num; i += 1){   
        arr1[i] = arr.slice((i*num),(i*num)+num);
    }
    return arr1;
}

/* function splitArray(arr, num){   
    var result = [];

    if(num < 1) {   
        return
    }
    for( var i = 0; i < arr.length; i += num){  
        result.push(arr.slice(i, i+num))
    }
    return result;
}

*/

// #3

function add(x) { 
    return function(y){ 
        return x + y
    };
}

// #4
/*перебери массив вытащи из него обьекты поработай сними и записи в новый обьект те ключии которые проходят по условию и всё */
var res = [
    { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
    { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
    { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
   ];
function transformData(res){
var result = [];
for( var i = 0; i < res.length; i += 1){    
   var obj = [];
    obj = res[i];
    if(obj.mark > 5){   
        result += obj.login + ": '" + obj.firstName + " " + obj.lastName + "' " ;
    }
    
}
return result
}

/*  
    function transformData(data){   
        var result = [];

        for( var i = 0; i < data.length; i += 1){   
            if(data[i].mark > 5)
            result[data[i].login] = (data[i].firstName + " " + data[i].lastName).trim();
        }

        return result;
    }

function addInfinite(a) { 
    
     
    function inner(b){ 
        inner.result += b;

        return inner;
    };
    inner.result = a;
    
    return inner;
}

    */
