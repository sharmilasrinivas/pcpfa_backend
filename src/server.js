import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 9000;

const startServer = async () => {
  try {

    await connectDB();

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });

  } catch (error) {

    console.error(
      "Server Startup Error:"
    );

    console.error(error);

    process.exit(1);

  }
};

startServer();