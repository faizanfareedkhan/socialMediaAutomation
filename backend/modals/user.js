// const mongoose = require("mongoose");
// const CryptoJS = require("crypto-js");
// const secretKey = "my-secret-key";

// const userSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     middleName: { type: String },
//     lastName: { type: String, required: true },
//     emailAddress: { 
//       type: String, 
//       required: true, 
//       unique: true, 
//       set: (email) => CryptoJS.AES.encrypt(email, secretKey).toString() // Encrypt before saving
//     },
//     password: { type: String },
//     phone: { type: String   },
//     address: { type: String  },
//     dateOfBirth: { type: Date },
//     gender: { type: String, enum: ["Male", "Female", "Other"] },
//   },
//   { timestamps: true
//    }
// );
// const User = mongoose.model("User", userSchema, "Users");
 

// module.exports = User;







const mongoose = require("mongoose");
const CryptoJS = require("crypto-js"); //  Import CryptoJS

const secretKey = "my-secret-key"; //  Define secretKey

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    emailAddress: { 
      type: String, 
      required: true, 
      unique: true, 
      set: (email) => CryptoJS.AES.encrypt(email, secretKey).toString() 
    },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;





 