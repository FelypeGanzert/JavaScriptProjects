const imgBoxEL = document.querySelector('.image-box');
const previousEl = document.querySelector('#previous');
const nextEl = document.querySelector('#next');

let imgs = []
for(i = 1; i <= 13; i++){
    imgs.push(`img/image${i}.jpg`);
}
let current = 0;
changeBkImage(current);

previousEl.addEventListener('click', changeImage);
nextEl.addEventListener('click', changeImage);

function changeImage(e){
    let change;
    if(e.target.id == 'previous'){
        if(current == 0){
            current = imgs.length - 1;
        } else{
            current -= 1;
        }
    } else if(e.target.id == 'next'){
        if(current == (imgs.length - 1)){
            current = 0;
        } else{
            current += 1;
        }
    }
    changeBkImage(current);
}

function changeBkImage(position){
    imgBoxEL.style.backgroundImage = `url('${imgs[position]}')`;
    console.log(`url('${imgs[position]}')`)
}