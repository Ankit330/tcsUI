document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const errorMsg = document.getElementById("errorMsg");

  const admin = { userId: "root", password: "root" };
  const underwriter = { userId: "ankit", password: "ankit" };

  if (role === "admin" && userId === admin.userId && password === admin.password) {
    window.location.href = "admin_home.html";
  } 
  else if (role === "underwriter" && userId === underwriter.userId && password === underwriter.password) {
    window.location.href = "underwriter_home.html";
  } 
  else {
    errorMsg.textContent = "Invalid credentials. Please try again.";
  }
});
