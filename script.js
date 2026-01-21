// ======================
// Dados dos produtos
// ======================
const produtos = [
  {id:1,nome:"Capacete 56",preco:149.9,img:"https://via.placeholder.com/150",rating:4.5,reviews:12,descricao:"Capacete esportivo resistente.",caracteristicas:"Material ABS, ventilação frontal.",tamanho:true},
  {id:2,nome:"Capacete 58",preco:159.9,img:"https://via.placeholder.com/150",rating:4.7,reviews:15,descricao:"Capacete confortável e seguro.",caracteristicas:"ABS, forro removível.",tamanho:true},
  {id:3,nome:"Capacete 60",preco:169.9,img:"https://via.placeholder.com/150",rating:4.6,reviews:10,descricao:"Design moderno.",caracteristicas:"Ventilação extra.",tamanho:true},
  {id:4,nome:"Mochila Escolar",preco:79.9,img:"https://via.placeholder.com/150",rating:4.8,reviews:20,descricao:"Resistente.",caracteristicas:"Impermeável.",tamanho:false},
  {id:5,nome:"Kit Maquiagem",preco:79.9,img:"https://via.placeholder.com/150",rating:5.0,reviews:20,descricao:"Kit completo.",caracteristicas:"Itens essenciais.",tamanho:false}
];

// ======================
// MAIS VENDIDOS (NOVO)
// ======================
const maisVendidos = [
  {id:101,nome:"Smartwatch Pro",preco:199.9,img:"https://via.placeholder.com/150",rating:4.9,reviews:120,descricao:"Smartwatch completo.",caracteristicas:"Monitor cardíaco.",tamanho:false},
  {id:102,nome:"Fone Bluetooth",preco:99.9,img:"https://via.placeholder.com/150",rating:4.8,reviews:300,descricao:"Som potente.",caracteristicas:"Bateria longa.",tamanho:false},
  {id:103,nome:"Caixa JBL Mini",preco:129.9,img:"https://via.placeholder.com/150",rating:4.7,reviews:210,descricao:"Som premium.",caracteristicas:"À prova dágua.",tamanho:false},
  {id:103,nome:"Smartwatch Pro",preco:199.9,img:"https://via.placeholder.com/150",rating:4.9,reviews:120,descricao:"Smartwatch completo.",caracteristicas:"Monitor cardíaco.",tamanho:false},
  {id:102,nome:"Fone Bluetooth",preco:99.9,img:"https://via.placeholder.com/150",rating:4.8,reviews:300,descricao:"Som potente.",caracteristicas:"Bateria longa.",tamanho:false},
  {id:103,nome:"Caixa JBL Mini",preco:129.9,img:"https://via.placeholder.com/150",rating:4.7,reviews:210,descricao:"Som premium.",caracteristicas:"À prova dágua.",tamanho:false}
];

// ======================
// Estoque + contador (SESSION)
// ======================
[...produtos, ...maisVendidos].forEach(p=>{
  const stock = sessionStorage.getItem(`estoque_${p.id}`);
  p.estoque = stock ? Number(stock) : Math.floor(Math.random()*6)+2;
  sessionStorage.setItem(`estoque_${p.id}`, p.estoque);
});

let tempo = sessionStorage.getItem("tempo_oferta")
  ? Number(sessionStorage.getItem("tempo_oferta"))
  : 900;

// ======================
// Seletores
// ======================
const listaProdutos = document.getElementById("lista-produtos");
const listaMaisVendidos = document.getElementById("lista-mais-vendidos");

const cartFlutuante = document.getElementById("cart-flutuante");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutForm = document.getElementById("checkout-form");
const closeCart = document.getElementById("close-cart");

const productModal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalCharacteristics = document.getElementById("modal-characteristics");
const modalSizeContainer = document.getElementById("modal-size-container");
const modalSize = document.getElementById("modal-size");
const addToCartModal = document.getElementById("add-to-cart-modal");
const closeProduct = document.getElementById("close-product");

let carrinho = [];
let produtoSelecionado = null;

// ======================
// Card padrão
// ======================
function criarCard(prod){
  const div = document.createElement("div");
  div.className = "produto";
  div.innerHTML = `
    <img src="${prod.img}">
    <h3>${prod.nome}</h3>
    <p>R$ ${prod.preco.toFixed(2)}</p>
    <p class="rating">⭐ ${prod.rating} (${prod.reviews})</p>
    <div class="urgencia">⚠️ Restam ${prod.estoque} unidades</div>
    <div class="contador"></div>
  `;
  div.onclick = ()=>abrirModal(prod);
  return div;
}

// ======================
// Render produtos
// ======================
function renderProdutos(){
  listaProdutos.innerHTML="";
  produtos.forEach(p=>listaProdutos.appendChild(criarCard(p)));
}

// ======================
// Render mais vendidos
// ======================
function renderMaisVendidos(){
  if(!listaMaisVendidos) return;
  listaMaisVendidos.innerHTML="";
  maisVendidos.forEach(p=>listaMaisVendidos.appendChild(criarCard(p)));
}

// ======================
// Modal produto
// ======================
function abrirModal(prod){
  produtoSelecionado = prod;
  modalTitle.textContent = prod.nome;
  modalImg.src = prod.img;
  modalPrice.textContent = `R$ ${prod.preco.toFixed(2)}`;
  modalDescription.textContent = prod.descricao;
  modalCharacteristics.textContent = prod.caracteristicas;

  let urg = document.getElementById("modal-urgencia");
  if(!urg){
    urg = document.createElement("div");
    urg.id="modal-urgencia";
    urg.className="urgencia";
    modalPrice.after(urg);
  }
  urg.textContent = `⚠️ Restam ${prod.estoque} unidades`;

  let cont = document.getElementById("modal-contador");
  if(!cont){
    cont = document.createElement("div");
    cont.id="modal-contador";
    cont.className="contador";
    urg.after(cont);
  }

  if(prod.tamanho){
    modalSizeContainer.style.display="block";
    modalSize.innerHTML="";
    for(let i=56;i<=62;i++) modalSize.innerHTML+=`<option>${i}</option>`;
  } else modalSizeContainer.style.display="none";

  productModal.classList.add("active");
}

// ======================
// Contador regressivo
// ======================
function iniciarContador(){
  setInterval(()=>{
    if(tempo<=0) return;
    tempo--;
    sessionStorage.setItem("tempo_oferta", tempo);
    const m = String(Math.floor(tempo/60)).padStart(2,"0");
    const s = String(tempo%60).padStart(2,"0");
    document.querySelectorAll(".contador").forEach(c=>{
      c.textContent = `⏰ Oferta expira em ${m}:${s}`;
    });
  },1000);
}

// ======================
// Carrinho
// ======================
addToCartModal.onclick=()=>{
  if(!produtoSelecionado || produtoSelecionado.estoque<=0) return;

  produtoSelecionado.estoque--;
  sessionStorage.setItem(`estoque_${produtoSelecionado.id}`, produtoSelecionado.estoque);

  carrinho.push({...produtoSelecionado});
  updateCart();
  renderProdutos();
  renderMaisVendidos();
  productModal.classList.remove("active");
};

function updateCart(){
  cartItems.innerHTML="";
  let total=0;
  carrinho.forEach(p=>{
    total+=p.preco;
    cartItems.innerHTML+=`<p>${p.nome} - R$ ${p.preco.toFixed(2)}</p>`;
  });
  cartCount.textContent=carrinho.length;
  cartTotal.textContent=total.toFixed(2);
}

cartFlutuante.onclick=()=>cartModal.classList.add("active");
closeCart.onclick=()=>cartModal.classList.remove("active");
closeProduct.onclick=()=>productModal.classList.remove("active");

// ======================
// Checkout WhatsApp
// ======================
checkoutForm.onsubmit=e=>{
  e.preventDefault();
  if(!carrinho.length) return alert("Carrinho vazio!");
  window.open("https://wa.me/SEU_NUMERO_AQUI","_blank");
  carrinho=[];
  updateCart();
  cartModal.classList.remove("active");
};

// ======================
renderProdutos();
renderMaisVendidos();
iniciarContador();
