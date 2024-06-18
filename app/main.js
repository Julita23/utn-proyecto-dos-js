const gridDiv = document.querySelector('.grid');

// API
const urlApiHP = "https://hp-api.onrender.com/api/characters";

// search for information about each character
fetch(urlApiHP)
  .then((response) => response.json())
  .then((data) => {
    let charactersHTML = ''; // Definir charactersHTML aquí
    data.forEach(character => {
      charactersHTML += `
        <div class="character">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p>${character.house || 'Unknown'}</p>
        </div>
      `;
    });
    gridDiv.innerHTML = charactersHTML;
  })
  .catch(error => {
    console.error('Error fetching the characters:', error);
  });