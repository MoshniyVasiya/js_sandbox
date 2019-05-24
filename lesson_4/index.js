
// # 1

function makeImages(){
    for(let i = 0; i < arguments.length; i += 1){
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = arguments[i];
        div.append(img);
        document.body.append(div);
    }

}


// # 2

class FormBuilder{
    constructor(){
        this.form = document.createElement('form');
    }

    appendTo(target){
        target = document.createElement(target);
        target.append(this.form);
        document.body.append(target);
    }

    addInput(name){
        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('name', `${name}`);
        this.form.append(input);
        return this;
    }

    addCheckbox(name){
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.setAttribute('name', `${name}`);
        this.form.append(input);
        return this;
    }

    addButton(name){
        let button = document.createElement('button');
        button.innerHTML = `${name}`;
        this.form.append(button);
        return this;
    }

    destroy(){
        this.form.parentElement.removeChild(this.form);
    }
}


// # 3

function initBall(){
    let div = document.createElement('div');
    div.style.width = `20px`;
    div.style.height = `20px`;
    div.style.background = `red`;
    div.style.borderRadius = `50%`;
    div.style.position = `absolute`;
    div.style.left = `${Math.random()*document.documentElement.clientWidth - 15}px`;
    div.style.top = `${Math.random()*document.documentElement.clientHeight - 15}px`;
    document.body.append(div);
    div.addEventListener('click', (event) => {
        div.style.left = `${Math.random()*document.documentElement.clientWidth - 15}px`;
        div.style.top = `${Math.random()*document.documentElement.clientHeight - 15}px`;
        event.stopPropagation();
    });
    document.addEventListener('click', () => {
        try{
            document.body.removeChild(div);
        }catch{

        }
    });
}
