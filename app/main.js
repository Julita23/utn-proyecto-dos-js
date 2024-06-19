const gridDiv = document.querySelector('.grid');

// API
const urlApiHP = "https://hp-api.onrender.com/api/characters";
const defaultImage = '../assets/hp.png';
const charactersLimit = 40;

// search for information about each character
fetch(urlApiHP)
    .then((response) => response.json())
    .then((data) => {
        let charactersHTML = '';
        data.slice(0, charactersLimit).forEach(character => {
            const imageUrl = character.image ? character.image : defaultImage;
            charactersHTML += `
        <div class="character">
          <img src="${imageUrl}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p>Casa: ${character.house || 'No encontrada'}</p>
          <p>Patronus: ${character.patronus || 'No encontrada'}</p>
          <p>Estado: ${character.alive ? 'vive' : 'fallecido'}</p>
          <p>actor: ${character.actor}</p>
        </div>
      `;
        });
        gridDiv.innerHTML = charactersHTML;
    })
    .catch(error => {
        console.error('Error fetching the characters:', error);
    });

    //scrollButton
    let scrollBtn = document.getElementById("scrollBtn");

    // add event to scroll
    document.addEventListener("scroll", function() {
      // Show or hide the button depending on the scroll position
      if (document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    
    scrollBtn.addEventListener("click", scrollToTop);