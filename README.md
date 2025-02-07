# chat-application

## Initial package install for this project

``` 
npm i express dotenv ejs mongoose multer cookie-parser express-validator jsonwebtoken bcrypt http-errors cross-env
```
### Setup existing nodejs for 
NPM
```
npm i
```
or YARN 
```
yarn install
```

## Some important resource
### multer error handling
https://www.npmjs.com/package/multer

### validateJs use for validation
https://validatejs.org/#utilities


## Realtime Chat and some design
```
npm install socket.io moment
```

## Deploy Vercel
```
{
    "version": 2,
    "builds": [
        {
            "src": "app.js",
            "use": "@vercel/node",
            "config": {
                "includeFiles": [
                    "views/**", "public/**"
                ]
            }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "app.js",
            "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            "headers": {
                "Access-Control-Allow-Origin": "*"
            }
        }
    ]
}
```
