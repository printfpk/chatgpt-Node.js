const express = require('express');
const cookieParser = require('cookie-parser');

/* requiring Routes */
const authRoutes = require('./routes/auth.routes');
const chatRoutes = require('./routes/chat.routes');

/*using middleware */
const app = express();
app.use(express.json());
app.use(cookieParser());

/*using routes */
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

module.exports = app;