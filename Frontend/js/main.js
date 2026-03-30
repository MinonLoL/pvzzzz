// main.js
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const publicPages = ['index.html', 'register.html'];
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated && !publicPages.includes(currentPage)) {
        window.location.href = '../index.html';
    }
    
    console.log('Страница загружена:', currentPage);
});
