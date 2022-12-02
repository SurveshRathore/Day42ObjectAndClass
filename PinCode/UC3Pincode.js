let pincode = '400088B'
let PINRegex = RegExp('^[0-9]{6}$')
if (PINRegex.test(pincode))
    console.log('Pincode is correct')
else
console.log('Pincode is incorrect')
