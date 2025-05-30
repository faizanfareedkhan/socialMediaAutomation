const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const userDetailsRoutes = require("./routes/userDetailsRoutes");
const authenticateUserRoutes = require("./routes/authenticateUserRoutes");
const socialMediaRoutes = require("./routes/socialMediaRoutes")
const workspaceRoutes = require("./routes/workspaceRoutes");
const memberRoutes = require("./routes/memberRoutes");
const postRoutes = require("./routes/postRoutes");
const postTemplateRoutes = require("./routes/postTemplateRoutes");
const agencyRoutes = require("./routes/agencyRoutes");
 const agencyUserRoutes = require("./routes/agencyUserRoutes");
const tempUserRoutes = require("./routes/tempUserRoutes");
const facebookRoutes = require("./routes/facebooRoutes");

 
const connectDB = require("./config/db");
const { fa } = require("@faker-js/faker");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Express session setup
app.use(bodyParser.json());


// Express session setup (Required for passport to work with session)
app.use(
    session({
      secret: "process.env.SESSION_SECRET", // change this to a secure key
      resave: false,
      saveUninitialized: true,
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

 

app.use("/api/users", userDetailsRoutes); // User details
app.use("/api/social", socialMediaRoutes); // Social media 
app.use("/api/authenticateuser", authenticateUserRoutes); // Authenticate user
app.use("/api/workspace", workspaceRoutes);  // Workspaces
app.use("/api/members", memberRoutes);  // Members
app.use("/api/posts", postRoutes);  // Posts
app.use("/api/posttemplate", postTemplateRoutes); // Post templates
app.use("/api/agency", agencyRoutes); // Agencies
app.use("/api/agencyuser", agencyUserRoutes); // Agency users
app.use("/api/tempuser", tempUserRoutes); 
app.use("/api/facebook", facebookRoutes); // Facebook routes

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


 






 