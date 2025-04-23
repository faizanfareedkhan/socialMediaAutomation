const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const authenticateUserRoutes = require("./routes/authenticateUserRoutes");
const socialMediaRoutes = require("./routes/socialMediaRoutes")
const workspaceRoutes = require("./routes/workspaceRoutes");
const memberRoutes = require("./routes/memberRoutes");
const postRoutes = require("./routes/postRoutes");
const postTemplateRoutes = require("./routes/postTemplateRoutes");
 
// const socialMediaRoutes = require("./routes/socialMediaRoutes")
// const postRoutes = require("./routes/postRoutes")
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Express session setup
app.use(bodyParser.json());
 
// Routes
app.use("/api/users", userRoutes);
app.use("/api/login", loginRoutes)
app.use("/api/social", socialMediaRoutes);
app.use("/api/authenticateUser", authenticateUserRoutes);
app.use("/api/workspaces", workspaceRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/postTemplate", postTemplateRoutes);

// app.use('/api/social', socialMediaRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/postTemplate', postTemplateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


 






 