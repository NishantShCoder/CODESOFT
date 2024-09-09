function insertNumber(number) {
    document.getElementById('result').value += number;
  }
  
  function insertOperator(operator) {
    let result = document.getElementById('result').value;
    if (result !== "" && !isNaN(result.slice(-1))) {
      document.getElementById('result').value += operator;
    }
  }
  
  function insertDot() {
    let result = document.getElementById('result').value;
    if (result === "" || isNaN(result.slice(-1))) {
      document.getElementById('result').value += "0.";
    } else if (!result.split(/[\+\-\*\/]/).pop().includes('.')) {
      document.getElementById('result').value += ".";
    }
  }
  
  function clearDisplay() {
    document.getElementById('result').value = "";
  }
  
  function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    try {
      document.getElementById('result').value = eval(result);
    } catch (error) {
      document.getElementById('result').value = "Error";
    }
  }
  