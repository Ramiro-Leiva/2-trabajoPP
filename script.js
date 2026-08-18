async function cargarProductos() {
  try {
    const res = await fetch('http://localhost:3001/api/productos');
    const productos = await res.json();
    render(productos);
  } catch (err) {
    console.error('Error al cargar productos:', err);
  }
}

function render(productos) {
  const tbody = document.getElementById('tabla-productos');
  tbody.innerHTML = productos.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.sku}</td>
      <td>${p.descripcion}</td>
      <td>${p.precio}</td>
      <td>${p.stock}</td>
      <td>${p.estado}</td>
      <td>${p.fecha_registro}</td>
      <td>${p.categoria}</td>
      <td>${p.marca}</td>
    </tr>
  `).join('');
}

cargarProductos();