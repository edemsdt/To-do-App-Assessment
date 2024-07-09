"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const deleteIcons = document.querySelectorAll('.delete-icon');
const url = "http://localhost:4000/";
deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        const iconId = icon.getAttribute('id');
        if (iconId) {
            try {
                const response = yield fetch(`${url}deleteTodo/${iconId}`, {
                    method: 'DELETE'
                });
                if (response.status === 204) {
                    window.location.reload();
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
    }));
});
const inputCheckboxes = document.querySelectorAll('.checkbox');
inputCheckboxes.forEach((inputCheckbox) => {
    inputCheckbox.addEventListener("change", () => {
        let li;
        if (inputCheckbox.checked) {
            inputCheckbox.removeAttribute('checked');
        }
        else {
            inputCheckbox.setAttribute('checked', 'checked');
        }
        li = inputCheckbox.closest('li');
        li.classList.toggle('completed', inputCheckbox.checked);
    });
});
