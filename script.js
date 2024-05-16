document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");
    if (!userName) {
        const modal = document.getElementById("nameModal");
        const span = document.getElementById("submitName");

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        document.getElementById("submitName").addEventListener("click", function() {
            const name = document.getElementById("userName").value;
            if (name) {
                localStorage.setItem("userName", name);
                modal.style.display = "none";
                document.getElementById("name").innerText = name;
            }
        });
    } else {
        document.getElementById("name").innerText = userName;
    }
});

document.getElementById("changeNameBtn").addEventListener("click", function() {
    // Clear local storage
    localStorage.clear();
    
    // Reload the page
    window.location.reload();
});

