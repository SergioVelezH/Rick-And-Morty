export function validar(input) {
    const errors = {};
    const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regPass = /\d/;
  
    // Validar el email
    if (!regEmail.test(input.email)) {
      errors.email = "El email no es válido";
    }
  
    // if (input.email.length === 0) {
    //   errors.email = "Este campo no puede estar vacío"  ;
    // }
  
    if (input.email.length > 35) {
      errors.email = "El email no puede tener más de 35 caracteres";
    }
  
    // Validar la contraseña
    if (!regPass.test(input.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    }
  
    if (input.password.length < 6 || input.password.length < 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
  
    return errors;
  }