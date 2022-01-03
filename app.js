const contactForm = document.querySelector('.contact-form');

let name =document.getElementById('name');
let email =document.getElementById('email');
let Phone =document.getElementById('Phone');
let message =document.getElementById('message');

var randomNumber = 565213;

contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        let formData ={
          name: name.value,
          email: email.value,
          Phone: Phone.value,
          message: message.value
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText == 'success'){
            alert('Email Sent');
            name.value = '';
            email.value = '';
            Phone.value = '';
            message.value = '';
          }else{
            alert('went wrong!')
          }
        }

        xhr.send(JSON.stringify(formData));

})

document.getElementById("unlock").addEventListener("click", ()=>{
 let person = prompt("Please enter your password", "");
if(person== randomNumber){
  alert("LOCKER ACCESS GIVEN ");
}else{
  alert("ACCESS DENIED");
}

});
