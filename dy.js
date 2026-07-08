const inputs = document.querySelectorAll(".inp input");

inputs.forEach((input, index) => {

    input.addEventListener("input", (e) => {

        e.target.value = e.target.value.replace(/\D/g, "");

        if (e.target.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }

    });

});