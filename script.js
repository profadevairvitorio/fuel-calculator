function calculate() {
    const gasoline = parseFloat(document.getElementById("gasolinePrice").value.replace(',', '.'));
    const ethanol = parseFloat(document.getElementById("ethanolPrice").value.replace(',', '.'));
    const result = document.getElementById("resultDisplay");

    if (isNaN(gasoline) || isNaN(ethanol)) {
        result.innerHTML = "<p class='error-message'>Por favor, preencha os dois campos corretamente.</p>";
        return;
    }

    const ratio = ethanol / gasoline;

    if (ratio < 0.7) {
        result.innerHTML = `
      <p class="favorable ethanol">🚗💨 Etanol é mais vantajoso!</p>
    `;
    } else {
        result.innerHTML = `
      <p class="favorable gasoline">⛽ Gasolina é mais vantajosa!</p>
    `;
    }
}
