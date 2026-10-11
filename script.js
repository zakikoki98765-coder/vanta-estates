const properties = [
  {
    id: 'solstice-villa',
    name: 'Solstice Villa',
    location: 'Bel Air, California',
    locationCategory: 'California',
    type: 'Contemporary Villa',
    price: 8200000,
    bedrooms: 5,
    bathrooms: 4,
    area: '4,820 sq ft',
    description: 'A sculptural hillside residence designed for long views, layered textures, and deeply considered indoor-outdoor living.',
    collection: 'Modern Icons',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Double-height living room', 'Infinity-edge pool', 'Stone, timber, and bronze detailing', 'Glass-walled entertaining wing'],
    amenities: ['Chef’s kitchen', 'Private gym', 'Guest suite', 'Covered terrace', 'Fire pit lounge']
  },
  {
    id: 'harbor-house',
    name: 'Harbor House',
    location: 'Big Sur, Pacific Coast',
    locationCategory: 'Pacific Coast',
    type: 'Coastal Estate',
    price: 13200000,
    bedrooms: 6,
    bathrooms: 5,
    area: '5,640 sq ft',
    description: 'A warm, open coastal retreat with panoramic ocean views, natural stone finishes, and a serene indoor-outdoor rhythm.',
    collection: 'Coastal Living',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Ocean-facing terraces', 'Sunken lounge with cedar joinery', 'Natural stone exterior', 'Glass wall framing the coastline'],
    amenities: ['Infinity pool', 'Wine cellar', 'Outdoor dining pavilion', 'Spa suite', 'Seaside garden']
  },
  {
    id: 'copper-arc',
    name: 'Copper Arc',
    location: 'Napa Valley, California',
    locationCategory: 'California',
    type: 'Architectural Residence',
    price: 9800000,
    bedrooms: 4,
    bathrooms: 3,
    area: '3,920 sq ft',
    description: 'A warm contemporary sanctuary shaped around vineyard views, layered privacy, and a calm palette of bronze and limestone.',
    collection: 'Architectural Originals',
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Curved bronze framing', 'Private courtyard', 'Layered limestone textures', 'Sculpted vineyard outlook'],
    amenities: ['Wellness studio', 'Dedicated office', 'Outdoor lounge', 'Limestone pool deck', 'Guest casita']
  },
  {
    id: 'sable-penthouse',
    name: 'Sable Penthouse',
    location: 'Miami Beach, Florida',
    locationCategory: 'Island',
    type: 'Modern Penthouse',
    price: 11800000,
    bedrooms: 4,
    bathrooms: 4,
    area: '3,860 sq ft',
    description: 'A rare skyline residence combining polished stone finishes, elevated terraces, and unforgettable city-to-water views.',
    collection: 'Modern Icons',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Skyline terrace', 'Wraparound glazing', 'Marble-clad entertaining spaces', 'Private elevator lobby'],
    amenities: ['Sky lounge', 'Wrapped balcony', 'Smart home package', 'Private sauna', 'Indoor-outdoor bar']
  },
  {
    id: 'garden-veil',
    name: 'Garden Veil',
    location: 'Hampton Hills, Hillside',
    locationCategory: 'Hillside',
    type: 'Garden Residence',
    price: 6900000,
    bedrooms: 5,
    bathrooms: 4,
    area: '4,180 sq ft',
    description: 'A generously proportioned family residence softened by landscaped courtyards and full-height glazing.',
    collection: 'Private Estates',
    images: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Shaded courtyard entry', 'Layered planting plan', 'Lounge courtyard with fire feature', 'Double-sided family living'],
    amenities: ['Garden studio', 'Music room', 'Poolside cabana', 'Outdoor kitchen', 'Guest suite']
  },
  {
    id: 'aurelia-mansion',
    name: 'Aurelia Mansion',
    location: 'Palm Springs, Desert',
    locationCategory: 'Desert',
    type: 'Signature Mansion',
    price: 21400000,
    bedrooms: 7,
    bathrooms: 6,
    area: '7,240 sq ft',
    description: 'A dramatic desert retreat with generous shaded terraces, reflective pools, and an architectural sense of ease.',
    collection: 'Private Estates',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Desert-facing glass pavilions', 'Reflective pool and shaded lounge', 'Stone, stucco, and bronze palette', 'Grand arrival sequence'],
    amenities: ['Sport court', 'Spa pavilion', 'Private cinema', 'Guest house', 'Horizon terrace']
  },
  {
    id: 'mira-crest',
    name: 'Mira Crest',
    location: 'Montecito, California',
    locationCategory: 'California',
    type: 'Architectural Residence',
    price: 15800000,
    bedrooms: 5,
    bathrooms: 5,
    area: '5,100 sq ft',
    description: 'A serene hillside home arranged for natural light, quiet gathering, and generous vistas over the valley below.',
    collection: 'Architectural Originals',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Sculpted hillside arrival', 'Timber-lined living spaces', 'Oculus skylight and framed views', 'Private wellness pavilion'],
    amenities: ['Media room', 'Wellness suite', 'Outdoor fireplace', 'Guest suite', 'Lawn court']
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
];

const favoritesKey = 'vanta-estates-favorites';
const state = {
  filtered: [...properties],
  favorites: JSON.parse(localStorage.getItem(favoritesKey) || '[]'),
  activePropertyId: null,
  activeGalleryIndex: 0,
  activeLightboxIndex: 0
};

const propertyGrid = document.getElementById('property-grid');
const searchForm = document.getElementById('property-search');
const resetFiltersButton = document.getElementById('reset-filters');
const searchFeedback = document.getElementById('search-feedback');
const modal = document.getElementById('property-modal');
const modalMainImage = document.getElementById('modal-main-image');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalPrice = document.getElementById('modal-price');
const modalBeds = document.getElementById('modal-beds');
const modalBaths = document.getElementById('modal-baths');
const modalArea = document.getElementById('modal-area');
const modalDescription = document.getElementById('modal-description');
const modalFeatures = document.getElementById('modal-features');
const modalAmenities = document.getElementById('modal-amenities');
const galleryLightbox = document.getElementById('gallery-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const consultationForm = document.getElementById('consultation-form');

const formatPrice = (value) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  notation: 'compact'
}).format(value).replace('US$', '$');

function saveFavorites() {
  localStorage.setItem(favoritesKey, JSON.stringify(state.favorites));
}

function renderPropertyCards(items) {
  if (!items.length) {
    propertyGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; background: rgba(255,255,255,0.5); border: 1px solid rgba(23,25,24,0.08); padding: 3rem 2rem; text-align: center;">
        <p class="label">No residences match</p>
        <h3 style="font-size: clamp(2rem, 4vw, 3.6rem); margin-bottom: 0.75rem;">Try widening your filters.</h3>
        <p style="color: rgba(23,25,24,0.72);">No results were found for the selected criteria. Reset the filters to explore the full portfolio.</p>
      </div>
    `;
    searchFeedback.textContent = 'No properties matched your current search.';
    searchFeedback.style.color = '#8a2e2e';
    return;
  }

  propertyGrid.innerHTML = items.map((property, index) => {
    const isFavorite = state.favorites.includes(property.id);
    const orientation = index % 3 === 0 ? 'is-portrait' : 'is-landscape';
    return `
      <article class="property-card ${orientation}" data-id="${property.id}">
        <div class="property-image">
          <button class="favorite-toggle ${isFavorite ? 'is-active' : ''}" type="button" data-favorite-id="${property.id}" aria-label="${isFavorite ? 'Remove from favorites' : 'Save to favorites'}">
            ${isFavorite ? '♥' : '♡'}
          </button>
          <img src="${property.images[0]}" alt="${property.name} exterior view" loading="lazy" />
        </div>
        <div class="property-content">
          <div class="card-header">
            <div>
              <h3 class="property-title">${property.name}</h3>
              <p class="property-location">${property.location}</p>
            </div>
            <span class="property-price">${formatPrice(property.price)}</span>
          </div>
          <span class="property-type">${property.type}</span>
          <div class="property-meta">
            <span>🛏 ${property.bedrooms}</span>
            <span>🛁 ${property.bathrooms}</span>
            <span>📐 ${property.area}</span>
          </div>
          <p class="property-description">${property.description}</p>
          <div class="property-actions">
            <button type="button" class="card-button primary" data-view-id="${property.id}">View Residence</button>
            <button type="button" class="card-button" data-favorite-id="${property.id}">${isFavorite ? 'Saved' : 'Save'}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  searchFeedback.textContent = `${items.length} residence${items.length > 1 ? 's' : ''} match your current selection.`;
  searchFeedback.style.color = 'rgba(23,25,24,0.72)';
}

function syncFiltersFromCollection(collectionValue) {
  const settingMap = {
    'Modern Icons': { location: 'all', type: 'all', minPrice: '0', maxPrice: '999999999', bedrooms: '0' },
    'Coastal Living': { location: 'Pacific Coast', type: 'Coastal Estate', minPrice: '4000000', maxPrice: '999999999', bedrooms: '4' },
    'Private Estates': { location: 'all', type: 'all', minPrice: '5000000', maxPrice: '999999999', bedrooms: '4' },
    'Architectural Originals': { location: 'all', type: 'Architectural Residence', minPrice: '5000000', maxPrice: '999999999', bedrooms: '4' }
  };

  const settings = settingMap[collectionValue];
  if (!settings) return;

  document.getElementById('location-filter').value = settings.location;
  document.getElementById('type-filter').value = settings.type;
  document.getElementById('min-price').value = settings.minPrice;
  document.getElementById('max-price').value = settings.maxPrice;
  document.getElementById('bedrooms-filter').value = settings.bedrooms;
}

function applyFilters(event) {
  if (event) event.preventDefault();

  const formData = new FormData(searchForm);
  const location = formData.get('location');
  const type = formData.get('type');
  const minPrice = Number(formData.get('minPrice') || 0);
  const maxPrice = Number(formData.get('maxPrice') || Number.MAX_SAFE_INTEGER);
  const bedrooms = Number(formData.get('bedrooms') || 0);

  state.filtered = properties.filter((property) => {
    const matchesLocation = location === 'all' || property.locationCategory === location;
    const matchesType = type === 'all' || property.type === type;
    const matchesMinPrice = property.price >= minPrice;
    const matchesMaxPrice = property.price <= maxPrice;
    const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;
    return matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice && matchesBedrooms;
  });

  renderPropertyCards(state.filtered);
}

function resetFilters() {
  searchForm.reset();
  state.filtered = [...properties];
  renderPropertyCards(state.filtered);
}

function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(id);
  }
  saveFavorites();
  renderPropertyCards(state.filtered);
}

function openPropertyModal(id) {
  const property = properties.find((item) => item.id === id);
  if (!property) return;

  state.activePropertyId = id;
  state.activeGalleryIndex = 0;
  modalMainImage.src = property.images[0];
  modalMainImage.alt = `${property.name} interior view`;
  modalTitle.textContent = property.name;
  modalLocation.textContent = property.location;
  modalPrice.textContent = formatPrice(property.price);
  modalBeds.textContent = `${property.bedrooms} Bedrooms`;
  modalBaths.textContent = `${property.bathrooms} Bathrooms`;
  modalArea.textContent = property.area;
  modalDescription.textContent = property.description;

  modalFeatures.innerHTML = property.highlights.map((item) => `<li>${item}</li>`).join('');
  modalAmenities.innerHTML = property.amenities.map((item) => `<li>${item}</li>`).join('');

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const closeButton = document.querySelector('.modal-close');
    if (closeButton) closeButton.focus();
  }, 0);
}

function closePropertyModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateModalImage(direction) {
  const property = properties.find((item) => item.id === state.activePropertyId);
  if (!property) return;

  state.activeGalleryIndex = (state.activeGalleryIndex + direction + property.images.length) % property.images.length;
  modalMainImage.src = property.images[state.activeGalleryIndex];
  modalMainImage.alt = `${property.name} image ${state.activeGalleryIndex + 1}`;
}

function openGalleryLightbox(index) {
  state.activeLightboxIndex = index;
  lightboxImage.src = galleryImages[index];
  lightboxImage.alt = `Gallery image ${index + 1}`;
  galleryLightbox.classList.remove('hidden');
  galleryLightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGalleryLightbox() {
  galleryLightbox.classList.add('hidden');
  galleryLightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightbox(direction) {
  state.activeLightboxIndex = (state.activeLightboxIndex + direction + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[state.activeLightboxIndex];
  lightboxImage.alt = `Gallery image ${state.activeLightboxIndex + 1}`;
}

function validateConsultationForm(form) {
  const fields = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    preference: form.preference.value,
    budget: form.budget.value
  };

  const errors = {};

  if (!fields.name) errors.name = 'Please enter your name.';
  if (!fields.email) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please use a valid email address.';
  }
  if (!fields.preference) errors.preference = 'Please choose a property preference.';
  if (!fields.budget) errors.budget = 'Please select a budget range.';

  Object.entries(errors).forEach(([key, message]) => {
    const errorNode = document.querySelector(`[data-error-for="${key}"]`);
    if (errorNode) errorNode.textContent = message;
  });

  Object.keys(fields).forEach((key) => {
    const selector = `[data-error-for="${key}"]`;
    const node = document.querySelector(selector);
    if (node && !errors[key]) node.textContent = '';
  });

  return Object.keys(errors).length === 0;
}

function handleConsultationSubmit(event) {
  event.preventDefault();
  const statusNode = document.getElementById('form-status');
  statusNode.classList.remove('has-error');

  if (!validateConsultationForm(event.currentTarget)) {
    statusNode.textContent = 'Please correct the highlighted fields and try again.';
    statusNode.classList.add('has-error');
    return;
  }

  statusNode.textContent = 'This is a portfolio demonstration only; no inquiry is sent or stored.';
  event.currentTarget.reset();
}

function initRevealEffects() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  reveals.forEach((el) => observer.observe(el));
}

function initHeaderState() {
  const header = document.querySelector('.site-header');
  const setHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = mobileMenu.querySelectorAll('a');

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('hidden', 'hidden');
  };

  const openMenu = () => {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    mobileMenu.removeAttribute('hidden');
  };

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('menu-open');
    if (isOpen) closeMenu(); else openMenu();
  });

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      closeMenu();
    }
  });
}

function initEventDelegation() {
  propertyGrid.addEventListener('click', (event) => {
    const favoriteButton = event.target.closest('[data-favorite-id]');
    const viewButton = event.target.closest('[data-view-id]');

    if (favoriteButton) {
      const id = favoriteButton.getAttribute('data-favorite-id');
      toggleFavorite(id);
      return;
    }

    if (viewButton) {
      openPropertyModal(viewButton.getAttribute('data-view-id'));
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-modal]')) {
      closePropertyModal();
    }
    if (event.target.closest('[data-close-lightbox]')) {
      closeGalleryLightbox();
    }
  });

  document.querySelector('.modal-close').addEventListener('click', closePropertyModal);
  document.querySelector('.lightbox-close').addEventListener('click', closeGalleryLightbox);

  document.querySelector('.gallery-nav.prev').addEventListener('click', () => updateModalImage(-1));
  document.querySelector('.gallery-nav.next').addEventListener('click', () => updateModalImage(1));
  document.querySelector('.lightbox-prev').addEventListener('click', () => updateLightbox(-1));
  document.querySelector('.lightbox-next').addEventListener('click', () => updateLightbox(1));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!modal.classList.contains('hidden')) closePropertyModal();
      if (!galleryLightbox.classList.contains('hidden')) closeGalleryLightbox();
    }
    if (event.key === 'ArrowRight' && !modal.classList.contains('hidden')) updateModalImage(1);
    if (event.key === 'ArrowLeft' && !modal.classList.contains('hidden')) updateModalImage(-1);
    if (event.key === 'ArrowRight' && !galleryLightbox.classList.contains('hidden')) updateLightbox(1);
    if (event.key === 'ArrowLeft' && !galleryLightbox.classList.contains('hidden')) updateLightbox(-1);
  });

  document.querySelectorAll('.collection-link').forEach((button) => {
    button.addEventListener('click', () => {
      syncFiltersFromCollection(button.dataset.collection);
      applyFilters();
      document.getElementById('residences').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.gallery-item').forEach((button) => {
    button.addEventListener('click', () => openGalleryLightbox(Number(button.dataset.galleryIndex)));
  });
}

searchForm.addEventListener('submit', applyFilters);
resetFiltersButton.addEventListener('click', resetFilters);
consultationForm.addEventListener('submit', handleConsultationSubmit);

renderPropertyCards(state.filtered);
initRevealEffects();
initHeaderState();
initMobileMenu();
initEventDelegation();
