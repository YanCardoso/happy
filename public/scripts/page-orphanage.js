// objeto de configuração do mapa (passado como segundo argumento da função L.map())
const options = {
  dragging: false,
  touchZoom: false,
  doubleCLickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//declaração da variável map FIXO
const map = L.map("mapid", options).setView([lat, lng], 14);
//layer visualização
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criar icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// popup marcador


L
.marker([lat, lng], { icon })
.addTo(map);

// função para botões com imagens

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //adicionar class .active para botão clicado
  button.classList.add("active");

  // selecionar imagem clicada

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar imagem do container

  imageContainer.src = image.src;
}
