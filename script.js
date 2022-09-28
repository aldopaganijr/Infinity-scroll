const count = 10;
const apiKey = 'bie5BlgSFe4J3MsSm_bXdrhQiAOxgopiB0tH33rabY4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        
    }
}

getPhotos();