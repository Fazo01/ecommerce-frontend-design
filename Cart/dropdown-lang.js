const dropdown = document.querySelector(".lang-dropdown");
        const options = document.querySelectorAll(".option");
        const dropdownBtnText = document.getElementById("lang-dropdown-btn-text");
        const selectedText = document.getElementById("selected-text");

        const toggle = () => {
            dropdown.classList.toggle("active");
        };

        const changeText = (option) => {
            option.addEventListener("click", () => {
                // Update button text
                dropdownBtnText.innerHTML = option.innerHTML;
                
                // Update selected display
                selectedText.textContent = option.textContent.trim();
                
                // Close dropdown
                toggle();
            });
        };

        // Add click event to each option
        options.forEach((option) => changeText(option));

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Prevent dropdown from closing when clicking inside
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
