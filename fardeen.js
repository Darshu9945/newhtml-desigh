
var nameinput = document.getElementById("kbd1")
var emailinput = document.getElementById("kbd2")
var phonenuinput = document.getElementById("kbd3")
const btn = document.getElementById('my-form')
const userlist=document.getElementById("userlist")
btn.addEventListener('submit',adduser);
 function adduser(e){
    e.preventDefault();
        const li =document.createElement('li')
        var k3 =document.createTextNode(`${nameinput.value} : ${emailinput.value}`)
var Name=nameinput.value
var Email=emailinput.value
n3=JSON.stringify({Name,Email})
        li.appendChild(k3)
        localStorage.setItem(Name,n3)
        userlist.appendChild(li)
 }
