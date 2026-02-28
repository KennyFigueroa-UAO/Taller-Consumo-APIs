
export const ApiRequest = {

    initialize(){
        this.galleryApiRequestEndpoint = "https://api.pexels.com/v1/"
        this.galleryApiRequestAPIKey = "lpsgHWJRxFEl2i4ZnWAPPiT28gK5jPd4pu4mpnIU3aRNWg8CqnecM92b"
    },

    async galleryApiRequest(){
        let resultSection = document.getElementById('result-section')
        const galleryData = await this.getGalleryData()
        
        resultSection.innerHTML = ""
        
        galleryData.photos.forEach(item => {
            resultSection.innerHTML += `
                <div class="gallery-item">
                    <img src="${item.src.original}" alt="${item.alt}" width="300" height="500">
                    <p>Fotografo: ${item.photographer}</p>
                    <p>${item.alt}</p>
                </div>
                `
        });
    },

    getGalleryData(){
        
        const query = document.getElementById('searchInput').value
        const itemsNumber = document.getElementById('itemsNumberInput').value

        if(query === ""){
            alert("Por favor ingrese un tema de busqueda para las imagenes")
            return
        }

        if(itemsNumber === "" || itemsNumber <= 0){
            alert("Por favor ingrese un numero valido de imagenes a mostrar")
            return
        }

        const url = `${this.galleryApiRequestEndpoint}search?query=${query}&per_page=${itemsNumber}`
        console.log(url);
        const headers = {
            'Authorization': this.galleryApiRequestAPIKey
        }

        return fetch(url,{
            method: 'GET',
            headers: headers})
                .then(response => response.json())
                .then(data => data)
    },

}