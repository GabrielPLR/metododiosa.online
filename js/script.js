// Testimonials Data
const testimonials = [
    {
        text: "Melhor investimento que já fiz! O conteúdo é incrível e o acesso é super fácil. Estou amando todos os doramas disponíveis!",
        author: "Amanda Figueiredo"
    },
    {
        text: "Não acreditei no começo, mas depois que assinei vi que vale muito a pena! O suporte é excelente e tem muito conteúdo.",
        author: "Silvia Assis"
    },
    {
        text: "A qualidade do conteúdo é excepcional. Já assisti vários doramas e a plataforma funciona perfeitamente!",
        author: "Ana Oliveira"
    }
];

<script>
function ativarSom(container) {
  const video = container.querySelector('video');
  const overlay = container.querySelector('.overlay-som');
  video.muted = false;
  video.play();
  overlay.style.display = 'none';
}
</script>


// Initialize Testimonials
let currentTestimonial = 0;
const testimonialContainer = document.getElementById('testimonialContainer');
const dotsContainer = document.getElementById('testimonialDots');

// Create Testimonials
testimonials.forEach((testimonial, index) => {
    // Create testimonial element
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    testimonialElement.innerHTML = `
        <p>"${testimonial.text}"</p>
        <p><strong>${testimonial.author}</strong></p>
    `;
    testimonialContainer.appendChild(testimonialElement);

    // Create dot
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
});

// Show Testimonial Function
function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentTestimonial = index;
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// FAQ Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        if (answer) {
            // Set initial state to expanded
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '1.5rem';
        }
    });
});

// Countdown Timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    let [minutes, seconds] = timerElement.textContent.split(':').map(Number);
    
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        minutes = 12;
        seconds = 21;
    }
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});