(function() {
  const unlocked = localStorage.getItem("caugia-auth");

  if (unlocked !== "true") {
    window.location.href = "/lock.html";
  }
})();
