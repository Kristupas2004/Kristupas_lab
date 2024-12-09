
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
document.getElementById('mode').addEventListener('click', toggleMode);

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
document.getElementById('mode').addEventListener('click', toggleMode);

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateClock, 1000);

updateClock();

/* 12 laboras */
document.getElementById("submit-button").addEventListener("click", function () {
    const contactForm = document.getElementById("contact-form");
    const formData = new FormData(contactForm);
    
    const contactData = {
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        attribute1: parseInt(formData.get("attribute1")),
        attribute2: parseInt(formData.get("attribute2")),
        attribute3: parseInt(formData.get("attribute3")),
        attribute4: parseInt(formData.get("attribute4")),
        attribute5: parseInt(formData.get("attribute5"))
    };
    
    // email patikrinimas
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contactData.email)) {
        alert("Neteisingas el. pašto formatas.");
        return;
    }
    
    // tel nr patikrinimas
    const phonePattern = /^\+?[0-9]{10,15}$/;
    if (!phonePattern.test(contactData.phone)) {
        alert("Neteisingas telefono numeris.");
        return;
    }
    
    // uzregistruojame duomenis
    console.log(contactData);
    
    // Atvaizduojame duomenis
    const resultDiv = document.getElementById("contact-result");
    resultDiv.innerHTML = `
        <p>Vardas: ${contactData.firstName}</p>
        <p>Pavardė: ${contactData.lastName}</p>
        <p>El. pašto adresas: ${contactData.email}</p>
        <p>Telefono numeris: ${contactData.phone}</p>
        <p>Adresas: ${contactData.address}</p>
        <p>Požymis 1: ${contactData.attribute1}</p>
        <p>Požymis 2: ${contactData.attribute2}</p>
        <p>Požymis 3: ${contactData.attribute3}</p>
        <p>Požymis 4: ${contactData.attribute4}</p>
        <p>Požymis 5: ${contactData.attribute5}</p>
    `;
    
    // apskaiciuojame vidutini pazymi
    const attributes = [
        contactData.attribute1,
        contactData.attribute2,
        contactData.attribute3,
        contactData.attribute4,
        contactData.attribute5
    ];
    const average = attributes.reduce((a, b) => a + b, 0) / attributes.length;
    const averageResultDiv = document.getElementById("average-result");
    
    let color;
    if (average < 5) {
        color = "red";
    } else if (average < 10) {
        color = "orange";
    } else {
        color = "green";
    }
    
    averageResultDiv.innerHTML = `
        <p style="color: ${color};">${contactData.firstName} ${contactData.lastName} (${contactData.email}): Vidurkis - ${average.toFixed(2)}</p>
    `;
});
