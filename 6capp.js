/* Create a Student Result Sheet in a table. Write a JavaScript logic to validate the 3 subject
marks details and check if a student score less than 35 in any subject. If yes, then his
grade should be displayed as Fail.
 Calculate the marks, the average and display the grade of a student.*/

function calculate() {
    var allScores = [
        [79,97,85],
        [67,54,56],
        [63,67,75],
        [23,34,40]
    ],
    tab = document.getElementById("tableID");
    
    //console.log(tab.rows.length)
    //console.log(tab.rows[0].cells.length)

    /* This for loop loads the marks data from the array to the table in the subject colunms */
    for (i=0; i < tab.rows.length - 1; i++) {      //Rows
        for (j=1; j < tab.rows[i].cells.length; j++) {        //Cells
            tab.rows[i+1].cells[j].innerHTML = allScores[i][j-1];
        }
    }

    /* Code to call function to calculate average and display in table in documnent */
    for (let i=0; i < allScores.length; i++) {
        let scoresForAStudent = allScores[i];
        let avg = calcAverage(scoresForAStudent);
        //scoresForAStudent.push(avg);
        tab.rows[i+1].cells[4].innerHTML = Math.round(avg);
        if (Math.round(avg) > 80) {
            tab.rows[i+1].cells[5].innerHTML = "A";
        } else if (Math.round(avg) > 60 && Math.round(avg) < 81) {
            tab.rows[i+1].cells[5].innerHTML = "B";
        } else if (Math.round(avg) > 35 && Math.round(avg) < 61) {
            tab.rows[i+1].cells[5].innerHTML = "C";
        } else {
            tab.rows[i+1].cells[5].innerHTML = "Fail";
        }
    }

    /* Function to calculate average */
    function calcAverage(scores) {
        //Get the sum of all the scores
        let sum=0;
        for (let i=0; i < scores.length; i++) {
            sum = sum + scores[i];
        }
        let avg = sum / scores.length;
        return avg;
    }
}
