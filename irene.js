document.addEventListener("mousemove", moveCursor);

let counter = 0; // Inicializamos el contador

function moveCursor(e) {
    // Incrementamos el contador en cada movimiento del ratón
    counter++;
    // Limitamos la creación de elementos a cada 5 movimientos del ratón
    if (counter % 2 !== 0) return;

    let body = document.querySelector("body");
    let heart = document.createElement("span");
    let bodyRect = body.getBoundingClientRect();
    let x = e.clientX + window.pageXOffset - bodyRect.left;
    let y = e.clientY + window.pageYOffset - bodyRect.top;
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
