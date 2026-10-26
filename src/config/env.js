const dotenv = require("dotenv");
dotenv.config();

exports.env = {
    PORT: process.env.PORT,

    SMTP_USER: process.env.SMTP_USER,
    
    SMTP_PASS: process.env.SMTP_PASS


}