let errorEmail = document.querySelector(".errorEmail")
let errorPassword = document.querySelector(".errorPassword")
let input = document.querySelectorAll("input")
let inputEmail = input[0]
let inputPassword = input[1]
let btn = document.querySelector(".controlButton")
const account = {
    email: "Triet",
    password: 123,
}
btn.addEventListener("click", function () {
    if (inputEmail.value == account.email && inputPassword.value == account.password) {
        errorEmail.innerHTML = ``
        errorPassword.innerHTML = ``
        location.href = "Main.html"
    }
    else if (inputEmail.value == "" && inputPassword.value != "") {
        errorEmail.innerHTML = ``
        errorPassword.innerHTML = ``
        errorEmail.innerHTML = `Vui lòng nhập email`
    }
    else if (inputEmail.value != "" && inputPassword.value == "") {
        errorEmail.innerHTML = ``
        errorPassword.innerHTML = ``
        errorPassword.innerHTML = `Vui lòng nhập password`
    }
    else if (inputEmail.value != account.email || inputPassword.value != account.password) {
        errorEmail.innerHTML = ``
        errorPassword.innerHTML = ``
        errorEmail.innerHTML = `Sai email hoặc password`
        errorPassword.innerHTML = `Sai email hoặc password`
    }
    else {
        errorEmail.innerHTML = ``
        errorPassword.innerHTML = ``
        errorEmail.innerHTML = `Vui lòng nhập email`
        errorPassword.innerHTML = `Vui lòng nhập password`
    }
    localStorage.setItem("user", account.email)
})