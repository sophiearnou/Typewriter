const popup = document.getElementById('popup');
const popup_content = document.querySelector('.popup');
popup.addEventListener('click', () => {
    popup_content.classList.toggle("show")
    popup.classList.toggle("show")
})