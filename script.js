// HEADER
function toggleDropdown2(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("dropdown2");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

function selectLangHeader(name, flag) {
  document.querySelector(".selected2 img").src = flag;
  document.querySelector(".selected2 span").textContent = name;
  document.getElementById("dropdown2").style.display = "none";
}

window.addEventListener("click", function (e) {
  if (!e.target.closest(".language-selector2")) {
    document.getElementById("dropdown2").style.display = "none";
  }
});
//
function toggleDropdownlang() {
  const dropdown = document.getElementById("currencyDropdown");
  dropdown.classList.toggle("active");
}

function selectOption(value) {
  // Update selected value
  document.getElementById("selectedValue").textContent = value;

  // Remove previous selection
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.classList.remove("selected");
  });

  // Add selection to clicked item
  event.target.classList.add("selected");

  // Close dropdown
  document.getElementById("currencyDropdown").classList.remove("active");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("currencyDropdown");
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }
});

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
