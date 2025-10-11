// Common functions for login/register app

async function handleLogin(username, password) {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
        window.location.href = '/home';
    } else {
        showError(data.error);
    }
}

async function handleRegister(username, password) {
    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
        window.location.href = '/login';
    } else {
        showError(data.error);
    }
}

async function handleLogout() {
    const response = await fetch('/logout', { method: 'POST' });
    if (response.ok) {
        window.location.href = '/login';
    }
}

async function getUser() {
    const response = await fetch('/api/user');
    if (response.ok) {
        return await response.json();
    }
    return null;
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}
