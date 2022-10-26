let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

console.log("El usuario es: " + nombre + apellido);

alert("El usuario es: " + nombre + apellido);

let producto1 = 500;
let producto2 = 300;
let producto3 = 450;
let producto4 = 1200;
let producto5 = 2100;
let producto6 = 800;
let opcion = mostrarMenu();
let tarjetaIngresada = true;



if(opcion!=7) {
      comprar(opcion);
    }
    else {
      alert("GRACIAS");
    }

    function mostrarMenu()
    {
      return prompt(`Seleccione una opcion: 
                    1. producto1 (${producto1}ARS)
                    2. producto2 (${producto2}ARS)
                    3. producto3 (${producto3}ARS)
                    4. producto4 (${producto4}ARS)
                    5. producto5 (${producto5}ARS)
                    6. producto6 (${producto6}ARS)
                    7. terminar`);
      
    }

    function comprar(opcion) {
      switch (opcion) {
        case "1":
        {
            pedirDinero(producto1)
            break;
        }
        case "2":
        {
            pedirDinero(producto2)
            break;
        }
        case "3":
        {
            pedirDinero(producto3)
            break;
        }
        case "4":
        {
            pedirDinero(producto4)
            break;
        }
        case "5":
        {
            pedirDinero(producto5)
            break;
        }
        case "6":
        {
            pedirDinero(producto6)
            break;
        }
        default:
        {
            alert("opcion invalida")
            break;
        }
        
      }

    }
    function pedirDinero(priceProduct) {

            while(tarjetaIngresada<priceProduct) {
                
              let dinero = Number(prompt("¿Con tarjeta paga?"));
              
              if(dinero<priceProduct) {
                  alert("tarjeta invalida")
              }else{
                  tarjetaIngresada+=dinero;
              }
            }
            
              let pago = tarjetaIngresada - priceProduct;
              alert("pago realizado");
              alert("Gracias, nos pondremos en contacto para la entrega de su producto");

    }