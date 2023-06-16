let moreBtn = document.querySelectorAll('.news-card__button');
let moreText = document.querySelectorAll('.news-card__more')

console.log(moreBtn);
moreBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.children[1].classList.toggle('display-none');
        element.parentNode.children[2].classList.toggle('display-none');
    }) 
});