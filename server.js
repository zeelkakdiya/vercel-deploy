
const PORT = 4000;
const app = require('./src/index')

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;