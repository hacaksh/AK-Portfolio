document.addEventListener("DOMContentLoaded", function () {
    const bgVideo = document.getElementById("bg-video");
    if (bgVideo) {
      bgVideo.playbackRate = 0.5; // 0.5x speed — change this to 0.25, 0.75, etc.
    }
  });
  document.addEventListener("contextmenu", function (e) {
    if (e.target.id === "ak_pic") {
      e.preventDefault();
    }
  });


document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "passionate coder.",
      "cybersecurity enthusiast.",
      "creative video editor."
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 100;
    const delayBetweenPhrases = 2000;
    const textElement = document.getElementById("typing-text");

    function typePhrase() {
      const currentPhrase = phrases[currentPhraseIndex];
      if (currentCharIndex < currentPhrase.length) {
        textElement.textContent += currentPhrase.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typePhrase, typingSpeed);
      } else {
        setTimeout(erasePhrase, delayBetweenPhrases);
      }
    }

    function erasePhrase() {
      if (currentCharIndex > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        currentCharIndex--;
        setTimeout(erasePhrase, 50);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
      }
    }

    typePhrase(); // start typing
  });


  