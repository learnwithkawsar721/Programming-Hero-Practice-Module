function loadData() {
    
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>displayData(data))
}

function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>console.log(data))
}


const displayData = data => {
    const ul = document.getElementById("users");;

    for (const user of data) {
        const li = document.createElement("li");
        li.innerText = `Name: ${user.name} Email: ${user.email}`;

        ul.appendChild(li);

       console.log(li);
   }
}