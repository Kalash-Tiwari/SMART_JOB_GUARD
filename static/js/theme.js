function setTheme(themeName) {
    // Purani theme hatao
     document.body.classList.remove(
        "theme-red",
        "theme-green",
        "theme-blue",
        "theme-pink",
        "theme-purple",
        "theme-orange",
        "theme-light",
        "theme-dark"
    );

    // Nayi theme lagao
    document.body.classList.add(themeName);

    // Save karo
    localStorage.setItem("theme", themeName);
}

// Page load pe theme load karo
window.onload = function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("theme-light"); // default
    }
};