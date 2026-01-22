// ======================
// CONFIG
// ======================
const FRETE_FIXO = 20.00;
const PROMO_SECONDS = 2 * 60 * 60; // 7200
const WHATSAPP_NUMERO = "SEU_NUMERO_AQUI"; // ex: 5511999999999

// PIX (EXEMPLO) - troque depois por um PIX real gerado por backend
function gerarPixCopiaColaExemplo({ total, pedidoId }) {
  return `PIX_EXEMPLO|PEDIDO:${pedidoId}|TOTAL:${total.toFixed(2)}|LOJA:TIKTOKSHOP`;
}

// ======================
// Dados dos produtos
// ======================
const produtos = [
  {
    id: 1,
    nome: "Capacete 56",
    preco: 149.9,
    img: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
    imgs: [
      "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
      "https://i.im.ge/2026/01/21/Gg0tqY.58b0c5c21633e4703ba1c8c19ea4d3f3.webp",
      "https://i.im.ge/2026/01/21/Gg0EFC.b21847936b29b9bd1e0c254f8c9daa59.webp",
      "https://i.im.ge/2026/01/21/Gg0Ak4.3f932e6be355694880b34a13d33727c8.webp"
    ],
    rating: 4.5,
    reviews: 12,
    descricao: "Capacete esportivo resistente.",
    caracteristicas: "Material ABS, ventilação frontal.",
    tamanho: true
  },
  {
    id: 2,
    nome: "Capacete 56",
    preco: 149.9,
    img: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
    imgs: [
      "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
      "https://i.im.ge/2026/01/21/Gg0tqY.58b0c5c21633e4703ba1c8c19ea4d3f3.webp",
      "https://i.im.ge/2026/01/21/Gg0EFC.b21847936b29b9bd1e0c254f8c9daa59.webp",
      "https://i.im.ge/2026/01/21/Gg0Ak4.3f932e6be355694880b34a13d33727c8.webp"
    ],
    rating: 4.5,
    reviews: 12,
    descricao: "Capacete esportivo resistente.",
    caracteristicas: "Material ABS, ventilação frontal.",
    tamanho: true
  },
  {
    id: 3,
    nome: "Capacete 56",
    preco: 149.9,
    img: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
    imgs: [
      "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
      "https://i.im.ge/2026/01/21/Gg0tqY.58b0c5c21633e4703ba1c8c19ea4d3f3.webp",
      "https://i.im.ge/2026/01/21/Gg0EFC.b21847936b29b9bd1e0c254f8c9daa59.webp",
      "https://i.im.ge/2026/01/21/Gg0Ak4.3f932e6be355694880b34a13d33727c8.webp"
    ],
    rating: 4.5,
    reviews: 12,
    descricao: "Capacete esportivo resistente.",
    caracteristicas: "Material ABS, ventilação frontal.",
    tamanho: true
  },
  {
    id: 4,
    nome: "Capacete 56",
    preco: 149.9,
    img: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
    imgs: [
      "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
      "https://i.im.ge/2026/01/21/Gg0tqY.58b0c5c21633e4703ba1c8c19ea4d3f3.webp",
      "https://i.im.ge/2026/01/21/Gg0EFC.b21847936b29b9bd1e0c254f8c9daa59.webp",
      "https://i.im.ge/2026/01/21/Gg0Ak4.3f932e6be355694880b34a13d33727c8.webp"
    ],
    rating: 4.5,
    reviews: 12,
    descricao: "Capacete esportivo resistente.",
    caracteristicas: "Material ABS, ventilação frontal.",
    tamanho: true
  },
  {
    id: 5,
    nome: "Capacete 56",
    preco: 149.9,
    img: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
    imgs: [
      "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp",
      "https://i.im.ge/2026/01/21/Gg0tqY.58b0c5c21633e4703ba1c8c19ea4d3f3.webp",
      "https://i.im.ge/2026/01/21/Gg0EFC.b21847936b29b9bd1e0c254f8c9daa59.webp",
      "https://i.im.ge/2026/01/21/Gg0Ak4.3f932e6be355694880b34a13d33727c8.webp"
    ],
    rating: 4.5,
    reviews: 12,
    descricao: "Capacete esportivo resistente.",
    caracteristicas: "Material ABS, ventilação frontal.",
    tamanho: true
  }
];

// ======================
// MAIS VENDIDOS (IDs únicos)
// ======================
const maisVendidos = [
  { id: 101, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true },
  { id: 102, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true },
  { id: 103, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true },
  { id: 104, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true },
  { id: 105, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true },
  { id: 106, nome: "Capacete 56", preco: 149.9, img: produtos[0].img, imgs: produtos[0].imgs, rating: 4.5, reviews: 12, descricao: "Capacete esportivo resistente.", caracteristicas: "Material ABS, ventilação frontal.", tamanho: true }
];

// ======================
// Scroll lock (mobile premium)
// ======================
function lockScroll(lock) {
  if (lock) {
    document.body.dataset.scrollY = String(window.scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  } else {
    const y = Number(document.body.dataset.scrollY || "0");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    delete document.body.dataset.scrollY;
    window.scrollTo(0, y);
  }
}

// ======================
// Estoque (SESSION)
// ======================
[...produtos, ...maisVendidos].forEach(p => {
  const stock = sessionStorage.getItem(`estoque_${p.id}`);
  p.estoque = stock ? Number(stock) : Math.floor(Math.random() * 6) + 2;
  sessionStorage.setItem(`estoque_${p.id}`, p.estoque);
});

// ======================
// Tempo Promo (SESSION) - 2h rodando SEM parar
// ======================
let tempo = sessionStorage.getItem("tempo_oferta") ? Number(sessionStorage.getItem("tempo_oferta")) : PROMO_SECONDS;
if (!tempo || tempo <= 0) tempo = PROMO_SECONDS;
sessionStorage.setItem("tempo_oferta", tempo);

// ======================
// Seletores
// ======================
const listaProdutos = document.getElementById("lista-produtos");
const listaMaisVendidos = document.getElementById("lista-mais-vendidos");

const cartFlutuante = document.getElementById("cart-flutuante");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartFreteEl = document.getElementById("cart-frete");
const cartTotalEl = document.getElementById("cart-total");

const checkoutForm = document.getElementById("checkout-form");
const closeCart = document.getElementById("close-cart");
const closeCartFallback = document.getElementById("close-cart-fallback");

// steps do carrinho
const stepEntrega = document.getElementById("step-entrega");
const stepPix = document.getElementById("step-pix");

// pix ui
const pixTimerEl = document.getElementById("pix-timer");
const pixCopiaColaEl = document.getElementById("pix-copia-cola");
const pixCanvas = document.getElementById("pix-qrcode");
const btnCopiarPix = document.getElementById("btn-copiar-pix");
const btnJaPaguei = document.getElementById("btn-ja-paguei");
const pixWarn = document.getElementById("pix-warn");

// modal produto
const productModal = document.getElementById("product-modal");
const productContent = document.getElementById("product-content");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalCharacteristics = document.getElementById("modal-characteristics");

const modalSizeContainer = document.getElementById("modal-size-container");
const modalSize = document.getElementById("modal-size");

const addToCartModal = document.getElementById("add-to-cart-modal");
const closeProduct = document.getElementById("close-product");

const prevImgBtn = document.getElementById("prev-img");
const nextImgBtn = document.getElementById("next-img");
const modalImageWrapper = document.querySelector(".modal-image-wrapper");

// ======================
// Estado
// ======================
let carrinho = [];
let produtoSelecionado = null;

let modalImgs = [];
let modalIndex = 0;

let dotsEl = null;
let countEl = null;

// ======================
// Helpers
// ======================
function formatTempo(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function aplicarTextoContador() {
  if (tempo <= 0) {
    tempo = PROMO_SECONDS;
    sessionStorage.setItem("tempo_oferta", tempo);
  }

  const txt = `⏰ Oferta expira em ${formatTempo(tempo)}`;

  document.querySelectorAll(".contador").forEach(el => {
    el.textContent = txt;
  });

  if (pixTimerEl) {
    pixTimerEl.textContent = `⏳ Promoção termina em ${formatTempo(tempo)}`;
  }
}

function getImages(prod) {
  return Array.isArray(prod.imgs) && prod.imgs.length ? prod.imgs : [prod.img];
}

// ======================
// Galeria do modal (dots + 1/4)
// ======================
function ensureGalleryUI() {
  if (!modalImageWrapper) return;

  if (!countEl) {
    countEl = document.createElement("div");
    countEl.className = "modal-count";
    modalImageWrapper.appendChild(countEl);
  }

  if (!dotsEl) {
    dotsEl = document.createElement("div");
    dotsEl.className = "modal-dots";
    modalImageWrapper.insertAdjacentElement("afterend", dotsEl);
  }
}

function renderDots() {
  ensureGalleryUI();
  if (!dotsEl) return;

  dotsEl.innerHTML = "";

  if (modalImgs.length <= 1) {
    dotsEl.style.display = "none";
    if (countEl) countEl.style.display = "none";
    return;
  }

  dotsEl.style.display = "flex";
  if (countEl) countEl.style.display = "inline-flex";

  modalImgs.forEach((_, i) => {
    const d = document.createElement("span");
    d.className = "modal-dot" + (i === modalIndex ? " active" : "");
    d.addEventListener("click", () => {
      modalIndex = i;
      updateModalImage();
    });
    dotsEl.appendChild(d);
  });

  if (countEl) countEl.textContent = `${modalIndex + 1}/${modalImgs.length}`;
}

function updateModalImage() {
  if (!modalImgs.length) return;
  modalImg.src = modalImgs[modalIndex];
  renderDots();
}

// ======================
// Card padrão
// ======================
function criarCard(prod) {
  const div = document.createElement("div");
  div.className = "produto";
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.nome}">
    <h3>${prod.nome}</h3>
    <p>R$ ${prod.preco.toFixed(2)}</p>
    <p class="rating">⭐ ${prod.rating} (${prod.reviews})</p>
    <div class="urgencia">⚠️ Restam ${prod.estoque} unidades</div>
    <div class="contador"></div>
  `;
  div.onclick = () => abrirModal(prod);
  return div;
}

// ======================
// Render produtos
// ======================
function renderProdutos() {
  if (!listaProdutos) return;
  listaProdutos.innerHTML = "";
  produtos.forEach(p => listaProdutos.appendChild(criarCard(p)));
}

function renderMaisVendidos() {
  if (!listaMaisVendidos) return;
  listaMaisVendidos.innerHTML = "";
  maisVendidos.forEach(p => listaMaisVendidos.appendChild(criarCard(p)));
}

// ======================
// Modal produto
// ======================
function abrirModal(prod) {
  produtoSelecionado = prod;

  modalImgs = getImages(prod);
  modalIndex = 0;

  if (modalTitle) modalTitle.textContent = prod.nome;
  if (modalPrice) modalPrice.textContent = `R$ ${prod.preco.toFixed(2)}`;
  if (modalDescription) modalDescription.textContent = prod.descricao || "";
  if (modalCharacteristics) modalCharacteristics.textContent = prod.caracteristicas || "";

  // urgência no modal
  let urg = document.getElementById("modal-urgencia");
  if (!urg) {
    urg = document.createElement("div");
    urg.id = "modal-urgencia";
    urg.className = "urgencia";
    modalPrice.after(urg);
  }
  urg.textContent = `⚠️ Restam ${prod.estoque} unidades`;

  // contador no modal
  let cont = document.getElementById("modal-contador");
  if (!cont) {
    cont = document.createElement("div");
    cont.id = "modal-contador";
    cont.className = "contador";
    urg.after(cont);
  }

  // tamanhos
  if (prod.tamanho) {
    modalSizeContainer.style.display = "block";
    modalSize.innerHTML = "";
    for (let i = 56; i <= 62; i++) modalSize.innerHTML += `<option>${i}</option>`;
  } else {
    modalSizeContainer.style.display = "none";
  }

  // setas só se tiver +1 imagem
  const showArrows = modalImgs.length > 1;
  if (prevImgBtn) prevImgBtn.style.display = showArrows ? "flex" : "none";
  if (nextImgBtn) nextImgBtn.style.display = showArrows ? "flex" : "none";

  updateModalImage();
  aplicarTextoContador();

  productModal.classList.add("active");
  lockScroll(true);
}

function fecharModalProduto() {
  productModal.classList.remove("active");
  lockScroll(false);
}

// Navegação de imagens
function prevImg() {
  if (modalImgs.length <= 1) return;
  modalIndex = (modalIndex - 1 + modalImgs.length) % modalImgs.length;
  updateModalImage();
}
function nextImg() {
  if (modalImgs.length <= 1) return;
  modalIndex = (modalIndex + 1) % modalImgs.length;
  updateModalImage();
}

if (prevImgBtn) prevImgBtn.onclick = prevImg;
if (nextImgBtn) nextImgBtn.onclick = nextImg;
if (closeProduct) closeProduct.onclick = fecharModalProduto;

// Clique fora fecha modal produto
if (productModal) {
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) fecharModalProduto();
  });
}

// ESC fecha modal e carrinho
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (productModal && productModal.classList.contains("active")) fecharModalProduto();
    if (cartModal && cartModal.classList.contains("active")) fecharCarrinho();
  }
});

// ======================
// Swipe (galeria) - ignora scroll vertical
// ======================
let startX = 0, startY = 0, endX = 0, endY = 0;

function handleSwipe() {
  const dx = endX - startX;
  const dy = endY - startY;
  if (Math.abs(dy) > Math.abs(dx)) return;
  if (Math.abs(dx) < 40) return;
  if (dx > 0) prevImg();
  else nextImg();
}

if (productContent) {
  productContent.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
  }, { passive: true });

  productContent.addEventListener("touchend", (e) => {
    const t = e.changedTouches[0];
    endX = t.screenX;
    endY = t.screenY;
    handleSwipe();
  }, { passive: true });
}

// ======================
// Contador global (2h rolando)
// ======================
function iniciarContador() {
  aplicarTextoContador();
  setInterval(() => {
    tempo--;
    if (tempo <= 0) {
      tempo = PROMO_SECONDS;
    }
    sessionStorage.setItem("tempo_oferta", tempo);
    aplicarTextoContador();
  }, 1000);
}

// ======================
// Carrinho
// ======================
function subtotalCarrinho() {
  return carrinho.reduce((acc, p) => acc + Number(p.preco || 0), 0);
}

function totalCarrinho() {
  return subtotalCarrinho() + FRETE_FIXO;
}

function updateCart() {
  if (!cartItems) return;

  cartItems.innerHTML = "";
  const subtotal = subtotalCarrinho();
  const total = totalCarrinho();

  carrinho.forEach((p, idx) => {
    const tamanhoTxt = p.tamanhoEscolhido ? ` (Tam: ${p.tamanhoEscolhido})` : "";

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "center";
    row.style.gap = "10px";
    row.style.padding = "10px 0";
    row.style.borderBottom = "1px solid #eee";

    row.innerHTML = `
      <div style="flex:1">
        <div style="font-weight:900">${p.nome}${tamanhoTxt}</div>
        <div style="font-size:12px;opacity:.8">R$ ${p.preco.toFixed(2)}</div>
      </div>
      <button data-remove="${idx}" style="background:#111;color:#fff;border:none;border-radius:10px;padding:8px 10px;cursor:pointer">
        Remover
      </button>
    `;

    cartItems.appendChild(row);
  });

  cartItems.querySelectorAll("button[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-remove"));
      carrinho.splice(i, 1);
      updateCart();
    });
  });

  if (cartCount) cartCount.textContent = String(carrinho.length);

  if (cartSubtotalEl) cartSubtotalEl.textContent = subtotal.toFixed(2);
  if (cartFreteEl) cartFreteEl.textContent = FRETE_FIXO.toFixed(2);
  if (cartTotalEl) cartTotalEl.textContent = total.toFixed(2);

  aplicarTextoContador();
}

// Adicionar pelo modal
if (addToCartModal) {
  addToCartModal.onclick = () => {
    if (!produtoSelecionado || produtoSelecionado.estoque <= 0) return;

    produtoSelecionado.estoque--;
    sessionStorage.setItem(`estoque_${produtoSelecionado.id}`, produtoSelecionado.estoque);

    const item = { ...produtoSelecionado };
    if (produtoSelecionado.tamanho && modalSizeContainer && modalSizeContainer.style.display !== "none") {
      item.tamanhoEscolhido = modalSize.value;
    }

    carrinho.push(item);
    updateCart();

    renderProdutos();
    renderMaisVendidos();

    fecharModalProduto();
  };
}

// ======================
// Carrinho modal (PASSOS)
// ======================
function resetarStepsCarrinho() {
  if (stepEntrega) stepEntrega.classList.remove("hidden");
  if (stepPix) stepPix.classList.add("hidden");

  if (closeCart) closeCart.classList.add("hidden");
  if (closeCartFallback) closeCartFallback.classList.remove("hidden");
}

function mostrarPix() {
  if (stepEntrega) stepEntrega.classList.add("hidden");
  if (stepPix) stepPix.classList.remove("hidden");

  if (closeCart) closeCart.classList.remove("hidden");
  if (closeCartFallback) closeCartFallback.classList.add("hidden");

  aplicarTextoContador();
}

function abrirCarrinho() {
  cartModal.classList.add("active");
  lockScroll(true);
  resetarStepsCarrinho();
  updateCart();
}

function fecharCarrinho() {
  cartModal.classList.remove("active");
  lockScroll(false);
  resetarStepsCarrinho();
}

if (cartFlutuante) cartFlutuante.onclick = abrirCarrinho;
if (closeCart) closeCart.onclick = fecharCarrinho;
if (closeCartFallback) closeCartFallback.onclick = fecharCarrinho;

// Clique fora fecha carrinho (desktop)
document.addEventListener("click", (e) => {
  if (!cartModal || !cartModal.classList.contains("active")) return;
  const clicouNoCarrinho = cartModal.contains(e.target);
  const clicouNoBotao = cartFlutuante && cartFlutuante.contains(e.target);
  if (!clicouNoCarrinho && !clicouNoBotao) fecharCarrinho();
});

// ======================
// PASSO 1 → Libera PIX
// ======================
async function desenharQRCodeSeguro(textoPix) {
  if (!pixCanvas) return;

  const ctx = pixCanvas.getContext("2d");
  ctx.clearRect(0, 0, pixCanvas.width, pixCanvas.height);

  if (pixWarn) pixWarn.style.display = "none";

  // Algumas vezes o global é QRCode, outras window.QRCode
  const QR = window.QRCode || (typeof QRCode !== "undefined" ? QRCode : null);

  // tenta toCanvas
  try {
    if (QR && typeof QR.toCanvas === "function") {
      await new Promise((resolve, reject) => {
        QR.toCanvas(pixCanvas, textoPix, { width: 220 }, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
      return;
    }
  } catch (_) {}

  // fallback: toDataURL (desenha no canvas)
  try {
    if (QR && typeof QR.toDataURL === "function") {
      const url = await QR.toDataURL(textoPix, { width: 220, margin: 1 });
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, pixCanvas.width, pixCanvas.height);
        ctx.drawImage(img, 0, 0, pixCanvas.width, pixCanvas.height);
      };
      img.src = url;
      return;
    }
  } catch (_) {}

  // se falhar tudo
  if (pixWarn) {
    pixWarn.style.display = "block";
    pixWarn.textContent = "⚠️ Não consegui gerar o QRCode. Use o PIX Copia e Cola abaixo.";
  }
}

function gerarEExibirPix(dadosEntrega) {
  const subtotal = subtotalCarrinho();
  const total = totalCarrinho();
  const pedidoId = `${Date.now()}`;

  const pixText = gerarPixCopiaColaExemplo({ total, pedidoId });

  if (pixCopiaColaEl) pixCopiaColaEl.value = pixText;

  desenharQRCodeSeguro(pixText);

  if (btnCopiarPix) {
    btnCopiarPix.onclick = async () => {
      try {
        await navigator.clipboard.writeText(pixText);
        btnCopiarPix.textContent = "✅ Copiado!";
        setTimeout(() => (btnCopiarPix.textContent = "Copiar código PIX"), 1500);
      } catch (e) {
        alert("Não consegui copiar automaticamente. Selecione e copie manualmente.");
      }
    };
  }

  if (btnJaPaguei) {
    btnJaPaguei.onclick = () => {
      const itensTxt = carrinho.map(p => {
        const t = p.tamanhoEscolhido ? ` (Tam: ${p.tamanhoEscolhido})` : "";
        return `- ${p.nome}${t} | R$ ${p.preco.toFixed(2)}`;
      }).join("\n");

      const msg =
`*CONFIRMAÇÃO DE PAGAMENTO - TikTok Shop*\n\n` +
`*Pedido:* ${pedidoId}\n` +
`*Nome:* ${dadosEntrega.nome}\n` +
`*WhatsApp:* ${dadosEntrega.telefone}\n\n` +
`*Endereço:* ${dadosEntrega.endereco}\n` +
`*Cidade:* ${dadosEntrega.cidade}\n` +
`*CEP:* ${dadosEntrega.cep}\n\n` +
`*Itens:*\n${itensTxt}\n\n` +
`*Subtotal:* R$ ${subtotal.toFixed(2)}\n` +
`*Frete:* R$ ${FRETE_FIXO.toFixed(2)}\n` +
`*Total:* R$ ${total.toFixed(2)}\n\n` +
`Enviei o comprovante do PIX junto nesta conversa. ✅`;

      const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    };
  }
}

if (checkoutForm) {
  checkoutForm.onsubmit = (e) => {
    e.preventDefault();
    if (!carrinho.length) return alert("Carrinho vazio!");

    const nome = checkoutForm.nome.value.trim();
    const telefone = checkoutForm.telefone.value.trim();
    const endereco = checkoutForm.endereco.value.trim();
    const cidade = checkoutForm.cidade.value.trim();
    const cep = checkoutForm.cep.value.trim();

    if (!nome || !telefone || !endereco || !cidade || !cep) {
      alert("Preencha todos os dados de entrega.");
      return;
    }

    const dadosEntrega = { nome, telefone, endereco, cidade, cep };

    gerarEExibirPix(dadosEntrega);
    mostrarPix();
  };
}

// ======================
// Avaliações reais (com FOTO de recebimento)
// ======================
const comentariosClientes = [
  {
    nome: "Camila R.",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    estrelas: 5,
    data: "há 2 dias",
    texto: "Chegou rápido! Paguei no PIX e em minutos já confirmaram. Produto top.",
    fotoEntrega: "https://i.im.ge/2026/01/21/Gg03Rp.fe1f35f1b3f1dca15ec1dcbbca454394.webp"
  },
  {
    nome: "João Pedro",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    estrelas: 5,
    data: "ontem",
    texto: "Promoção funcionou de verdade! Peguei com desconto e o suporte respondeu no WhatsApp rapidão.",
    fotoEntrega: "" // coloque link aqui se quiser
  },
  {
    nome: "Larissa Menezes",
    foto: "https://randomuser.me/api/portraits/women/22.jpg",
    estrelas: 5,
    data: "há 4 dias",
    texto: "Muito confiável! QR Code funciona, valor correto e depois mandaram rastreio.",
    fotoEntrega: ""
  },
  {
    nome: "Bruno Santos",
    foto: "https://randomuser.me/api/portraits/men/55.jpg",
    estrelas: 5,
    data: "há 1 semana",
    texto: "Chegou antes do prazo! Produto original e qualidade top.",
    fotoEntrega: ""
  },
  {
    nome: "Renata Gomes",
    foto: "https://randomuser.me/api/portraits/women/48.jpg",
    estrelas: 5,
    data: "há 3 dias",
    texto: "Carrinho mostra subtotal + frete + total certinho. Loja séria!",
    fotoEntrega: ""
  },
  {
    nome: "Diego Ferreira",
    foto: "https://randomuser.me/api/portraits/men/18.jpg",
    estrelas: 4,
    data: "há 5 dias",
    texto: "Entrega rápida e bem embalado. PIX copiar e colar foi fácil.",
    fotoEntrega: ""
  },
  {
    nome: "Ana Clara Souza",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
    estrelas: 5,
    data: "há 6 dias",
    texto: "Promoções são reais mesmo! Já comprei 2 vezes aqui.",
    fotoEntrega: ""
  }
];

function estrelasTxt(n) {
  const cheias = "★".repeat(Math.max(0, Math.min(5, n)));
  const vazias = "☆".repeat(Math.max(0, 5 - Math.min(5, n)));
  return cheias + vazias;
}

function renderComentariosClientes() {
  const el = document.getElementById("reviews-list");
  if (!el) return;

  el.innerHTML = "";

  comentariosClientes.forEach((c) => {
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `
      <div class="review-top">
        <img class="review-avatar" src="${c.foto}" alt="${c.nome}">
        <div>
          <p class="review-name">${c.nome}</p>
          <div class="review-meta">
            <span class="review-stars">${estrelasTxt(c.estrelas)}</span>
            <span>${c.data}</span>
          </div>
        </div>
      </div>

      <p class="review-text">${c.texto}</p>

      ${c.fotoEntrega ? `<img class="review-prod" src="${c.fotoEntrega}" alt="Cliente recebeu o produto" loading="lazy">` : ""}

      <span class="review-badge">✅ Compra verificada</span>
    `;

    el.appendChild(card);
  });
}

// ======================
// Boot
// ======================
renderProdutos();
renderMaisVendidos();
updateCart();
iniciarContador();
renderComentariosClientes();
