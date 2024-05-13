function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var currentDate = new Date(document.getElementById('currentDate').value);

    var age = calculateAgeDifference(dob, currentDate);

    document.getElementById('result').innerText = "Your age is: " + age.years + " years, " + age.months + " months, and " + age.days + " days.";
}

function calculateAgeDifference(dob, currentDate) {
    var age = {};

    var diff = currentDate - dob;
    age.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    age.months = Math.floor(age.days / 30.44); // Average number of days in a month
    age.years = Math.floor(age.months / 12);

    // Calculate remaining months after subtracting years
    age.months -= age.years * 12;

    // Calculate remaining days after subtracting years and months
    age.days -= age.years * 365 + age.months * 30.44;

    return age;
}

   
