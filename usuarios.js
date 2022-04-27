const nodoFormulario = document.querySelector("#myForm");
nodoFormulario.addEventListener("submit", (event) => {

    event.preventDefault();


    const usuario = document.querySelector("#usuario");
    const contraseña = document.querySelector("#contraseña");
    if (usuario.value !== "" && contraseña.value !== "") {
        alert("BIENVENIDO");
    }
    else {
        alert("usuario incorrecto")
    }
})
function addEventListener() {
    const btn = document.querySelector("#btnCrearCuenta");

    const { value: accept } = await Swal.fire({
        title: 'Terms and conditions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
            'I agree with the terms and conditions',
        confirmButtonText:
            'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
            return !result && 'You need to agree with T&C'
        }
    })

    if (accept) {
        Swal.fire('You agreed with T&C :)')
    }
}
