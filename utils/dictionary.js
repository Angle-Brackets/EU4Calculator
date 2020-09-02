//Convert an abbreviation to a word, only to be used with ideas.
function beautifyModifiers(arr){
    const abbreviations = ["ae", "core creation"]
    const words = ["Aggressive Expansion", "Core Creation Cost"];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j+=2){
            arr[i][j] = arr[i][j].replace("_", " ");

            for(let k = 0; k < abbreviations.length; k++){
                arr[i][j] = arr[i][j].replace(abbreviations[k], words[k]);
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr[i].length; j+=2){
            if(typeof(arr[i][j]) == "number"){
                if(Math.abs(arr[i][j]) < 1){
                    arr[i][j] = (arr[i][j] * 100) + "%";
                }
            }
        }
    }

    return arr;
}


export {beautifyModifiers}