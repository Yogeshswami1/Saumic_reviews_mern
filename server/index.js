import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/reviewRoutes.js";
// this is for sitemap
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public")); 
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;


app.get("/sitemap.xml", async (req, res) => {
  try {
    const links = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/home", changefreq: "daily", priority: 1.0 },
      { url: "/about", changefreq: "daily", priority: 1.0 },
      { url: "/margins", changefreq: "daily", priority: 1.0 },
      { url: "/login", changefreq: "daily", priority: 1.0 },
      { url: "/api/reviews", changefreq: "daily", priority: 1.0 },
      { url: "/api/reviews/:id", changefreq: "daily", priority: 1.0 },

      // Add other url here
    ];

    const stream = new SitemapStream({
      hostname: "https://reviews.saumic.com/",
    });
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});


app.use('/api', router);

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));
