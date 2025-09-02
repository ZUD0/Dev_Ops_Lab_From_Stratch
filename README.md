Got it 👍 — your content is solid, it just needs proper Markdown formatting. I’ll clean it up so the commands render nicely and everything looks professional.

Here’s the improved `README.md` for your **Day 1 – Environment Setup**:

````markdown
# DevOps Lab from Scratch 🚀

This repo documents my journey of learning **DevOps hands-on**, starting from a clean Xubuntu laptop.  
Each step is fully reproducible so others can follow along.

---

## 🖥️ System Setup
- Machine: Intel i7 10th Gen, 16GB DDR4 RAM, 256GB SSD  
- OS: Xubuntu 24.04  

---

## 🔧 Day 1 – Environment Setup

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
````

---

### 2. Install Git

```bash
sudo apt install -y git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### 3. Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```

---

### 4. Install Docker Compose

Already included in Docker v20+ as `docker compose`.

Check:

```bash
docker compose version
```

---

### 5. Install Kubectl

```bash
curl -LO "https://dl.k8s.io/release/v1.31.0/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
kubectl version --client
```

---

### 6. Install Minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --driver=docker
kubectl get nodes
```

---

### 7. Install Terraform

```bash
sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update
sudo apt install -y terraform
terraform -version
```

---

### 8. Install Node.js (via NVM)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
. "$HOME/.nvm/nvm.sh"
nvm install 22
node -v
npm -v
```

---

### 9. Install VS Code

```bash
wget -O vscode.deb https://go.microsoft.com/fwlink/?LinkID=760868
sudo apt install ./vscode.deb
code --version
```

---

## ✅ At this point, we have a complete DevOps-ready workstation with:

* Docker + Compose
* Git
* Kubectl + Minikube
* Terraform
* Node.js (for app development)
* VS Code (IDE)

---

## 🔜 Next Steps

* **Day 2**: Build a full-stack app (React + Express + Redis + Nginx)
* Add Docker Compose setup
* Create CI/CD pipelines with GitHub Actions
* Deploy on Kubernetes
* Automate infra with Terraform

````

````
