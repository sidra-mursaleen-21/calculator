function getValue(x) {
  var input = document.getElementById("input");
  input.value += x; 
}

function clearAll() {
  var input = document.getElementById("input");
  input.value = "";
}

function deleteEach() {
  var input = document.getElementById("input");
  input.value = input.value.slice(0, -1);
}

function squareNumber() {
  var input = document.getElementById("input");
  input.value *= input.value;
}

function equal() {
  var input = document.getElementById("input");
  console.log(input.value);
  input.value = eval(input.value);
}

function percent() {
  var input = document.getElementById("input");
  input.value /= 100;
}

