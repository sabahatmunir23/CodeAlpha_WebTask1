function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdateInput) {
        resultDiv.innerText = "Please select a valid date.";
        resultDiv.classList.add('fade-in');
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    resultDiv.innerText = `You are ${age} years old.`;
    resultDiv.classList.add('fade-in');
}
