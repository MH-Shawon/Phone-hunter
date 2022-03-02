// search input 
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clr data 

    searchField.value = ' ';


// load phone Data 
const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
 fetch (url)
 .then(res =>res.json())
 .then(data => displayPhone(data.data))
 
}

const displayPhone = phones=>{
    const searchResults =document.getElementById('search-results');
    phones.forEach(phone => {
        console.log(phone);
        const div= document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <h5>${phone.brand}</h5>
            </div>
            <div class=" text-center">
             <button class= "p-1 m-3 bg-primary bg-gradient text-white rounded-3">Details</button>
            </div>
          </div>
        `;
        searchResults.appendChild(div)
    })
}
    

