// app for express code and index for mongoose
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running at Port: ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.log("Mongo Connection Failed\n\n\n", error);
    });
