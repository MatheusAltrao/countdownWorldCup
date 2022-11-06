const worldCup = new Date("20 Nov 2022 12:00")

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown() {
  const worldCupDate = new Date(worldCup)
  const currentDate = new Date()

  const totalSeconds = (worldCupDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minutesEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds)

  const message = document.getElementById('message')


  if (worldCupDate == currentDate) {
    message.innerText = 'The world cup has already started'
  }

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)


