$(document).ready(function() {
    console.log("Cargado el DOM");
});

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

$("#uno-solo").click( () =>{
    console.log("Solo una persona va a pagar la cuenta");
        $("#one").slideDown("fast");
        $("#two").slideUp("fast");
    
    $("#submit").click( function (event){
        $(".ticket-one").empty();
        $(".ticket-two").empty();
    
        event.preventDefault();
        let totalCuenta = parseInt($(".tot").val());
        let porcentajePropina = parseInt($(".prop").val());
    
        $(".ticket-one").slideDown("fast");
    
        const calcularPUno = new Propina(totalCuenta, porcentajePropina);
        $(".ticket-one").append(`<div class="calculo-uno">
        <h1> El total de la propina es de ${calcularPUno.calcularPropina()}$</h1>
        <h2> El total a pagar es de ${calcularPUno.mostrarTotalConPropina()}$</h1>
        </div>`);
        sessionStorage.setItem("propina-uno", calcularPUno.calcularPropina());
        sessionStorage.setItem("total-uno", calcularPUno.mostrarTotalConPropina());

    })

});

$("#un-grupo").click( () =>{
    console.log("Son un grupo");
    $("#two").slideDown("fast");
    $("#one").slideUp("fast");
    
    $("#submit").click( function (event){
        $(".ticket-one").empty();
        $(".ticket-two").empty();
    
        event.preventDefault();

        let totalCuenta = parseInt($(".tot-g").val());
        let porcentajePropina = parseInt($(".prop-g").val());
        let totalPersonas = parseInt($(".pers-g").val());
    
        $(".ticket-two").slideDown("fast");
    
        const calcularPGrupo = new Propina(totalCuenta, porcentajePropina, totalPersonas);
        $(".ticket-two").append(`<h1> El total de la propina es de ${calcularPGrupo.calcularPropina()}$</h1>
        <h2> Cada uno debe poner  ${calcularPGrupo.calcularPropinaParaCada().toFixed(2)}$ de propina</h2>
        <h2> El total a pagar es de ${calcularPGrupo.mostrarTotalConPropina().toFixed(2)}$</h2>
        <h2>Y cada uno debe pagar un total de ${calcularPGrupo.calcularPropinaSegunCantidad().toFixed(2)}$`);
        sessionStorage.setItem("propina-grupo", calcularPGrupo.calcularPropina());
        sessionStorage.setItem("propina-dividida", calcularPGrupo.calcularPropinaParaCada());
        sessionStorage.setItem("total-ypropina", calcularPGrupo.mostrarTotalConPropina());
        sessionStorage.setItem("cada-uno", calcularPGrupo.calcularPropinaSegunCantidad());
    })

});

$("#reset").click( () =>{
    $(".ticket-one").empty();
    $(".ticket-two").empty();

})
