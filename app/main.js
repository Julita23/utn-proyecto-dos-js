const gridDiv = document.querySelector('.grid');

const urlApiHP = "https://hp-api.onrender.com/api/characters";

fetch(urlApiHP)
.then((response) => response.json())
.then((data) => {
   data.forEach(character => {

   });
        
    });
})