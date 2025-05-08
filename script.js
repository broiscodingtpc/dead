function copyCA() {
    const ca = document.getElementById('ca').textContent;
    navigator.clipboard.writeText(ca).then(() => {
        const btn = document.querySelector('.secondary');
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        createConfetti();
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Spooky cursor effect
document.addEventListener('mousemove', (e) => {
    createCursorTrail(e.pageX, e.pageY);
});

function createCursorTrail(x, y) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 1000);
}

// Random spooky effects
function addSpookyEffect() {
    const elements = document.querySelectorAll('h1, h2, h3');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    // Random rotation
    randomElement.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    
    // Random color flash
    const originalColor = randomElement.style.color;
    randomElement.style.color = Math.random() > 0.5 ? '#00ff00' : '#ff0000';
    
    setTimeout(() => {
        randomElement.style.transform = 'rotate(0deg)';
        randomElement.style.color = originalColor;
    }, 200);
}

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = Math.random() > 0.5 ? '#00ff00' : '#ff0000';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Random zombie sounds
function playZombieSound() {
    const sounds = [
        'https://assets.mixkit.co/sfx/preview/mixkit-zombie-groan-1-1.mp3',
        'https://assets.mixkit.co/sfx/preview/mixkit-zombie-groan-2-1.mp3'
    ];
    const sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    sound.volume = 0.1;
    sound.play();
}

// Add confetti style
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: #00ff00;
        top: -10px;
        opacity: 0;
        animation: confetti-fall linear forwards;
    }

    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize effects
setInterval(addSpookyEffect, 3000);
setInterval(() => {
    if (Math.random() > 0.7) {
        playZombieSound();
    }
}, 10000);

// Add hover effects for mobile
document.addEventListener('touchstart', function() {}, {passive: true});

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Konami code completed!
            document.body.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                document.body.style.transform = 'rotate(0deg)';
            }, 1000);
            createConfetti();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}); 