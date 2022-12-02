let pincode = '400088'
let PINRegex = RegExp('^[0-9]{6}$')
if (PINRegex.test(pincode))
    console.log('Pincode is correct')
else
console.log('Pincode is incorrect')
