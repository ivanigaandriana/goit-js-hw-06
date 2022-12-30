// const categoriesLengs = document.querySelectorAll('li.item');
// console.log(`Number of categories:${categoriesLengs.length}`);
// const ulElements = document.querySelector('#catecories');
// for(let el of ulElements){
//     console.log("Category:",el.firstElementChild.innerHTML);
//     console.log("Elements:",el.lastElementChild.length);
// }


const categoriesLengs = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesLengs.length}`);
const values = [].map.call(categoriesLengs, itemElem => {
    const categoryTitle = itemElem.querySelectorAll("h2");
    categoryTitle.forEach(title => console.log("category:"+ ' ' + title.textContent));
    const listSum = itemElem.querySelectorAll('ul li');
    console.log("Elements:" + " " + listSum.length);
});