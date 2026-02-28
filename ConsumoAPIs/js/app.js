import { ApiRequest } from "./apiRequest.js"

document.addEventListener('DOMContentLoaded', function() {
    ApiRequest.initialize()
    setupEventListeners()
});

function setupEventListeners(){
    document.getElementById('galleryBtn').addEventListener('click',galleryApiRequest)    
}

function galleryApiRequest(){
    ApiRequest.galleryApiRequest()
}

    