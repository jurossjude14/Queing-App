import Ringtone from '../assets/iphone_ding.mp3';

const ButtonAnnounceResult = ({cuegenid}) => {
    const playRingtone = () => {
        // Replace with the URL of your doorbell sound effect
        const audio = new Audio(Ringtone);
        audio.volume = 0.3;
        audio.play();
    };
    const announce = (genNameId) => {
        playRingtone();
        //console.log(genNameId);
        var voices = window.speechSynthesis.getVoices();
        var msg = new SpeechSynthesisUtterance(genNameId);
        msg.voice = voices[2];
      
        msg.pitch = 1.5;
        msg.rate = 1.5;
    
        setTimeout(function() {
          speechSynthesis.speak(msg);
        }, 800);
      }
     
    return (
        <>
        <div className="q-voice"><button className='admin-voiceup' onClick={()=>announce(cuegenid)}>☎ Anounce</button></div>
        </>
    )
}

export default ButtonAnnounceResult
