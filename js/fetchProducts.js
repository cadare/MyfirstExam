const url = "https://sookoob.com/wp-json/wp/v2/posts?_embed&per_page=100"

console.log(url)

// const productContainer = document.querySelector('.productPage');


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)

    displayProducts(products)





}

getProducts(url)

function displayProducts(products) {
    const productContainer = document.querySelector('#productContainer')


    products.forEach(function (product) {



        productContainer.innerHTML +=

            ` 
            <div class="mainDetail mainFetch">
        <a href="postDetail.html?id=${product.id}" class="card_fetch">
    
  

        
        <h1 class="title-api">${product.title.rendered}<h1/>
      
           
        <div class="product-images" 
        style="background-image: url('${product.better_featured_image
            .source_url}')"></div>
        
        <p class="paragrapy">${product.excerpt.rendered}<p/>
        
       </a>  
       
     

             </div>  
         `







    })







}