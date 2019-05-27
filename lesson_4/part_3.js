
// Задача 6

const add = (a) => {    
    let sum = a;
    const func = (b) => {   
        if (b) {    
            sum += b;
            return func;
        } else {    
            return func;
        }
    };
    func.toString = () => sum;
    return func;
}


// Задача 3

const mask = (stringValue) => {

    stringValue = stringValue.toString().split('');

    for(let i = stringValue.length - 5; i >= 0; i -= 1){

        stringValue[i] = '*';
    }

    stringValue = stringValue.join('');

    return stringValue;
}


/* Задача 5

Напишите функцию, раскрывающёю массив с вложенностью 

Самое простое решение в случае с двойной вложенностью arr.flat(2);

*/