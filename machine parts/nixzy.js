const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);

}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speak("Good Morning")
    } else if (hr == 12) {
        speak("Good Noon")
    } else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon");

    } else if (hr > 17 && hr <= 19) {
        speak("Good evening")
    } else {
        speak("Good Night")
    }
}
window.addEventListener('load', () => {
    speak("Activating NIXZY");
    speak("Goin online")
    wishMe();
});
const SpeechRecognition = Window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());

}
btn.addEventListener('click', () => {
    recognition.start();

})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();


    speech.text = "I did not understand what you said please try again";

    if (message.includes('hey') || message.includes('hello') || message.includes('oi nixzy') || message.includes('hi') || message.includes('hii nixzy')) {
        const finalText = "Hello boss";
        speech.text = finalText;
    } else if (message.includes('how are you nixzy') || message.includes('how are you?') || message.includes('oi nancy') || message.includes('oi dixzy') || message.includes('oi lexi') || message.includes('oi alexi') || message.includes('oi texi') || message.includes('oi nixi')) {
        const finalText = "fine boss...what about you boss ?";
        speech.text = finalText;
    } else if (message.includes('fine')) {
        const finalText = "ok boss tell me how can I help you";
        speech.text = finalText;
    } else if (message.includes('not happy')) {
        const finalText = "what happen boss any probm";
        speech.text = finalText;
    } else if (message.includes('nothing')) {
        const finalText = "ok boss";
        speech.text = finalText;
    } else if (message.includes('what is Your name')) {
        const finalText = "My name is NIXZY and what is your name";
        speech.text = finalText;
    } else if (message.includes('I am' + message)) {
        const finalText = "haa...Nice name";
        speech.text = finalText;
    } else if (message.includes('who is your boss')) {
        const finalText = "My boss name is Shaabin";
        speech.text = finalText;
    } else if (message.includes('open instagram')) {
        const finalText = "https://www.instagram.com/?hl=en";
        speech.text = finalText;
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speech.text = finalText;
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "numeric", day: "numeric" })
        const finalText = date;
        speech.text = finalText;
    } else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    } else {
        window.open("__");
        const finalText = "I not understand boss";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech);
}