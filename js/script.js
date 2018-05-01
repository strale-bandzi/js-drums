function drumSound(event){
    const audio = document.querySelector(`audio[data-key='${event.keyCode}'`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}'`);
    
    // ${event.keyCode} in example above is string interpolation
    // easy access to object properties without breaking a string code
    // and of course we are using backticks ``

    if(!audio) {return;}    //if it is not audio, don't play
    audio.currentTime = 0; //rewind to start of sound 
    audio.play();
    key.classList.add('playing');
    
}

function removeTransition(event){
    if(event.propertyName !== 'transform'){ return;}

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key=>key.addEventListener('transitionend', removeTransition));

// when key is pressed down, play drumSound function

window.addEventListener('keydown', drumSound);