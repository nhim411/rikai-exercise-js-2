function main() {
  const inputStart = document.querySelector('#input-start');
  const inputStartMsg = document.querySelector('#start-message');
  const inputEnd = document.querySelector('#input-end');
  const inputEndMsg = document.querySelector('#end-message');
  const inputLetter = document.querySelector('#input-letter');
  const inputTotal = document.querySelector('#input-total');
  const btnClear = document.querySelector('#btn-clear');
  const btnCalculate = document.querySelector('#btn-calculate');

  const handleInputStart = () => {
    let msg = [];
    if (typeof inputStart.value !== 'number' && inputStart.value.length > 0) {
      if (isNaN(inputStart.value)) msg.push('Giá trị nhập phải là số');
    }
    if (Number(inputStart.value) < 0) msg.push('Giá trị nhập phải lớn hơn 0');

    showErrorMessage(inputStartMsg, msg);
    updateLetter();
  };

  const updateLetter = () => {
    let value = Number(inputEnd.value) - Number(inputStart.value);
    if (typeof value === 'number' && value > 0) {
      inputLetter.value = value;
      let totalPrice = 0;
      if (+value >= 101) {
        totalPrice = 1480 * 51 + 1500 * 50 + (value - 101) * 1800;
      } else if (value >= 51) {
        totalPrice = 1500 * 50 + (value - 51) * 1480;
      } else {
        totalPrice = value * 1480;
      }
      inputTotal.value = (totalPrice * 1.1).toFixed(2);
    } else {
      inputLetter.value = '';
    }
  };

  const handleInputEnd = () => {
    let msg = [];
    if (typeof inputEnd.value !== 'number' && inputEnd.value.length > 0) {
      if (isNaN(inputEnd.value)) msg.push('Giá trị nhập phải là số');
    }
    if (Number(inputEnd.value) < 0) msg.push('Giá trị nhập phải lớn hơn 0');

    if (Number(inputEnd.value) < Number(inputStart.value))
      msg.push('Giá trị sau phải lớn hơn giá trị trước');
    showErrorMessage(inputEndMsg, msg);
    updateLetter();
  };

  const showErrorMessage = (element, errorArr) => {
    if (errorArr.length > 0) {
      let html = errorArr.map((item) => `<li>${item}</li>`);
      let innerhtml = `<ul>${html.join('')}</ul>`;
      element.innerHTML = innerhtml;
    } else element.innerHTML = '';
  };

  btnClear.onclick = () => {
    inputStart.value = '';
    inputEnd.value = '';
    inputLetter.value = '';
    inputTotal.value = '';
  };

  // btnCalculate.onclick = () => {
  //   let letters = inputLetter.value;
  //   let totalPrice = 0;
  //   if (+letters >= 101) {
  //     totalPrice = 1480 * 51 + 1500 * 50 + (value - 101) * 1800;
  //   } else if (+letters >= 51) {
  //     totalPrice = 1500 * 50 + (value - 51) * 1480;
  //   } else {
  //     totalPrice = value * 1480;
  //   }
  //   inputTotal.value = (totalPrice * 1.1).toFixed(2);
  // };

  inputStart.addEventListener('input', handleInputStart);
  inputEnd.addEventListener('input', handleInputEnd);
}

main();
