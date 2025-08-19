class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    connect(particles) {
        particles.forEach(particle => {
            const dx = this.x - particle.x;
            const dy = this.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                this.ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 100})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(this.x, this.y);
                this.ctx.lineTo(particle.x, particle.y);
                this.ctx.stroke();
            }
        });
    }
}

class ParticleBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = window.innerWidth < 768 ? 30 : 50;

        this.init();
    }

    init() {
        // Set canvas size
        this.resizeCanvas();
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas));
        }

        // Add canvas to container
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.container.style.position = 'relative';
        this.container.style.overflow = 'hidden';
        this.container.insertBefore(this.canvas, this.container.firstChild);

        // Event listeners
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Start animation
        this.animate();
    }

    handleResize() {
        this.resizeCanvas();
        // Adjust particle count based on screen size
        const newParticleCount = window.innerWidth < 768 ? 30 : 50;
        if (newParticleCount !== this.particleCount) {
            this.particleCount = newParticleCount;
            this.particles = [];
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push(new Particle(this.canvas));
            }
        }
    }

    resizeCanvas() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].draw();
            this.particles[i].connect(this.particles.slice(i));
        }

        requestAnimationFrame(this.animate.bind(this));
    }
}

// Initialize particle background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground('home');
});
