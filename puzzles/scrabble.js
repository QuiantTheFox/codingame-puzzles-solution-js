const N = parseInt(readline());
let dictionnary=[]

function switchFunction(letter){
    switch(letter){
    case('e'):
    case('a'):
    case('i'):
    case('o'):
    case('n'):
    case('r'):
    case('t'):
    case('l'):
    case('s'):
    case('u'):
    return 1;
    break;
    case ('d'):
    case ('g'):
    return 2;
    break;
    case ('b'):
    case ('c'):
    case ('m'):
    case ('p'):
    return 3;
    break;
    case ('f'):
    case ('h'):
    case ('v'):
    case ('w'):
    case ('y'):
    return 4;
    break;
    case ('k'):
    return 5;
    break;
    case ('j'):
    case ('x'):
    return 8;
    break;
    case ('q'):
    case ('z'):
    return 10;
    break;
    };
    };

for (let i = 0; i < N; i++) {
    const W = readline();
    dictionnary.push(W)

}
const LETTERS = readline();

let wordOk=[]

function lettersInWord(word){
  let arrayLetters=LETTERS.split('')
  let allLetters= true;

  for(l of word){
    if(arrayLetters.indexOf(l)===-1){
      
        allLetters=false
    }else{ 
      arrayLetters.splice(arrayLetters.indexOf(l),1)
    }}

    if(allLetters===true){
      const sum=word.split('').map((e)=>switchFunction(e)).reduce((a,b)=>a+b,0)
      const index=dictionnary.indexOf(word)
      const newWord = {'sum':sum,'word':word,'index':index}
      wordOk.push(newWord)
}}

dictionnary.map((e)=>lettersInWord(e))


function tri(a,b){
	if(a.sum != b.sum){
		return (a.sum> b.sum) ? 1 : -1;
	}
	if(a.index != b.index){
		return (a.index<b.index) ? 1 : -1;
	}
	return 0;
}

wordOk.sort(tri)
console.log(wordOk[wordOk.length-1].word)