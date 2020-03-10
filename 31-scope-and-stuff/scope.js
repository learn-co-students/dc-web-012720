function favoriteTeacher() {
    teacher = "Dumbledore"
    console.log("Inside function: ", teacher)
}


function sendEmail() {
    if (teacher) {
        console.log("sending email to someone")
    } else {
        console.log("please provide name")
    }
}