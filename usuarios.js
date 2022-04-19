const nodoFormulario = document.querySelector("#myForm");
nodoFormulario.addEventListener("submit", (event)=>{

    event.preventDefault();
 

    const usuario= document.querySelector ("#usuario");
    const contraseña= document.querySelector("#contraseña");
    if (usuario.value!=="" && contraseña.value!=="")
    {
        alert("BIENVENIDO");
    }
    else
    {
        alert("usuario incorrecto")
    }
})