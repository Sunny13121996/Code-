var string          = "sunny@wegile.com";
var getName    = string.substring(0, string.lastIndexOf('@'));
var getDomain = string.substring(0, string.lastIndexOf('.'));
getDomain       = getDomain.split("@").pop();
var getOrigin    = string.split('.').pop();
function magic(string, star, repeatAt){
   star = star.repeat(repeatAt)
   let first = string.charAt(0);
   let last = string.charAt(string.length - 1);
   return first+""+star+""+last;
}
let final = magic(getName, '*', 5)+"@"+magic(getDomain, '*', 3)+"."+getOrigin;
//output -> // s****y@g***l.com