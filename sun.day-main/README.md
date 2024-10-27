
# Sun.Day Web Application

Sun.Day this is a simple web application that We developed in part of "Final project Tel Aviv - Yafo Academy",
We developed it to manage my clients and the tasks of each of them.

## Requirements

- Docker 🐳
- docker-compose


## 🌱 Getting Started

### Installation

To run this project, you will need to do the following steps:

1. Clone the repo
   ```sh
   git clone https://github.com/tallomb/final-project-sunday.git
   ```
2. Go to the main folder of the project: `cd sun.day/`
3. Run all containers (frontend, backend, database) with docker-compose
   ```sh
   docker-compose up
   ```
4. Enjoy! 🤩 ☁️

   Sun.Day Application is on the air: http://localhost:3000

```sh
Project tree:

.
├── README.md
├── docker-compose.yml
├── frontend
└── backend
    ├── Dockerfile
    ├── __init__.py
    ├── core
    │   ├── __init__.py
    │   ├── config.py
    │   ├── hashing.py
    │   ├── jwttoken.py
    │   └── oauth.py
    ├── db
    │   ├── __init__.py
    │   └── database.py
    ├── main.py
    ├── models
    │   ├── __init__.py
    │   ├── ObjectId.py
    │   ├── customers.py
    │   ├── tasks.py
    │   ├── tokens.py
    │   └── users.py
    ├── requirements.txt
    └── routers
        ├── __init__.py
        └── api
            └── v1
                ├── __init__.py
                ├── customers.py
                ├── tasks.py
                └── users.py
                
```

## Built With

**Client:** React (Next.js), TailwindCSS

**Server:** Python, FastAPI

**Database:** MongoDB
