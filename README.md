### What is this?

Absolute grades aren't very useful for employers (i.e: 17/20)

If you use relative grades (i.e: Top 20% of people enrolled in the course), you can paint a much clearer picture. 

By running this script from your curriculum page from fenixedu, you can get the relative grades for each course you were enrolled in, which you can then provide to potential employers.

### How to use

1. Go to your [curriculum page](https://fenix.tecnico.ulisboa.pt/student/consult/curriculum) and click "View curricular plan"

1. Open the browser's Dev tools (usually F12) and select the console

1. Paste the following snippet onto the console and press enter:

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.rawgit.com/ric2b/relative-grades-fenix-IST/master/relative-grades-fenix-IST.js';
        document.head.appendChild(script);

    #### If you want to exclude non-evaluated students use this instead:

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://raw.githubusercontent.com/ric2b/relative-grades-fenix-IST/exclude-non-evaluated/relative-grades-fenix-IST.js';
        document.head.appendChild(script);


1. Copy the results into a spreadsheet program like Excel

1. Do any desired calculations, such as weighted averages by ECTS 
    > in Excel: `=SUMPRODUCT(G2:G29;H2:H29)/SUM(H2:H29)`, where G's are the values and H's are the weights

1. The results appear in the order of the curriculum, so if you want to split your calculations between Bachelor's degree and Master's degree you may cut the last few lines into a separate spreadsheet page

### About the math

The script calculates a percentage of how your grade compares with others. But how is this calculated?

For each course the script counts how many people had a grade `above` yours and how many had the `same`. The remaining people either had a grade below yours or were not evaluated. `total` represents the total number of students who registered for the course. The percentage for each course is calculated as

    (above + same/2) / total

This formula is nowhere near perfect and is intended as an estimation. You should understand the implications of this formula. If you do not agree with it do not use these results or tweak the script for your own use. You can also suggest how to improve the formula.

As a last remark: at least in some degrees there is no good notion of "class" or even "year". Therefore, your relative grades are not directly comparable to others.
