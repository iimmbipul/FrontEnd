var licenseKeyFormatting = function(S, K) {
    let str = S.split("-");
    let newStr = str.join("").toUpperCase();
    let global = [];
    let counter = 1;
    for(i=newStr.length-1;i>=0;i--){
        console.log(counter);
        global.unshift(newStr[i]);
        if(i==0){break;}
        if(counter==K){
            global.unshift("-");
            counter=1
            counter--
        }
        counter++;
        
    }
    return global.join("").toUpperCase();




};
console.log(licenseKeyFormatting("2-5G-3J",2))