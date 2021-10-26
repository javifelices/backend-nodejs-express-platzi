function logErrors(err, req, res, next) {
  console.error(err); // mostrar el error en servidor para poder monitorearlo
  next(err); // Para saber que se esta enviando a un middleware de tipo error, si no tiene el error dentro entonces se esta mandando a uno normal
}

// Crear formato para devolverlo al cliente que se complementa con la función anterior:
function errorHandler(err, req, res, next) {
  // Aunque no se utilice next en el código, se debe poner, ya que un middleware de error tiene los cuatro parámetros
  res.status(500).json({
    // indicar que el error es estatus 500 Internal Server Error
    message: err.message, //mostrar al cliente el mensaje de error
    stack: err.stack // mostrar info del error
  });
}

module.exports = { logErrors, errorHandler };
