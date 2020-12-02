function beautifyModifiers(arr){
    const abbreviations = ["ae", "core creation", "legitimacy", "Cav To Inf Ratio", "Num Accepted Cultures", "Tolerance Heretic"]
    const words = ["Aggressive Expansion", "Core Creation Cost", "Yearly Legitimacy", "Cavalry to Infantry Ratio", "Number of Accepted Cultures", "Tolerance of Heretics"];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j+=2){
            arr[i][j] = arr[i][j].replace(/_/gi, " ");

            for(let k = 0; k < abbreviations.length; k++){
                arr[i][j] = arr[i][j].replace(abbreviations[k], words[k]);
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr[i].length; j+=2){
            if(typeof(arr[i][j]) == "number"){
                if(Math.abs(arr[i][j]) < 1){
                    arr[i][j] = (Math.sign(arr[i][j]) > 0 ? "+" : "") + (arr[i][j] * 100) + "%";
                }

                else {
                    arr[i][j] = (Math.sign(arr[i][j]) > 0 ? "+" : "") + arr[i][j];
                }
            }
        }
    }

    return arr;
}


export {beautifyModifiers}