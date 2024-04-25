function resetForm() {
    const form = document.getElementById("movieForm");
    if (form) {
        form.reset();
    }
}

module.exports = { resetForm };