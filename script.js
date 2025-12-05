const openModal = document.querySelector(".subscribe-btn");
const modalBg = document.getElementById("modalBg");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");

// close
openModal.addEventListener("click", () => {
    modalBg.style.display = "flex";
    emailInput.value = "";
    errorMsg.textContent = "";
});

// close
closeModal.addEventListener("click", () => {
    modalBg.style.display = "none";
    // window.model.style.display = "none";
});

// form validate
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        errorMsg.textContent = "Input box empty";
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        errorMsg.textContent = "Email must end with @gmail.com";
        return;
    }

    alert("Subscribed Successfully: " + email);
    modalBg.style.display = "none";
});






// Carousel 
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let currentSlide = 0;
    let autoSlideInterval;

    //    current slid
    function showSlide(index) {
        // Remove active 
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // active slide   
        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // next
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide();
    }

    // prev slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide();
    }

    // futo slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // reset auto slide
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // button
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    carouselContainer.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    startAutoSlide();
});


const blob = document.querySelector(".cursor-blob");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    blob.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 250, fill: "forwards" }
    );

    outline.style.left = `${x}px`;
    outline.style.top = `${y}px`;
});