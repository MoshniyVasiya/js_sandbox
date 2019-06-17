let div = document.createElement('div');
div.setAttribute('id', 'div');
div.style.height = "200vh";
document.body.append(div);

function waitForScrtoll() {  
    return new Promise((resolve) => {   
        window.addEventListener('scroll', resolve);
    
});
}

function getRandomColor() {
    let r = function () { 

        return Math.floor(Math.random()*256) 
    };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function drawOnScroll() {
    
     div.style.backgroundColor = getRandomColor();
     
    }
   
    waitForScrtoll()
   .then(waitForScrtoll)
   .then(drawOnScroll);


   // #2

function waitForAnswer() {  
    return new Promise((resolve, reject) => {   
        window.addEventListener('keydown', () => {  
            if(event.keyCode == 89){    
                resolve()
            }else if(event.keyCode == 78) {  
                reject()
            }
        });
        
    });
}
 


function setText(text) {
    
    div.innerHTML = text;
}

setText("Вы сделали домашнее задание? Y / N")

waitForAnswer()
    
    .then(() => setText("Так держать"))
    .catch(() => setText("Нужно подтянуть"));



// # 3

function waitForTime(sec) {     
     return new Promise((resolve) => {   
        setTimeout(resolve, sec * 1000);
    });
    
}

function waitForClicks(amount) {  
    let clicks = 0;
    return new Promise((resolve) => {   
        window.addEventListener('click', () => {    
            clicks += 1;
            if(clicks === amount){  
                resolve()
            }
        });
    });
}