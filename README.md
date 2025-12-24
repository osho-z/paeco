PROJECT DESCRIPTION:
The project Paeco, is a personal project that aims at building an AI assisted expense tracker, categorizer, and overspending predictor.
The main goal of building this project is to familiarize myself with building applications that integrate machine learning into its process.

TECH STACK USED:
I implemented this project using the following stack: - Clientside (Next.js) - Serverside (FastAPI) - Database (PostgreSQL) - ML (TF-IDF + Logistic regression)

FOLDER STRUCTURE:
paeco/
│
├── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── api/
│ │ ├── core/
│ │ ├── services/
│ │ ├── models/
│ │ └── utils/
│ │
│ ├── requirements.txt
│ └── .env.example
│
├── frontend/
│ ├── (Next.js app)
│
├── .gitignore
└── README.md

To run the backend, change your directory using "cd" command to server and then input the following command on your terminal:
"uvicorn app.main:app --reload"
the "--reload" ensures that your server restarts automatically when you make changes to it.

To run the front end, change your directory to client and then to the next.js app root folder. After that, input the following command on your terminal:
"npm run dev"
