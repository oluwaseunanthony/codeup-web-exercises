const capitalizeFirstLetter=(str)=>{

    let capitalizedFirstLetter =  str.substring(0,1).toUpperCase();
    let restOfWord = str.substring(1);

    return capitalizedFirstLetter + restOfWord;
}

console.log(capitalizeFirstLetter("testString"))