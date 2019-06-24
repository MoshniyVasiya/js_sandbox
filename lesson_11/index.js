const div = document.createElement('div');
document.body.append(div);

div.innerHTML = 'Определяю Ваш IP адрес';

fetch(`https://api.2ip.ua/provider.json`)
    .then(response => response.json())
    .then( obj => {  
        let ipObj = obj.ip;
        
        div.innerHTML = `Ваш IP: ${ipObj}`


        fetch(`https://api.jsonbin.io/g/${ipObj}`, {method: 'GET'})
            .then(response => response.json())
            .then(obj1 => { 
        
                div.innerHTML = `Ваша страна: "${obj1.data.country}" <br><br> Ваш город: "${obj1.data.city}"`
            })
            .catch(err => { 
                div.innerHTML = `Ошибка "${err}" `
            });
    });


// #2

// Создать маленькое веб приложение “TODO”, с минимальными функциями на основе публичного API JSONBin
// Список требований:
// Добавить input и кнопку добавить, по нажатию на которую в список добавляется элемент, обновляется существующий bin, а значения инпута сбрасывается
// Под input-ом отображать нумерованный список из добавленных строк
// При загрузке страницы список должен загружаться из bin-a, до окончания загрузки добавление элементов должно быть отключено
// Элементы должны быть эргономично размещены и адекватно стилизированы
// Добавить запрет на добавление пустой строки
//  * Рядом с каждым элементом добавить изображение мусорной корзины, по нажатию на которую элемент удаляется из списка
// Bin можно создать заранее и записать его id, для разработки можно использовать функцию его обновления

const SECRET_KEY = '$2a$10$c9dCPIKV9x7oLcijcFMDVOeqdMrTPryl44ttCMEvAePs8f8blUpNu';

const id = '5d11390af5e6db0da3cac93f';


function postData(data) {   
    return fetch('https://api.jsonbin.io/b', {    
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            'private': 'true',
            'versioning': 'false',    
        },
        body: JSON.stringify(data),

    });

}
window.postData = postData;

function updateData(id, data) {   
    return fetch(`https://api.jsonbin.io/b/${id}`, {    
        method: 'PUT',
        headers: {  
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            'versioning': 'false',
               
        },
        body: JSON.stringify(data),
    }) 
}

function getData(id) {   
    return fetch(`https://api.jsonbin.io/b/${id}/latest`, {    
        method: 'GET',
        headers: {  
            'secret-key':  SECRET_KEY,    
        },
    })
    .then(response => response.json())
}

const button = document.querySelector('button');
const input = document.querySelector('input');
const ol = document.querySelector('ol')

button.addEventListener('click', () => { 
    let arr = [];  
    let li = document.createElement('li');
    ol.append(li);

    li.innerHTML = input.value;
    
    arr.push(input.value);
    console.log(arr)
    updateData(id, arr)

    return input.value = '';
})



