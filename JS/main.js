let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submit = document.getElementById('contactForm')[0];



function sendMail(){
    // console.log("hi")
   
    var params = {
        from_name: name.value,
        email_id:email.value,
        message:message.value

    }
    emailjs.send("service_v5uxkik","template_n9i4d6z", params).then(function(res){
        name.value="",
        email.value="",
        message.value="",
        alert("Success" + res.status);
    })

}


// ينقل الى بدايه الصفحه
// TO UP
let span = document.querySelector(".up");

window.onscroll = function () {
    // TO UP
    // ظهور زر UP
    if (this.scrollY >= 800) {
        span.classList.add("show");
    }
    else {
        span.classList.remove("show");
    }
    // //   // this.scrollY >= 1000? span.classList.add("show") : span.classList.remove("show");

      // Sticky Navbar ON Scroll
      var nav = document.getElementById("StickyNav");
      if (scrollY > 680) {
            nav.classList.add("sticky");
      }
      else {
            nav.classList.remove("sticky");
      }

}

// عند النقر على زر UP ينقلك الى اعلى الصفحه
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// للاظهار loading  كم ثواني قبل فتح الموقع
// var loder = document.getElementById("spinner-wrapperID")
// window.onload = function () {
//       setTimeout(function () {
//         loder.style.display = "none"
//       }, 500);
// }


// Validation
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submtError = document.getElementById('submt-error');


function validateName(){
    var name2 = document.getElementById('name').value;

    if(name2.length == 0){
        nameError.innerHTML= 'Name is required';
        return false;
    }
    if(!name2.match(/^[A-Za-z]*\ [A-Za-z]*/)){
        nameError.innerHTML= 'Write Full Name';
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;

}

function validateEmail(){
    var email2= document.getElementById('email').value;

    if(email2.length == 0){
        emailError.innerHTML= 'Email is required';
        return false;
    }
    if(!email2.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid '
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
   
}

function validateMessage(){
    var message2 = document.getElementById('message').value;
    var len = 30;
    var left = len-message2.length;

    if(left > 0){
        messageError.innerHTML = `(${left})more characters required1` ;
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage() ){
        submtError.style.display='block';
        submtError.innerHTML = " خطاء ";
        setTimeout(function(){submtError.style.display='none';},6000);
        return false;   
    }
    else{
        sendMail()
        submtError.style.color='seagreen';
        submtError.innerHTML = "تم الارسال";
        setTimeout(function(){submtError.style.display='none';},6000);
        return true;
    }

}

