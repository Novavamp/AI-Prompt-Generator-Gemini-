import express from "express";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// load environmental variable
dotenv.config();

const app = express();
const port = 5000;
const API_KEY = process.env.GEMINI_API_KEY;

// GenAI initialization
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
    try {
        const result = await model.generateContent(req.body.prompt);
        let output = result.response.text().replace(/\*/g, ''); // Removes asterisks

        // Here, split the content into paragraphs and format as desired
        output = output
            .split('\n') // Assuming newlines separate paragraphs
            .map(paragraph => `<p>${paragraph}</p>`) // Wrap each in <p> tags
            .join(''); // Join back into a single string

        res.render("index.ejs", { output });
    } catch (error) {
        console.error(error.message);
        res.render("index.ejs", { error: "There was an error processing your request, please try again." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});