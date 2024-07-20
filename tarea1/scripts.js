function calcularArea() {
    // Obtener los valores de la base y la altura
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');
    var formulario = document.getElementById('formularioRectangulo');
    
    
    // Validar que los campos no estén vacíos y sean números positivos
    if (base === '' || altura === '' || base <= 0 || altura <= 0) {
        if (base <= 0) {
            document.getElementById('base').classList.add('is-invalid');
        } else {
            document.getElementById('base').classList.remove('is-invalid');
        }
        if (altura <= 0) {
            document.getElementById('altura').classList.add('is-invalid');
        } else {
            document.getElementById('altura').classList.remove('is-invalid');
        }
        formulario.classList.add('was-validated');
        resultado.innerText = '';
        return;
    }
    
    // Calcular
    var area = base * altura;

    // Mostrar el resultado
    resultado.innerText = 'El área del rectángulo es: ' + area;
}

function limpiarCampos() {
    // Boton Limpiar
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerText = '';
    
 
}
