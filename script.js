
function CodeString(string) {
    let newArr = []
    let arr = string.split('');
    let meter = 1;
    const latina =/[A-Z]/
    if (string === string.toUpperCase() && latina.test(string)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                ++meter;
            } else {
                if (meter > 1) {
                    newArr.push(`${meter}${arr[i]}`);
                } else {
                    newArr.push(arr[i]);
                }
                meter = 1;
            }
        }



        return newArr.join('')
    }
    else {
        return 'Введите латиницу в вверхнем регистре'
    }


}

const inp  = document.querySelector('#myInput');
const p = document.querySelector('.result')
const button = document.querySelector('.btn');
button.addEventListener('click', CodeString)
const copyButton = document.querySelector('#copyText')


copyButton.addEventListener('click', function() {
    return navigator.clipboard.writeText(p.textContent)
        .then(() => {
            console.log('Скопировано')
        })
        .catch(error => {
            console.error(`Текст не скопирован ${error}`)
        })
})



button.addEventListener('click', function (){
p.textContent = CodeString(inp.value)
})

// function centResult(str) {
//     let resultP = document.querySelector('.result');
//     resultP.textContent = str
//
// }
// function getInputValue (){
//     const inputElement = document.getElementById('myInput');
//     const inputValue = inputElement.value;
//
// }
// let resultP = document.querySelector('.result');
// resultP.textContent = CodeString(document.getElementById('myInput').value);


