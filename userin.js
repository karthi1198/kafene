$(document).ready(function(){
    var form = document.getElementById('login-credentials');
    form.onsubmit = function(e){
        e.preventDefault();
    }
    var username = document.getElementById('username');
    var password = document.getElementById('Password');
    var loginBtn = document.getElementById('button');
    loginBtn.onclick = function(){
        if(username.value == password.value){
            alert('Login Successfully');
            localStorage.setItem('isLogedIn',true);
            var obj = {
                username : username.value,
                password : password.value
            }
            localStorage.setItem('userInfo',JSON.stringify(obj));
            location.assign('./orders.html');
        }
        else{
            alert('Please enter valid credential!');
        }
    }
})