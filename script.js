function checkIn() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message");
  if (!username) {
    message.textContent = "Please enter your name.";
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const lastCheckIn = localStorage.getItem(`gm_${username}`);

  if (lastCheckIn === today) {
    message.textContent = `You already checked in today, ${username}.`;
  } else {
    localStorage.setItem(`gm_${username}`, today);
    message.textContent = `GM, ${username}! You’ve checked in for ${today}.`;
  }
}
