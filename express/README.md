# Express

Practice a login process  by using Express, passport-local and MongoDB.

NOTE: This app is not RESTful.

## How to start

First, put this line:

```shell
npm install
```

Then, set environment variables in your '.env' file in the project root directory:

- `PORT`: The port number for the app.

- `DB_URL`: Your database URL for the MongoDB server.

After that, run the following:

```shell
npm start
```

Now the server is running, so the URL `http://127.0.0.1:PORT` is available.

## Used Tools

- Express + ejs + dotenv
- nodemon
- MongoDB + mongoose
- passport + passport-local + express-session
- bcrypt
- connect-flash
- TypeScript, ts-node
- ESLint, Prettier
