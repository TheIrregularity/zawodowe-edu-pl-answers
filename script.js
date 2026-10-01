const parser = new DOMParser;
function getAns(e){
    fetch(`${location.pathname.replace(/\/$/, '')}/pytanie/${e.target.textContent}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data.question.slug)
        const ansUrl = 'https://zawodowe.edu.pl/technik-informatyk/INF.03/' + data.question.slug
        fetch(ansUrl)
        .then(response => response.text())
        .then(rawPage => {
            const page = parser.parseFromString(rawPage, 'text/html')
            const ansId = page.querySelector('button[data-is-correct=true]').getAttribute('data-answer')
            document.querySelector(`button[data-answer="${ansId}"]`).style['color'] = "blue"
})})}
document.querySelectorAll('button.v2-qbtn').forEach(btn => btn.addEventListener('click', getAns))
