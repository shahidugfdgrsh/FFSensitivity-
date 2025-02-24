function checkLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === "flamemastergamer" && passwordInput === "Go10k") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("phoneContainer").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect username or password. Please try again.";
    }
}

function redirectToSensitivity(phoneName) {
    const sensitivityData = {
        "Samsung Galaxy S21": "DPI: 800, Sensitivity: 50",
        "iPhone 13": "DPI: 1000, Sensitivity: 60",
        "Google Pixel 6": "DPI: 900, Sensitivity: 55",
        "OnePlus 9": "DPI: 750, Sensitivity: 53",
        "Xiaomi Redmi Note 10": "DPI: 850, Sensitivity: 52",
        "Oppo Reno 5": "DPI: 950, Sensitivity: 54",
        "Vivo V21": "DPI: 800, Sensitivity: 51",
        "Nokia G50": "DPI: 720, Sensitivity: 49",
        "Realme GT": "DPI: 880, Sensitivity: 56",
        "Motorola Moto G Power": "DPI: 700, Sensitivity: 48",
        "Huawei P40 Lite": "DPI: 790, Sensitivity: 50",
        "Asus Zenfone 8": "DPI: 810, Sensitivity: 57",
        "LG Velvet": "DPI: 830, Sensitivity: 53",
        "Sony Xperia 10 III": "DPI: 860, Sensitivity: 54",
        "Samsung A52": "DPI: 880, Sensitivity: 55",
        "iPhone 12": "DPI: 900, Sensitivity: 56",
        "Nokia 8.3 5G": "DPI: 780, Sensitivity: 52",
        "Xiaomi Mi 11": "DPI: 830, Sensitivity: 55",
        "Poco X3 Pro": "DPI: 870, Sensitivity: 59",
        "Tecno Camon 18": "DPI: 810, Sensitivity: 50",
        "Infinix Zero X": "DPI: 800, Sensitivity: 51",
        "ZTE Axon 20": "DPI: 820, Sensitivity: 53",
        "Alcatel 3X": "DPI: 740, Sensitivity: 48",
        "Micromax IN Note 1": "DPI: 750, Sensitivity: 49",
        "TCL 20 Pro 5G": "DPI: 900, Sensitivity: 
