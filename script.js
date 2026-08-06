const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("backToTop");

const heroImage = document.getElementById("heroImage");
const heroCurrent = document.getElementById("heroCurrent");
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");

const productTitle = document.getElementById("productTitle");
const productImage = document.getElementById("productImage");
const productDescription = document.getElementById("productDescription");
const photoCounter = document.getElementById("photoCounter");
const gallery = document.getElementById("gallery");
const sizesImage = document.getElementById("sizesImage");
const purchaseTitle = document.getElementById("purchaseTitle");
const purchaseImage = document.getElementById("purchaseImage");

const currentYear = document.getElementById("currentYear");
const sizeButtons = [...document.querySelectorAll("#sizeSelector button")];
const selectedSizeText = document.getElementById("selectedSize");
const whatsappButton = document.getElementById("whatsappButton");
const modelCards = [...document.querySelectorAll(".model-card")];

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const whatsappNumber = "5492983660459";

const models = {
  "louis-vuitton": {
    name: "Louis Vuitton Trainer",
    folder: "Louis Vuitton",
    photos: 24,
    eyebrow: "COLECCIÓN EXCLUSIVA",
    heroTitle: "Louis Vuitton<br><span>Trainer</span>",
    heroDescription:
      "Diseño premium, presencia única y detalles que convierten cada paso en una declaración de estilo.",
    productTitle: "Lujo urbano<br>sin límites",
    productDescription:
      "Una silueta inspirada en el básquet de los años noventa, reinterpretada con una estética contemporánea y materiales de primera calidad.",
    heroPhotos: [1, 8, 16, 24],
    productPhoto: 6,
    sizesPhoto: 19,
    purchasePhoto: 24,
    purchaseTitle: "Louis Vuitton<br>Trainer"
  },
  "air-max-95": {
    name: "Nike Air Max 95",
    folder: "Air Max 95",
    photos: 22,
    eyebrow: "ÍCONO URBANO",
    heroTitle: "Nike Air Max<br><span>95</span>",
    heroDescription:
      "Una silueta legendaria, con líneas dinámicas y una presencia inconfundible.",
    productTitle: "Diseño que marcó<br>una generación",
    productDescription:
      "Las Air Max 95 combinan capas dinámicas, amortiguación visible y una estética deportiva ideal para el uso diario y los looks urbanos.",
    heroPhotos: [1, 7, 15, 22],
    productPhoto: 6,
    sizesPhoto: 18,
    purchasePhoto: 22,
    purchaseTitle: "Nike Air Max<br>95"
  },
  "air-max-tl-2-5": {
    name: "Nike Air Max TL 2.5",
    folder: "Air Max TL 2.5",
    photos: 9,

    eyebrow: "NUEVA COLECCIÓN",

    heroTitle: "Nike Air Max<br><span>TL 2.5</span>",

    heroDescription:
      "Diseño deportivo con una silueta moderna, máxima comodidad y un estilo urbano que destaca en cualquier outfit.",

    productTitle: "Comodidad<br>todos los días",

    productDescription:
      "Las Air Max TL 2.5 ofrecen una excelente amortiguación, materiales resistentes y un diseño pensado para acompañarte durante todo el día.",

    heroPhotos: [1, 4, 7, 9],

    productPhoto: 3,

    sizesPhoto: 6,

    purchasePhoto: 9,

    purchaseTitle: "Nike Air Max<br>TL 2.5"
  },
  "jordan-1-low": {
    name: "Air Jordan 1 Low",
    folder: "Jordan 1 Low",
    photos: 12,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan 1<br><span>Low</span>",

    heroDescription:
      "Un clásico reinventado. Diseño icónico, comodidad y estilo para cualquier ocasión.",

    productTitle: "El clásico que<br>nunca pasa",

    productDescription:
      "Las Air Jordan 1 Low combinan materiales premium, excelente comodidad y uno de los diseños más famosos de la historia.",

    heroPhotos: [1, 4, 8, 12],

    productPhoto: 3,

    sizesPhoto: 6,

    purchasePhoto: 12,

    purchaseTitle: "Air Jordan 1<br>Low"
  },
  "air-force": {
    name: "Nike Air Force",
    folder: "Air Force",
    photos: 18,

    eyebrow: "COLECCIÓN NIKE",

    heroTitle: "Nike Air<br><span>Force</span>",

    heroDescription:
      "Un clásico que nunca pasa de moda. Las Air Force combinan comodidad, estilo y una silueta icónica.",

    productTitle: "Un clásico<br>atemporal",

    productDescription:
      "Las Nike Air Force son una referencia mundial en calzado urbano. Su diseño limpio y su comodidad las convierten en una de las zapatillas más elegidas.",

    heroPhotos: [1, 6, 12, 18],

    productPhoto: 5,

    sizesPhoto: 10,

    purchasePhoto: 18,

    purchaseTitle: "Nike Air<br>Force"
  },

  "air-jordan-mid": {
    name: "Air Jordan Mid",
    folder: "Air Jordan Mid",
    photos: 30,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>Mid</span>",

    heroDescription:
      "La silueta clásica de Jordan en su versión Mid. Un equilibrio perfecto entre estilo, historia y comodidad.",

    productTitle: "El legado<br>continúa",

    productDescription:
      "Las Air Jordan Mid mantienen el ADN de la línea Jordan con materiales premium, una gran variedad de colores y un diseño que nunca pasa de moda.",

    heroPhotos: [1, 8, 18, 30],

    productPhoto: 5,

    sizesPhoto: 15,

    purchasePhoto: 30,

    purchaseTitle: "Air Jordan<br>Mid"
  },
  "air-jordan-3": {
    name: "Air Jordan 3",
    folder: "Air Jordan 3",
    photos: 10,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>3</span>",

    heroDescription:
      "Un ícono absoluto de la historia Jordan. Diseño clásico, materiales premium y una silueta que marcó una época.",

    productTitle: "El nacimiento<br>de una leyenda",

    productDescription:
      "Las Air Jordan 3 fueron el primer modelo diseñado por Tinker Hatfield. Su comodidad, calidad y estilo las convierten en una de las zapatillas más buscadas del mundo.",

    heroPhotos: [1, 4, 7, 10],

    productPhoto: 3,

    sizesPhoto: 6,

    purchasePhoto: 10,

    purchaseTitle: "Air Jordan<br>3"
  },
  "off-white": {
    name: "Off-White",
    folder: "Off-White",
    photos: 10,

    eyebrow: "COLECCIÓN LUXURY",

    heroTitle: "Off-White<br><span>Edition</span>",

    heroDescription:
      "Diseños exclusivos con una estética urbana y detalles únicos que marcaron una generación.",

    productTitle: "Moda urbana<br>de lujo",

    productDescription:
      "Las Off-White combinan materiales premium con un diseño moderno e inconfundible, convirtiéndose en una de las marcas más buscadas del mundo.",

    heroPhotos: [1, 4, 7, 10],

    productPhoto: 3,

    sizesPhoto: 6,

    purchasePhoto: 10,

    purchaseTitle: "Off-White<br>Edition"
  },
  "air-max-dn": {
    name: "Nike Air Max DN",
    folder: "Air Max Dn",
    photos: 5,

    eyebrow: "COLECCIÓN NIKE",

    heroTitle: "Nike Air Max<br><span>DN</span>",

    heroDescription:
      "La nueva generación de Air Max. Tecnología innovadora, comodidad superior y un diseño futurista.",

    productTitle: "La evolución<br>del Air Max",

    productDescription:
      "Las Nike Air Max DN incorporan una nueva tecnología de amortiguación Dynamic Air, brindando una experiencia de uso más cómoda y un diseño totalmente renovado.",

    heroPhotos: [1, 2, 4, 5],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 5,

    purchaseTitle: "Nike Air Max<br>DN"
  },
  "amiri": {
    name: "Amiri",
    folder: "Amiri",
    photos: 4,

    eyebrow: "COLECCIÓN LUXURY",

    heroTitle: "Amiri<br><span>Luxury</span>",

    heroDescription:
      "Diseño exclusivo, materiales premium y una estética moderna que combina lujo con estilo urbano.",

    productTitle: "Lujo<br>contemporáneo",

    productDescription:
      "Las Amiri destacan por su fabricación de alta calidad, comodidad y un diseño sofisticado pensado para quienes buscan diferenciarse.",

    heroPhotos: [1, 2, 3, 4],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 4,

    purchaseTitle: "Amiri<br>Luxury"
  },
  "air-jordan-11": {
    name: "Air Jordan 11",
    folder: "Air Jordan 11",
    photos: 3,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>11</span>",

    heroDescription:
      "Uno de los modelos más icónicos de Michael Jordan, reconocido por su diseño elegante y materiales premium.",

    productTitle: "Elegancia<br>legendaria",

    productDescription:
      "Las Air Jordan 11 combinan cuero premium, detalles exclusivos y una comodidad excepcional, convirtiéndose en una de las zapatillas más deseadas de la historia.",

    heroPhotos: [1, 2, 3, 1],

    productPhoto: 2,

    sizesPhoto: 2,

    purchasePhoto: 3,

    purchaseTitle: "Air Jordan<br>11"
  },
  "zoom-vomero-5": {
    name: "Nike Zoom Vomero 5",
    folder: "Zoom Vomero 5",
    photos: 4,

    eyebrow: "COLECCIÓN NIKE",

    heroTitle: "Nike Zoom<br><span>Vomero 5</span>",

    heroDescription:
      "Comodidad, tecnología y un diseño moderno que combina rendimiento con estilo urbano.",

    productTitle: "Confort<br>superior",

    productDescription:
      "Las Nike Zoom Vomero 5 ofrecen una excelente amortiguación, materiales premium y un diseño pensado para el uso diario y el máximo confort.",

    heroPhotos: [1, 2, 3, 4],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 4,

    purchaseTitle: "Nike Zoom<br>Vomero 5"
  },
  "calvin-klein": {
    name: "Calvin Klein",
    folder: "Calvin Klein",
    photos: 4,

    eyebrow: "COLECCIÓN FASHION",

    heroTitle: "Calvin<br><span>Klein</span>",

    heroDescription:
      "Minimalismo, elegancia y un diseño moderno que combina perfectamente con cualquier estilo.",

    productTitle: "Elegancia<br>minimalista",

    productDescription:
      "Las zapatillas Calvin Klein ofrecen un diseño limpio y sofisticado, ideales para quienes buscan comodidad y un look premium para todos los días.",

    heroPhotos: [1, 2, 3, 4],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 4,

    purchaseTitle: "Calvin<br>Klein"
  },
  "dior": {
    name: "Dior",
    folder: "Dior",
    photos: 5,

    eyebrow: "COLECCIÓN LUXURY",

    heroTitle: "Dior<br><span>Luxury</span>",

    heroDescription:
      "Elegancia francesa, materiales premium y un diseño exclusivo pensado para quienes buscan lo mejor.",

    productTitle: "Lujo<br>sin límites",

    productDescription:
      "Las zapatillas Dior representan la combinación perfecta entre moda de alta costura y estilo urbano, ofreciendo comodidad y una presencia única.",

    heroPhotos: [1, 2, 4, 5],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 5,

    purchaseTitle: "Dior<br>Luxury"
  },
  "jordan-13": {
    name: "Air Jordan 13",
    folder: "Jordan 13",
    photos: 8,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>13</span>",

    heroDescription:
      "Un clásico inspirado en la velocidad y la elegancia. Diseño icónico y máxima comodidad para el uso diario.",

    productTitle: "Historia<br>Jordan",

    productDescription:
      "Las Air Jordan 13 destacan por su diseño inconfundible, excelente amortiguación y materiales premium, convirtiéndose en uno de los modelos más representativos de la línea Jordan.",

    heroPhotos: [1, 3, 6, 8],

    productPhoto: 3,

    sizesPhoto: 5,

    purchasePhoto: 8,

    purchaseTitle: "Air Jordan<br>13"
  },
  "jordan-4": {
    name: "Air Jordan 4",
    folder: "Jordan 4",
    photos: 9,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>4</span>",

    heroDescription:
      "Uno de los modelos más icónicos de Jordan. Diseño clásico, excelente comodidad y un estilo que nunca pasa de moda.",

    productTitle: "Un clásico<br>atemporal",

    productDescription:
      "Las Air Jordan 4 combinan historia, rendimiento y moda urbana. Un modelo imprescindible para cualquier colección de sneakers.",

    heroPhotos: [1, 3, 6, 9],

    productPhoto: 3,

    sizesPhoto: 6,

    purchasePhoto: 9,

    purchaseTitle: "Air Jordan<br>4"
  },
  "nike-air-vapormax": {
    name: "Nike Air VaporMax",
    folder: "Nike Air VaporMax",
    photos: 5,

    eyebrow: "COLECCIÓN NIKE",

    heroTitle: "Nike Air<br><span>VaporMax</span>",

    heroDescription:
      "Tecnología Air visible en toda la suela para ofrecer una sensación de ligereza y amortiguación única.",

    productTitle: "Innovación<br>en cada paso",

    productDescription:
      "Las Nike Air VaporMax combinan un diseño moderno con una amortiguación revolucionaria, brindando comodidad y estilo tanto para el uso diario como para outfits urbanos.",

    heroPhotos: [1, 2, 4, 5],

    productPhoto: 2,

    sizesPhoto: 3,

    purchasePhoto: 5,

    purchaseTitle: "Nike Air<br>VaporMax"
  },
  "jordan-11-low": {
    name: "Air Jordan 11 Low",
    folder: "Jordan 11",
    photos: 7,

    eyebrow: "COLECCIÓN JORDAN",

    heroTitle: "Air Jordan<br><span>11 Low</span>",

    heroDescription:
      "La versión Low de uno de los modelos más icónicos de Jordan, con un diseño elegante y un rendimiento excepcional.",

    productTitle: "Elegancia<br>deportiva",

    productDescription:
      "Las Air Jordan 11 Low mantienen la esencia del modelo original con un perfil más bajo, materiales premium y una comodidad ideal para el uso diario.",

    heroPhotos: [1, 3, 5, 7],

    productPhoto: 3,

    sizesPhoto: 5,

    purchasePhoto: 7,

    purchaseTitle: "Air Jordan<br>11 Low"
  },

};

let currentModelKey = "louis-vuitton";
let currentModel = models[currentModelKey];
let currentHeroIndex = 0;
let heroInterval = null;
let currentLightboxIndex = 0;
let galleryImages = [];
let selectedSize = "";

function imagePath(number) {
  return `img/${currentModel.folder}/Modelo-${number}.jpg`;
}

function handleScroll() {
  const scrolled = window.scrollY > 40;
  header?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("visible", window.scrollY > 600);
}

function closeMenu() {
  menuButton?.classList.remove("active");
  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("open") ?? false;
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("no-scroll", isOpen);
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", handleScroll);
handleScroll();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

function galleryItemClass(number) {
  const classes = ["gallery-item", "reveal", "visible"];
  if ([1, 9, 17].includes(number)) classes.push("gallery-item-large");
  if ([6, 14, 22].includes(number)) classes.push("gallery-item-wide");
  return classes.join(" ");
}

function buildGallery() {
  if (!gallery) return;

  gallery.innerHTML = "";
  galleryImages = [];

  for (let number = 1; number <= currentModel.photos; number += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = galleryItemClass(number);
    button.dataset.index = String(number - 1);

    const src = imagePath(number);
    button.innerHTML = `
      <img src="${src}" alt="${currentModel.name} vista ${number}" loading="lazy">
      <span>Vista ${String(number).padStart(2, "0")}</span>
    `;

    button.addEventListener("click", () => openLightbox(number - 1));
    gallery.appendChild(button);

    galleryImages.push({
      src,
      alt: `${currentModel.name} vista ${number}`,
      caption: `Vista ${String(number).padStart(2, "0")}`
    });
  }
}

function startHeroSlider() {
  clearInterval(heroInterval);
  currentHeroIndex = 0;

  if (heroImage) {
    heroImage.src = imagePath(currentModel.heroPhotos[0]);
    heroImage.alt = currentModel.name;
  }
  if (heroCurrent) heroCurrent.textContent = "01";

  heroInterval = setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % currentModel.heroPhotos.length;
    heroImage?.classList.add("changing");

    setTimeout(() => {
      if (heroImage) {
        heroImage.src = imagePath(currentModel.heroPhotos[currentHeroIndex]);
        heroImage.alt = currentModel.name;
        heroImage.classList.remove("changing");
      }
      if (heroCurrent) {
        heroCurrent.textContent = String(currentHeroIndex + 1).padStart(2, "0");
      }
    }, 450);
  }, 4500);
}

function resetSize() {
  selectedSize = "";
  sizeButtons.forEach((button) => button.classList.remove("active"));
  if (selectedSizeText) {
    selectedSizeText.textContent = "Todavía no seleccionaste un talle.";
  }
}

function loadModel(modelKey, scrollToProduct = true) {
  if (!models[modelKey]) return;

  currentModelKey = modelKey;
  currentModel = models[modelKey];

  modelCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.model === modelKey);
  });

  if (heroEyebrow) heroEyebrow.textContent = currentModel.eyebrow;
  if (heroTitle) heroTitle.innerHTML = currentModel.heroTitle;
  if (heroDescription) heroDescription.textContent = currentModel.heroDescription;

  if (productTitle) productTitle.innerHTML = currentModel.productTitle;
  if (productDescription) productDescription.textContent = currentModel.productDescription;
  if (productImage) {
    productImage.src = imagePath(currentModel.productPhoto);
    productImage.alt = `Detalle de ${currentModel.name}`;
  }

  if (photoCounter) {
    photoCounter.dataset.target = String(currentModel.photos);
    photoCounter.textContent = String(currentModel.photos);
  }

  if (sizesImage) {
    sizesImage.src = imagePath(currentModel.sizesPhoto);
    sizesImage.alt = `${currentModel.name} de perfil`;
  }

  if (purchaseTitle) purchaseTitle.innerHTML = currentModel.purchaseTitle;
  if (purchaseImage) {
    purchaseImage.src = imagePath(currentModel.purchasePhoto);
    purchaseImage.alt = `${currentModel.name} presentación final`;
  }

  buildGallery();
  startHeroSlider();
  resetSize();
  document.title = `Luxe Sneakers | ${currentModel.name}`;

  if (scrollToProduct) {
    document.getElementById("producto")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

modelCards.forEach((card) => {
  card.addEventListener("click", () => loadModel(card.dataset.model));
});

function showLightboxImage(index) {
  if (!galleryImages.length) return;
  currentLightboxIndex = (index + galleryImages.length) % galleryImages.length;
  const imageData = galleryImages[currentLightboxIndex];

  if (lightboxImage) {
    lightboxImage.src = imageData.src;
    lightboxImage.alt = imageData.alt;
  }
  if (lightboxCaption) {
    lightboxCaption.textContent = `${imageData.caption} · ${currentLightboxIndex + 1} de ${galleryImages.length}`;
  }
}

function openLightbox(index) {
  showLightboxImage(index);
  lightbox?.classList.add("open");
  lightbox?.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox?.classList.remove("open");
  lightbox?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => showLightboxImage(currentLightboxIndex - 1));
lightboxNext?.addEventListener("click", () => showLightboxImage(currentLightboxIndex + 1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showLightboxImage(currentLightboxIndex - 1);
  if (event.key === "ArrowRight") showLightboxImage(currentLightboxIndex + 1);
});

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedSize = button.dataset.size ?? "";
    if (selectedSizeText) {
      selectedSizeText.textContent = `Talle seleccionado: ${selectedSize}`;
    }
  });
});

whatsappButton?.addEventListener("click", (event) => {
  event.preventDefault();
  const sizeText = selectedSize ? ` en talle ${selectedSize}` : "";
  const message = `Hola, quería consultar por ${currentModel.name}${sizeText}. ¿Me pasan precio y disponibilidad?`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

if (currentYear) currentYear.textContent = String(new Date().getFullYear());
loadModel("louis-vuitton", false);
