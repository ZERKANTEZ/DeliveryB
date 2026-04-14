/**
 * RushEats - Interactive delivery prototype
 * Rediseñado para mostrar carrito, cantidades y flujo claro.
 */

(function () {
  'use strict';

  const LOGO_DEV_PUBLISHABLE_KEY = 'pk_QYm0q4sERxCvfbvVgm13Rw';

  const RESTAURANTES = [
    { id: 'r1', nombre: 'McDonald\'s', sucursal: 'Centro', categoria: 'hamburguesas', domain: 'mcdonalds.com', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80', tiempo: 25, ubicacion: 'Centro, 1.2 km', descripcion: 'Combos rápidos, papas crujientes y entrega express.', destacado: 'Más pedido' },
    { id: 'r2', nombre: 'KFC', sucursal: 'Zona Norte', categoria: 'pollo', domain: 'kfc.com', img: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=900&q=80', tiempo: 30, ubicacion: 'Zona norte, 2.5 km', descripcion: 'Buckets, combos y pollo crujiente para compartir.', destacado: 'Entrega familiar' },
    { id: 'r3', nombre: 'Burger King', sucursal: 'Avenida Principal', categoria: 'hamburguesas', domain: 'burgerking.com', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80', tiempo: 20, ubicacion: 'Avenida principal, 0.8 km', descripcion: 'Hamburguesas a la parrilla con tiempos de entrega cortos.', destacado: 'Llega más rápido' },
    { id: 'r4', nombre: 'Subway', sucursal: 'Downtown', categoria: 'sandwiches', domain: 'subway.com', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80', tiempo: 28, ubicacion: 'Downtown, 1.5 km', descripcion: 'Sándwiches frescos, ligeros y armados al momento.', destacado: 'Fresh picks' }
  ];

  const MENU = {
    r1: [
      { id: 'm1', nombre: 'Cuarto de Libra Combo', descripcion: 'Hamburguesa, papas medianas y bebida helada.', precio: 169, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Lácteo', badge: 'Top seller' },
      { id: 'm2', nombre: 'McNuggets (10 pzs)', descripcion: 'Nuggets dorados con salsa a elección.', precio: 219, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten', badge: 'Para compartir' },
      { id: 'm3', nombre: 'McWrap Crispy', descripcion: 'Wrap crujiente con lechuga, queso y salsa cremosa.', precio: 155, img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Huevo', badge: 'Nuevo' }
    ],
    r2: [
      { id: 'm4', nombre: 'Bucket Crispy', descripcion: 'Piezas de pollo crujiente ideales para compartir.', precio: 279, img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten', badge: 'Favorito' },
      { id: 'm5', nombre: 'Twister Combo', descripcion: 'Wrap con papas y bebida en un combo rápido.', precio: 189, img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Huevo', badge: 'Combo' },
      { id: 'm6', nombre: 'Hot Wings', descripcion: 'Alitas picantes con crocancia intensa.', precio: 163, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten', badge: 'Picante' }
    ],
    r3: [
      { id: 'm7', nombre: 'Whopper Combo', descripcion: 'Hamburguesa a la parrilla, papas y refresco.', precio: 219, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Lácteo', badge: 'Clásico' },
      { id: 'm8', nombre: 'Chicken Crispy', descripcion: 'Pollo crujiente con vegetales frescos.', precio: 209, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Lácteo', badge: 'Muy pedido' },
      { id: 'm9', nombre: 'Papas Supreme', descripcion: 'Papas con queso fundido y topping bacon.', precio: 133, img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80', alergenos: 'Lácteo', badge: 'Extra' }
    ],
    r4: [
      { id: 'm10', nombre: 'Sub Pollo Teriyaki', descripcion: 'Sándwich caliente con pollo y salsa teriyaki.', precio: 179, img: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Soja', badge: 'Fresh pick' },
      { id: 'm11', nombre: 'Italian BMT', descripcion: 'Sándwich de embutidos con queso y vegetales.', precio: 229, img: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Lácteo', badge: 'Popular' },
      { id: 'm12', nombre: 'Galleta doble chocolate', descripcion: 'Postre tibio para cerrar el pedido.', precio: 65, img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80', alergenos: 'Gluten, Huevo', badge: 'Postre' }
    ]
  };

  let restauranteActual = null;
  let carrito = []; // cada ítem: { idPlato, restId, nombre, precio, img, cantidad }
  let filtroCategoria = 'todas';
  let busquedaRestaurantes = '';
  let busquedaPlatos = '';
  let restaurantSearchDebounceId = null;

  const elCartButton = document.getElementById('cart-button');
  const elCartButtonMeta = document.getElementById('cart-button-meta');
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
  const elTituloRestaurante = document.getElementById('titulo-restaurante');
  const elRestauranteUbicacion = document.getElementById('restaurante-ubicacion');
  const elSearchPlatos = document.getElementById('search-platos');
  const elListaPlatos = document.getElementById('lista-platos');
  const elSidebarRestaurant = document.getElementById('sidebar-restaurant');
  const elSidebarItems = document.getElementById('sidebar-items');
  const elSidebarEmpty = document.getElementById('sidebar-empty');
  const elSidebarSubtotal = document.getElementById('sidebar-subtotal');
  const elSidebarEnvio = document.getElementById('sidebar-envio');
  const elSidebarTotal = document.getElementById('sidebar-total');
  const elBtnSidebarCart = document.getElementById('btn-sidebar-cart');
  const elResumenRestauranteName = document.getElementById('resumen-restaurant-name');
  const elResumenRestauranteTime = document.getElementById('resumen-restaurant-time');
  const elListaResumen = document.getElementById('lista-resumen');
  const elResumenVacio = document.getElementById('resumen-vacio');
  const elSubtotal = document.getElementById('subtotal-delivery');
  const elEnvio = document.getElementById('envio-delivery');
  const elTotal = document.getElementById('total-delivery');
  const elBtnSeguirComprando = document.getElementById('btn-seguir-comprando');
  const elBtnComprar = document.getElementById('btn-comprar');
  const elFormPedido = document.getElementById('form-pedido');
  const elFormFeedback = document.getElementById('form-feedback');
  const elBtnVolverResumen = document.getElementById('btn-volver-resumen');
  const elTotalFormFinal = document.getElementById('total-form-final');
  const elFormRestaurante = document.getElementById('form-restaurante');
  const elFormTiempo = document.getElementById('form-tiempo');
  const elPaymentOptions = document.querySelectorAll('input[name="pago"]');
  const elCardInputs = document.getElementById('card-inputs');
  const elInputCard = document.getElementById('input-card');
  const elInputExpiry = document.getElementById('input-expiry');
  const elInputCvv = document.getElementById('input-cvv');
  const elConfirmMessage = document.getElementById('msg-confirm');
  const elConfirmResto = document.getElementById('confirm-resto');
  const elConfirmTotal = document.getElementById('confirm-total');
  const elConfirmTiempo = document.getElementById('confirm-tiempo');
  const elBtnNuevo = document.getElementById('btn-nuevo');
  const elCartBar = document.getElementById('cart-bar');
  const elCartBarLabel = document.getElementById('cart-bar-label');
  const elCartBarTotal = document.getElementById('cart-bar-total');
  const elBtnCartBar = document.getElementById('btn-cart-bar');

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatMXN(amount) {
    return '$' + Number(amount).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function buildLogoUrl(domain) {
    const params = new URLSearchParams({ token: LOGO_DEV_PUBLISHABLE_KEY, size: '160', format: 'png', theme: 'light', retina: 'true', fallback: 'monogram' });
    return `https://img.logo.dev/${domain}?${params.toString()}`;
  }

  function getRestaurantById(restId) {
    return RESTAURANTES.find((restaurant) => restaurant.id === restId) || null;
  }

  function getRestaurantLabel(restaurant) {
    if (!restaurant) return 'Sucursal';
    return `${restaurant.nombre} ${restaurant.sucursal}`;
  }

  function getCurrentPanel() {
    return document.querySelector('.panel.active') || elStepRestaurante;
  }

  function getCartCount() {
    return carrito.reduce((sum, item) => sum + item.cantidad, 0);
  }

  function getCartSubtotal() {
    return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }

  // Envío por sucursal: $35 MXN por cada sucursal con productos
  function getUniqueRestIds() {
    return [...new Set(carrito.map((item) => item.restId))];
  }

  function getShippingCost() {
    const uniqueRests = getUniqueRestIds();
    return uniqueRests.length > 0 ? uniqueRests.length * 35 : 0;
  }

  function getCartTotal() {
    return getCartSubtotal() + getShippingCost();
  }

  function getDishQuantity(idPlato) {
    return carrito.find((item) => item.idPlato === idPlato)?.cantidad || 0;
  }

  // Subtotal e ítems filtrados para una sucursal específica
  function getRestSubtotal(restId) {
    return carrito.filter((i) => i.restId === restId).reduce((s, i) => s + i.precio * i.cantidad, 0);
  }

  function getDishById(restId, dishId) {
    return (MENU[restId] || []).find((dish) => dish.id === dishId) || null;
  }

  function focusPanelHeading(panel) {
    const heading = panel.querySelector('h2');
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }

  function setFormFeedback(message = '') {
    if (!message) {
      elFormFeedback.hidden = true;
      elFormFeedback.textContent = '';
      return;
    }

    elFormFeedback.hidden = false;
    elFormFeedback.textContent = message;
  }

  function updateProgressIndicators(panel) {
    const panelToStepMap = new Map([[elStepRestaurante, '1'], [elStepProductos, '2'], [elStepResumen, '3'], [elStepFormulario, '4'], [elStepConfirmacion, '4']]);
    const stepNum = panelToStepMap.get(panel) || '1';

    document.querySelectorAll('.progress-step').forEach((el) => {
      const step = el.getAttribute('data-step');
      el.classList.toggle('active', step === stepNum);
      if (step === stepNum) {
        el.setAttribute('aria-current', 'step');
      } else {
        el.removeAttribute('aria-current');
      }
    });
  }

  function updateCartAffordances() {
    const count = getCartCount();
    const total = getCartTotal();
    const currentPanel = getCurrentPanel();
    const numRests = getUniqueRestIds().length;

    elCartButtonMeta.textContent = count > 0
      ? `${count} producto${count > 1 ? 's' : ''} · ${formatMXN(total)}`
      : 'Sin productos';

    if (count > 0) {
      elCartBadge.hidden = false;
      elCartBadge.textContent = count;
    } else {
      elCartBadge.hidden = true;
    }

    const restsLabel = numRests > 1 ? ` · ${numRests} sucursales` : '';
    elCartBarLabel.textContent = `${count} producto${count === 1 ? '' : 's'} en tu pedido${restsLabel}`;
    elCartBarTotal.textContent = formatMXN(total);
    elCartBar.hidden = !(count > 0 && currentPanel === elStepProductos);

    elBtnSidebarCart.disabled = count === 0;
    elBtnComprar.disabled = count === 0;
  }

  function showPanel(panel) {
    [elStepRestaurante, elStepProductos, elStepResumen, elStepFormulario, elStepConfirmacion].forEach((section) => {
      section.hidden = section !== panel;
      section.classList.toggle('active', section === panel);
    });

    document.body.dataset.panel = panel.id;
    updateProgressIndicators(panel);
    updateCartAffordances();
    focusPanelHeading(panel);
  }

  function renderSkeletons() {
    elListaRestaurantes.innerHTML = '';

    for (let i = 0; i < 4; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="restaurant-card restaurant-card-skeleton">
          <div class="skeleton" style="height: 210px; border-radius: 28px;"></div>
          <div class="skeleton" style="height: 18px; width: 45%; margin-top: 1rem;"></div>
          <div class="skeleton" style="height: 22px; width: 70%; margin-top: 0.7rem;"></div>
          <div class="skeleton" style="height: 14px; width: 90%; margin-top: 0.7rem;"></div>
        </div>
      `;
      elListaRestaurantes.appendChild(li);
    }
  }

  function renderRestaurantList() {
    elListaRestaurantes.innerHTML = '';

    const query = busquedaRestaurantes.trim().toLowerCase();
    const restaurantesFiltrados = RESTAURANTES.filter((restaurant) => {
      const matchCategoria = filtroCategoria === 'todas' || restaurant.categoria === filtroCategoria;
      const matchBusqueda =
        !query ||
        restaurant.nombre.toLowerCase().includes(query) ||
        restaurant.sucursal.toLowerCase().includes(query) ||
        restaurant.ubicacion.toLowerCase().includes(query) ||
        restaurant.categoria.toLowerCase().includes(query) ||
        restaurant.descripcion.toLowerCase().includes(query);

      return matchCategoria && matchBusqueda;
    });

    if (!restaurantesFiltrados.length) {
      const li = document.createElement('li');
      li.className = 'empty-results';
      li.textContent = 'No encontramos sucursales con esos filtros.';
      elListaRestaurantes.appendChild(li);
      return;
    }

    restaurantesFiltrados.forEach((restaurant) => {
      const li = document.createElement('li');
      const label = getRestaurantLabel(restaurant);

      li.innerHTML = `
        <button type="button" class="restaurant-card" data-rest="${restaurant.id}" aria-label="Abrir menú de ${escapeHtml(label)}">
          <div class="restaurant-visual">
            <img src="${restaurant.img}" alt="Especialidad de ${escapeHtml(label)}" class="restaurant-image" loading="lazy" />
            <div class="restaurant-visual-overlay"></div>
            <span class="restaurant-time-badge">${restaurant.tiempo} min</span>
            <span class="restaurant-logo-badge">
              <img src="${buildLogoUrl(restaurant.domain)}" alt="Logo de ${escapeHtml(restaurant.nombre)}" class="restaurant-logo" loading="lazy" />
            </span>
          </div>
          <div class="restaurant-card-body">
            <div class="restaurant-card-heading">
              <div>
                <p class="restaurant-brand-name">${escapeHtml(restaurant.nombre)}</p>
                <h3 class="restaurant-branch-name">${escapeHtml(restaurant.sucursal)}</h3>
              </div>
              <span class="restaurant-tag">${escapeHtml(restaurant.destacado)}</span>
            </div>
            <p class="restaurant-description">${escapeHtml(restaurant.descripcion)}</p>
            <div class="restaurant-meta">
              <span><span class="material-symbols-outlined">location_on</span> ${escapeHtml(restaurant.ubicacion)}</span>
              <span><span class="material-symbols-outlined">restaurant</span> ${escapeHtml(restaurant.categoria)}</span>
            </div>
          </div>
        </button>
      `;

      elListaRestaurantes.appendChild(li);
    });
  }

  function filtrarRestaurantes({ useDebounce = false } = {}) {
    if (restaurantSearchDebounceId) {
      clearTimeout(restaurantSearchDebounceId);
      restaurantSearchDebounceId = null;
    }

    if (useDebounce) {
      restaurantSearchDebounceId = setTimeout(renderRestaurantList, 140);
      return;
    }

    renderRestaurantList();
  }

  function resetCart() {
    carrito = [];
  }

  function addDishToCart(dishId) {
    if (!restauranteActual) return;

    const dish = getDishById(restauranteActual, dishId);
    if (!dish) return;

    const item = carrito.find((entry) => entry.idPlato === dishId && entry.restId === restauranteActual);
    if (item) {
      item.cantidad += 1;
    } else {
      carrito.push({ idPlato: dish.id, restId: restauranteActual, nombre: dish.nombre, precio: dish.precio, img: dish.img, cantidad: 1 });
    }

    renderAllCartViews();
  }

  function decreaseDishFromCart(dishId) {
    const item = carrito.find((entry) => entry.idPlato === dishId);
    if (!item) return;

    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      carrito = carrito.filter((entry) => entry.idPlato !== dishId);
    }

    renderAllCartViews();
  }

  function renderizarPlatos(query = busquedaPlatos) {
    elListaPlatos.innerHTML = '';

    const todosLosPlatos = MENU[restauranteActual] || [];
    const normalizedQuery = query.trim().toLowerCase();
    const platos = todosLosPlatos.filter((plato) => {
      return !normalizedQuery || plato.nombre.toLowerCase().includes(normalizedQuery) || plato.descripcion.toLowerCase().includes(normalizedQuery);
    });

    if (!platos.length) {
      const li = document.createElement('li');
      li.className = 'empty-results';
      li.textContent = 'No encontramos platos con esa búsqueda.';
      elListaPlatos.appendChild(li);
      return;
    }

    platos.forEach((plato) => {
      const qty = getDishQuantity(plato.id);
      const li = document.createElement('li');
      li.className = 'dish-item';
      li.innerHTML = `
        <img src="${plato.img}" alt="${escapeHtml(plato.nombre)}" class="dish-image" loading="lazy" />
        <div class="dish-content">
          <div>
            <div class="dish-topline">
              <span class="dish-badge">${escapeHtml(plato.badge)}</span>
              ${qty > 0 ? `<span class="dish-selected-note">${qty} en pedido</span>` : ''}
            </div>
            <h3 class="dish-name">${escapeHtml(plato.nombre)}</h3>
            <p class="dish-description">${escapeHtml(plato.descripcion)}</p>
            <span class="dish-allergens">
              <span class="material-symbols-outlined">info</span>
              ${escapeHtml(plato.alergenos)}
            </span>
          </div>
          <div class="dish-footer">
            <div class="dish-price-block">
              <span class="dish-price">${formatMXN(plato.precio)}</span>
              <span class="dish-price-note">Puedes ajustar la cantidad al momento</span>
            </div>
            <div class="dish-actions">
              ${qty > 0
                ? `
                  <div class="qty-control" aria-label="Cantidad de ${escapeHtml(plato.nombre)}">
                    <button type="button" class="qty-btn" data-dish-action="decrease" data-dish-id="${plato.id}" aria-label="Quitar una unidad de ${escapeHtml(plato.nombre)}">
                      <span class="material-symbols-outlined">remove</span>
                    </button>
                    <span class="qty-value">${qty}</span>
                    <button type="button" class="qty-btn" data-dish-action="increase" data-dish-id="${plato.id}" aria-label="Agregar una unidad de ${escapeHtml(plato.nombre)}">
                      <span class="material-symbols-outlined">add</span>
                    </button>
                  </div>
                `
                : `
                  <button type="button" class="btn-add-dish" data-dish-action="increase" data-dish-id="${plato.id}">
                    Agregar al pedido
                  </button>
                `}
            </div>
          </div>
        </div>
      `;

      elListaPlatos.appendChild(li);
    });
  }

  function renderSidebarCart() {
    elSidebarItems.innerHTML = '';

    const subtotal = getCartSubtotal();
    const envio = getShippingCost();
    const total = subtotal + envio;
    const uniqueRestIds = getUniqueRestIds();

    if (!carrito.length) {
      elSidebarRestaurant.textContent = 'Aún no has agregado productos.';
      elSidebarEmpty.hidden = false;
    } else {
      const restNames = uniqueRestIds.map((rid) => {
        const r = getRestaurantById(rid);
        return r ? r.nombre : rid;
      });
      elSidebarRestaurant.textContent = restNames.join(', ');
      elSidebarEmpty.hidden = true;

      // Agrupar por sucursal
      uniqueRestIds.forEach((rid) => {
        const r = getRestaurantById(rid);
        if (uniqueRestIds.length > 1) {
          const header = document.createElement('li');
          header.className = 'sidebar-group-header';
          header.textContent = r ? getRestaurantLabel(r) : rid;
          elSidebarItems.appendChild(header);
        }

        carrito.filter((i) => i.restId === rid).forEach((item) => {
          const li = document.createElement('li');
          li.className = 'sidebar-item';
          li.innerHTML = `
            <div class="sidebar-item-copy">
              <strong>${escapeHtml(item.nombre)}</strong>
              <span>${item.cantidad} x ${formatMXN(item.precio)}</span>
            </div>
            <div class="sidebar-item-actions">
              <button type="button" class="sidebar-icon-btn" data-sidebar-action="decrease" data-dish-id="${item.idPlato}" aria-label="Quitar una unidad de ${escapeHtml(item.nombre)}">
                <span class="material-symbols-outlined">remove</span>
              </button>
              <span class="sidebar-item-qty">${item.cantidad}</span>
              <button type="button" class="sidebar-icon-btn" data-sidebar-action="increase" data-dish-id="${item.idPlato}" aria-label="Agregar una unidad de ${escapeHtml(item.nombre)}">
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          `;
          elSidebarItems.appendChild(li);
        });
      });
    }

    elSidebarSubtotal.textContent = formatMXN(subtotal);
    const envioNote = uniqueRestIds.length > 1 ? ` ($35 x ${uniqueRestIds.length})` : '';
    elSidebarEnvio.textContent = formatMXN(envio) + envioNote;
    elSidebarTotal.textContent = formatMXN(total);
  }

  function renderResumen() {
    elListaResumen.innerHTML = '';

    const subtotal = getCartSubtotal();
    const envio = getShippingCost();
    const total = subtotal + envio;
    const uniqueRestIds = getUniqueRestIds();

    if (!carrito.length) {
      elResumenVacio.hidden = false;
      elResumenRestauranteName.textContent = 'Sucursal';
      elResumenRestauranteTime.textContent = 'Tiempo: -';
    } else {
      elResumenVacio.hidden = true;

      if (uniqueRestIds.length === 1) {
        const r = getRestaurantById(uniqueRestIds[0]);
        elResumenRestauranteName.textContent = r ? getRestaurantLabel(r) : 'Sucursal';
        elResumenRestauranteTime.textContent = r ? `Tiempo: ${r.tiempo} min` : 'Tiempo: -';
      } else {
        const names = uniqueRestIds.map((rid) => {
          const r = getRestaurantById(rid);
          return r ? r.nombre : rid;
        });
        elResumenRestauranteName.textContent = names.join(' + ');
        const maxTime = Math.max(...uniqueRestIds.map((rid) => getRestaurantById(rid)?.tiempo || 0));
        elResumenRestauranteTime.textContent = `Tiempo estimado: ${maxTime} min`;
      }

      // Agrupar por sucursal
      uniqueRestIds.forEach((rid) => {
        const r = getRestaurantById(rid);
        if (uniqueRestIds.length > 1) {
          const groupLi = document.createElement('li');
          groupLi.className = 'resumen-group-header';
          groupLi.innerHTML = `<span class="material-symbols-outlined">storefront</span> ${escapeHtml(r ? getRestaurantLabel(r) : rid)}`;
          elListaResumen.appendChild(groupLi);
        }

        carrito.filter((i) => i.restId === rid).forEach((item) => {
          const li = document.createElement('li');
          li.className = 'resumen-item';
          li.innerHTML = `
            <div class="resumen-item-main">
              <img src="${item.img}" alt="${escapeHtml(item.nombre)}" class="resumen-item-image" loading="lazy" />
              <div class="resumen-item-info">
                <div class="resumen-item-name">${escapeHtml(item.nombre)}</div>
                <div class="resumen-item-qty">${formatMXN(item.precio)} c/u</div>
              </div>
            </div>
            <div class="resumen-item-side">
              <div class="resumen-item-price">${formatMXN(item.precio * item.cantidad)}</div>
              <div class="qty-control qty-control-compact">
                <button type="button" class="qty-btn" data-summary-action="decrease" data-dish-id="${item.idPlato}" aria-label="Quitar una unidad de ${escapeHtml(item.nombre)}">
                  <span class="material-symbols-outlined">remove</span>
                </button>
                <span class="qty-value">${item.cantidad}</span>
                <button type="button" class="qty-btn" data-summary-action="increase" data-dish-id="${item.idPlato}" aria-label="Agregar una unidad de ${escapeHtml(item.nombre)}">
                  <span class="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          `;
          elListaResumen.appendChild(li);
        });
      });
    }

    const envioNote = uniqueRestIds.length > 1 ? ` ($35 x ${uniqueRestIds.length} sucursales)` : '';
    elSubtotal.textContent = formatMXN(subtotal);
    elEnvio.textContent = formatMXN(envio) + envioNote;
    elTotal.textContent = formatMXN(total);
    elTotalFormFinal.textContent = formatMXN(total);

    // Resumen de forma de pago
    if (uniqueRestIds.length === 1) {
      const r = getRestaurantById(uniqueRestIds[0]);
      elFormRestaurante.textContent = r ? getRestaurantLabel(r) : '-';
      elFormTiempo.textContent = r ? `${r.tiempo} min` : '-';
    } else {
      const names = uniqueRestIds.map((rid) => {
        const r = getRestaurantById(rid);
        return r ? r.nombre : rid;
      });
      elFormRestaurante.textContent = names.join(', ');
      const maxTime = Math.max(...uniqueRestIds.map((rid) => getRestaurantById(rid)?.tiempo || 0));
      elFormTiempo.textContent = `${maxTime} min`;
    }
  }

  function renderAllCartViews() {
    if (restauranteActual) {
      renderizarPlatos(busquedaPlatos);
    }
    renderSidebarCart();
    renderResumen();
    updateCartAffordances();
  }

  function abrirMenuRestaurante(restId) {
    const restaurant = getRestaurantById(restId);
    if (!restaurant) return;

    // Multi-sucursal: ya no se necesita vaciar el carrito al cambiar de sucursal
    restauranteActual = restId;
    busquedaPlatos = '';
    elSearchPlatos.value = '';
    elTituloRestaurante.textContent = getRestaurantLabel(restaurant);

    const itemsEnEstaSucursal = carrito.filter((i) => i.restId === restId).reduce((s, i) => s + i.cantidad, 0);
    const multiRest = getUniqueRestIds().filter((rid) => rid !== restId).length > 0;
    let subtitle = `${restaurant.ubicacion} · ${restaurant.tiempo} min`;
    if (multiRest) {
      subtitle += ' · Tienes productos de otras sucursales en el carrito';
    }
    elRestauranteUbicacion.textContent = subtitle;

    renderAllCartViews();
    showPanel(elStepProductos);
  }

  function abrirResumen() {
    if (!carrito.length) {
      window.alert('Agrega productos antes de abrir el carrito.');
      return;
    }

    renderResumen();
    showPanel(elStepResumen);
  }

  function abrirCheckout() {
    if (!carrito.length) {
      window.alert('Agrega productos antes de continuar.');
      return;
    }

    renderResumen();
    setFormFeedback('');
    syncPaymentInputs();
    showPanel(elStepFormulario);
  }

  function syncPaymentInputs() {
    const selectedPayment = document.querySelector('input[name="pago"]:checked')?.value;
    const isCardPayment = selectedPayment === 'tarjeta';

    elCardInputs.classList.toggle('visible', isCardPayment);
    elCardInputs.hidden = !isCardPayment;
    elInputCard.required = isCardPayment;
    elInputExpiry.required = isCardPayment;
    elInputCvv.required = isCardPayment;
  }

  function normalizeCardNumber(value) {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }

  function normalizeExpiry(value) {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  function normalizeCvv(value) {
    return value.replace(/\D/g, '').slice(0, 4);
  }

  function validateCardFields() {
    const cardNumber = elInputCard.value.replace(/\D/g, '');
    const expiry = elInputExpiry.value.trim();
    const cvv = elInputCvv.value.trim();
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3,4}$/;

    if (cardNumber.length < 16) {
      setFormFeedback('Completa un número de tarjeta válido de 16 dígitos.');
      elInputCard.focus();
      return false;
    }

    if (!expiryPattern.test(expiry)) {
      setFormFeedback('Usa el formato MM/YY para el vencimiento.');
      elInputExpiry.focus();
      return false;
    }

    if (!cvvPattern.test(cvv)) {
      setFormFeedback('El CVV debe tener 3 o 4 dígitos.');
      elInputCvv.focus();
      return false;
    }

    return true;
  }

  function reiniciarPedido() {
    resetCart();
    restauranteActual = null;
    busquedaPlatos = '';
    busquedaRestaurantes = '';
    filtroCategoria = 'todas';
    elFormPedido.reset();
    elSearchRestaurant.value = '';
    elSearchPlatos.value = '';
    setFormFeedback('');
    syncPaymentInputs();

    elCategoryFilter.forEach((chip, index) => {
      chip.classList.toggle('active', index === 0);
    });

    renderAllCartViews();
    filtrarRestaurantes();
    showPanel(elStepRestaurante);
  }

  elListaRestaurantes.addEventListener('click', (event) => {
    const button = event.target.closest('[data-rest]');
    if (!button) return;
    abrirMenuRestaurante(button.getAttribute('data-rest'));
  });

  elListaPlatos.addEventListener('click', (event) => {
    const control = event.target.closest('[data-dish-action]');
    if (!control) return;

    const dishId = control.getAttribute('data-dish-id');
    const action = control.getAttribute('data-dish-action');

    if (action === 'increase') {
      addDishToCart(dishId);
    } else if (action === 'decrease') {
      decreaseDishFromCart(dishId);
    }
  });

  elSidebarItems.addEventListener('click', (event) => {
    const control = event.target.closest('[data-sidebar-action]');
    if (!control) return;

    const dishId = control.getAttribute('data-dish-id');
    const action = control.getAttribute('data-sidebar-action');

    if (action === 'increase') {
      addDishToCart(dishId);
    } else if (action === 'decrease') {
      decreaseDishFromCart(dishId);
    }
  });

  elListaResumen.addEventListener('click', (event) => {
    const control = event.target.closest('[data-summary-action]');
    if (!control) return;

    const dishId = control.getAttribute('data-dish-id');
    const action = control.getAttribute('data-summary-action');

    if (action === 'increase') {
      addDishToCart(dishId);
    } else if (action === 'decrease') {
      decreaseDishFromCart(dishId);
    }
  });

  elSearchRestaurant.addEventListener('input', (event) => {
    busquedaRestaurantes = event.target.value;
    filtrarRestaurantes({ useDebounce: true });
  });

  elSearchPlatos.addEventListener('input', (event) => {
    busquedaPlatos = event.target.value;
    renderizarPlatos(busquedaPlatos);
  });

  elCategoryFilter.forEach((chip) => {
    chip.addEventListener('click', () => {
      elCategoryFilter.forEach((candidate) => candidate.classList.remove('active'));
      chip.classList.add('active');
      filtroCategoria = chip.getAttribute('data-category');
      filtrarRestaurantes();
    });
  });

  elBtnVolverRest.addEventListener('click', () => {
    showPanel(elStepRestaurante);
  });

  elCartButton.addEventListener('click', abrirResumen);
  elBtnSidebarCart.addEventListener('click', abrirResumen);
  elBtnCartBar.addEventListener('click', abrirResumen);
  elBtnSeguirComprando.addEventListener('click', () => {
    // Volver al último menú visto, o al primero con ítems, o a la lista de sucursales
    const targetId = restauranteActual || getUniqueRestIds()[0] || null;
    if (targetId) {
      abrirMenuRestaurante(targetId);
    } else {
      showPanel(elStepRestaurante);
    }
  });
  elBtnComprar.addEventListener('click', abrirCheckout);
  elBtnVolverResumen.addEventListener('click', () => {
    renderResumen();
    showPanel(elStepResumen);
  });

  elInputCard.addEventListener('input', () => {
    elInputCard.value = normalizeCardNumber(elInputCard.value);
  });

  elInputExpiry.addEventListener('input', () => {
    elInputExpiry.value = normalizeExpiry(elInputExpiry.value);
  });

  elInputCvv.addEventListener('input', () => {
    elInputCvv.value = normalizeCvv(elInputCvv.value);
  });

  elPaymentOptions.forEach((option) => {
    option.addEventListener('change', () => {
      setFormFeedback('');
      syncPaymentInputs();
    });
  });

  elFormPedido.addEventListener('submit', (event) => {
    event.preventDefault();
    setFormFeedback('');

    if (!carrito.length) {
      setFormFeedback('Tu carrito está vacío. Agrega productos antes de confirmar.');
      showPanel(elStepResumen);
      return;
    }

    if (!elFormPedido.reportValidity()) {
      setFormFeedback('Revisa los campos obligatorios antes de confirmar.');
      return;
    }

    const formData = new FormData(elFormPedido);
    const calle = formData.get('calle').trim();
    const email = formData.get('email').trim();
    const telefono = formData.get('telefono').trim();
    const metodoPago = formData.get('pago');

    if (!calle || !email || !telefono) {
      setFormFeedback('Completa todos los datos requeridos.');
      return;
    }

    if (!email.includes('@')) {
      setFormFeedback('Ingresa un email válido.');
      return;
    }

    if (telefono.replace(/\D/g, '').length < 10) {
      setFormFeedback('Ingresa un teléfono válido (10 dígitos).');
      return;
    }

    if (metodoPago === 'tarjeta' && !validateCardFields()) {
      return;
    }

    const uniqueRestIds = getUniqueRestIds();
    const total = getCartTotal();

    let confirmMsg, confirmResto, confirmTiempo;
    if (uniqueRestIds.length === 1) {
      const r = getRestaurantById(uniqueRestIds[0]);
      confirmMsg = `Tu pedido en ${r ? getRestaurantLabel(r) : 'la sucursal'} ya está en preparación.`;
      confirmResto = r ? getRestaurantLabel(r) : '-';
      confirmTiempo = r ? `${r.tiempo} min` : '-';
    } else {
      const names = uniqueRestIds.map((rid) => {
        const r = getRestaurantById(rid);
        return r ? r.nombre : rid;
      });
      const maxTime = Math.max(...uniqueRestIds.map((rid) => getRestaurantById(rid)?.tiempo || 0));
      confirmMsg = `Tu pedido de ${names.join(', ')} ya está en preparación.`;
      confirmResto = names.join(', ');
      confirmTiempo = `${maxTime} min`;
    }

    elConfirmMessage.textContent = confirmMsg;
    elConfirmResto.textContent = confirmResto;
    elConfirmTotal.textContent = formatMXN(total);
    elConfirmTiempo.textContent = confirmTiempo;

    console.log('Pedido confirmado:', {
      sucursales: uniqueRestIds.map((rid) => getRestaurantById(rid)?.nombre),
      items: carrito,
      total,
      metodoPago,
      calle,
      email,
      telefono
    });

    resetCart();
    restauranteActual = null;
    elFormPedido.reset();
    syncPaymentInputs();
    renderAllCartViews();
    showPanel(elStepConfirmacion);
  });

  elBtnNuevo.addEventListener('click', reiniciarPedido);

  renderSkeletons();
  restaurantSearchDebounceId = setTimeout(() => {
    restaurantSearchDebounceId = null;
    filtrarRestaurantes();
  }, 180);
  renderAllCartViews();
  syncPaymentInputs();
  updateCartAffordances();
})();
