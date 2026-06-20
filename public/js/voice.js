/* ═══════════════════════════════════════════════
   VOICE INPUT
═══════════════════════════════════════════════ */
let recognition=null,isRecording=false;
function toggleVoice(){
  if(!('webkitSpeechRecognition'in window||'SpeechRecognition'in window)){showToast('Voice search not supported in this browser');return;}
  const input=document.getElementById('searchInput');
  const btn=document.getElementById('voiceBtn');
  if(isRecording){recognition&&recognition.stop();return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  recognition=new SR();
  recognition.lang='en-IN';
  recognition.continuous=false;
  recognition.interimResults=true; /* show words as you speak, like YouTube */
  recognition.maxAlternatives=1;
  recognition.onstart=()=>{
    isRecording=true;
    btn.classList.add('recording');
    btn.title='Listening… click to stop';
    input.placeholder='🎤 Listening…';
    showToast('🎤 Listening… speak now');
  };
  recognition.onresult=(e)=>{
    let interim='',final='';
    for(let i=e.resultIndex;i<e.results.length;i++){
      if(e.results[i].isFinal) final+=e.results[i][0].transcript;
      else interim+=e.results[i][0].transcript;
    }
    /* show interim text in real-time, replace with final when done */
    input.value=final||interim;
    if(final) filterSchemes(final);
  };
  recognition.onerror=(e)=>{
    const errMap={
      'not-allowed':'🚫 Mic blocked — allow microphone in browser settings',
      'no-speech':'🔇 No speech heard — please try again',
      'audio-capture':'🎙️ No microphone found on this device',
      'network':'🌐 Network error — check your connection',
      'aborted':'Voice search cancelled',
      'service-not-allowed':'🚫 Voice not allowed — use HTTPS or allow mic access',
    };
    showToast(errMap[e.error]||'⚠️ Voice error — please try again');
    isRecording=false;
    btn.classList.remove('recording');
    btn.title='Voice Search';
    input.placeholder='Search schemes, benefits, documents…';
  };
  recognition.onend=()=>{
    isRecording=false;
    btn.classList.remove('recording');
    btn.title='Voice Search';
    input.placeholder='Search schemes, benefits, documents…';
    if(input.value) filterSchemes(input.value);
  };
  recognition.start();
}

