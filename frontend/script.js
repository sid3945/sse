const eventSource = new EventSource('http://localhost:3000/events');

const messagesDiv = document.getElementById('messages');

eventSource.onmessage = (event) => {
  const msg = document.createElement('p');
  msg.textContent = event.data;
  messagesDiv.appendChild(msg);
};

eventSource.onerror = (err) => {
  console.error('EventSource failed:', err);
  eventSource.close();
};