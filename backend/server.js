const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

//handled Uncaught Exception Error
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Sutting donwn the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    })
})


//config
dotenv.config({ path: 'backend/config/config.env' });

//Connection to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is started on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection error
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Sutting donwn the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    })
})