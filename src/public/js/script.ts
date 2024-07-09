
const deleteIcons =  document.querySelectorAll('.delete-icon');
const url = "http://localhost:4000/"

deleteIcons.forEach((icon) => {
    icon.addEventListener('click', async () => {
      const iconId: string = icon.getAttribute('id')!;

      if (iconId) {
        try {
          const response = await fetch(`${url}deleteTodo/${iconId}`, {
            method: 'DELETE'
          });
          if (response.status === 204) {
            window.location.reload();  
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
});


const inputCheckboxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLInputElement>;

inputCheckboxes.forEach((inputCheckbox) => {
  inputCheckbox.addEventListener("change", () => {
    let li: HTMLLIElement;
    if(inputCheckbox.checked) {
      inputCheckbox.removeAttribute('checked');
    } else {
      inputCheckbox.setAttribute('checked', 'checked');
    }
    li = inputCheckbox.closest('li')!;
    li.classList.toggle('completed', inputCheckbox.checked)
  })
})