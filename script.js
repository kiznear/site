document.addEventListener("DOMContentLoaded", function() {

function calculateDateDifference() {
    const targetDate = new Date("2006-01-19");

    const currentDate = new Date();

    const timeDifference = currentDate - targetDate;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));

    let resultText;
    if (months == 0) {
        resultText = `${years} years`;
    } else {
    if (months == 1) {
        resultText = `${years} years and ${months} month`
    } else {
        resultText = `${years} years and ${months} months`;
    }
}
    
    document.getElementById("result").textContent = resultText;
}
calculateDateDifference();
});