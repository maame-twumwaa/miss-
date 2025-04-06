// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for tour types
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically show/hide content based on the selected tab
            // For this demo, we're just changing the active state of the button
        });
    });
    
    // Hero section dots functionality
    const dots = document.querySelectorAll('.hero-dots .dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Here you would typically change the hero content/image
            // For this demo, we're just changing the active state of the dot
        });
    });
    
    // Testimonial navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Sample testimonials data (you would replace this with your actual data)
    const testimonials = [
        {
            image: 'testimonial-image.png',
            text: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
            name: 'Mike Taylor',
            location: 'Lahore, Pakistan'
        },
        {
            image: 'testimonial-image-2.png',
            text: '"Travel is the only thing you buy that makes you richer. The world is a book and those who do not travel read only one page."',
            name: 'Sarah Johnson',
            location: 'New York, USA'
        },
        {
            image: 'testimonial-image-3.png',
            text: '"The journey of a thousand miles begins with a single step. Travel far enough, you meet yourself."',
            name: 'David Chen',
            location: 'Tokyo, Japan'
        }
    ];
    
    let currentTestimonialIndex = 0;
    
    // Function to update testimonial content
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonialIndex];
        const testimonialCard = document.querySelector('.testimonial-card');
        
        // Update the testimonial content
        testimonialCard.querySelector('.testimonial-image img').src = testimonial.image;
        testimonialCard.querySelector('.testimonial-text p').textContent = testimonial.text;
        testimonialCard.querySelector('.testimonial-text h4').textContent = testimonial.name;
        testimonialCard.querySelector('.location').textContent = testimonial.location;
    }
    
    // Event listeners for testimonial navigation
    prevBtn.addEventListener('click', function() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial();
    });
    
    // Favorite button functionality
    const favoriteBtn = document.querySelector('.favorite i');
    
    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('far');
        this.classList.toggle('fas');
        this.style.color = this.classList.contains('fas') ? '#FF6B6B' : '#4152CA';
    });
    
    // Mobile navigation toggle (for responsive design)
    // This would be implemented if we had a mobile menu button in the HTML
    
    // Form submission for newsletter
    const subscribeForm = document.querySelector('.subscribe-form');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would typically send the email to your server
                alert('Thank you for subscribing!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});