### What is this?

Absolute grades aren't very useful for employers (i.e: 17/20)

If you use relative grades (i.e: Top 20% of people enrolled in the course), you can paint a much clearer picture. 

By running this script from your curriculum page from fenixedu, you can get the relative grades for each course you were enrolled in, which you can then provide to potential employers.

### How to use

1. Go to your [curriculum page](https://fenix.tecnico.ulisboa.pt/student/consult/curriculum) and click "View curricular plan"

1. Open the browser's Dev tools (usually F12) and select the console

1. Paste the script and press enter

1. Copy the results into a spreadsheet program like Excel

1. Do any desired calculations, such as weighted averages by ECTS 
    > in Excel: `=SUMPRODUCT(G2:G29;H2:H29)/SUM(H2:H29)`, where G's are the values and H's are the weights

1. The results appear in the order of the curriculum, so if you want to split your calculations between Bachelor's degree and Master's degree you may cut the last few lines into a separate spreadsheet page
