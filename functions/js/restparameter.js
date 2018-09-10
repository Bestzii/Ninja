                        //ellipsis for array of parameters
function multiMax(first, ...remainingNumbers){
    let sorted = remainingNumbers.sort(function (a,b) {
        return b - a;
    })
    return first * sorted[0];
}