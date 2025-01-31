// Открытие модального окна
const registerBtn = document.getElementById('registerBtn');
const modal = document.getElementById('registerModal');
const closeBtn = document.querySelector('.close');

registerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка формы регистрации
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Здесь можно добавить отправку данных на сервер
    console.log('Регистрация:', { username, email, password });
    alert('Регистрация успешна!');
    modal.style.display = 'none';
});
