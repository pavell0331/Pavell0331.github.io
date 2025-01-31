const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // Сохранить в БД: username, hashedPassword
        res.status(201).send('Пользователь создан');
    } catch {
        res.status(500).send();
    }
});

app.post('/login', async (req, res) => {
    // Проверка в БД
    const user = await db.users.findOne({ username: req.body.username });
    if(!user) return res.status(400).send('Пользователь не найден');
    
    if(await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
    } else {
        res.status(401).send('Неверный пароль');
    }
});
