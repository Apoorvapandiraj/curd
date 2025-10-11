const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('public'));

// Helper to read users
function readUsers() {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
}

// Helper to write users
function writeUsers(users) {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

// Routes
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  const users = readUsers();
  const existing = users.find(u => u.username === username);
  if (existing) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  users.push({ username, password });
  writeUsers(users);
  res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  req.session.user = username;
  res.json({ message: 'Login successful' });
});

app.get('/home', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});

app.get('/api/user', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  res.json({ username: req.session.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
