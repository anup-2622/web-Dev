// function showPassword(){
//     var eye = document.getElementById('eye').style.color='red'
//     var pass = document.getElementById('pwd').style.padding='10px'
//     if(pass.type == "text"){
//         pass.type='password';
//         eye.className='fa-solid fa-eye';  
//     }else{
        
//         pass.type='text';
//         eye.className='fa-solid fa-eye-flash';  
//     }

// }



// tab switching For LOGIN and SIGNUP 
var login = document.getElementById('loginTab');
var signin = document.getElementById('signTab');
var loginCard = document.getElementById('login');
var signinCard = document.getElementById('signin');

if(login.checked === true)
{
    signinCard.className='hidden'
    login.className='text-bold'
}
function switchTab(){

    if(signin.checked === true)
    {
        loginCard.className='hidden'
        signinCard.className=''
    }
    if(login.checked === true)
    {
        loginCard.className=''
        signinCard.className='hidden'

    }
    
    
}
