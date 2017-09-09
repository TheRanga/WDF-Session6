/* This assignment will help you in mastering the following concepts:
 JavaScript Logics to Dynamically Display the Content
5. Problem Statement
 Create a JavaScript logic to dynamically display the number of table row and column. */

function loadTable() {

        var allScores = [
                [79,97,85,87,"A"],
                [67,54,56,59,"C"],
                [63,67,75,68,"B"],
                [23,34,40,32,"Fail"]
        ],
        tab = document.getElementById('tableID');
        /* This for loop loads the data from the array to the table */
        for (i=0; i < tab.rows.length - 1; i++) {      //Rows
                for (j=1; j < tab.rows[i].cells.length; j++) {        //Cells
                        tab.rows[i+1].cells[j].innerHTML = allScores[i][j-1];
                }
        }

        console.log("Number of rows in the table are: " + tab.rows.length);
        console.log("Number of columns in the table are: " + tab.rows[0].cells.length);
        

}

