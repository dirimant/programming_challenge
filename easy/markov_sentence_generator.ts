import * as fs from "fs";

function join(firstPart: string, secondPart: string){
    return firstPart + ' ' + secondPart;
}

function getSourceText(){
    const fileContent = fs.readFileSync("ressources/source_text.txt");
    
    return fileContent.toString();
}

function createDictionnary(sourceText: string, keySize: number){
    const sourceTextSplited = sourceText.split(' ');
    const initialLength = sourceTextSplited.length;
    const dict = new Map<String,Array<String>>();

    for(let i = 0; i < initialLength; i++){  
        let dictKey = join(sourceTextSplited[0],sourceTextSplited[1]);
        let suffixes = new Array<String>();

        for(let x = 0; x < sourceTextSplited.length; x++){
            // If map has already the key set OR If we reached the end of the string => Break
            if(dict.get(dictKey) != undefined || sourceTextSplited[x+2] == undefined) break;

            // If Prefix 1 and Prefix 2 ("Prefix Prefix") is equal to the two prefixes x and x+1 then remember x+2
            if(sourceTextSplited[x] == sourceTextSplited[0] && sourceTextSplited[x+1] == sourceTextSplited[1]){
                suffixes.push(sourceTextSplited[x+2]);
            }
        }
        
        if(suffixes.length != 0){
            dict.set(dictKey,suffixes);
        }
    
        // Remove first word in source text array
        sourceTextSplited.splice(0,1);
    }
    
    //console.log(dict);
    return dict;
}

function markov(maxSizeText: number){
    const modele = createDictionnary(getSourceText(),2);
    let newText = '';

    const randomIndex = (function() {
        let index = Math.floor(Math.random() * modele.size);
        let cntr = 0;
        for (let key of modele.keys()) {
            if (cntr++ === index) {
                return key;
            }
        }
        return 'ERROR: the source text do not have words.';
    })();

    newText = '' + randomIndex;

    let currentKey = randomIndex;

    for(let i = 0; i < maxSizeText; i++){
        let array = modele.get(currentKey);
        let randomSuffix = '';

        if(array){
            randomSuffix = array[Math.floor(Math.random() * array.length)].toString();
            newText = join(newText, randomSuffix);
        }
        else{
            console.log("The random key doesn't have suffixes.")
        }
        
        currentKey = join(currentKey.split(' ')[1], randomSuffix);
    
    }

    console.log(newText);
}


// OUTPUT = First (random pair) then random word that commes after each pair

function main(){

    markov(300);

}

main();
