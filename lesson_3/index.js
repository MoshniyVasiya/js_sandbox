'use strict'

// # 1

class Human {   
    constructor (name, age) {   
        this.name = name;
        this.age = age;
    }

    sayHello() {    
        console.log('Hello, my name is ' + this.name + ', I am ' + this.age + ' years old')
    }
}

const he = new Human ('ivan', 19);


class AlevelStudent extends Human {  
    constructor (name, age, marks){ 
        super(name, age)

        this.marks = marks
    }

    averageMark() {
        let total = 0;
        for( let i = 0; i < this.marks.length; i += 1){  
            total += this.marks[i];
        }
        let avg = total / this.marks.length;
        return avg
    }
}

const student = new AlevelStudent ('ivan', 19, [5, 3, 5, 1, 4]);


// # 2

class Calculator {  
    constructor(){  
        this.result = 0
    }
    reset(){    
        this.result *= 0;
        return this;
    }
    add(num){   
        this.result += num;
        return this;
    }
    sub(num){   
        this.result -= num;
        return this;
    }
    mul(num){   
        this.result *= num;
        return this;
    }
    div(num){   
        this.result /= num;
        return this;
    }
    pow(num){   
        this.result = Math.pow(this.result, num);
        return this;
    }
    sqrt(){  
        this.result = Math.sqrt(this.result);
        return this;
    }
    getResult(){    
        return this.result
    }
}



// # 3

class Point {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
    
    toString() {
        return 'Point[' + this.x + this.y + ']'; 
    }

    set(x, y){  
        if(typeof x === 'number' && typeof y === 'number'){
            this.x = x;
            this.y = y;
        }
    }

    getX(){ 
        
        return this.x;
    }

    getY(){ 
        return this.y;
    }
  }

class Line {    
    constructor(point1, point2){    
        this.point1 = point1;
        this.point2 = point2;
    }
    toString() {
        return 'Line(' + this.point1.toString() + '-' + this.point2.toString() + ')'; 
    }
    length() {  
                                                    // 9                                                       // 15.21
        return Math.sqrt(Math.pow((this.point2.getX() - this.point1.getX()), 2) + Math.pow((this.point2.getY() - this.point1.getY()), 2))
    }

}

class WeightedPoint extends Point{    
    constructor(x, y, weight){
        super(x, y)
        this.weight = weight;
      }
    toString(){ 
        return '' + this.weight + '&' + super.toString();
    }
    set(weight){  
        
        this.weight = weight;
    }
    getWeight(){    
        return this.weight
    }

}

const point1 = new Point(2, 3.4);
const point2 = new WeightedPoint(-1, 0.5, 3);
const line = new Line(point1, point2);

console.log(line.toString())
console.log(line.length())





  

  

  