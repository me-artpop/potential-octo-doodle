const clockDateEl = document.querySelector('.clock-date');
const clockTimeEl = document.querySelector('.clock-time');

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const date = now.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  clockTimeEl.textContent = time;
  clockDateEl.textContent = date;
}

updateClock();
setInterval(updateClock, 30000);

const buttons = document.querySelectorAll('.app-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
