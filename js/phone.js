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
    searchResults.textContent = '';
    // error massage 
    if(phones.length == 0){
        document.getElementById('phn-not-found').style.display ='block'
    } else if(phones.length > 0 ) {
      document.getElementById('phn-not-found').style.display ='none'
      phones.slice(0, 20).forEach(phone => {
        
        
        const div= document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <h5>${phone.brand}</h5>
            </div>
            
             <button onclick="loadPhoneDetail('${phone.slug}')" id="details" class= "p-1 m-3 w-25 bg-primary bg-gradient text-white rounded-3">Details</button>
            
          </div>
        `;
        searchResults.appendChild(div);
        
    })
    }
   
}
    
const loadPhoneDetail = slug => {
  
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone =>{
  console.log(phone)
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="...">
            
              <h3 class="card-title">${phone.name}</h3>
              <h5>${phone.brand}</h5>
              <p>chipSet:${phone.mainFeatures.chipSet}</p>
              <p>displaySize:${phone.mainFeatures.displaySize}</p>
              <p>memory:${phone.mainFeatures.memory}</p>
              <p>memory:${phone.mainFeatures.sensors[0]}</p>
              <p>memory:${phone.mainFeatures.sensors[1]}</p>
              <p>memory:${phone.mainFeatures.sensors[2]}</p>
              <p>memory:${phone.mainFeatures.sensors[3]}</p>
              <p>memory:${phone.mainFeatures.sensors[4]}</p>
              <p>memory:${phone.mainFeatures.sensors[5]}</p>
              
              

             <button class="btn btn-success w-25 mx-auto rounded-3 fw-bolder" id="seeMoreId" onclick="seeMore()">See more</button>
              <div class="card-body" id="seeMoreDetails">
              <p>Bluetooth:${phone.others.Bluetooth}</p>
              <p>GPS:${phone.others.GPS}</p>
              <p>NFC:${phone.others.NFC}</p>
              <p>Radio:${phone.others.Radio}</p>
              <p>USB:${phone.others.USB}</p>
              <p>WLAN:${phone.others.WLAN}</p>
              </div>
              <p>${phone.releaseDate == "" ? "Release Date not found" : phone.releaseDate }</p>
  `;
  phoneDetails.appendChild(div)
  document.getElementById("seeMoreDetails").style.display = "none";
}

const seeMore = () => {
   document.getElementById("seeMoreDetails").style.display = "block";
   document.getElementById("seeMoreId").style.display = "none";
}

