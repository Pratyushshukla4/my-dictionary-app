console.log()

let input = document.getElementById('inputfield');
let search = document.getElementById("btnsearch");
let word = document.getElementById('inputword')
let adjective = document.getElementById('adjective');
let meaning = document.getElementById('defination')
let example = document.getElementById('examples');
let synonym = document.getElementById('synonyms')
let pai = document.getElementById('pai');
let img = document.getElementById('img');
document.getElementById("dis1").style.display = 'none';
document.getElementById("dis2").style.display = 'none';
document.getElementById("dis3").style.display = 'none';
document.getElementById("dis4").style.display = 'none';
document.getElementById('cont').style.height = 'auto';

search.addEventListener('click',()=>{
    console.log(input.value);
    let w = input.value;
    word.innerText = input.value;
    meaning.innerText = input.value;
    synonym.innerText = input.value;
    example.innerText = input.value;
    adjective.innerText = input.value;
    input.value = "";
    pai.innerHTML = `Searching the meaning of <span>"${w}"</span>`;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`)
    .then(Response=>Response.json())
    .then((text)=>{

        
           
            document.getElementById("dis1").style.display = 'block';
            document.getElementById("dis2").style.display = 'block';
            document.getElementById("dis3").style.display = 'block';
            document.getElementById("dis4").style.display = 'block';
            document.getElementById('cont').style.height = '500px';
            pai.innerText = " ";
        console.log(text);
        let syn = text[0].meanings[0].definitions[0].synonyms;
        adjective.innerText= `${text[0].meanings[0].partOfSpeech}, /${text[0].phonetic}/`;
        meaning.innerText = text[0].meanings[0].definitions[0].definition;
        example.innerText = text[0].meanings[0].definitions[0].example;
        audio1 = text[0].phonetics[0].audio;
        if(syn[0] == undefined)
        {
            document.getElementById("dis4").style.display = 'none';
        }
        else
        {
            synonym.innerText = `${syn[0]}, ${syn[1]}, ${syn[2]}, ${syn[3]}`;
        }

     })
    .catch(()=>{
        pai.innerHTML = `Can't find the meaning of <span>"${w}"</span>. Please, try to search for another word.`;
        document.getElementById("dis1").style.display = 'none';
document.getElementById("dis2").style.display = 'none';
document.getElementById("dis3").style.display = 'none';
document.getElementById("dis4").style.display = 'none';
document.getElementById('cont').style.height = 'auto';
    })
    
})

img.addEventListener("click", ()=>{
    img.style.color = '#4D59FB';
  let  audio = new Audio("https:"+ audio1);
    audio.play();
    setTimeout(()=>{
        img.style.color = "#999";
    }
    , 800);
}
);