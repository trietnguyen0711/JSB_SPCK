let set = document.querySelector(".Set")
if (localStorage.getItem("user")) {
    set.innerHTML = `<p>Account:${localStorage.getItem("user")}</p>`
}
else {
    set.innerHTML = `<a href="./Sign.html">Đăng nhập</a>`
}