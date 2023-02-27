const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}

const displayPhone = phones =>{
    const phonesContianer = document.getElementById("phones-container")
    phones.forEach{
        const phoneDiv = document.createElement("div")
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
        
        `
    }
}
loadPhones()