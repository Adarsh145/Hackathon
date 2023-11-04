let arr=["Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Aymara", "Azerbaijani", "Bambara", "Bangla", "Basque", "Belarusian", "Bhojpuri", "Bosnian", "Bulgarian", "Burmese", "Catalan", "Cebuano", "Central Kurdish", "Chinese (Simplified)", "Chinese (Traditional)", "Corsican", "Croatian", "Czech", "Danish", "Divehi", "Dogri", "Dutch", "English", "Esperanto", "Estonian", "Ewe", "Filipino", "Finnish", "French", "Galician", "Ganda", "Georgian", "German", "Goan Konkani", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Iloko", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda", "Korean", "Krio", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lingala", "Lithuanian", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Manipuri (Meitei Mayek)", "Māori", "Marathi", "Mizo", "Mongolian", "Nepali", "Northern Sotho", "Norwegian", "Nyanja", "Odia", "Oromo", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sanskrit", "Scottish Gaelic", "Serbian", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Southern Sotho", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tigrinya", "Tsonga", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Western Frisian", "Xhosa", "Yiddish", "Yoruba", "Zulu"];
let select_language = document.getElementById("select_language");
for (let i of arr){
    let select_option = document.createElement("option");
    select_option.textContent=i;
    select_language.appendChild(select_option);
    

}
let getValue = document.getElementById("getValue");
select_language.onclick= function(){   
    getValue.textContent=select_language.value;
}
document.addEventListener('DOMContentLoaded', function () {
  let mediaRecorder;
  let audioChunks = [];
  let isRecording = false;
  let recordedAudioBlob;

  const startRecordingButton = document.getElementById('startRecording');
  const stopRecordingButton = document.getElementById('stopRecording');
  const playAudioButton = document.getElementById('playAudio');
  const statusText = document.getElementById('status');
  const audioPlayer = document.getElementById('audioPlayer');

  startRecordingButton.addEventListener('click', async () => {
    // ... (existing code for starting recording)

    mediaRecorder.onstop = () => {
      recordedAudioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      audioPlayer.src = URL.createObjectURL(recordedAudioBlob); // Set recorded audio as the source
      statusText.textContent = 'Recording stopped';
    };
  });

  playAudioButton.addEventListener('click', () => {
    if (recordedAudioBlob) {
      audioPlayer.play();
    }
  });

  // ... (existing code for stopping recording and handling audio capture)
});

stopRecordingButton.addEventListener('click', () => {
      if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
      }
    });
  
