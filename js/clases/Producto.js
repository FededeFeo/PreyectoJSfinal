/* Producto que se agruega al carrito  */
export class ProductoCarrito {
  
  constructor(id, nombre, precio, foto) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.foto = foto);
  }
}
