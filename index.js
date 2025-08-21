// Create animated background stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

/* Create sparkles around the orb
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        
        const angle = (i / 8) * 360;
        const radius = 120;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.animationDelay = (i * 0.2) + 's';
        
        sparklesContainer.appendChild(sparkle);
    }
}
*/
// Fortune messages
const fortunes = [
    "A new opportunity will present itself within the next seven days. Be ready to embrace change.",
    "Your creativity will be your greatest asset today. Trust your artistic instincts.",
    "Someone from your past will bring unexpected joy into your present.",
    "The stars align to bring you clarity in a confusing situation. The answer is simpler than you think.",
    "A small act of kindness today will create ripples of positivity that return to you tenfold.",
    "Your intuition is particularly strong right now. Listen to that inner voice.",
    "An unexpected message or call will brighten your day and open new possibilities.",
    "The universe is preparing you for something wonderful. Stay patient and positive.",
    "Your hard work is about to pay off in ways you haven't yet imagined.",
    "Today is perfect for taking a small risk that could lead to big rewards.",
    "A chance encounter will provide the inspiration you've been seeking.",
    "The key to solving your current challenge lies in collaboration with others.",
    "Your natural charm will open doors that seemed permanently closed.",
    "Trust the process - what seems like a setback is actually a setup for success.",
    "The moon's energy brings emotional healing and renewed hope to your heart."
];

// Get DOM elements
const homeScreen = document.getElementById('homeScreen');
const loadingScreen = document.getElementById('loadingScreen');
const fortuneScreen = document.getElementById('fortuneScreen');
const fortuneOrb = document.getElementById('fortuneOrb');
const homeButton = document.getElementById('homeButton');
const fortuneText = document.getElementById('fortuneText');

/*// Initialize
createStars();
createSparkles();*/

// Orb click handler
fortuneOrb.addEventListener('click', function() {
    // Hide home screen
    homeScreen.classList.add('hidden');
    
    // Show loading screen
    loadingScreen.classList.add('show-flex');
    
    // Simulate loading time
    setTimeout(() => {
        // Hide loading screen
        loadingScreen.classList.remove('show-flex');
        
        // Show fortune
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        fortuneScreen.classList.add('show-flex');
    }, 3000);
});

// Home button handler
homeButton.addEventListener('click', function() {
    // Hide fortune screen
    fortuneScreen.classList.remove('show-flex');
    
    // Show home screen
    homeScreen.classList.remove('hidden');
});

// Add continuous sparkle animation to orb
setInterval(() => {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => {
        sparkle.style.animationDelay = Math.random() * 2 + 's';
    });
}, 4000);