//declaração da variável map
const map = L.map("mapid").setView([-1.369602, -48.3486119], 14);
//layer visualização
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criar icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// adicionar marcação
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // adicionar icon no layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
  // pegar container de fotos #images
  const container = document.querySelector("#images");

  // pegar container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da ultima img adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se input esta vazio, se sim, não adicionar ao container de images
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limpar formulário antes de clonar
  newFieldContainer.children[0].value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

// função de apagar foto
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar campo inteiro
  span.parentNode.remove();
}

//selecionar sim e não
function toggleSelect(event){
    
    // colocar class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })


    // colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se value é 0 ou 1
    input.value = button.dataset.value; 
    
}

// function validate(event){
// // validar se lat e lng estão preenchidos
//   const needsLatAndLng = true
//   if(needsLatAndLng){
//     event.preventDefault()
//     alert('Selecione um ponto no mapa')
//   }
  
// }