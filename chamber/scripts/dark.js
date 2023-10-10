const darkButton = document.querySelector('#dark');

darkButton.addEventListener('click', myFunction);

function myFunction() {
    let content = darkButton.textContent;
    darkButton.textContent = content == 'Dark' ? 'Light' : 'Dark';
    document.body.classList.toggle('dark');
}