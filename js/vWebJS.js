// Check the current state and adjust the slider position on page load
document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btn");
	const currentPage = localStorage.getItem("currentPage") || "organization"; // Default to "organization"
  
	if (currentPage === "organization") {
	  btn.style.left = "0"; // Organization position
	} else if (currentPage === "volunteer") {
	  btn.style.left = "120px"; // Volunteer position
	}
  });
  
  // Switch between pages and save the current state
  function switchTo(page) {
	const btn = document.getElementById("btn");
  
	if (page === "organization") {
	  btn.style.left = "0"; // Move slider to the left
	  localStorage.setItem("currentPage", "organization"); // Save state
	  window.location.href = "vWebsite.html"; // Redirect to organization page
	} else if (page === "volunteer") {
	  btn.style.left = "120px"; // Move slider to the right
	  localStorage.setItem("currentPage", "volunteer"); // Save state
	  window.location.href = "vWebsite2.html"; // Redirect to volunteer page
	}
  }
  