window.onload = function () {

    const input = document.getElementById("fname");

    input.addEventListener('blur', function () {
        input.value = input.value.toUpperCase();
    });
}
