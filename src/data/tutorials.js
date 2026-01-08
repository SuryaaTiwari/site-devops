export const categories = [
  {
    id: 1,
    name: 'Docker',
    emoji: '🐳',
    description: 'Learn containerization with Docker',
    color: '#2496ED'
  },
  {
    id: 2,
    name: 'Kubernetes',
    emoji: '☸️',
    description: 'Container orchestration and management',
    color: '#326CE5'
  },
  {
    id: 3,
    name: 'CI/CD',
    emoji: '🔄',
    description: 'Continuous Integration and Deployment',
    color: '#FF6B6B'
  },
  {
    id: 4,
    name: 'Terraform',
    emoji: '🏗️',
    description: 'Infrastructure as Code',
    color: '#7B42BC'
  },
  {
    id: 5,
    name: 'AWS',
    emoji: '☁️',
    description: 'Amazon Web Services',
    color: '#FF9900'
  },
  {
    id: 6,
    name: 'Linux',
    emoji: '🐧',
    description: 'Linux fundamentals and commands',
    color: '#FCC624'
  },
  {
    id: 7,
    name: 'Monitoring',
    emoji: '📊',
    description: 'Prometheus, Grafana, and ELK Stack',
    color: '#E74C3C'
  },
  {
    id: 8,
    name: 'Security',
    emoji: '🔒',
    description: 'DevOps Security Best Practices',
    color: '#27AE60'
  }
];

export const tutorials = [
  {
    id: 1,
    title: 'Docker Basics - Getting Started',
    category: 'Docker',
    description: 'Learn Docker fundamentals, containers, and how to build your first Docker image.',
    content: `
Docker is a containerization platform that allows you to package your application with all its dependencies into a single unit called a container.

## Why Docker?
- Consistency across environments
- Easy deployment
- Lightweight and fast
- Isolation between applications

## Getting Started
First, install Docker from docker.com

### Your First Container
\`\`\`bash
docker run hello-world
\`\`\`

This downloads a small test image and runs it.

### Building Images
\`\`\`bash
docker build -t myapp:1.0 .
docker run myapp:1.0
\`\`\`

### Container Management
\`\`\`bash
docker ps              # List running containers
docker ps -a          # List all containers
docker logs <container-id>  # View logs
docker stop <container-id>  # Stop container
docker rm <container-id>    # Remove container
\`\`\`
    `,
    date: '2024-01-15',
    difficulty: 'Beginner',
    readTime: 8
  },
  {
    id: 2,
    title: 'Docker Compose - Multiple Containers',
    category: 'Docker',
    description: 'Learn how to orchestrate multiple Docker containers using Docker Compose.',
    content: `
Docker Compose allows you to define and run multi-container Docker applications.

## Installation
\`\`\`bash
docker compose --version
\`\`\`

## Basic Structure
\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  database:
    image: postgres:latest
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`

## Common Commands
\`\`\`bash
docker compose up           # Start services
docker compose down         # Stop services
docker compose logs -f      # View logs
docker compose ps           # List services
\`\`\`
    `,
    date: '2024-01-12',
    difficulty: 'Intermediate',
    readTime: 10
  },
  {
    id: 3,
    title: 'Kubernetes Basics',
    category: 'Kubernetes',
    description: 'Introduction to Kubernetes architecture and core concepts.',
    content: `
Kubernetes (K8s) is an open-source container orchestration platform.

## Core Concepts
- **Pod**: Smallest deployable unit
- **Deployment**: Manages replicas of your pods
- **Service**: Exposes pods to network
- **ConfigMap**: Store configuration data

## Setup Minikube (Local K8s)
\`\`\`bash
minikube start
kubectl cluster-info
\`\`\`

## Create Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
\`\`\`
    `,
    date: '2024-01-10',
    difficulty: 'Intermediate',
    readTime: 12
  },
  {
    id: 4,
    title: 'CI/CD with GitHub Actions',
    category: 'CI/CD',
    description: 'Learn to automate testing and deployment using GitHub Actions.',
    content: `
GitHub Actions allows you to automate workflows directly in your repository.

## Workflow File Location
Create file: \`.github/workflows/deploy.yml\`

## Example Workflow
\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy
\`\`\`

## Key Features
- Free for public repositories
- Integrated with GitHub
- Secrets management
- Matrix builds
    `,
    date: '2024-01-08',
    difficulty: 'Intermediate',
    readTime: 11
  },
  {
    id: 5,
    title: 'Terraform Basics - IaC',
    category: 'Terraform',
    description: 'Infrastructure as Code with Terraform - Create and manage cloud resources.',
    content: `
Terraform is an Infrastructure as Code tool that lets you define cloud resources in HCL.

## Installation
\`\`\`bash
terraform --version
\`\`\`

## Basic Configuration
\`\`\`hcl
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "web-server"
  }
}
\`\`\`

## Commands
\`\`\`bash
terraform init      # Initialize
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Remove resources
\`\`\`
    `,
    date: '2024-01-05',
    difficulty: 'Intermediate',
    readTime: 13
  },
  {
    id: 6,
    title: 'AWS EC2 Basics',
    category: 'AWS',
    description: 'Getting started with Amazon EC2 instances on AWS.',
    content: `
Amazon EC2 provides scalable computing capacity in the cloud.

## EC2 Instance Types
- t2: Burstable performance (dev/test)
- m5: General purpose
- c5: Compute optimized
- r5: Memory optimized

## Launch Instance
1. Go to EC2 Dashboard
2. Click "Launch Instance"
3. Choose AMI
4. Select Instance Type
5. Configure Details
6. Add Storage
7. Add Tags
8. Configure Security Group

## Common Commands
\`\`\`bash
aws ec2 describe-instances
aws ec2 run-instances --image-id ami-xxxxx --instance-type t2.micro
aws ec2 stop-instances --instance-ids i-xxxxx
aws ec2 terminate-instances --instance-ids i-xxxxx
\`\`\`
    `,
    date: '2024-01-03',
    difficulty: 'Beginner',
    readTime: 10
  },
  {
    id: 7,
    title: 'Linux Essential Commands',
    category: 'Linux',
    description: 'Master essential Linux commands for system administration.',
    content: `
Linux commands every DevOps engineer should know.

## File Management
\`\`\`bash
ls -la              # List files
cd /path/to/dir     # Change directory
mkdir dirname       # Create directory
cp file1 file2      # Copy file
mv file1 file2      # Move/rename
rm file             # Remove file
cat file            # View file
grep pattern file   # Search pattern
\`\`\`

## User & Permissions
\`\`\`bash
whoami              # Current user
sudo command        # Run as root
chmod 755 file      # Change permissions
chown user:group    # Change owner
\`\`\`

## System Info
\`\`\`bash
uname -a            # System info
df -h               # Disk space
top                 # Running processes
ps aux              # Process list
\`\`\`
    `,
    date: '2024-01-01',
    difficulty: 'Beginner',
    readTime: 9
  },
  {
    id: 8,
    title: 'Prometheus & Grafana Monitoring',
    category: 'Monitoring',
    description: 'Setup monitoring with Prometheus and visualization with Grafana.',
    content: `
Prometheus collects metrics and Grafana visualizes them.

## Prometheus Configuration
\`\`\`yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']
\`\`\`

## Docker Compose Setup
\`\`\`yaml
version: '3'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
  
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
\`\`\`

## Common Queries
\`\`\`
up{job="node-exporter"}
rate(http_requests_total[5m])
\`\`\`
    `,
    date: '2023-12-28',
    difficulty: 'Intermediate',
    readTime: 14
  },
  {
    id: 9,
    title: 'DevOps Security Best Practices',
    category: 'Security',
    description: 'Learn security best practices for DevOps environments.',
    content: `
Security is critical in DevOps. Here are key practices.

## Container Security
- Use minimal base images
- Scan images for vulnerabilities
- Run as non-root user
- Use read-only filesystems

## Secrets Management
\`\`\`yaml
# Use environment variables
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: db-secret
      key: password
\`\`\`

## Access Control
- Use RBAC (Role-Based Access Control)
- Implement principle of least privilege
- Audit logs and monitoring
- Multi-factor authentication

## Network Security
- Network policies
- Firewall rules
- TLS encryption
- VPN for secure access
    `,
    date: '2023-12-25',
    difficulty: 'Advanced',
    readTime: 15
  }
];
