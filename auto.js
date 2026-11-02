function solve(){
    const parser = new DOMParser;
    const qBtns = document.querySelectorAll('button.v2-qbtn')

    qBtns[0].click()


    function loop(n){
        var q = 40 - n
        fetch(`${location.pathname.replace(/\/$/, '')}/pytanie/${q+1}/`)
        .then(response => response.json())
        .then(data => {
            const ansUrl = 'https://zawodowe.edu.pl/technik-informatyk/INF.03/' + data.question.slug
            fetch(ansUrl)
            .then(response => response.text())
            .then(rawPage => {
                const page = parser.parseFromString(rawPage, 'text/html')
                const ansId = page.querySelector('div[data-is-correct=true]').getAttribute('data-answer')
                document.querySelector(`div[data-answer="${ansId}"]`).click()
                

                if(qBtns[q+1]){
                    qBtns[q+1].click()
                } else{
                    document.getElementById('finishExam').click()
                    document.getElementById('confirmModalAction').click()
                }
        })})
        

        if(n>1){
            setTimeout(() => loop(n-1), (Math.random() * (48 - 42) + 42) * 1000);
    }}

    setTimeout(() => loop(40), (Math.random() * (48 - 42) + 42) * 1000);

}
solve()
