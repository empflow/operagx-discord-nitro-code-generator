# discord-nitro-generator

## Usage
1. Clone the repo
```
git clone https://github.com/netrolite/discord-nitro-generator
```

2. Add a `.env` file in root directory of the project and add the `MONGO_URL` variable inside, which is a connection string to your MongoDB database. I got it free at https://cloud.mongodb.com but you can also probably use it locally

`.env` should look something like this:
```
MONGO_URL=mongodb+srv://<username>:<password>@<yourcluster>.mongodb.net/?retryWrites=true&w=majority&appName=yourAppName
```

3. Run the following commands to install dependencies, build and run the project:
```
npm i
npm run build
npm run start
```

Sadly the promo seems to be over so it doesn't get any new codes
