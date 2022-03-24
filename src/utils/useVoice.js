import { useState, useEffect } from 'react';


const useVoice = () => {
    const [text, setText] = useState('');
    const [isListening, setIsListening] = useState(false);
    let speech;
    const listen = () => {
      setIsListening(!isListening);
      if (!isListening) {
        speech.stop();
      } else {
        speech.start();
      }
    };
    
    if (window.webkitSpeechRecognition || window.SpeechRecognition) {
      // eslint-disable-next-line
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      speech = new SpeechRecognition();
      speech.continuous = true;
    } else {
      speech = null;
    }          
    console.log(speech)                            
    speech.onstart = function(){
      console.log('Yes, Now You Can start to Talk');
  }
  
    speech.onresult = event => {
        setText(event.results[0][0].transcript);
        console.log(event)
        setIsListening(false);
        speech.stop();
      };
    useEffect(() => {
    //   if (!speech) {
    //     return;
    //   }
  
    })
    console.log(text,'text',isListening)
    return {
      text,
      isListening,
      listen,
      voiceSupported: speech !== null
    };
  }
  export {
    useVoice,
  }; 