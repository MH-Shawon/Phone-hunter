document.getElementById('error-massage').style.display= 'none';


// search input 
const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clr data 

    searchField.value = ' ';
    document.getElementById('error-massage').style.display= 'none';


// load phone Data 
const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
 fetch (url)
 .then(res =>res.json())
 .then(data => displayPhone(data.data))
 .catch(error => displayError(error))
}

const displayError = error => {
  document.getElementById('error-massage').style.display= 'block'
}

const displayPhone = phones=>{
    const searchResults =document.getElementById('search-results');
    searchResults.textContent = ' ';
    // error massage 
    if(phones.length == 0){
        document.getElementById('phn-not-found').style.display ='block'
    }
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
            
             <button onclick="loadPhoneDetail()" class= "p-1 m-3 w-25 bg-primary bg-gradient text-white rounded-3">Details
            </button>
            
          </div>
        `;
        searchResults.appendChild(div)
    })
}
    
const loadPhoneDetail = details =>{
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data.slug))
}

const displayPhoneDetails = phone =>{
  
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
             
              <button onclick="loadPhoneDetail()" class= "p-1 m-3 w-25 bg-primary bg-gradient text-white rounded-3">Details
              </button>
            </div>
  `;
  phoneDetails.appendChild(div)

}
