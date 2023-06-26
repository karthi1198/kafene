
$(document).ready(function () {
    var navit = document.getElementsByClassName('nav-list');
    navit[0].classList.add('active-nav-list');

    var pageCounter = document.getElementById('page');


    function renderOrderRows(rowData) {
        var id = $('<td>').html(rowData.id);
        var customer = $('<td>').html(rowData.customerName).attr('class', 'primary-text');
        var time = $('<span>').html(rowData.orderTime);
        var formatDate = rowData.orderDate.split('-');
        var date = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class', 'primary-text');
        date.append(time);
        var amount = $('<td>').html("$" + rowData.amount);
        var status = $('<td>').html(rowData.orderStatus).attr('class', 'primary-text');
        var tr = $('<tr>').append(id, customer, date, amount, status);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', function (orderData) {
        pageCounter.innerText = "Count: " + orderData.length;
        for (var i = 0; i < orderData.length; i++) {
            $('#orderRows').append(renderOrderRows(orderData[i]));
        }
    })
    var firstOrder = document.getElementsByName('firstcheck');
    firstOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'NEW') {
                    if (firstOrder[0].checked == false) {
                        // userRow[i].style.display = "";
                        userRow[i].style.display = "none";
                    }
                    else {
                        // userRow[i].style.display = "none";
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var page = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                page++;
            }
        }
        pageCounter.innerText = "Count: " + page
    }

    var secondOrder = document.getElementsByName('secondcheck');
    secondOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'PACKED') {
                    if (secondOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var page = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                page++;
            }
        }
        pageCounter.innerText = "Count: " + page
    }

    var thirdOrder = document.getElementsByName('thirdcheck');
    thirdOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'INTRANSIT') {
                    if (thirdOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var page = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                page++;
            }
        }
        pageCounter.innerText = "Count: " + page
    }

    var fourthOrder = document.getElementsByName('fourthcheck');
    fourthOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'DELIVERED') {
                    if (fourthOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var page = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                page++;
            }
        }
        pageCounter.innerText = "Count: " + page
    }
})