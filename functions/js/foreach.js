function forEach(list, callback) {
    for(let n = 0; n < list.length; n++){
        callback.call(list[n], n);
    }
}

let weapons = [ {type: 'shuriken'},
                {type: 'katana'},
                {type: 'nunchucks'}];

forEach(weapons, function (index) {
    if(this === weapons[index]){
        console.log("Got the expected value of " + weapons[index].type);
    }
});