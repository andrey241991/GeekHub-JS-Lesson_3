(function () {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbersArray = [];
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn-submit');
    const resultContainer = document.querySelector('.result__container');
    btn.addEventListener('click', parseString);
    createListOfLetters();
    function createListOfLetters() {
        for (let i = 2; i !== 10; i++) {
            let tempArray = [];
            for(let i = 0; i < 3; i++){
                tempArray.push(letters.slice(0, 1));
                letters = letters.slice(1, letters.length);
            }
            if(i === 7 || i === 9){
                tempArray.push(letters.slice(0, 1));
                letters = letters.slice(1, letters.length);
            }
            const element = new Element(i, tempArray);
            numbersArray.push(element);
        }
        function Element(name, keys) {
            this[keys[0]] = 1;
            this[keys[1]] = 2;
            this[keys[2]] = 3;
            this[keys[3]] = 4;
            this.name = name;
        }
        numbersArray.push({
            name: 0,
            ' ': 1
        })
    }
    function parseString() {
        const letters =  input.value;
        input.value = '';
        resultContainer.innerHTML = '';
        for(let i = 0; i < letters.length; i++){
            numbersArray.forEach((item) => {
                for (key in item) {
                    if (key === letters[i]) {
                        addResult(item.name, item[key]);
                    }
                }
            })
        }
    }
    function addResult(number, time){
        const li = document.createElement('li');
        li.innerHTML = `Number ${number} : ${time} times `;
        resultContainer.appendChild(li);
    }
 }());