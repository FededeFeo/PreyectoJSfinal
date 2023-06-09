/* Producto que se agruega al carrito  */
export class ProductoCarrito {
  
  constructor(id, nombre, precio, foto) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.foto = foto);
  }
}


//API

obtenerDolar();

function obtenerDolar() {
  const URLDOLAR = 'https://api.bluelytics.com.ar/v2/latest';
  fetch(URLDOLAR)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      const dolarBlue = datos.blue;
      console.log(dolarBlue);
      document.getElementById('precio_dolar').innerHTML += `
      <p>Dolar compra: $ ${dolarBlue.value_buy} - Dolar venta : $ ${dolarBlue.value_sell}</p>
      `;

    })

}
