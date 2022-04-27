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
Swal.fire({
    title: 'How old are you?',
    icon: 'question',
    input: 'range',
    inputLabel: 'Your age',
    inputAttributes: {
      min: 8,
      max: 120,
      step: 1
    },
    inputValue: 25
  })