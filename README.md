# one-eleven-task
Alphabetical sorting webhook for One Eleven developer task

Developer Task: Alphabetical Webhook API
This project is a submission for the One Eleven Developer Task (February 2026). It consists of a server-side POST endpoint that processes string data into sorted character arrays.

🚀 Objective
The goal is to create a functional webhook that:

Receives a POST request with a JSON body containing a "data" string.

Converts the string into an array of individual characters.

Sorts those characters alphabetically.

Returns a JSON response with the key "word" containing the sorted array.

🛠️ Tech Stack
Backend: Node.js with Express.

Frontend (Bonus): HTML5, Tailwind CSS, and JavaScript.

Deployment: [Insert your deployment platform, e.g., Render / Vercel / Railway].

📖 API Usage
Endpoint

POST /webhook

Request Body

JSON
{
  "data": "example"
}
Successful Response

JSON
{
  "word": ["a", "e", "e", "l", "m", "p", "x"]
}
🧪 Testing & Validation
To validate the endpoint, use the following URL format in your browser:

https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=YOUR_API_URL&email=YOUR_EMAIL 

🌟 Bonus Task: Front-End
As requested, a basic front-end was created to test the API.

Public URL: [Insert your public front-end URL here].

Functionality: A form that accepts an email and API URL to display validation responses in real-time.

