const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');



button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    if (input.value == '') 
    {
        message = "Please enter a book and chapter.";
    }
    
    li.textContent = input.value;
    deleteButton.textContent = 'X';
    li.append(deleteButton);

    deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
    });

    input.focus();
    input.value = '';
});




