
$(document).ready(function(){
    var dropdowns = document.querySelectorAll('#dropdown');
    var dropdown = dropdowns.forEach(myfonction);
    function myfonction(item) {
        
        $(item).click(function(){
            if (item.lastElementChild.classList.toggle('show')== true ) {
                console.log("ok");
            } else {
                console.log("beshi");
            }
            
     });
    }
});





// =============== Dropwon ==============


// const dropdowns = document.querySelectorAll('#dropdown');

// dropdowns.forEach(dropdown);

// function dropdown(item,index) {
//     item.addEventListener('click', function () {
//         item.lastElementChild.classList.toggle('show');
//         console.log(item.lastElementChild.classList[6]);
        

//         // if (item.lastElementChild.classList == 'show') {
//         //    item.lastElementChild.classList.toggle('show');
//         // }
       
//         // item.lastElementChild.classList.toggle('show');
        
//     })
   
// }
// dropdown.addEventListener('click', function () {
//     
//     console.log(dropdwonItem);
//     dropdwonItem.classList.toggle('show');
// });

