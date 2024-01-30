const express = require('express');

function setupHandlers(app) {

}

function startHttpServer() {
    return new Promise (resolve => {
        const app = express();
        setupHandlers(app);

        const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
        app.listen(port,() => {
            resolve();
        });
    });
}

function main() {
    console.log("Hello World");
    return startHttpServer();
}

main()
    .then(() => console.log("Microservice Online"))
    .catch(err => {
        console.error("Microservice failed to start", err);
        process.exit(1);
    });