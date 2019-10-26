(function () {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbersArray = [];
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn-submit');
    const resultContainer = document.querySelector('.result__container');
    btn.addEventListener('click', parseString);
    createListOfLetters();

    function createListOfLetters() {
        let arrayOfLetters = Array.from(letters);
        for (let i = 2; i !== 10; i++) {
            let tempArray = [];
            tempArray.push(arrayOfLetters.shift());
            tempArray.push(arrayOfLetters.shift());
            tempArray.push(arrayOfLetters.shift());
            if(i === 7 || i === 9){
                tempArray.push(arrayOfLetters.shift());
            }
            let element = new Element(i, tempArray);
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
        let letters = Array.from(input.value);
        input.value = '';
        resultContainer.innerHTML = '';
        letters.map((letter) => {
            numbersArray.map((item) => {
                for (key in item) {
                    if (key === letter) {
                        addResult(item.name, item[key]);
                    }
                }
            })
        });
    }

    function addResult(number, time){
        const li = document.createElement('li');
        li.innerHTML = `Number ${number} : ${time} times `;
        resultContainer.appendChild(li);
    }
}());
