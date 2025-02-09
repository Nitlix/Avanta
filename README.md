<h1 align="center">

<img src="https://static.nitlix.pro/github/avanta.webp" style="width: 50%" />

</h1>

<p align="center">Revolutionary tool for developers who hate writing tons of code to use OAuth, but want the flexibility that Auth.js takes away.

</p>

-----

<p align="center">
    <1.0.3> Packaged with 💝 by <a href="https://github.com/nitlix">nitLix</a> ⠀
</p>

## 🍭 Use with NPM
1. Install the package
```bash
npm install avanta
```

2. Import the package
```js
const Avanta = require('avanta');
// or 
import Avanta from 'avanta';
```

3. Use it
```js
const avt = new Avanta({
    providers: {
        my_discord_provider: {
            client_id: env.CLIENT_ID,
            client_secret: env.CLIENT_SECRET,
        },
        my_google_provider: {
            client_id: env.CLIENT_ID,
            client_secret: env.CLIENT_SECRET,
        }
    }
});

// Providers are type-safe and autocompleted!
const googleOAuthLink = avt.providers.my_google_provider.getOAuthLink(
    "http://localhost:3000/auth/google",
    "",
    [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
    ],
);
```

## 🔥 Features
- Multiple providers for the same service
- Generating OAuth links, getting tokens, getting information from tokens.
- Type-safe and autocompleted providers


## 🚅 Supported Services (just for now)
- Discord
- Google




## 🏗️ WIP
- Getting new access tokens from refresh tokens
- Documentation
- And many more providers and features!


## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<p>
    Packaged with 💝 by <a href="https://github.com/nitlix">nitLix</a> ⠀
</p>
