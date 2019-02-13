/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var cantidad;
var marca;
var costo = 35;
var descuento;
var precioFinal;
var ingresos;
var suma;



function CalcularPrecio () 
{
    ObtenerDatos ();
    Convertir ();
    if (cantidad >= 6){
        descuento = (cantidad * costo)*50/100;
        precioFinal = (cantidad * costo) - descuento;
        document.getElementById("precioDescuento").value = precioFinal;
    }else{
            if (cantidad == 5 && marca == "ArgentinaLuz"){
                descuento = (cantidad * costo)*40/100;
                precioFinal = (cantidad * costo) - descuento;
                document.getElementById("precioDescuento").value = precioFinal;
            }
            else{
                if (cantidad == 5 && marca != "ArgentinaLuz"){
                    descuento = (cantidad * costo)*30/100;
                    precioFinal = (cantidad * costo) - descuento;
                    document.getElementById("precioDescuento").value = precioFinal;
                }
                else{
                    if (cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                        descuento = (cantidad * costo)*25/100;
                        precioFinal = (cantidad * costo) - descuento;
                        document.getElementById("precioDescuento").value = precioFinal;
                    }
                    else{
                        if (cantidad == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
                            descuento = (cantidad * costo)*20/100;
                            precioFinal = (cantidad * costo) - descuento;
                            document.getElementById("precioDescuento").value = precioFinal;
                        }
                        else{
                            if (cantidad == 3 && marca == "ArgentinaLuz"){
                                descuento = (cantidad * costo)*15/100;
                                precioFinal = (cantidad * costo) - descuento;
                                document.getElementById("precioDescuento").value = precioFinal;
                            }
                            else{
                                if (cantidad == 3 && marca == "FelipeLamparas"){
                                    descuento = (cantidad * costo)*10/100;
                                    precioFinal = (cantidad * costo) - descuento;
                                    document.getElementById("precioDescuento").value = precioFinal;
                            }
                            else{
                                if (cantidad == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
                                    descuento = (cantidad * costo)*5/100;
                                    precioFinal = (cantidad * costo) - descuento;
                                    document.getElementById("precioDescuento").value = precioFinal;
                                }

                            }
                        }               
 	
                    }
                }
            }
        }
    }
    if (precioFinal > 120){
        ingresos = precioFinal *10/100;
        suma = precioFinal + ingresos;
        alert("IIBB Usted pagó "+ suma);
    }
}

function ObtenerDatos ()
{
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
}

function Convertir()
{
    cantidad = parseInt(cantidad);
}
