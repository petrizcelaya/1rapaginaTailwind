let menu = document.getElementById('menu');
let items = document.getElementById('items');
menu.addEventListener('click',() => {
    items.classList.toggle('hidden');
});

const darkMode = document.getElementById('darkMode'); // checkbox
const mode = document.getElementById('mode');
const userConfig = window.matchMedia('(prefers-color-scheme: dark)');

if (userConfig.matches) {
    console.log('dark');
    darkMode.checked = true;
    mode.classList.toggle('dark');
}else{
    console.log('light');
    darkMode.checked = false;
}

darkMode.addEventListener('click', ()=> {
    mode.classList.toggle('dark');
})