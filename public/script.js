var input = document.getElementById("input");

var operation = [];

function getValue(x) {
  operation.push(x);
  var operator;
  for (var i = 0; i < operation.length; i++) {
    if (
      operation[i] === "+" ||
      operation[i] === "-" ||
      operation[i] === "*" ||
      operation[i] === "/"
    ) {
      operator = i;
      if (
        operation.at(operator + 1) === "+" ||
        operation.at(operator + 1) === "-" ||
        operation.at(operator + 1) === "*" ||
        operation.at(operator + 1) === "/"
      ) {
        operation.splice(operator, 1);
      }
    }
  }
  input.value = operation.join("");
}

function clearAll() {  
  operation = [];
  input.value = "";
}

function deleteEach() {
  operation.pop();
  input.value = operation.join("");
}

function squareNumber() {
  input.value *= input.value;
}

function equal() {
  input.value = eval(input.value);
}

function percent() {
  input.value /= 100;
}

function changeTheme() {
  var button = document.getElementById("button");
  if (input.style.backgroundColor === "pink") {
    button.parentNode.setAttribute("class", "container");
    button.style.backgroundColor = "pink";
    input.style.backgroundColor = "#576579";
    input.style.color = "white";
  } else {
    button.parentNode.setAttribute("class", "changeContainer");
    input.style.backgroundColor = "pink";
    input.style.color = "black";
    button.style.backgroundColor = "#576579";
  }
}
