function ConvertValue(value) {
    const vals = {
        'Kilograms': 1000,
        'Pounds': 453.59,
        'Ounces': 28.35,
        'Grams': 1,
        'SugarCubes': 4,
    };

    const valConvertFrom = document.getElementById('convert-from').value;
    const valInGr = value * vals[valConvertFrom];
    const valConvertT = document.getElementById('convert-To').value;

    document.getElementById('result').innerHTML = +(valInGr / vals[valConvertT]).toFixed(2);
}