function mostrarSeleccion() {
    var curso = document.getElementById("cursos").value;
    var horario = document.getElementById("horarios").value;
    var profesor = document.getElementById("profesores").value;
    
    var resultado = "Has seleccionado el curso de " + curso + " en horario de la " + horario + " con el profesor/a " + profesor + ".";
    
    document.getElementById("resultado").innerText = resultado;
}
