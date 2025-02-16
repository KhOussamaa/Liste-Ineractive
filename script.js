function changeColor(element) {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    element.style.color = randomColor;
}
