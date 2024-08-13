function showPanel(panelId) {
  // Hide all panels
  document.querySelectorAll(".content").forEach((panel) => {
    panel.classList.remove("active");
  });

  document.querySelectorAll(".menu-active").forEach((li) => {
    li.classList.remove("menu-active");
  });

  // Show the selected panel
  document.getElementById(panelId).classList.add("active");

  // Toggle menu item
  document.getElementById(panelId + "-button").classList.add("menu-active");
}

// Navigate using arrow keys
document.addEventListener("keydown", function (e) {
  const menuItems = document.querySelectorAll(".sidebar > .menu li a");
  let currentIndex = Array.from(menuItems).findIndex((item) =>
    item.classList.contains("menu-active"),
  );

  if (e.key === "ArrowDown") {
    // Move to the next menu item
    currentIndex = (currentIndex + 1) % menuItems.length;
  } else if (e.key === "ArrowUp") {
    // Move to the previous menu item
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
  }

  // Trigger the click event on the new active menu item
  menuItems[currentIndex].click();
});

document.querySelector(".email-link").addEventListener("click", function (e) {
  e.preventDefault();
  const email = this.querySelector(".value").textContent;
  navigator.clipboard
    .writeText(email)
    .then(function () {
      const notification = document.getElementById("notification");
      notification.style.display = "block";
      setTimeout(function () {
        notification.style.display = "none";
      }, 1000);
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
    });
});
