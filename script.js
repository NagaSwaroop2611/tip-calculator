function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || tipPercentage < 0) {
        document.getElementById('result').textContent = "Please enter valid inputs.";
        return;
    }

    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;

    document.getElementById('result').innerHTML = 
        `Tip Amount: Rs.${tip.toFixed(2)} <br>
        Total Amount: Rs.${total.toFixed(2)}`;
}
