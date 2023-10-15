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

function changeTheme() {
  var main = document.getElementsByClassName("container");
  main = document.styleSheets[0].cssRules[0].style;
  main.setProperty("background-color", "pink");
  main.setProperty(
    "box-shadow",
    "-8px -8px 15px rgba(255, 255, 255, 0.1),5px 5px 15px rgba(0, 0, 0, 0.2)"
  );
  var input = document.getElementById("input");
  input.style.backgroundColor = "pink";
  input.style.color = "black";
}
