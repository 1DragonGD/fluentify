// Efecto de parallax en el hero
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    const scrolled = window.pageYOffset;
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
  
  // Animación de entrada para las cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('.featured-section').scrollIntoView({ behavior: 'smooth' });
    this.classList.add('active'); // Agrega una clase 'active' al botón
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.topic-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
  
  // Efecto hover en los botones
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      button.style.background = `
        radial-gradient(circle at ${x}px ${y}px, 
        var(--secondary-color),
        var(--primary-color))
      `;
    });
  
    button.addEventListener('mouseleave', () => {
      button.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
    });
  });
  
  // Menu móvil
  const createMobileMenu = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
   
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    
    header.insertBefore(menuButton, nav);
    
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuButton.classList.toggle('active');
    });
  };
  
 
  
  // Efecto de partículas en el fondo
  const createParticles = () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(27, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const createParticleArray = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    createParticleArray();
    animate();
  };
  
  // Iniciar el efecto de partículas
  createParticles();