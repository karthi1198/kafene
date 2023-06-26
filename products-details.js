$(document).ready(function () {
    var navit = document.getElementsByClassName('nav-list');
    navit[1].classList.add('active-nav-list');

    var pageCounter = document.getElementById('page');

    function renderProductRows(rowData) {
        var id = $('<td>').html(rowData.id);
        var productName = $('<td>').html(rowData.medicineName).attr('class', 'primary-text');
        var productBrand = $('<td>').html(rowData.medicineBrand)
        var formatDate = rowData.expiryDate.split('-');
        var expiryDate = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class', 'primary-text');
        var unitPrice = $('<td>').html("$" + rowData.unitPrice);
        var stock = $('<td>').html(rowData.stock);
        var tr = $('<tr>').append(id, productName, productBrand, expiryDate, unitPrice, stock);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', function (productData) {
        pageCounter.innerText = "Count: " + productData.length;
        for (var i = 0; i < productData.length; i++) {
            $('#productRows').append(renderProductRows(productData[i]));
        }
    })
    var pageCounter = document.getElementById('page');
    var productExpired = document.getElementsByName('productExpired');
    productExpired[0].onclick = function () {

        var table = document.getElementById('productRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[3];
            var todayDate = new Date().getFullYear();
            // console.log(todayDate)
            if (td) {
                var tdVal = td.textContent || td.innerText;

                if (tdVal.split(',')[1].trim() > todayDate.toString()) {
                    if (productExpired[0].checked == false) {

                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
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

    var productStock = document.getElementsByName('productStock');
    productStock[0].onclick = function () {
        var table = document.getElementById('productRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[5];
            if (td) {
                var tdVal = td.textContent || td.innerText;
                if (tdVal > 100) {
                    if (productStock[0].checked == false) {
                        userRow[i].style.display = "";
                    }
                    else {
                        userRow[i].style.display = "none";
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