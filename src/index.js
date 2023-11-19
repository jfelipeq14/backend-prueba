const app = require("./app")

const port = app.get("port")

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}).on('error', (err) => {
    console.error(`Failed to start server: ${err.message}`);
});