const searchButton = document.getElementById('button');
const digimonNameInput = document.getElementById('Digi-name-input');
const digimonNameOuput = document.getElementById('Digimon-name');
const digimonLevel = document.getElementById('digimon-level')
const digimonImage = document.getElementById('Digimon-img')

searchButton.addEventListener('click', async () => {
    const name = digimonNameInput.value.trim()

    try{
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`, {
            method: 'GET'
        })

        const data = await response.json()

        displayData(data[0])
    }catch(error){
        console.error('There has been an error!')
    }

})

function displayData(data){
    console.log(data)

    digimonNameOuput.innerText = data.name;
    digimonLevel.innerText = `Level: ${data.level}`;
    digimonImage.src = data.img || "";
    digimonImage.alt = data.name || "";

}