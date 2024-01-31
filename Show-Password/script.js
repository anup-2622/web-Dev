function showPassword(){
    
    var pass = document.getElementById('pwd');
    if(pass.type === "text"){
        pass.type='password';
    }else{

        pass.type='text';
    }

}



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
