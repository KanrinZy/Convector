function $4fa36e821943b400$var$ConvertValue(value) {
    const vals = {
        "Kilograms": 1000,
        "Pounds": 453.59,
        "Ounces": 28.35,
        "Grams": 1,
        "SugarCubes": 4
    };
    const converfromvalue = document.getElementById("ConvertFrom").value;
    const valuegr = value * vals[converfromvalue];
    const converttovalue = document.getElementById("ConvertTo").value;
    document.getElementById("Result").innerHTML = +(valuegr / vals[converttovalue]).toFixed(2);
}


//# sourceMappingURL=index.js.map
