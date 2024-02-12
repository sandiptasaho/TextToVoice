// Check if the browser supports the Web Speech API
if ('speechSynthesis' in window) {
    function convertToSpeech() {
        // Get the text from the textarea
        var textToSpeak = document.getElementById('textToSpeak').value;

        // Get the selected language from the dropdown
        var selectedLanguage = document.getElementById('languageSelector').value;

        // Create a new SpeechSynthesisUtterance object
        var utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        utterance.text = textToSpeak;

        // Set the language
        utterance.lang = selectedLanguage;

        // Use the SpeechSynthesis API to speak the text
        speechSynthesis.speak(utterance);
    }
} else {
    // Handle the case when the browser doesn't support the Web Speech API
    alert('Speech synthesis is not supported in this browser.');
}
