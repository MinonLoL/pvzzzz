// Общие функции для всех страниц

// Проверка авторизации
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const publicPages = ['index.html', 'register.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!isAuthenticated && !publicPages.includes(currentPage)) {
        window.location.href = '../index.html';
    }
}

// Форматирование даты
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

// Показ уведомлений
function showNotification(message, type = 'success') {
    // Можно реализовать красивые уведомления
    alert(message);
}

// Сохранение данных в localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Получение данных из localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});
