
function validate(){

var eng = eval(form1.english.value);
var gk = eval(form1.GK.value);
var math = eval(form1.Maths.value);

result = eng + gk + math;


form1.tot.value = result;

form1.perc.value = result/3;
if(eng>gk && eng>math)
form1.hm.value = eng;
else if(gk>eng && gk>math)
form1.hm.value = gk;
else
form1.hm.value = math;
}
 
function mouseOver(){
    alert("hovered");
}
function mouseOut(){
    alert("hovered out");
}
function keyPress()
{
    var ss = form2.email.value;
    if(ss == "")
    {
        alert("hii");
    }

}
function loaded(){
    alert("welcome");
}
function myFunc(){
    alert("hii");
    form2.psw.focus();
}
function myFunction(){
    var x = document.getElementById("s2").value;
    if(x == "Java")
    document.getElementById("textar").value = "Java is here";
    if(x == "Sql")
    document.getElementById("textar").value = "SQL is here";
    if(x == "Python")
    document.getElementById("textar").value = "Python is here";
}

function score()
{
   var x = f1.q1.value;
   var y = f2.q2.value;
   var ans=0;
   if(x == "static")
   {
    ans = ans+2;
   }
   if(y == "validate")
   {
       ans = ans+2;
   }
   alert("ans is "+ans);
}
function myPrompt()
{
    
        var person = prompt("Please enter your favourite course");
        var txt;
        if (person != null) {
          txt = "your favourite course is : " + person;
        }
      document.getElementById("demo").innerHTML = txt;
}
function checkboxVal(){
var s=0;
if(document.getElementById("op11").checked)
{
    s = s+1;
}
if(document.getElementById("op22").checked)
{
    s = s+1;
}
if(document.getElementById("op33").checked)
{
    s = s+1;
}
if(s>=2)
{
    alert("Response accepted")
}
else{
    alert("you have selected " + s +"  check atleast 2");
}
}
function relocate()
{
    window.location = "https://www.google.com";

}
function searchFunc()
{
  
    var x = document.getElementsByName("s4").value;
    alert(x);
    if(x == "Google")
    window.location = "https://www.google.com";
}