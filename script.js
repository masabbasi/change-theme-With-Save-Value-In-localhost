const toggle = document.getElementById('toggle')
let light = true;
toggle.addEventListener('click',function(){
    document.body.classList.toggle("dark");
    if (!light) {
        localStorage.setItem('theme','light')
        light = true;
    } else {
        localStorage.setItem('theme','dark')
        light = false;
    }
})

window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme==='dark') {
        document.body.classList.add('dark')
    }
}