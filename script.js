 function toggleDropdown() {
      document.getElementById("dropdown").style.display =
        document.getElementById("dropdown").style.display === "flex" ? "none" : "flex";
    }

    function selectLang(name, flag) {
      document.querySelector(".selected img").src = flag;
      document.querySelector(".selected span").textContent = name;
      document.getElementById("dropdown").style.display = "none";
    }

    // Close dropdown when clicking outside
    window.addEventListener("click", function(e) {
      if (!e.target.closest(".language-selector")) {
        document.getElementById("dropdown").style.display = "none";
      }
    });