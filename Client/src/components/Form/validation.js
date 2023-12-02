//fn realizada aqui por temas de espacio
export function validate(input){
  //Expresión regular de un email
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //Expresión regular de una contraseña 
  const regexPassword = /^(?=.*\d)/
  //Declaramos un nuevo objeto
  const errors = {}
  //CONDICIONALES
  //EMAIL
  //Si no hay nada en email => 
  if(!input.email.length) errors.email = "Ingrese un email";
  else{
    //Si no cumple con ser igual a la expresión regular =>
    if(!regexEmail.test(input.email)){
      errors.email = "Ingrese un email valido"
    }
    //Si el email tiene más de 35 caracteres
    if(input.email.length > 35){
      errors.email = "Ingrese un email de menos de 35 caracteres"
    }
  }
  //PASSWORD
  //Si no hay nada en contraseña =>
  if(!input.password) errors.password = "Ingrese una contraseña";
  //Si no cumple con ser igual a la expresión regular =>
  if(input.password && !regexPassword.test(input.password)){
    errors.password = "Debe de tener al menos un número"
  }
  //Si tiene menos de 6 caracteres =>
  if(input.password && input.password.length < 6) errors.password = "Debe de tener mas de 6 caracteres"
  //Si tiene mas de 10 caracteres =>
  if(input.password && input.password.length > 10) errors.password = "No debe de tener mas de 10 caracteres"

  // if (!input.password) errors.password = "Enter your password"
  // if (!regexPassword.test(input.password))
  //     errors.password = "It must has at least one number"
  // if (input.password.length < 6) errors.password = "At least 6 characters"
  // if (input.password.length > 10) errors.password = "Maximum 10 characters"

  return errors
}

// VALIDACIÓN DE VALIDATE =>
// console.log(validate({
//   email: "asasda@gas.com",
//   password: "asdfsad12"
// }));
