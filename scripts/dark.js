const darkButton = document.querySelector('#dark');

darkButton.addEventListener('click'), () => {
    let content = darkButton.textContent;
    darkButton.textContent = content == 'Dark' ? 'Light' : 'Dark';
    document.body.classList.toggle('dark');
}