import imageSrc from "./cat.png";

function matrixDiff(arr1, arr2) {  
    for( let i = 0; i < arr1.legth; i += 1){    
        
        for( let j = 0; j < arr1[i].length; j += 1){   
            
        }
    }


}

//4 

let img = document.createElement('img');

function stickyCat(){   

  
    document.body.append(img);
    img.src = imageSrc;
    img.style.position = "relative";
    
    window.onmousemove = function (event) { 
        
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        
        img.style.left = mouseX + "px";
        img.style.top = mouseY + "px";
    }   
}

function unstickTheСat() {

    img.remove();

}

window.stickyCat = stickyCat;
window.unstickTheСat = unstickTheСat;