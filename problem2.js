/* Problem 2 */
function validOtp(otp){
  if(typeof otp !=='string'){
    return 'Invalid';
  }
  const startPh=otp.startsWith("ph-");
  const OtpEight=otp.length === 8;
  if(startPh && OtpEight){
    return true;
  }else{
    return false
  }
}
console.log(validOtp("ph-10985"));