// Initialize variables
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
const heartCountEl = document.getElementById('heart-count');
const coinCountEl = document.getElementById('coin-count');
const copyCountEl = document.getElementById('copy-count');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

// Heart button functionality
document.querySelectorAll('.heart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.bg-white');
    const number = card.querySelector('p.text-xl').textContent;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Number ${number} copied to clipboard!`);
      copyCount++;
      copyCountEl.textContent = copyCount;
    });
  });
});

// Call button functionality
document.querySelectorAll('.call-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (coinCount < 20) {
      alert('Insufficient coins! You need at least 20 coins to make a call.');
      return;
    }
    const card = btn.closest('.bg-white');
    const name = card.querySelector('h3').textContent;
    const number = card.querySelector('p.text-xl').textContent;
    alert(`Calling ${name} at ${number}`);
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    // Add to history with current time
    const now = new Date().toLocaleString();
    const li = document.createElement('li');
    li.textContent = `${name} - ${number} (Called at ${now})`;
    historyList.appendChild(li);
  });
});

// Clear history
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
});
