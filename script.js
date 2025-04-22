const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  const value = button.getAttribute('data-value');

  if (value) {
    button.addEventListener('click', () => {
      if (display.value === 'Error') display.value = '';
      display.value += value;
    })
  }
})

document.querySelector('.equal').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
})

document.querySelector('.clear').addEventListener('click', () => {
  display.value = '';
})
