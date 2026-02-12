const DEV_CODE = "9834F747DAJFILYRA78839";

// Показати DEV-панель, якщо власник ввів код
function loginDev(){
    const code = prompt("Введіть код власника:");
    if(code === DEV_CODE){
        document.getElementById('adminPanel').style.display = 'block';
        alert("DEV панель активована");
    } else {
        alert("Невірний код");
    }
}

// Викликаємо при завантаженні сторінки
window.onload = function(){
    if(document.getElementById('adminPanel')){
        loginDev();
    }
}
