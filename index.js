var fs = require('fs');

var outputArray = [];

for(i = 1; i <= 100; i++){
    isDivisibleBy = 1;
    if(i % 3 == 0) isDivisibleBy = 3;
    if(i % 5 == 0) isDivisibleBy = 5;
    if(i % 3 == 0 && i % 5 == 0) isDivisibleBy = 35;
    switch(isDivisibleBy){
        case 35:
            outputArray.push('BIGBANG');
            break;
        case 3:
            outputArray.push('BIG');
            break;
        case 5:
            outputArray.push('BANG');
            break;
        default:
            outputArray.push(i);
            break;
    }
}

fs.writeFileSync('output.json', JSON.stringify(outputArray, null, 4));