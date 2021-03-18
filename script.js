let number = 0

document.getElementById('calculate').addEventListener
('click', addition)

function addition () {
  number = document.getElementById('input1').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
