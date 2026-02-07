/*Problem 3*/
function finalScore(omr) {
   const right=omr.right;
   const wrong=omr.wrong;
   const skip=omr.skip;
   if(right+wrong+skip !==100){
    return 'Invalid';
   }
   const score=(right*1)+(wrong*-0.5)+(skip*0);
   const finalScoreResult=Math.round(score);
   return finalScoreResult;
}
const omrResult = { right: 40, wrong: 5, skip: 5 };
console.log(finalScore(omrResult));