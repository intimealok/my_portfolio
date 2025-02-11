tailwind.config ={
    darkMode:'class',
}


function toggleDark(){
    document.documentElement.classList.toggle('dark');
    // localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark': 'light' );
};

// if(localStorage.getItem('theme') === 'dark'){
//     document.documentElement.classList.add('dark');
// }

const resposiveMenu = document.querySelector('#responMenu');
const menuItems = document.querySelectorAll('.menu-item');

function showMenu(){
    resposiveMenu.classList.remove('hidden');
    resposiveMenu.classList.add('block');
};

function closeMenu(){
    resposiveMenu.classList.remove('block');
    resposiveMenu.classList.add('hidden');
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        resposiveMenu.classList.add('hidden');
    });
});
