function setAlarm() {
  const now = new Date();
  const alarmTime = new Date(now.getTime() + 5 * 60000); // Set alarm after 5 minutes

  const timeDifference = alarmTime - now;
  
  displayMessage(`Alarm set for ${formatTime(alarmTime)}`);
  
  alarmTimeout = setTimeout(() => {
    playAlarm();
    displayMessage("Alarm!");
  }, timeDifference);
}

function stopAlarm() {
  clearTimeout(alarmTimeout);
  displayMessage("Alarm stopped");
}

function playAlarm() {
  const alarmSound = document.getElementById("alarmSound");
  alarmSound.play();
}

function displayMessage(message) {
  const messageContainer = document.getElementById("message");
  messageContainer.innerText = message;
}

function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

document.getElementById("setAlarmBtn").addEventListener("click", setAlarm);
document.getElementById("stopAlarmBtn").addEventListener("click", stopAlarm);
