let NroPositivo = parseInt(prompt("Ingrese un numero positivo"));
if (isNaN(NroPositivo) || NroPositivo<0){
    console.log(`Ha ingresado un dato no válido.`);
}else{
    console.log(`El número positivo digitado es: ${NroPositivo}`);
}