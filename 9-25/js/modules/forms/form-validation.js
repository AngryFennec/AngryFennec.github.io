import { INPUTS_REGEXP } from '../const.js';

function isEmptyInput(value) {
  return !value.length;
}

function validateByRegexp(value, regexp) {
  return regexp.test(value);
}

export function validateInput(value, regexp) {
  if (isEmptyInput(value)) { return false; }
  return validateByRegexp(value, regexp);
}

export function validateForm(inputs, submitBtn) {
  const invalidInputs = [];
  inputs.forEach((input) => {
    if (!validateInput(input.value, INPUTS_REGEXP[input.id])) {
      invalidInputs.push(input.name);
    }
  });

  if (invalidInputs.length) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}