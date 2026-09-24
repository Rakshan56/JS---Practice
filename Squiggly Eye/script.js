const ratio = 1;
const eyeball = document.querySelectorAll('.eyeball');
const eyebrow = document.querySelectorAll('.eyebrow');
const eyes = document.querySelectorAll('.eye');
const mouth = document.querySelector('.mouth');
const moodToggle = document.getElementById('moodToggle');
const blinkToggle = document.getElementById('blinkToggle');
const modeToggle = document.getElementById('modeToggle');

const moodList = ['neutral', 'smile', 'frown', 'surprised', 'confused', 'angry'];
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

let blinkEnabled = true;
let manualMood = 'neutral';
let manualMode = true;

const updateModeLabel = () => {
    modeToggle.textContent = `Mode: ${manualMode ? 'Manual' : 'Auto'}`;
};

const blink = () => {
    if (!blinkEnabled) return;

    eyes.forEach(el => el.classList.add('blink'));

    setTimeout(() => {
        eyes.forEach(el => el.classList.remove('blink'));
    }, 140);
};

const setMood = (mood) => {
    mouth.className = `mouth ${mood}`;
    manualMood = mood;
    moodToggle.textContent = `Mood: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
};

const getMood = (x, y) => {
    if (x < -0.5) return 'confused';
    if (x > 0.5) return 'smile';
    if (y < -0.5) return 'surprised';
    if (y > 0.5) return 'frown';
    if (Math.abs(x) > 0.35 && Math.abs(y) > 0.35) return 'angry';
    return 'neutral';
};

const applyMoodFromPointer = (x, y) => {
    if (!manualMode) {
        const mood = getMood(x, y);
        setMood(mood);

        const leftLift = y < -0.2 ? -18 : y > 0.2 ? 10 : 0;
        const rightLift = y < -0.2 ? -18 : y > 0.2 ? 10 : 0;
        const leftTilt = x < -0.2 ? -28 : x > 0.2 ? 18 : 0;
        const rightTilt = x < -0.2 ? 18 : x > 0.2 ? -28 : 0;

        if (mood === 'smile') {
            eyebrow[0].style.transform = `translate(${x * 12}px, ${leftLift - 8}px) rotate(${leftTilt - 12}deg)`;
            eyebrow[1].style.transform = `translate(${x * -12}px, ${rightLift - 8}px) rotate(${rightTilt + 12}deg)`;
        } else if (mood === 'frown') {
            eyebrow[0].style.transform = `translate(${x * 12}px, ${leftLift + 8}px) rotate(${leftTilt + 18}deg)`;
            eyebrow[1].style.transform = `translate(${x * -12}px, ${rightLift + 8}px) rotate(${rightTilt - 18}deg)`;
        } else if (mood === 'surprised') {
            eyebrow[0].style.transform = `translate(${x * 10}px, -22px) rotate(-8deg)`;
            eyebrow[1].style.transform = `translate(${x * -10}px, -22px) rotate(8deg)`;
        } else if (mood === 'confused') {
            eyebrow[0].style.transform = `translate(${x * 12}px, ${leftLift - 4}px) rotate(-35deg)`;
            eyebrow[1].style.transform = `translate(${x * -12}px, ${rightLift + 4}px) rotate(20deg)`;
        } else if (mood === 'angry') {
            eyebrow[0].style.transform = `translate(${x * 8}px, ${leftLift + 10}px) rotate(-35deg)`;
            eyebrow[1].style.transform = `translate(${x * -8}px, ${rightLift + 10}px) rotate(35deg)`;
        } else {
            eyebrow[0].style.transform = `translate(${x * 16}px, ${leftLift}px) rotate(${leftTilt}deg)`;
            eyebrow[1].style.transform = `translate(${x * -16}px, ${rightLift}px) rotate(${rightTilt}deg)`;
        }
    }
};

const handleEyeMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = clamp(((e.clientX - centerX) / centerX) * ratio, -1, 1);
    const y = clamp(((e.clientY - centerY) / centerY) * ratio, -1, 1);

    eyeball.forEach(el => {
        el.style.translate = `${x * 100}% ${y * 100}%`;
    });

    applyMoodFromPointer(x, y);
};

moodToggle.addEventListener('click', () => {
    manualMode = true;
    updateModeLabel();

    const currentIndex = moodList.indexOf(manualMood);
    const nextIndex = (currentIndex + 1) % moodList.length;
    const nextMood = moodList[nextIndex];

    setMood(nextMood);
});

modeToggle.addEventListener('click', () => {
    manualMode = !manualMode;
    updateModeLabel();

    if (!manualMode) {
        const currentMood = getMood(window.innerWidth / 2, window.innerHeight / 2);
        setMood(currentMood);
    }
});

blinkToggle.addEventListener('click', () => {
    blinkEnabled = !blinkEnabled;
    blinkToggle.textContent = `Blink: ${blinkEnabled ? 'ON' : 'OFF'}`;

    if (!blinkEnabled) {
        eyes.forEach(el => el.classList.remove('blink'));
    }
});

window.addEventListener('mouseleave', () => {
    eyebrow.forEach(el => {
        el.style.transform = 'translate(0, 0) rotate(0deg)';
    });

    eyeball.forEach(el => {
        el.style.translate = '0 0';
    });

    if (!manualMode) {
        setMood('neutral');
    }
});

document.addEventListener('mousemove', handleEyeMove);
updateModeLabel();
setMood(manualMood);
setInterval(blink, 2200 + Math.random() * 2000);