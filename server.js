const express = require("express");
const app = express();

app.use(express.json());

// Middleware - log request time
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
    next();
});

// Serve static files
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express Info Server");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is my Express Info Server project.");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact: Vajeeh");
});

// Weather route
app.get("/weather/:city", (req, res) => {
    const city = req.params.city;

    res.json({
        city: city,
        temp: "30°C"
    });
});

// Users data
let users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aditi" }
];

// POST - Add new user
app.post("/api/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json(newUser);
});

// GET - Get all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});