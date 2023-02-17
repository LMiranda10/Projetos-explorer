    import { 
        minutesDisplay,
        secondsDisplay,
        pauseButton,
        playButton,
        minutes
    } from "./main.js"

    export let timerTimeOut

    
    export function resetTimer() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    export function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
      }
    
    export function countTimer() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
    
            if (minutes <= 0 && seconds <= 0) {
                updateTimerDisplay(minutes, 0)
                pauseButton.classList.add('hide')
                playButton.classList.remove('hide')
                return
            }
            
            if (seconds <= 0) {
                seconds = 60
    
    
                --minutes
                // minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
            }
    
            updateTimerDisplay(minutes, String(seconds - 1))
    
            countTimer()
        }, 1000)
    }
