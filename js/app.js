let audioKey = document.querySelectorAll("#key")
let mobilePlay = document.querySelectorAll("#mobileplay")
const audioHiHat = document.querySelector("#audiohihat")
const audioDrumRoll = document.querySelector("#audiodrumroll")
const audioSnare = document.querySelector("#audiosnare")
const audioKick = document.querySelector("#audiokick")

//looping through the audio keys and assigning event listener

audioKey.forEach(function(key){
    key.addEventListener('keydown', (e) => {
        playSound();
    });
})


window.addEventListener('keydown', (e) =>{
    playSound(e.key);
})



function playSound(key){
    if (key == 'H' || key == 'h'){
        audioHiHat.play()
    }

    else{
        audioHiHat.pause();
    }

    if (key == 'D' || key == 'd'){
        audioDrumRoll.play()
    }
    else{
        audioDrumRoll.pause();
    }
    
    if (key == 'S' || key == 's'){
        audioSnare.play()
    }
    else{
        audioSnare.pause();
    }

    if (key == 'K' || key == 'k'){
        audioKick.play()
    }
    else{
        audioKick.pause();
    }
    
}

// for mobile

const audios = [audioHiHat, audioDrumRoll, audioSnare, audioKick];

mobilePlay.forEach(function(mplay, mplayIndex){
    mplay.addEventListener('click', function(){
        audios[mplayIndex].play();
    });
})
