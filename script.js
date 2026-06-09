// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // WhatsApp order functionality
    const phoneNumber = '919876543210'; // Replace with your actual WhatsApp number
    
    function sendWhatsAppOrder(fruitName) {
        const message = `Hello! I would like to order ${fruitName} from Raj Fruits. Please let me know the availability and pricing.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Add click event to all WhatsApp order buttons
    const orderButtons = document.querySelectorAll('.whatsapp-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fruit = this.getAttribute('data-fruit');
            sendWhatsAppOrder(fruit);
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = '#1b4332';
            header.style.padding = '10px 0';
        } else {
            header.style.background = '#2d6a4f';
            header.style.padding = '15px 0';
        }
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fruit-card, .mango-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Mobile menu styles (add to CSS or keep here)
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        nav ul.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #2d6a4f;
            padding: 20px;
            text-align: center;
            gap: 15px;
        }
    }
`;
document.head.appendChild(style);
