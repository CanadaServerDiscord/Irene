document.addEventListener("mousemove", moveCursor);

let counter = 0; // Inicializamos el contador

function moveCursor(e) {
    // Incrementamos el contador en cada movimiento del ratón
    counter++;
    // Limitamos la creación de elementos a cada 5 movimientos del ratón
    if (counter % 2 !== 0) return;

    let body = document.querySelector("body");
    let heart = document.createElement("span");
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px'; // Corregido para usar y en lugar de x

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
}


const button = document.getElementById('hoverButton');

button.addEventListener('mouseenter', () => {
  // Obtener el ancho y alto del contenedor
  const containerWidth = window.innerWidth - button.offsetWidth;
  const containerHeight = window.innerHeight - button.offsetHeight;

  // Generar una posición aleatoria dentro del contenedor
  const randomX = Math.floor(Math.random() * containerWidth);
  const randomY = Math.floor(Math.random() * containerHeight);

  // Aplicar la posición aleatoria al botón
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
  button.style.marginLeft = '0px';
});

function handleClick(){
    alert("💖 Ya lo se siempre te querre mas 💖")
}