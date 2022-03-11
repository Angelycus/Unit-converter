let newNum = document.getElementById("number")

function getVal() {
    const val = document.querySelector('input').value;
    newNum.textContent = val
    let newFeet = val * 3.28084
    let newFeetR = newFeet.toFixed(3)
    let newMeter = val * 0.3048
    let newMeterR = newMeter.toFixed(3)
    let newGallon = val * 0.264172
    let newGallonR = newGallon.toFixed(3)
    let newLiter = val * 3.78541
    let newLiterR = newLiter.toFixed(3)
    let newPound = val * 2.20462
    let newPoundR = newPound.toFixed(3)
    let newKilo = val * 0.453592
    let newKiloR = newKilo.toFixed(3)
    
    
    let newLen = document.getElementById("len")
    newLen.textContent = val + " meters = " + newFeetR + " feet | " + val + " feet = " + newMeterR + " meters"
    let newVol = document.getElementById("vol")
    newVol.textContent = val + " liters = " + newGallonR + " gallons | " + val + " gallons = " +  newLiterR + " liters"
    let newMas = document.getElementById("mas")
    newMas.textContent = val + " kilos = " + newPoundR + " pounds | " + val + " pounds = " + newKiloR + " kilos"
    
}