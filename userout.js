$(document).ready(function(){
    var userlogOut = document.getElementById('userout');
    userlogOut.onclick = function(){
        alert("logout Successfully")
        localStorage.setItem('isLogedIn',false);
        localStorage.removeItem('userInfo');
    }
})