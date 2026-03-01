const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

// Serve static files; index.html is served automatically at '/'
app.use(express.static(path.join(__dirname, 'public')));

// '/form' provides a clean URL for the Google Form page (public/form.html)
app.get('/form', limiter, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
