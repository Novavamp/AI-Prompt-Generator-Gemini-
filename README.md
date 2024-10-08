# Gemini AI Prompt Website

Author: Precious Okechukwu Nwosu

This project is a simple Node.js web application that integrates Google Generative AI (Gemini) to generate content based on user prompts. It uses Express.js for server-side functionality and EJS for rendering the front-end.

## Features

- Takes user input prompts through a form.
- Uses Gemini AI (gemini-1.5-flash) to generate responses based on prompts.
- Renders the AI-generated responses on a webpage, with basic formatting (paragraph splitting and removal of asterisks).
- Simple and clean UI powered by EJS templates.

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **Google Generative AI (Gemini-1.5-flash)**

## Setup

### Prerequisites

1. **Node.js** (v14.x or later)
2. **Google Generative AI API Key** – You will need an API key from [Google Generative AI](https://developers.generative-ai.google).
3. **Dotenv** – Make sure your environment variables are correctly set up.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Novavamp/AI-Prompt-Generator-Gemini-
   cd AI-Prompt-Generator-Gemini-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google Generative AI API key:

   ```bash
   GEMINI_API_KEY=your_google_gen_ai_api_key
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. Visit the app at `http://localhost:5000` in your browser.

### Usage

- Enter a prompt in the input form on the homepage.
- The AI will process the prompt and display a formatted response.
- If there's an error, an appropriate message will be displayed.

## File Structure

```bash
.
├── public              # Static files (CSS, JS, etc.)
├── views               # EJS templates
│   └── index.ejs       # Main view template
├── .env                # Environment variables
├── index.js            # Main server file
└── package.json        # Project dependencies and scripts
```

## Future Enhancements

- Improve prompt input validation.
- Add more interactive UI features for better user experience.
- Support more models or multiple output formats.
- Add logging for better error tracking.
