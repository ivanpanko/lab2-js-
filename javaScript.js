function calcTotal() {
    let total = 0;

    const inputs = document.querySelectorAll('input:checked');

    inputs.forEach(input => {
        total += Number(input.value);
    });

    document.getElementById('result').textContent =
        'Загальна вартість: ' + total + ' грн';
}

function resetTotal() {
    document.getElementById('result').textContent =
        'Загальна вартість: 0 грн';
}
