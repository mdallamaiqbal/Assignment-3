/* Problem 5 */
function  analyzeText(str) {
    if(typeof str!=="string" || str.trim() ===""){
        return 'Invalid';
    }
    const texts=str.split(" ")
    let longText=''
    for(const text of texts){
       if(text.length>longText.length){
        longText=text;
       }
    }
    const totalCharacter=str.replaceAll(" ", "").length;
    const long={
        longwords:longText,
        token:totalCharacter
    }
    return long  
}

const text=analyzeText('I am a little honest person');
console.log(text);

