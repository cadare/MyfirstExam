const detailContainer = document.querySelector(".product-item");




const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const url = ("https://sookoob.com/wp-json/wp/v2/posts/" + id + "?consumer_key=ck_c46e68c954377a76a671318b1b1492e8a0079833")


async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchProduct();










function createHtml(detail) {

    detailContainer.innerHTML = ` <div class="mainDetail detailItems">
    <h1 class="title-api">${detail.title.rendered}</h1>
    <div class="details-image" 
    style="background-image: url('${detail.better_featured_image
        .source_url}')">
        </div>
       
        <p>${detail.date}</p>

    
  
    <p>${detail.content.rendered}</p>
   
 
                               </div>
                               </div>
                             `;

}