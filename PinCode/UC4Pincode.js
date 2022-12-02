let pincode = '400 088'
let PINRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
if (PINRegex.test(pincode))
    console.log('Pincode is correct')
else
console.log('Pincode is incorrect')
