var catItems = Array.from(document.querySelectorAll('.catalog-index__wrapper > ul > li:not(.catalog-index__list-hidden)'));
console.log(catItems);
var catSpans = Array.from(document.querySelectorAll('.catalog-index__wrapper > ul > li:not(.catalog-index__list-hidden) > a >span'));
console.log(catSpans[0].textContent);
var sortedSpans = catSpans.slice(0, catSpans.length);
sortedSpans.sort(function(a,b){
    return a.textContent.localeCompare(b.textContent);
});

console.log(sortedSpans);
console.log(catSpans);

function reorderList() {

}

window.addEventListener('resize', function(event){
  
});