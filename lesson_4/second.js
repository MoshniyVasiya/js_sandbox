
function getLength(size){   
    return size * 2 - 1;
}

function getRightStarIdx(length, lineIdx){ 
    return length - (lineIdx + 1);
}


function print(size){
    if (typeof size !== 'number') { 
        return null;
    }

    const length = getLength(size);
  
    // vertical
    for (let i = 0; i < size; i++) {
        let row = '';
        const rightStarIndex = getRightStarIdx(length, i);

        // horizontal 
        for (let j = 0; j < length; j++) {   
            if (j === i) {
                row += '*';
            } else if (j === rightStarIndex) {
                row += '*';
            } else {
                row += ' ';
            }
        }

        
    }
}

print(3);

