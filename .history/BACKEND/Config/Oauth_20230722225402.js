const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");


// const client_id=""

// const client_secret="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"


// const faceClient_Id="1370250756879066"
// const faceAppSecret_Key="c786d72e23d9e928282e84a687b3a40a"

passport.use(
  new GoogleStrategy(
    {
      clientID:process.env.client_id,
      clientSecret: process.env.client_secret,
      callbackURL: "http://localhost:8000/user/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let user = {
        name: profile._json.name,
        email: profile._json.email,
        password: uuidv4(),
        avtar: profile._json.picture,
      };
      return cb(null, user);
    }
  )
);

module.exports = { passport };