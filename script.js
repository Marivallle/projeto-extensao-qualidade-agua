function getRandomData() {
    return {
        ph: (Math.random() * (14 - 0) + 0).toFixed(1),
        turbidity: (Math.random() * (100 - 0) + 0).toFixed(1),
        temperature: (Math.random() * (40 - 0) + 0).toFixed(1)
    };
}

function updateSensorData() {
    const data = getRandomData();
    document.getElementById('ph-level').innerText = `pH: ${data.ph}`;
    document.getElementById('turbidity').innerText = `Turbidez: ${data.turbidity} NTU`;
    document.getElementById('temperature').innerText = `Temperatura: ${data.temperature} °C`;
}

document.getElementById('refresh-button').addEventListener('click', updateSensorData);

// Atualiza os dados ao carregar a página
window.onload = updateSensorData;
