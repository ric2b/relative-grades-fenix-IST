separator = ','

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

courserows = document.getElementsByClassName("scplanenrollment");

var statsURIs = [];
for(const row of courserows) {
    statsTag = row.getElementsByTagName("a")[1];
    if(typeof statsTag != 'undefined') {
        statsURIs.push(statsTag.href);
    }
}

// Print the column names
console.log("Course name", '\t', "My Grade", '\t', "People above", '\t', "People tied", '\t', "People below", '\t', "In the top x%")

// GET all the URIs, calculate all the things
for(const uri of statsURIs) {
    statsPage = httpGet(uri);
    data = statsPage.match(/data = (.*);/); // find the data in the page
    data = JSON.parse(data[1]); // turn it into a JSON object
    stats(data);
}

function stats(data) {
    var myId = data["student"]["id"];
    var myGrade;

    var finalGrades;

    data["evaluations"].forEach(function(grades) {
        if(grades["name"] === "Pauta Final" || grades["name"] === "Marksheet") {
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
        else if(element["grade"] === myGrade) {
            same += 1;
        } 
    });

    console.log(data["name"], '\t', myGrade, '\t', above, '\t', same, '\t', total-above-same, '\t', (100 * (above+same/2)/total).toString().replace(/\./g, separator))
}
