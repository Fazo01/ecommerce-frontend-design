

// FOOTER
function toggleDropdownFooter(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function selectLangFooter(name, flag) {
  document.querySelector(".selected img").src = flag;
  document.querySelector(".selected span").textContent = name;
  document.getElementById("dropdown").style.display = "none";
}

window.addEventListener("click", function (e) {
  if (!e.target.closest(".language-selector")) {
    document.getElementById("dropdown").style.display = "none";
  }
});
