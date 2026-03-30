// API для работы с бэкендом
const API_URL = 'http://localhost:3001/api';

// Базовые функции API
const api = {
    // GET запрос
    async get(endpoint) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
            if (!response.ok) throw new Error('Ошибка запроса');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    // POST запрос
    async post(endpoint, data) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Ошибка запроса');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    // PUT запрос
    async put(endpoint, data) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Ошибка запроса');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    // DELETE запрос
    async delete(endpoint) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Ошибка запроса');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
};

// Функции для работы с пользователями
const userAPI = {
    login(email, password) {
        return api.post('/auth/login', { email, password });
    },
    
    register(email, password) {
        return api.post('/auth/register', { email, password });
    },
    
    logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        window.location.href = '/index.html';
    }
};

// Функции для работы с товарами
const ordersAPI = {
    getAll() {
        return api.get('/orders');
    },
    
    getById(id) {
        return api.get(`/orders/${id}`);
    },
    
    create(order) {
        return api.post('/orders', order);
    },
    
    update(id, order) {
        return api.put(`/orders/${id}`, order);
    },
    
    delete(id) {
        return api.delete(`/orders/${id}`);
    }
};
