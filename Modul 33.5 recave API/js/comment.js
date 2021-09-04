const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}

const displayComment = comments => {
    const commendArea = document.getElementById('commend-area');

    let totalComment = 0;

    comments.forEach(comment => {
        totalComment++;
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add('card', 'rounded-3', 'mb-3');
        div.innerHTML = `
        <div class="card-header">
            ${comment.name}
        </div>
        <div class="card-body">
            <p class="card-text">${comment.body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
        commendArea.appendChild(div);
    })
    const total = document.getElementById('totalComment');
    total.innerText = totalComment
}