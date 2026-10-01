# zawodowe.edu.pl Answers Fetcher
Script for retrieving answers for exams at zawodowe.edu.pl
##Usage
1. Copy and paste the following code into your browser's console:
    ```javascript
    fetch('https://raw.githubusercontent.com/TheIrregularity/zawodowe-edu-pl-answers/main/script.js')
    .then(res => res.text())
    .then(script => eval(script));
    ```
2. After that when selecting the question the correct answer will be highlighted
