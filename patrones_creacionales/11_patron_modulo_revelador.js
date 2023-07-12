
const resultado = (() => {
  const x = {};
  
  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  };
})();

resultado.a();
//agrega una nueva propiedad
resultado.b('queso', 'gouda');

resultado.a();

// no se puede acceder a x.   -> resultado.x undefined