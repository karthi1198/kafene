$(document).ready(function(){
    var navit = document.getElementsByClassName('nav-list');
    navit[2].classList.add('active-nav-list');
    
    var search = document.getElementById('search');
    search.onsubmit = function(e){
        e.preventDefault();
    }
    
    function  renderuserRows(rowData){
        var id = $('<td>').html(rowData.id);
        var userimage = $('<img>').attr('src',rowData.profilePic)
        var userAvatar = $('<td>').append(userimage)
        var userName = $('<td>').html(rowData.fullName);
        var formatDate = rowData.dob.split('-');
        var dob = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class','primary-text');
        var gender = $('<td>').html(rowData.gender);
        var currentLocation = $('<td>').html(rowData.currentCity + ', ' + rowData.currentCountry);
        var tr = $('<tr>').append(id,userAvatar,userName,dob,gender,currentLocation);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users',function(userData){
        console.log(userData)
        for(var i = 0; i<userData.length;i++){
            $('#userRows').append(renderuserRows(userData[i]));
        }
    })
    
    var typeBox = document.getElementById('typeBox');
    
    typeBox.onkeyup = function(){
        var filter = typeBox.value.toUpperCase();
        if(filter.length < 2){
            alert("Please enter atleat 2 characters");
        }
        var table = document.getElementById('userRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[2];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase().indexOf(filter) > -1){
                    userRow[i].style.display = "";
                } 
                else{
                    userRow[i].style.display = "none";
                }
            }
        }       
    }
    var reset = document.getElementById('reset');
    reset.onclick = function(){
        var table = document.getElementById('userRows')
        var userRow = table.getElementsByTagName("tr");
        for(var i = 0;i<userRow.length;i++){
            userRow[i].style.display = 'table-row';
        }
    }
})

