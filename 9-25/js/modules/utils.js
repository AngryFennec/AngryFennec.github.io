export function resetForm(inputs, submitBtn) {
  inputs.forEach((input) => {
    if (input.value.length) {
      input.value = '';
    }
  });
  submitBtn.disabled = true;
}