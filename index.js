// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...

console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'

var sentence  = 'good afternoon, mr mike.';
var words = sentence .split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    document.write(words[i] + " ");
}
// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here..

console.log(money.substr(1,2));