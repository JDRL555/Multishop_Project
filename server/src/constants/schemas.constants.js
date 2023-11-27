export const MESSAGES = {
  user: {
    fullname: {
      invalid_type_error: "El nombre completo debe ser texto",
      required_error: "El nombre completo es requerido"
    },
    phone_contact: {
      invalid_type_error: "El teléfono de contacto debe ser texto, incluyendo el código del respectivo país: +58...",
      required_error: "El teléfono de contacto es requerido",
      max_length: {
        message: "El teléfono debe poseer máximo 15 números, incluyendo el código del respectivo país"
      }
    },
    phone_message: {
      required_error: "El teléfono para mensajes debe ser texto, incluyendo el código del respectivo país: +58...",
      required_error: "El teléfono para mensajes debe ser requerido",
      max_length: {
        message: "El teléfono para mensajes debe poseer máximo 15 números, incluyendo el código del respectivo país"
      } 
    },
    email: {
      invalid_type_error: "El correo debe ser texto",
      required_error: "El correo es requerido",
      format: {
        message: "El correo es inválido. Debe ser: example@gmail.com"
      }
    },
    password: {
      invalid_type_error: "La clave debe ser texto",
      required_error: "La clave debe ser requerida",
      min_length: {
        message: "La clave debe ser de mínimo 8 caracteres"
      }
    },
    db_username: {
      invalid_type_error: "El nombre de usuario de la base de datos debe ser texto",
      required_error: "El nombre de usuario de la base de datos es requerido",
    },
    db_password: {
      invalid_type_error: "La contraseña de la base de datos debe ser texto",
      required_error: "La contraseña de la base de datos es requerida",
    },
    db_host: {
      invalid_type_error: "El host de la base de datos debe ser texto",
      required_error: "El host de la base de datos es requerido",
    },
    is_enabled: {
      invalid_type_error: "El habilitado/Inhabilitado debe ser booleano (true o false)",
    },
    cycles: {
      invalid_type_error: "La cantidad de ciclos debe ser numérico",
      required_error: "La cantidad de ciclos es requerido",
      format: {
        message: "La cantidad de ciclos debe ser un entero"
      },
      positive: {
        message: "La cantidad de ciclos debe ser un entero positivo"
      }
    }
  }
}