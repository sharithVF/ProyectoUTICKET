const username = document.getElementById('username');
const password = document.getElementById('password');
const frmlogin = document.getElementById('frm-login');

frmlogin.addEventListener('submit',loginUser);

function loginUser (event){
    event.preventDefault();

    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);

    if (username.value === "" || password.value === ""){
        alert("por favor llene todos los campos")
    }

    else if (!validateUser.find(user => user.user === username.value)){
        alert("el usuario no existe")
    }

    else if (
        validateUser.find(user => user.user === username.value).password !== password.value){
            alert("la contraseña no coincide")
        }

        else{
            // alert ("el usuario fue logueado con exito")
            window.location.href="./index.html"
        }
}