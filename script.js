//dom
console.dir(document.body);

//definicion de clases y funciones principales
class Propina{
    constructor(totalCuenta, porcentajePropina, totalPersonas){    
        this.totalCuenta = totalCuenta;
        this.porcentajePropina = porcentajePropina;
        this.totalPersonas = totalPersonas;
        this.totalpropina = ((totalCuenta * porcentajePropina) /100);
        this.proPorPers = (((totalCuenta * porcentajePropina) /100) / totalPersonas);
        this.totalAPagar = (((totalCuenta * porcentajePropina) / 100) + totalCuenta);
        this.propinaParaMuchos = ((((totalCuenta * porcentajePropina) / 100) + totalCuenta) / totalPersonas);
    }

    calcularPropina(){
        return this.totalpropina;
    }
    calcularPropinaParaCada(){
        return this.proPorPers;
    }
    mostrarTotalConPropina(){
        return this.totalAPagar;
    }
    calcularPropinaSegunCantidad(){
        return this.propinaParaMuchos;
    }

}
//declaración de variables 
let contente = document.getElementById("contenedor");
let check =document.getElementById("unoSolo");
let check2 = document.getElementById("unGrupo");
let persons = document.getElementById("persons");
let cada =document.getElementById("cada");
let formulario = document.getElementById("formulario");
let cadaUno = document.getElementById("cadaUno");

//evento en checkbox inicial para que comience a ejecutarse la función
check.addEventListener('click', miCalculadora);
check2.addEventListener('click', miCalculadora);

//función inicial del simulador
function miCalculadora(){

    if ( check.checked == true ){

        //no se muestran los datos que se le pide al grupo
        console.log("Solo una persona va a pagar la cuenta");

        persons.style.display= "none";
        cada.style.display= "none";
        contente.style.display="flex";

        let miFormulario = document.getElementById("formulario");
        miFormulario.addEventListener("submit", calcular);

        function calcular(e){
        
            e.preventDefault();
            //pedido de datos        
            let totalCuenta = JSON.parse(document.getElementById("tot").value);
            let porcentajePropina = JSON.parse(document.getElementById("prop").value);  
    
            //resultados
            const propina1 = new Propina(totalCuenta, porcentajePropina);
            
            let totprop = document.createElement("p");
            totprop.innerHTML = propina1.calcularPropina();
            document.getElementById("totprop").appendChild(totprop);
    
            let tottot = document.createElement("p");
            tottot.innerHTML = propina1.mostrarTotalConPropina();
            document.getElementById("tottot").appendChild(tottot);

            sessionStorage.setItem("propina", propina1.calcularPropina());
            console.log("El total de la propina es de " + JSON.parse(sessionStorage.getItem("propina")) + " pesos");
            sessionStorage.setItem("total", propina1.mostrarTotalConPropina());
            console.log("El total a pagar es de " + JSON.parse(sessionStorage.getItem("total")) + " pesos");
        }

    } else if (check2.checked == true){
        //se muestran los datos que le pide al grupo
        contente.style.display="flex"
        formulario.style.display="none";

        console.log("Son un grupo")

        formulario.style.display="flex";

            let miFormulario = document.getElementById("formulario");
            miFormulario.addEventListener("submit", calcular);
    
            function calcular(e){
            
                e.preventDefault();
    
                //pedido de datos
                let totalCuenta = parseFloat(document.getElementById("tot").value);
                let porcentajePropina = parseFloat(document.getElementById("prop").value);  
                let totalPersonas = parseFloat(document.getElementById("pers").value);

                const propinaEntreTodos = new Propina(totalCuenta, porcentajePropina, totalPersonas);

                //resultados

                let totprop = document.createElement("p");
                totprop.innerHTML = propinaEntreTodos.calcularPropina();
                document.getElementById("totprop").appendChild(totprop);
        
                let tottot = document.createElement("p");
                tottot.innerHTML = propinaEntreTodos.mostrarTotalConPropina();
                document.getElementById("tottot").appendChild(tottot);

                let totpers = document.createElement("p");
                totpers.innerHTML = propinaEntreTodos.calcularPropinaSegunCantidad().toFixed(2);
                document.getElementById("totpers").appendChild(totpers);

                sessionStorage.setItem("propina", propinaEntreTodos.calcularPropina());
                console.log("El total de la propina es de " + JSON.parse(sessionStorage.getItem("propina")) + " pesos");
                sessionStorage.setItem("total", propinaEntreTodos.mostrarTotalConPropina());
                console.log("El total a pagar es de " + JSON.parse(sessionStorage.getItem("total")) + " pesos");
                sessionStorage.setItem("pagoPorPers", propinaEntreTodos.calcularPropinaSegunCantidad().toFixed(2));
                console.log("Cada uno debe pagar un total de " + JSON.parse(sessionStorage.getItem("pagoPorPers")) + " pesos");
            }
    
        } 
} 




