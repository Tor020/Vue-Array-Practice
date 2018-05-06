// add numbers together with reduce
function simpleArraySum(ar) {
ar = ar.reduce((total, currentVal) => {
 return total+currentVal;
})
return ar;
}

simpleArraySum([2,3,4,5]) 