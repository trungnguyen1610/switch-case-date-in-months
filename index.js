document.getElementById("btn").onclick = function(){
    let value = Number(document.getElementById("inputDate").value);
    let result = document.getElementById("result");
    console.log(value);
    switch (value) {
        case 1:
            result.innerHTML = "Tháng 1 có 31 ngày";
            break;
        case 2:
            result.innerHTML = "Tháng 2 có 28 ngày đến 29";
            break;
        case 3:
            result.innerHTML = "Tháng 3 có 31";
            break;
        case 4:
            result.innerHTML = "Tháng 4 có 30";
            break;
        case 5:
            result.innerHTML = "Tháng 5 có 31";
            break;
        case 6:
            result.innerHTML = "Tháng 6 có 30";
            break;
        case 7:
            result.innerHTML = "Tháng 7 có 31";
            break;
        case 8:
            result.innerHTML = "Tháng 8 có 31";
            break;
        case 9:
            result.innerHTML = "Tháng 9 có 30";
            break;
        case 10:
            result.innerHTML = "Tháng 10 có 31";
            break;
        case 11:
            result.innerHTML = "Tháng 11 có 30";
            break;
        case 12:
            result.innerHTML = "Tháng 12 có 31";
            break;
        default:
            result.innerHTML = "Có lôz tháng đấy m bị ảo ma à";
            break;
    }
}