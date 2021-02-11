let menu = document.getElementById('menu');
let items = document.getElementById('items');
menu.addEventListener('click',() => {
    items.classList.toggle('hidden');
});