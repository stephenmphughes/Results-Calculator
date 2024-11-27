// Function to create input fields
function createInputFields() {
    const numSubjects = parseInt(document.getElementById("numSubjects").value);
    const subjectInputs = document.getElementById("subjectInputs");


    // Create input
    for (let i = 0; i < numSubjects; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.id = `subject${i}`;
        input.placeholder = `Subject ${i + 1} Score`;
        subjectInputs.appendChild(input);
        subjectInputs.appendChild(document.createElement("br"));
    }

    // Button to calculate results
    const button = document.createElement("button");
    button.textContent = "Get Results";
    button.onclick = calculateResults;
    subjectInputs.appendChild(button);
}

// Function to calculate all and display results
function calculateResults() {
    const inputs = document.querySelectorAll("#subjectInputs input");
    let scores = [];
    let total = 0;

    // Collect scores and calculate total
    for (let i = 0; i < inputs.length; i++) {
        const score = parseFloat(inputs[i].value);
        scores.push(score);
        total += score;
    }

    // Calculate the average
    const average = total / scores.length;

    // Calculate the grades
    let grades = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 90) {
            grades.push("A");
        } else if (scores[i] >= 80) {
            grades.push("B");
        } else if (scores[i] >= 70) {
            grades.push("C");
        } else if (scores[i] >= 60) {
            grades.push("D");
        } else {
            grades.push("F");
        }
    }

    // print results back to html
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results:</h2>";
    for (let i = 0; i < scores.length; i++) {
        resultsDiv.innerHTML += `Subject ${i + 1}: ${scores[i]} (Grade: ${grades[i]})<br>`;
    }
    resultsDiv.innerHTML += `<br><strong>Average Score: ${average.toFixed(2)}</strong>`;
}
