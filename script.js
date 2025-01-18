// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your actual EmailJS public key)
emailjs.init("ftHMBZfK0Pum-8GGK");

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "admin" && password === "password") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("Invalid username or password.");
    }
}

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

function addRecord() {
    const animalName = document.getElementById("animalName").value;
    const recordType = document.getElementById("recordType").value;
    const recordDate = document.getElementById("recordDate").value;
    const details = document.getElementById("details").value;

    if (animalName && recordType && recordDate && details) {
        const recordList = document.getElementById("recordList");
        const record = document.createElement("p");
        record.textContent = `Animal: ${animalName}, Type: ${recordType}, Date: ${recordDate}, Details: ${details}`;
        recordList.appendChild(record);

        // Send the record via EmailJS
        sendEmailNotification(animalName, recordType, recordDate, details);

        alert("Record added successfully!");
        document.getElementById("entryForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}

function sendEmailNotification(animalName, recordType, recordDate, details) {
    const templateParams = {
        to_email: "danialvis0987@yahoo.com",
        animal_name: animalName,
        record_type: recordType,
        record_date: recordDate,
        details: details,
    };

    emailjs.send("service_s81t1xq", "template_ub4i2qm", templateParams)
        .then(() => {
            console.log("Email sent successfully!");
        })
        .catch(error => {
            console.error("Error sending email:", error);
        });
}
