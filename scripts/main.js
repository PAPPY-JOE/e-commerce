let toggleDefaultSort = false;
let togglePriceSort = false;
let togglePopularitySort = false;
let toggleRatingSort = false;
let toggleSaleSort = false;


// Select

let selectBlock = document.body.querySelector('main .row-head select')

let SelectValue = selectBlock;


// Buttons

let DefaultBtn = document.body.querySelector('main .page-btn #Default-btn')
let PriceBtn = document.body.querySelector('main .page-btn #Price-btn')
let PopularityBtn = document.body.querySelector('main .page-btn #Popularity-btn')
let RatingBtn = document.body.querySelector('main .page-btn #Rating-btn')
let SaleBtn = document.body.querySelector('main .page-btn #Sale-btn')


// Select Options

let DefaultBtn2 = document.body.querySelector('main .row-head select #DefaultBtn')
let PriceBtn2 = document.body.querySelector('main .row-head select #PriceBtn')
let PopularityBtn2 = document.body.querySelector('main .row-head select #PopularityBtn')
let RatingBtn2 = document.body.querySelector('main .row-head select #RatingBtn')
let SaleBtn2 = document.body.querySelector('main .row-head select #SaleBtn')


// Sale Types

let DefaultSort = document.body.querySelector('main .default-sort')
let PriceSort = document.body.querySelector('main .sort-by-price')
let PopularitySort = document.body.querySelector('main .sort-by-popularity')
let RatingSort = document.body.querySelector('main .sort-by-rating')
let SaleSort = document.body.querySelector('main .sort-by-sale')

let toggleDefault = function () {
    if (toggleDefaultSort === false) {
        
        
        DefaultSort.style.display = 'flex';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

        selectBlock.selectedIndex = 0;

    }
}

let togglePrice = function () {

    if (togglePriceSort === false) {

        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'flex';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

        selectBlock.selectedIndex = 1;
    }
   
}

let togglePopularity = function () {

    if (togglePopularitySort === false) {

        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'flex';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

        selectBlock.selectedIndex = 2;

    }
  
}

let toggleRating = function () {
    
    if (toggleRatingSort === false) {

        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'flex';
        SaleSort.style.display = 'none';

        selectBlock.selectedIndex = 3;

    }
   
}

let toggleSale = function () {

    if ( toggleSaleSort === false) {
        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'flex';

        selectBlock.selectedIndex = 4;

    }
   
}





DefaultBtn.onclick = toggleDefault;
PriceBtn.onclick = togglePrice;
PopularityBtn.onclick = togglePopularity;
RatingBtn.onclick = toggleRating;
SaleBtn.onclick = toggleSale;




// Toggle Select

function toggleSelect(evt) {
            
    if (evt.target.value === 'Default Sorting') {
        DefaultSort.style.display = 'flex';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

    }
    else if (evt.target.value === 'Sort by Price') {
        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'flex';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

    }
    else if (evt.target.value === 'Sort by Popularity') {
        
        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'flex';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'none';

    }
    else if (evt.target.value === 'Sort by Rating') {
        
        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'flex';
        SaleSort.style.display = 'none';

    }
    else if (evt.target.value === 'Sort by Sale') {
        DefaultSort.style.display = 'none';
        PriceSort.style.display = 'none';
        PopularitySort.style.display = 'none';
        RatingSort.style.display = 'none';
        SaleSort.style.display = 'flex';

    }


}