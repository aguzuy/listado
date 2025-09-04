/*
Se agregue el nuevo ítem al listado guardado
Se actualice la vista del listado
Se limpie el campo para añadir nuevos ítems 
*/

document.addEventListener("DOMContentLoaded", () => {
    const agregarBtn = document.getElementById("agregar");
    let valores = [];

    //Mostrar primera vez
    const lista = document.getElementById("contenedor");
    if (localStorage.getItem("valores") != ""){
    const items = JSON.parse(localStorage.getItem("valores"));
    mostrarLista(items,lista);
    }
    agregarBtn.addEventListener("click",function(e) {
        e.preventDefault();

        const valor = document.getElementById("item").value;
        const lista = document.getElementById("contenedor");
        

        valores.push(valor);
        localStorage.setItem("valores",JSON.stringify(valores));
        
        mostrarLista(valores,lista);
    })

    function mostrarLista(valores,contenedor){
        contenedor.innerHTML=``
        valores.forEach(valor => {
            const nuevo = document.createElement("ul");
            nuevo.innerHTML=`${valor}`

            contenedor.appendChild(nuevo);
        })
    }

    const limpiarBtn = document.getElementById("limpiar");

    limpiarBtn.addEventListener("click",function(e) {
        e.preventDefault();

        const lista = document.getElementById("contenedor");

        lista.innerHTML=``

        valores.forEach(valor => {
            let basura = valores.pop();
        })

        localStorage.setItem("valores",JSON.stringify(valores));
    })

});