
const tbody = document.getElementById("tbody");

let output = '';
const randerData = data => {
  data.forEach((item) => {
    // console.log(item);
    output += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.address.city}</td>
        <td class="actions">
          <button id="delet-post" class="btn btn-danger" value="${item.id}">Remove</button>
        </td>
      </tr>
        `;
  });
  tbody.innerHTML = output;
}

// data get 
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => randerData(data));

// function removeUser(id) {
//    const url = "https://jsonplaceholder.typicode.com/users/"+id;
//    console.log(url);
//   }

let url = "https://jsonplaceholder.typicode.com/users/";
tbody.addEventListener("click", (e) => {

  if (e.target.id == "delet-post") {
    let id = e.target.value;
   
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(()=>location.reload())
  }
});
 