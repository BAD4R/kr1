const map = {
    'А':'A','Б':'B','В':'V',
    'Г':'G','Д':'D','Е':'E',
    'Ё':'YO','Ж':'ZH','З':'Z',
    'И':'I','Й':'Y','К':'K',
    'Л':'L','М':'M','Н':'N',
    'О':'O','П':'P','Р':'R',
    'С':'S','Т':'T','У':'U',
    'Ф':'F','Х':'KH','Ц':'TS',
    'Ч':'CH','Ш':'SH','Щ':'SCH',
    'Ъ':'','Ы':'Y','Ь':'',
    'Э':'E','Ю':'YU','Я':'YA',
    'а':'a','б':'b','в':'v',
    'г':'g','д':'d','е':'e',
    'ё':'yo','ж':'zh','з':'z',
    'и':'i','й':'y','к':'k',
    'л':'l','м':'m','н':'n',
    'о':'o','п':'p','р':'r',
    'с':'s','т':'t','у':'u',
    'ф':'f','х':'kh','ц':'ts',
    'ч':'ch','ш':'sh','щ':'sch',
    'ъ':'','ы':'y','ь':'',
    'э':'e','ю':'yu','я':'ya',
    ' ': ' ', '.': '.'
};

const originalPassportText = {
    "issued": document.getElementById('issued').innerHTML,
    "lastname": document.getElementById('lastname').innerHTML,
    "firstname": document.getElementById('firstname').innerHTML,
    "patronymic": document.getElementById('patronymic').innerHTML,
    "sex": document.getElementById('sex').innerHTML,
    "placeOfBirth": document.getElementById('placeOfBirth').innerHTML
};

const mappedPassportText = {};
Object.entries(originalPassportText).forEach(([key, value]) => {
    mappedPassportText[key] = value.split('').map(char => map[char]).join('');
});
    
let currentPassportState = "original";

function edit_passport_fields(){
    Object.entries(originalPassportText).forEach(([key, value]) => {
        element = document.getElementById(key);
        
        if (currentPassportState == "original") {
            element.innerHTML = mappedPassportText[key];
        }
        else if (currentPassportState == "mapped") {
            element.innerHTML = originalPassportText[key];
        }
    });

    currentPassportState =
    currentPassportState == "original" ? "mapped" :
    currentPassportState == "mapped" ? "original" :
    null;
}

const clickListener = document.getElementById("translate_passport")
clickListener.addEventListener("click",edit_passport_fields)