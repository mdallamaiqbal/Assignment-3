/*Problem1*/
function newPrice(currentPrice , discount ) {
   if(typeof discount !=='number'){
        return 'Invalid';
    }else if(discount<1 || discount>100){
       return 'Invalid';
    }else if(typeof currentPrice !=='number'){
        return 'Invalid'
    }
    const discountAmount=(currentPrice*discount)/100;
    const NewPrice = currentPrice-discountAmount;
    return NewPrice.toFixed(3);
}
console.log(newPrice(1500,10));




