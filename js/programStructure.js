// looping a triangle
function triangle(line){
    let state = '#';
    result = '';
    for(let i = 0; i < line; i++){
        result += state;
        console.log(result);
    }   
}

// fizzbuzz
function fizzbuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 ===0){
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}

// chess board
// need correction

function chessBoard(size){
    let trackLine;
    let trackChar;
    let hash = '#';
    let space = ' ';
    for(trackLine = 1; trackLine <= size; trackLine ++){
        hash += '\n';

        for(trackChar = 0; trackChar < size; trackChar ++){
            if((trackChar + trackLine) % 2 === 1){
                space += hash;
            }
            else{
                hash += space;
            }
        }
    }
}