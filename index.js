import inquirer from 'inquirer';
async function calculatePercentage() {
    let obtained = await inquirer.prompt({
        type: "input",
        name: "obtained",
        message: "What is your obtained marks?"
    });
    let total = await inquirer.prompt({
        type: "input",
        name: "total",
        message: "What is your total marks?"
    });
    let percentage = (obtained.obtained * total.total) / 100;
    console.log(`Your percentage is ${percentage}%`);
    marksheet(Number(percentage));
}
function marksheet(percentage) {
    if (percentage >= 90 && percentage <= 100) {
        console.log("Your Grade is A1");
    }
    else if (percentage >= 80 && percentage < 90) {
        console.log("Your Grade is A+");
    }
    else if (percentage >= 70 && percentage < 80) {
        console.log("Your Grade is A");
    }
    else if (percentage >= 60 && percentage < 70) {
        console.log("Your Grade is B");
    }
    else if (percentage >= 50 && percentage < 60) {
        console.log("Your Grade is C");
    }
    else if (percentage >= 40 && percentage < 50) {
        console.log("You are Failed!!");
    }
    else {
        console.log("Enter Correct Marks!!");
    }
}
calculatePercentage();
