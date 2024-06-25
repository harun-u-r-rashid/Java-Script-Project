const seePassword = () => {

        const passwordValue = document.getElementById("inputPassword");
        const confirmPassValue = document.getElementById("inputConfirmPassword");

        const eyeIcon = document.querySelector("i");


        if (passwordValue.type === "password" && confirmPassValue.type === "password") {
                passwordValue.type = "text";
                confirmPassValue.type = "text";
                eyeIcon.className = "fa-regular fa-eye"

        }
        else {
                passwordValue.type = "password";
                confirmPassValue.type = "password";
                eyeIcon.className = "fa-regular fa-eye-slash"
        }
};