const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data))
}
loadUsers();

const displayUser = data => {
    const users = data.results;
    const usersContainer = document.getElementById('usersContainer');

    for (const item of users) {
        const {
            title,
            first,
            last
        } = item.name;
        const p = document.createElement('p');

        p.innerText = `${title} ${first} ${last}`;
        usersContainer.appendChild(p);
        // console.log(item);
    }


}