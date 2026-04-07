/**
 * RushEats - Delivery App Main Script
 * Profesional, Accesible, Responsive
 */

(function () {
  'use strict';

  /* ===== DATA ===== */
  const RESTAURANTES = [
    {
      id: 'r1',
      nombre: 'Pizzería Napoli',
      categoria: 'pizza',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
      tiempo: 25,
      ubicacion: 'Centro, 1.2 km'
    },
    {
      id: 'r2',
      nombre: 'Sushi Roll',
      categoria: 'asiatica',
      img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80',
      tiempo: 30,
      ubicacion: 'Zona norte, 2.5 km'
    },
    {
      id: 'r3',
      nombre: 'Burger Norte',
      categoria: 'hamburguesas',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
      tiempo: 20,
      ubicacion: 'Avenida principal, 0.8 km'
    },
    {
      id: 'r4',
      nombre: 'Mamma Mia Express',
      categoria: 'pizza',
      img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=400&q=80',
      tiempo: 28,
      ubicacion: 'Downtown, 1.5 km'
    }
  ];

  const MENU = {
    r1: [
      {
        id: 'm1',
        nombre: 'Margarita',
        descripcion: 'Salsa de tomate, mozzarella, albahaca fresca',
        precio: 8.5,
        img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Lácteo'
      },
      {
        id: 'm2',
        nombre: 'Cuatro quesos',
        descripcion: 'Mozzarella, gorgonzola, parmesano, ricotta',
        precio: 10.9,
        img: 'https://images.unsplash.com/photo-1573821663912-5699037ea012?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Lácteo'
      }
    ],
    r2: [
      {
        id: 'm3',
        nombre: 'Menú maki (12 pzs)',
        descripcion: 'Sushi de salmón, atún y vegetales',
        precio: 14.0,
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Pescado, Sésamo'
      },
      {
        id: 'm4',
        nombre: 'Yakisoba',
        descripcion: 'Fideos salteados con verduras y pollo',
        precio: 9.5,
        img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Soja'
      }
    ],
    r3: [
      {
        id: 'm5',
        nombre: 'Clásica + patatas',
        descripcion: 'Hamburguesa con queso, lechuga, tomate y papas',
        precio: 11.0,
        img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Lácteo'
      },
      {
        id: 'm6',
        nombre: 'Veggie',
        descripcion: 'Hamburguesa vegetal con verduras y queso vegano',
        precio: 10.5,
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten'
      }
    ],
    r4: [
      {
        id: 'm7',
        nombre: 'Calzone',
        descripcion: 'Relleno de ricotta, espinaca y mozzarella',
        precio: 9.0,
        img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Lácteo'
      },
      {
        id: 'm8',
        nombre: 'Prosciutto',
        descripcion: 'Salsa de tomate, mozzarella, jamón de Parma',
        precio: 11.5,
        img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=300&q=80',
        alergenos: 'Gluten, Lácteo'
      }
    ]
  };

  /* ===== STATE ===== */
  let restauranteActual = null;
  let carrito = [];
  let filtroCategoria = 'todas';
  let busquedaRestaurantes = '';
  let busquedaPlatos = '';

  /* ===== DOM ELEMENTS ===== */
  const elCartButton = document.getElementById('cart-button');
  const elCartBadge = document.getElementById('cart-badge');
  const elSearchRestaurant = document.getElementById('search-restaurants');
  const elCategoryFilter = document.querySelectorAll('.category-chip');
  const elListaRestaurantes = document.getElementById('lista-restaurantes');
  const elStepRestaurante = document.getElementById('step-restaurante');
  const elStepProductos = document.getElementById('step-productos');
  const elStepResumen = document.getElementById('step-resumen');
  const elStepFormulario = document.getElementById('step-formulario');
  const elStepConfirmacion = document.getElementById('step-confirmacion');
  const elBtnVolverRest = document.getElementById('btn-volver-rest');
  const elBtnSeguirComprando = document.getElementById('btn-seguir-comprando');
  const elBtnComprar = document.getElementById('btn-comprar');
  const elBtnNuevo = document.getElementById('btn-nuevo');
  const elFormPedido = document.getElementById('form-pedido');
  const elBtnVolverResumen = document.getElementById('btn-volver-resumen');
  const elTituloRestaurante = document.getElementById('titulo-restaurante');
  const elRestauranteUbicacion = document.getElementById('restaurante-ubicacion');
  const elListaPlatos = document.getElementById('lista-platos');
  const elSearchPlatos = document.getElementById('search-platos');
  const elResumenRestauranteName = document.getElementById('resumen-restaurant-name');
  const elResumenRestauranteTime = document.getElementById('resumen-restaurant-time');
  const elListaResumen = document.getElementById('lista-resumen');
  const elResumenVacio = document.getElementById('resumen-vacio');
  const elSubtotal = document.getElementById('subtotal-delivery');
  const elEnvio = document.getElementById('envio-delivery');
  const elTotal = document.getElementById('total-delivery');
  const elTotalFormFinal = document.getElementById('total-form-final');
  const elFormRestaurante = document.getElementById('form-restaurante');
  const elFormTiempo = document.getElementById('form-tiempo');
  const elPaymentOptions = document.querySelectorAll('input[name="pago"]');
  const elCardInputs = document.getElementById('card-inputs');
  const elConfirmMessage = document.getElementById('msg-confirm');
  const elConfirmResto = document.getElementById('confirm-resto');
  const elConfirmTotal = document.getElementById('confirm-total');
  const elConfirmTiempo = document.getElementById('confirm-tiempo');

  /* ===== UTILITY FUNCTIONS ===== */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatEuros(amount) {
    return Number(amount).toFixed(2).replace('.', ',') + ' €';
  }

  function showPanel(panel) {
    [elStepRestaurante, elStepProductos, elStepResumen, elStepFormulario, elStepConfirmacion].forEach(
      (p) => {
        p.hidden = p !== panel;
        p.classList.toggle('active', p === panel);
      }
    );
    updateProgressIndicators(panel);
  }

  function updateProgressIndicators(panel) {
    const panelToStepMap = new Map([
      [elStepRestaurante, '1'],
      [elStepProductos, '2'],
      [elStepResumen, '3'],
      [elStepFormulario, '4'],
      [elStepConfirmacion, '4']
    ]);

    const stepNum = panelToStepMap.get(panel) || '1';

    document.querySelectorAll('.progress-step').forEach((el) => {
      const step = el.getAttribute('data-step');
      el.classList.toggle('active', step === stepNum);
    });
  }

  /* ===== CARRITO MANAGEMENT ===== */
  function updateCartBadge() {
    const count = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    if (count > 0) {
      elCartBadge.hidden = false;
      elCartBadge.textContent = count;
    } else {
      elCartBadge.hidden = true;
    }
  }

  function eliminarDelCarrito(idPlato) {
    const index = carrito.findIndex(item => item.idPlato === idPlato);
    if (index !== -1) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad -= 1;
      } else {
        carrito.splice(index, 1);
      }
      updateCartBadge();
      renderResumen();
    }
  }

  function agregarAlCarrito(idPlato, nombre, precio, img) {
    const item = carrito.find((el) => el.idPlato === idPlato);
    if (item) {
      item.cantidad += 1;
    } else {
      carrito.push({
        idPlato,
        nombre,
        precio,
        img,
        cantidad: 1
      });
    }
    updateCartBadge();
  }

  function renderSkeletons() {
    elListaRestaurantes.innerHTML = '';
    // Generamos 4 tarjetas de esqueleto
    for (let i = 0; i < 4; i++) {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="restaurant-card" style="pointer-events: none;">
          <div class="skeleton" style="height: 120px; width: 100%; margin-bottom: var(--spacing-sm);"></div>
          <div class="skeleton" style="height: 20px; width: 70%; margin-bottom: 0.5rem;"></div>
          <div class="skeleton" style="height: 14px; width: 40%; margin-bottom: 0.5rem;"></div>
          <div class="skeleton" style="height: 14px; width: 60%;"></div>
        </div>
      `;
      elListaRestaurantes.appendChild(li);
    }
  }

  /* ===== RESTAURANTES ===== */
  function filtrarRestaurantes() {
    renderSkeletons();

    // Simulamos un retraso de red para que el efecto sea visible y profesional
    setTimeout(() => {
      elListaRestaurantes.innerHTML = '';

    const restaurantesFiltrados = RESTAURANTES.filter((r) => {
      const matchCategoria = filtroCategoria === 'todas' || r.categoria === filtroCategoria;
      const matchBusqueda =
        r.nombre.toLowerCase().includes(busquedaRestaurantes.toLowerCase()) ||
        r.categoria.toLowerCase().includes(busquedaRestaurantes.toLowerCase());
      return matchCategoria && matchBusqueda;
    });

    restaurantesFiltrados.forEach((r) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <button type="button" class="restaurant-card" data-rest="${r.id}">
          <img src="${r.img}" alt="" class="restaurant-image" />
          <div class="restaurant-name">${escapeHtml(r.nombre)}</div>
          <div class="restaurant-category">${escapeHtml(r.categoria)}</div>
          <div class="restaurant-rating">
            <span><span class="material-symbols-outlined">schedule</span> ${r.tiempo} min</span> 
            <span><span class="material-symbols-outlined">location_on</span> ${escapeHtml(r.ubicacion)}</span>
          </div>
        </button>
      `;
      elListaRestaurantes.appendChild(li);
    });
    }, 450); // Un tiempo corto pero suficiente para el feedback visual
  }

  elListaRestaurantes.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-rest]');
    if (!btn) return;
    abrirMinuRestaurante(btn.getAttribute('data-rest'));
  });

  function abrirMinuRestaurante(restId) {
    restauranteActual = restId;
    const restaurant = RESTAURANTES.find((r) => r.id === restId);

    elTituloRestaurante.textContent = restaurant.nombre;
    elRestauranteUbicacion.textContent = `${restaurant.ubicacion} • ${restaurant.tiempo} min`;
    elResumenRestauranteName.textContent = restaurant.nombre;
    elResumenRestauranteTime.textContent = `Tiempo: ${restaurant.tiempo} min`;
    elFormRestaurante.textContent = restaurant.nombre;
    elFormTiempo.textContent = `${restaurant.tiempo} min`;

    renderizarPlatos();
    showPanel(elStepProductos);
  }

  /* ===== PLATOS ===== */
  function renderizarPlatos(query = '') {
    elListaPlatos.innerHTML = '';
    const todosLosPlatos = MENU[restauranteActual] || [];
    const platos = todosLosPlatos.filter(p => 
      p.nombre.toLowerCase().includes(query.toLowerCase()) || 
      p.descripcion.toLowerCase().includes(query.toLowerCase())
    );

    platos.forEach((plato) => {
      const li = document.createElement('li');
      li.className = 'dish-item';
      li.innerHTML = `
        <img src="${plato.img}" alt="" class="dish-image" />
        <div class="dish-content">
          <div>
            <h3 class="dish-name">${escapeHtml(plato.nombre)}</h3>
            <p class="dish-description">${escapeHtml(plato.descripcion)}</p>
            ${plato.alergenos ? `<span class="dish-allergens"><span class="material-symbols-outlined" style="font-size:14px">warning</span> ${escapeHtml(plato.alergenos)}</span>` : ''}
          </div>
          <div class="dish-footer">
            <span class="dish-price">${formatEuros(plato.precio)}</span>
            <button type="button" class="btn-add-dish" data-add-plato="${plato.id}" data-nombre="${escapeHtml(plato.nombre)}" data-precio="${plato.precio}" data-img="${plato.img}">
              Agregar
            </button>
          </div>
        </div>
      `;
      elListaPlatos.appendChild(li);
    });
  }

  elListaPlatos.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-plato]');
    if (!btn) return;

    const id = btn.getAttribute('data-add-plato');
    const nombre = btn.getAttribute('data-nombre');
    const precio = parseFloat(btn.getAttribute('data-precio'));
    const img = btn.getAttribute('data-img');

    agregarAlCarrito(id, nombre, precio, img);

    // Feedback visual
    btn.textContent = '✓ Agregado';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Agregar';
      btn.disabled = false;
    }, 1500);
  });

  elListaResumen.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-plato]');
    if (!btn) return;
    const id = btn.getAttribute('data-remove-plato');
    eliminarDelCarrito(id);
  });

  /* ===== BÚSQUEDA ===== */
  elSearchRestaurant.addEventListener('input', (e) => {
    busquedaRestaurantes = e.target.value;
    filtrarRestaurantes();
  });

  elSearchPlatos.addEventListener('input', (e) => {
    renderizarPlatos(e.target.value);
  });

  /* ===== CATEGORÍAS ===== */
  elCategoryFilter.forEach((chip) => {
    chip.addEventListener('click', () => {
      elCategoryFilter.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      filtroCategoria = chip.getAttribute('data-category');
      filtrarRestaurantes();
    });
  });

  /* ===== RESUMEN ===== */
  function renderResumen() {
    elListaResumen.innerHTML = '';

    if (carrito.length === 0) {
      elResumenVacio.style.display = 'block';
    } else {
      elResumenVacio.style.display = 'none';

      carrito.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'resumen-item';
        li.innerHTML = `
          <img src="${item.img}" alt="" class="resumen-item-image" />
          <div class="resumen-item-info">
            <div class="resumen-item-name">${escapeHtml(item.nombre)}</div>
            <div class="resumen-item-qty">Cantidad: ${item.cantidad}</div>
          </div>
          <div style="text-align: right">
            <div class="resumen-item-price">${formatEuros(item.precio * item.cantidad)}</div>
            <button class="btn-remove-item" data-remove-plato="${item.idPlato}" title="Eliminar"><span class="material-symbols-outlined">delete</span></button>
          </div>
        `;
        elListaResumen.appendChild(li);
      });
    }

    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const envio = 2.5;
    const total = subtotal + envio;

    elSubtotal.textContent = formatEuros(subtotal);
    elEnvio.textContent = formatEuros(envio);
    elTotal.textContent = formatEuros(total);
    elTotalFormFinal.textContent = formatEuros(total);
  }

  elBtnComprar.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('Agrega platos antes de continuar');
      return;
    }
    renderResumen();
    showPanel(elStepResumen);
  });

  elBtnSeguirComprando.addEventListener('click', () => {
    renderizarPlatos();
    showPanel(elStepProductos);
  });

  elBtnVolverRest.addEventListener('click', () => {
    showPanel(elStepRestaurante);
  });

  elCartButton.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    renderResumen();
    showPanel(elStepResumen);
  });

  elBtnVolverResumen.addEventListener('click', () => {
    renderResumen();
    showPanel(elStepResumen);
  });

  // Toggle tarjeta inputs
  elPaymentOptions.forEach((option) => {
    option.addEventListener('change', () => {
      if (option.value === 'tarjeta') {
        elCardInputs.classList.add('visible');
      } else {
        elCardInputs.classList.remove('visible');
      }
    });
  });

  // Form submit
  elFormPedido.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validaciones básicas
    const formData = new FormData(elFormPedido);
    const calle = formData.get('calle').trim();
    const email = formData.get('email').trim();
    const telefono = formData.get('telefono').trim();

    if (!calle || !email || !telefono) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    if (!email.includes('@')) {
      alert('Email inválido');
      return;
    }

    if (telefono.length < 9) {
      alert('Teléfono inválido');
      return;
    }

    // Mostrar confirmación
    const restaurant = RESTAURANTES.find((r) => r.id === restauranteActual);
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0) + 2.5;

    elConfirmResto.textContent = restaurant.nombre;
    elConfirmTotal.textContent = formatEuros(total);
    elConfirmTiempo.textContent = `${restaurant.tiempo} min`;

    // Aquí irían las llamadas a backend (stripe, backend API, etc)
    console.log('Pedido confirmado:', {
      restaurante: restaurant.nombre,
      items: carrito,
      total: total,
      envio: calle,
      email: email,
      telefono: telefono
    });

    // Limpiar carrito
    carrito = [];
    restauranteActual = null;
    updateCartBadge();
    elFormPedido.reset();

    showPanel(elStepConfirmacion);
  });

  /* ===== NUEVO PEDIDO ===== */
  elBtnNuevo.addEventListener('click', () => {
    carrito = [];
    restauranteActual = null;
    updateCartBadge();
    elSearchRestaurant.value = '';
    busquedaRestaurantes = '';
    filtroCategoria = 'todas';
    elCategoryFilter[0].click();
    showPanel(elStepRestaurante);
  });

  /* ===== INIT ===== */
  filtrarRestaurantes();
  updateCartBadge();
})();
