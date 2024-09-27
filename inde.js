function hide() {
    var x =document.getElementById("mobileheader");
    var y=document.getElementById("menu")
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }
  document.addEventListener('DOMContentLoaded', (event) => {
            
            
    const contactForm = document.getElementById('contact-form');

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });
        return isValid;
    }
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(contactForm)) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});