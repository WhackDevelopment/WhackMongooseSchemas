<div align="center">
    <a target="_blank" href="https://whackdevelopment.com/">
        <img target="_blank" style="border-radius:50%;" width="450" height="450" src="https://avatars.githubusercontent.com/u/110769913"/>
    </a>
</div>
<div align="center">
    <h1><a target="_blank" href="https://paypal.me/WhackDevelopment">@WhackDevelopment</a></h1>
    <a target="_blank" href="https://discord.gg/WhackDevelopment">
        <img src="https://img.shields.io/discord/1075538521340776489?style=for-the-badge&logo=discord">
    </a>
    <a target="_blank" href="https://paypal.me/WhackDevelopment">
        <img src="https://img.shields.io/badge/Donate-PayPal-blue?style=for-the-badge&logo=paypal" alt="PayPal">
    </a>
    <a target="_blank" href="https://github.com/WhackDevelopment/WhackMongooseSchemas/issues">
        <img src="https://img.shields.io/github/issues/WhackDevelopment/WhackMongooseSchemas.svg?style=for-the-badge&logo=github">
    </a>
    <br>
</div>

---

## Global used mongoose MongoDB Schemas

### Installation via NPM

> npm i https://github.com/WhackDevelopment/WhackMongooseSchemas

### Update on version changed

> npm update whackmongooseschemas

---

### Configure with `.env` variables

#### MongoDB Specific env variables used

-   `process.env.MONGODB_USER_CONFIG_COLLECTION` - Used in [WhackUserConfigurationSchema](./src/configs/WhackUserConfiguration.js)
-   `process.env.MONGODB_USER_CONNECTIONS_COLLECTION` - Used in [UserConnection](./src/connections/UserConnection.js)
-   `process.env.MONGODB_PROFILES_COLLECTION` - Used in [WhackProfile](./src/profiles/WhackProfile.js)
-   `process.env.MONGODB_WHACK_SESSIONS_COLLECTION` - Used in [WhackSession](./src/sessions/WhackSession.js)
-   `process.env.MONGODB_USERS_COLLECTION` - Used in [WhackUser](./src/users/WhackUser.js)

#### FlakeID Specific env variables used

-   `process.env.MID` - Used in [schemas](./src/schemas.js)
-   `process.env.ID_OFFSET` - Used in [schemas](./src/schemas.js)

---
