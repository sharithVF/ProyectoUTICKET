const frmlogin = document.getElementById("frm-register");
const username = document.getElementById("username");
const idc = document.getElementById("numIDC");
const password = document.getElementById("password");
const confPassword = document.getElementById("conf-password");

const userRegister = [];
let id = 0;

frmlogin.addEventListener("submit",registerUser);

function registerUser(event){

    event.preventDefault();

    id++;

    const user = {
        id: id,
        user: username.value,
        idc: idc.value,
        password: password.value,
        confPassword: confPassword.value
    };

    if (
        username.value === "" ||
        idc.value === "" ||
        password.value === "" ||
        confPassword.value === ""        
        ){
            alert ("debe de llenar todos los campos");
        }

    else if (password.value !== confPassword.value){
        alert ("la contraseña no coinside")
    }

    else if (userRegister.find(user => user.user === username.value)){
        alert ("el usuario ya existe")
    }

    else{
        userRegister.push(user);

        localStorage.setItem("user", JSON.stringify(userRegister));
        // alert("usuario registrado con exito");
        window.location.href= "./Login.html";

        username.value = "";
        idc.value = "";
        password.value = "";
        confPassword.value = "";
    }
}