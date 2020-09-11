const trashcan = document.querySelector('a.delete');

trashcan.addEventListener('click',(e) =>{
    const endpoint = `/api/${trashcan.dataset.id}`;
    
    fetch(endpoint,{
        method:'DELETE'
    })
    .then((reponse) => reponse.json())
    .then((data) => window.location.href = data.redirect)
    .catch(err => console.log(err));
})


