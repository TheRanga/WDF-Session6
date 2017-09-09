
function computeSalary() {

    //ID.value passed to salary variable in below line
    var salary = parseInt(document.getElementById('empSalary').value),
    workingHours = parseInt(document.getElementById('employeeWorkHours').value),
    bonusElement = document.getElementById('bonus1'),
    salaryElement = document.getElementById('totalSalary1'),
    bonus;

    //alert(salary);
    //alert(workingHours);

    if (workingHours>24) {
        alert("Work Hours for a particular day cannot be more than 24")
    } else if (workingHours <=0) {
        alert("Work Hours cannot be less than or equal to zero")
    } else {
        /* Both salary condition and Bonus condition to be fulfilled */
        if (salary > 15000 && workingHours > 10) {
            bonus = salary*.1;
            alert("Basic Salary: " + salary + " Bonus is : " + bonus);
            salary += bonus;
            //alert(salary);
        } else {
            /* if either of the conditions are not satisfied */
            bonus = salary*.05;
            alert("Basic Salary: " + salary + " Bonus is: " + bonus);
            salary += bonus;
            //alert(salary);
        }
    }
    /* displaying the salary and bonus values in the respective fields after calculation */
    bonusElement = bonus;
    salaryElement = salary;
    document.getElementById("totalSalary1").value = salaryElement;
    document.getElementById("bonus1").value = bonusElement;
}



