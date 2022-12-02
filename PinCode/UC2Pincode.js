let pincode = 'A400088'
let PINRegex = RegExp('^[1-9]{1}[0-9]{5}$')
if (PINRegex.test(pincode))
    console.log('Pincode is correct')
else
console.log('Pincode is incorrect')
