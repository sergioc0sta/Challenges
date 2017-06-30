function convertString(theString)
{
    var newString = new Array();
    for(var num in theString)
    {
        
        if ((theString[num].charCodeAt(0) >= 65 && theString[num].charCodeAt(0) <= 90) || (theString[num].charCodeAt(0) >= 97 && theString[num].charCodeAt(0) <= 122))
        {
            newString.push(theString[num].toLowerCase());
        }
        else if (theString[num].charCodeAt(0) == 32)
        {
            if (!(theString[num-1].charCodeAt(0) == theString[num].charCodeAt(0)))
            {
                newString.push(" ");
            }
        }
        else
        {
            newString.push(" ");
            if (newString.length >=2)
            {
                if(newString[newString.length-1].charCodeAt(0) == 32 && newString[newString.length-1].charCodeAt(0)==newString[newString.length-2].charCodeAt(0))
                {
                    newString.pop();
                }
            }
            
        }

    }
    return newString
}

function returnString(theArray)
{
    var lastSting = new String();
    for (var a of theArray)
    {
        lastSting += a;
    }
    
    return (lastSting.substring(0,1)==' ') ? lastSting.substring(1,lastSting.length+1) : lastSting
}


var fs  = require("fs");
fs.readFileSync('file.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var f = convertString(line);
        console.log(returnString(f));
    }
});