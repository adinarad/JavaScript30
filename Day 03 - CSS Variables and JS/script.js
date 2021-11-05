function updateProperty() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', updateProperty));
inputs.forEach(input => input.addEventListener('input', updateProperty));