🏗️ Incident Tracker — App Overview
🎯 What it Does

A web app to log and manage incidents.

Each incident has:

Title (short description)

Details (longer description)

Status (Open, In Progress, Resolved)

Timestamp (when it was created/updated)

🔧 Tech Stack

Frontend (React + Vite + Tailwind)

Dashboard UI to view incidents

Form to create/update incidents

Filters by status

Backend (Express + Redis)

REST API (/incidents)

Redis caching for frequently queried data (e.g., unresolved incidents)

Nginx

Reverse proxy

Load balances across multiple backend instances

Docker + Compose

Multi-service local environment

GitHub Actions

CI/CD pipeline (build & push Docker images)

Kubernetes

Deploy to Minikube (later AWS EKS)

📊 Architecture
Frontend (React) → Nginx (Load Balancer) → Backend (Express API) → Redis (Cache)