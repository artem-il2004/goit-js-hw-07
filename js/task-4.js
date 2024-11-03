const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    
    const formData = {
        login: form.elements.email.value.trim(),
        password: form.elements.password.value.trim()
    };
    if (!formData.login || !formData.password) {
       alert('All form fields must be filled in');
       return;
    }
    console.log(formData);
    form.reset();
}
)