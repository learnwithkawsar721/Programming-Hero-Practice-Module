
// Title Color Change 

const sectionTitles = document.querySelectorAll('.section-title');

for (const sectionTitle of sectionTitles) {
    sectionTitle.style.color = "red";
}

// Top player Bg change

const players = document.querySelectorAll('.player');

for (const player of players) {
    player.style.backgroundColor = "rgb(0, 0, 71)";
    player.style.marginLeft = "10px";
    player.style.padding = "10px";
    player.style.borderRadius = "10px";
    player.children[1].style.color = "#fff";
}


document.getElementById('addButton').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = "add New List"
    const ul = document.getElementById('menu');
  
    ul.appendChild(li);
})

const updatNumber = document.getElementById('updatNumber');

document.getElementById('incement').addEventListener('click', function () {
    if (updatNumber.value >= 5) {
        this.setAttribute('disabled', true)
    } else {
        updatNumber.value = Number(updatNumber.value) + 1;
    }
})
document.getElementById('dicement').addEventListener('click', function () {
    if (updatNumber.value > 0) {
        updatNumber.value = Number(updatNumber.value) - 1;
    } else {
        this.setAttribute('disabled', false)
    }
})