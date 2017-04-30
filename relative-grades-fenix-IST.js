function stats(data) {
    var myId = data["student"]["id"];
    var myGrade;

    var finalGrades;

    data["evaluations"].forEach(function(grades) {
        if(grades["name"] === "Pauta Final") {
            finalGrades = grades;
        }
    });

    finalGrades["grades"].forEach(function(element) {
        if(element["id"] === myId) {
            myGrade = element["grade"]
        }
    });

    var total = finalGrades["grades"].length;
    var above = 0;
    var same = 0;

    finalGrades["grades"].forEach(function(element) {
        if(!isNaN(element["grade"]) && element["grade"] > myGrade) {
            above += 1;
        } 
        if(element["grade"] === myGrade) {
            same += 1;
        } 
    });

    console.log("total: ", total);
    console.log("above: ", above);
    console.log("same: ", same);
    console.log("below: ", total-above-same);

    console.log("you're in the top ", (above+1)/total, "%");

    console.log(data["name"], '\t', myGrade, '\t', above, '\t', same, '\t', total-above-same)
}
