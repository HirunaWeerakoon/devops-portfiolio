export const personalInfo = {
  name: "Hiruna Weerakoon",
  title: "Aspiring DevOps Engineer",
  subtitle: "Docker | Linux | CI/CD & Cloud Infrastructure",
  location: "Mawanella, Sabaragamuwa Province, Sri Lanka",
  email: "hirunamw2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/hiruna-weerakoon",
  github: "https://github.com/HirunaWeerakoon",
  summary: "Driven and detail-oriented Computer Science undergraduate at SLIIT and aspiring DevOps Engineer with focus on Docker, Linux systems administration, and CI/CD pipelines.",
};

export const skillsData = [
  {
    category: "DevOps & Containers",
    skills: ["Docker", "Docker Compose", "Multi-stage Builds", "Containerization", "Image Optimization"]
  },
  {
    category: "CI/CD & Automation",
    skills: ["GitHub Actions", "Shell Scripting (Bash)", "Automated Testing", "Build Automation", "Git Version Control"]
  },
  {
    category: "Linux & Systems",
    skills: ["Linux Administration", "Ubuntu / Debian", "Process Management", "File Permissions", "SSH & Networking Basics"]
  },
  {
    category: "Development & Design",
    skills: ["Web Development (HTML/CSS, JS, React)", "User Interface Design", "Graphic Design", "REST APIs"]
  }
];

export const experienceData = [
  {
    role: "Web Developer",
    company: "Via Codos (PVT) LTD",
    period: "April 2026 - October 2026 (7 months)",
    location: "Sri Lanka",
    type: "Work Experience",
    description: "Developed modern, responsive web application features and worked on full-stack integration with containerized development setups.",
    highlights: ["Built clean and maintainable UI components", "Collaborated on web application modules and API endpoints", "Used Git and Docker for local development environments"]
  },
  {
    role: "Video Editor",
    company: "Freelance",
    period: "July 2025 - April 2026 (10 months)",
    location: "Sri Lanka",
    type: "Freelance",
    description: "Short form video editing for social media marketing campaigns and documentary-type videos for YouTube.",
    highlights: ["Created engaging visual media and storytelling content", "Fast turnaround workflows and high production standards"]
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    period: "July 2022 - January 2025 (2 years 7 months)",
    location: "Sri Lanka",
    type: "Freelance",
    description: "Worked as a freelance graphic designer focusing on social media post design, brand identity, and merchandise/t-shirt designing.",
    highlights: ["Completed custom design projects for diverse local clients", "Strong foundation in layout, typography, and visual hierarchy"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "SLIIT",
    period: "October 2024 - October 2028",
    field: "Computer and Information Sciences and Support Services",
    details: "Undergraduate degree program focusing on software engineering, computer networks, operating systems, and computer science fundamentals."
  },
  {
    degree: "Secondary Education",
    institution: "Kegalu Vidyalaya",
    period: "July 2017 - August 2023",
    field: "High School",
    details: "Completed secondary education with focus on analytical studies and computing foundations."
  },
  {
    degree: "Primary & Junior Education",
    institution: "Mayurapada National College, Mawanella",
    period: "January 2010 - July 2017",
    field: "Primary & Junior Schooling",
    details: "Foundational education and early extracurricular activities."
  }
];

// MODEL A: DEVOPS PROJECTS WITH PIPELINE DRAWER
export const devopsProjects = [
  {
    id: "arena-streaming-platform-cicd",
    title: "ARENA Esports Streaming Platform — CI/CD Pipeline",
    subtitle: "Monorepo Microservices CI/CD with GitHub Actions, GHCR & Azure App Services",
    badge: "GitHub Actions & Azure",
    tech: ["GitHub Actions", "Docker Buildx", ".NET 10.0", "React 18 / Vite", "CodeQL SAST", "SonarCloud", "GHCR", "Azure App Services"],
    description: "Production CI/CD infrastructure for the ARENA esports streaming platform spanning 6 event-driven .NET 10 microservices and a React 18 / Vite web client. Features path-filtered change detection, CodeQL static application security testing, SonarCloud solution quality gates, ephemeral MySQL 8.0 sidecars for integration tests, BuildKit GHA caching, immutable Git SHA tagging on GHCR, and automated deployments to Azure App Services.",
    pipeline: [
      {
        id: "paths-filter",
        name: "Change Detection",
        status: "passed",
        duration: "14s",
        tool: "dorny/paths-filter@v3",
        logs: [
          "$ dorny/paths-filter@v3 with filters.yml",
          "Evaluating commit diff against base branch (dev)...",
          "Analyzing changed paths across Arena monorepo:",
          "  => user-service:       CHANGED (Arena/services/user/**)",
          "  => stream-service:     UNCHANGED",
          "  => battle-service:     CHANGED (Arena/services/battle/**)",
          "  => shared-contracts:   UNCHANGED (Arena/shared/EventContracts/**)",
          "  => frontend-client:    CHANGED (Arena/client/arena-web/**)",
          "[OK] Change matrix computed: 2 backend microservices & frontend queued for isolated CI."
        ],
        configSnippet: `jobs:
  detect-changes:
    runs-on: ubuntu-latest
    outputs:
      user: \${{ steps.filter.outputs.user }}
      stream: \${{ steps.filter.outputs.stream }}
      battle: \${{ steps.filter.outputs.battle }}
      frontend: \${{ steps.filter.outputs.frontend }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v3
        id: filter
        with:
          filters: .github/filters.yml`
      },
      {
        id: "codeql-sast",
        name: "CodeQL Security SAST",
        status: "passed",
        duration: "42s",
        tool: "github/codeql-action@v3",
        logs: [
          "$ github/codeql-action/init@v3 --languages=csharp",
          "Initializing CodeQL extractor database for .NET 10.0 solution...",
          "Compiling AST syntax graphs across services...",
          "Analyzing data-flow queries for SQL injection (CWE-89), tainted input, and insecure crypto...",
          "$ github/codeql-action/analyze@v3",
          "Analysis complete: 0 vulnerabilities found (0 Critical, 0 High, 0 Medium).",
          "[OK] Security clearance granted: No code vulnerabilities detected."
        ],
        configSnippet: `  codeql-analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with:
          languages: csharp
      - run: dotnet build Arena/Arena.slnx -c Release
      - uses: github/codeql-action/analyze@v3`
      },
      {
        id: "battle-tests",
        name: "MySQL Sidecar & Tests",
        status: "passed",
        duration: "1m 18s",
        tool: "MySQL 8.0 Sidecar & dotnet test",
        logs: [
          "Spinning up ephemeral MySQL 8.0 test container (port 3310:3306)...",
          "Polling database readiness...",
          "until MYSQL_PWD=arena_password mysqladmin ping -h 127.0.0.1 -P 3310 -u arena --silent; do sleep 2; done",
          "=> MySQL database 'arena_battle_db' is ready.",
          "Applying migration: 001_initial_ledger.sql... [OK]",
          "Applying migration: 002_battle_bars.sql... [OK]",
          "$ dotnet test Arena/services/battle/tests/BattleService.Tests.csproj -c Release --collect:'XPlat Code Coverage'",
          "Passed! - Failed: 0, Passed: 38, Skipped: 0, Total: 38 (Duration: 5.4s)",
          "Coverage report generated: coverage.cobertura.xml (Line coverage: 94.2%)",
          "[OK] All Battle & Ledger integration test suites passed."
        ],
        configSnippet: `  build-battle:
    runs-on: ubuntu-latest
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_DATABASE: arena_battle_db
          MYSQL_PASSWORD: arena_password
        ports: ["3310:3306"]
    steps:
      - run: dotnet test Arena/services/battle/tests/*.csproj -c Release`
      },
      {
        id: "sonarcloud-gate",
        name: "SonarCloud Quality Gate",
        status: "passed",
        duration: "56s",
        tool: "dotnet-sonarscanner & SonarCloud",
        logs: [
          "$ dotnet-sonarscanner begin /k:'arena-esports_arena-backend' /o:'arena-esports'",
          "Restoring and compiling full solution: Arena/Arena.slnx",
          "Aggregating XPlat Code Coverage across all microservice test projects...",
          "$ dotnet-sonarscanner end",
          "Uploading metrics to SonarCloud server...",
          "Quality Gate Status: PASSED",
          "  - Reliability Rating: A (0 bugs)",
          "  - Security Rating:    A (0 vulnerabilities)",
          "  - Maintainability:    A (Technical debt: 18 min)",
          "  - Code Coverage:      89.4% on new code",
          "[OK] SonarCloud Quality Gate successfully validated."
        ],
        configSnippet: `  sonarcloud-backend:
    runs-on: ubuntu-latest
    needs: [build-user, build-stream, build-battle]
    steps:
      - uses: actions/setup-java@v4
        with:
          distribution: 'zulu'
          java-version: '17'
      - run: dotnet sonarscanner begin /k:"arena-esports_arena-backend"
      - run: dotnet build Arena/Arena.slnx -c Release
      - run: dotnet sonarscanner end
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}`
      },
      {
        id: "build-ghcr",
        name: "Docker Buildx & GHCR",
        status: "passed",
        duration: "1m 32s",
        tool: "Docker Buildx & GitHub Packages",
        logs: [
          "$ docker buildx build --cache-from=type=gha,scope=user-staging --cache-to=type=gha,mode=max -f services/user/Dockerfile .",
          "[+] Building with BuildKit (14/14) FINISHED",
          " => [stage-1 1/3] FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build",
          " => [stage-1 2/3] dotnet publish --no-restore -c Release -o /app/publish",
          " => [stage-2 1/2] FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime",
          " => exporting layers to image",
          " => pushing ghcr.io/arena-esports/arena-user:staging",
          " => pushing ghcr.io/arena-esports/arena-user:staging-7a8f91c",
          "[OK] Immutable Git SHA container image published to GHCR: sha256:d481f9b3..."
        ],
        configSnippet: `  deploy-user:
    runs-on: ubuntu-latest
    steps:
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          context: ./Arena
          file: ./Arena/services/user/Dockerfile
          push: true
          tags: |
            ghcr.io/\${{ steps.lower.outputs.owner }}/arena-user:staging
            ghcr.io/\${{ steps.lower.outputs.owner }}/arena-user:staging-\${{ github.sha }}
          cache-from: type=gha,scope=user-staging
          cache-to: type=gha,mode=max,scope=user-staging`
      },
      {
        id: "azure-deploy",
        name: "Azure App Service Deploy",
        status: "passed",
        duration: "44s",
        tool: "azure/webapps-deploy@v3",
        logs: [
          "$ azure/webapps-deploy@v3 --app-name arena-user-staging",
          "Target Host: arena-user-staging.azurewebsites.net (Azure App Service Linux Container)",
          "Authenticating with AZURE_WEBAPP_PUBLISH_PROFILE_USER_STAGING... [200 OK]",
          "Setting container image to ghcr.io/arena-esports/arena-user:staging-7a8f91c...",
          "Triggering Azure container restart & warming up workers...",
          "Probing /health endpoint: HTTP 200 OK (latency: 18ms)",
          "[SUCCESS] Service deployed and active on Azure App Services."
        ],
        configSnippet: `      - name: Deploy to Azure App Service
        uses: azure/webapps-deploy@v3
        with:
          app-name: arena-user-staging
          publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE_USER_STAGING }}
          images: ghcr.io/\${{ steps.lower.outputs.owner }}/arena-user:staging-\${{ github.sha }}`
      }
    ]
  },
  {
    id: "iac-terraform-aws",
    title: "Automated Multi-Environment AWS IaC Pipeline",
    subtitle: "Declarative Cloud Infrastructure as Code with Drift Detection",
    badge: "Terraform & AWS",
    tech: ["Terraform", "AWS VPC", "EKS", "RDS Aurora", "Checkov", "GitHub Actions"],
    description: "Enterprise-grade Infrastructure as Code pipeline provisioning highly available AWS cloud environments. Includes automated syntax verification, static security compliance scans with Checkov, automated plan generation, and safe apply execution.",
    pipeline: [
      {
        id: "tf-fmt",
        name: "Format & Syntax",
        status: "passed",
        duration: "18s",
        tool: "Terraform CLI & TFLint",
        logs: [
          "$ terraform fmt -check",
          "All files formatted according to HCL conventions.",
          "$ tflint --recursive",
          "11 modules inspected across /environments/production",
          "0 issues found (0 warnings, 0 errors).",
          "[OK] HCL validation complete."
        ],
        configSnippet: `steps:
  - uses: hashicorp/setup-terraform@v3
  - run: terraform fmt -check
  - run: tflint --init && tflint`
      },
      {
        id: "tf-sec",
        name: "Policy & Security",
        status: "passed",
        duration: "40s",
        tool: "Checkov Static Analysis",
        logs: [
          "$ checkov -d ./terraform --framework terraform",
          "Passed checks: 84, Failed checks: 0, Skipped checks: 2",
          "CKV_AWS_144: Ensure cross-region replication enabled on S3 (PASSED)",
          "CKV_AWS_150: Ensure EKS cluster encryption enabled (PASSED)",
          "CKV_AWS_118: Ensure VPC flow logging enabled (PASSED)",
          "[OK] Zero security policy violations."
        ],
        configSnippet: `  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: bridgecrewio/checkov-action@master
        with:
          framework: terraform
          soft_fail: false`
      },
      {
        id: "tf-plan",
        name: "Terraform Spec Plan",
        status: "passed",
        duration: "1m 05s",
        tool: "Terraform Plan Engine",
        logs: [
          "$ terraform plan -out=tfplan.binary",
          "Refreshing AWS state via S3 backend & DynamoDB locking...",
          "Plan: 4 to add, 1 to change, 0 to destroy.",
          "+ aws_eks_node_group.spot_workers",
          "+ aws_route53_record.api_cname",
          "~ aws_security_group_rule.ingress_https",
          "[OK] Plan file generated and cryptographic signature attached."
        ],
        configSnippet: `  terraform-plan:
    runs-on: ubuntu-latest
    steps:
      - run: terraform init -backend-config="prod.s3.tfbackend"
      - run: terraform plan -no-color -out=tfplan`
      },
      {
        id: "tf-apply",
        name: "Execution & Apply",
        status: "passed",
        duration: "2m 14s",
        tool: "AWS Cloud API Provider",
        logs: [
          "$ terraform apply tfplan.binary",
          "Acquired state lock on DynamoDB: 'tf-lock-production'",
          "aws_route53_record.api_cname: Creating...",
          "aws_route53_record.api_cname: Creation complete after 32s",
          "Apply complete! Resources: 4 added, 1 modified, 0 destroyed.",
          "Outputs: eks_cluster_endpoint = 'https://E6B9...eks.amazonaws.com'",
          "[SUCCESS] Production infrastructure synchronized."
        ],
        configSnippet: `  terraform-apply:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: terraform apply -auto-approve tfplan`
      }
    ]
  }
];

// MODEL B: STANDARD PROJECTS WITH "VIEW INFRASTRUCTURE" 3D FLIP
export const standardProjects = [
  {
    id: "enterprise-portal",
    title: "Enterprise Client Management Portal",
    category: "Full-Stack Web App",
    role: "Full-Stack Developer",
    badge: "Web System",
    description: "High-performance enterprise portal built with modern web technologies, handling client service provisioning, real-time ticket tracking, and authenticated client dashboards.",
    uiOverview: {
      clientUrl: "https://github.com/HirunaWeerakoon",
      features: [
        "Interactive client management interface with responsive data tables",
        "Secure JWT authentication with role-based dashboard views",
        "Fast client-side routing & optimized asset delivery",
        "Automated PDF report and invoice generator"
      ],
      stack: ["React 18", "Tailwind CSS", "Spring Boot", "MySQL", "REST APIs"]
    },
    infraDetails: {
      title: "Under The Hood: Containerized High-Availability Architecture",
      diagram: [
        { layer: "Edge / CDN", tech: "Cloudflare DNS & WAF", detail: "DDoS mitigation, SSL termination & static asset edge cache" },
        { layer: "Reverse Proxy", tech: "Nginx 1.25 Alpine Container", detail: "Port 80/443 SSL offloading, gzip compression, rate limiting (100 req/s)" },
        { layer: "Application Backend", tech: "Spring Boot 3.2 (Java 21)", detail: "Multi-threaded worker pool, RESTful controllers, port 8080 internal" },
        { layer: "Data Layer", tech: "MySQL 8.0 Engine Container", detail: "Persistent Docker Volume /var/lib/mysql, hourly backup cron to AWS S3" },
        { layer: "Orchestration", tech: "Docker Compose & Health Checks", detail: "Automatic restart policies (unless-stopped), isolated bridge network" }
      ],
      dockerComposeSnippet: `version: '3.8'
services:
  nginx-proxy:
    image: nginx:alpine
    ports: ["80:80", "443:443"]
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certbot/conf:/etc/letsencrypt:ro
    depends_on:
      backend:
        condition: service_healthy

  backend:
    image: viacodos-api:latest
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_HOST=db
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 15s

  db:
    image: mysql:8.0
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - internal-net`
    }
  },
  {
    id: "arena-web-platform",
    title: "ARENA Esports Web Client & Microservices",
    category: "Full-Stack Esports Platform",
    role: "DevOps & Full-Stack",
    badge: "Monorepo System",
    description: "High-performance React 18, Vite, and TypeScript client for the ARENA esports streaming platform, integrating live video feeds, real-time chat, gamified battle bars, and event-driven microservices.",
    uiOverview: {
      clientUrl: "https://arena.gg",
      features: [
        "Low-latency live stream player with adaptive video bitrate",
        "Real-time WebSocket chat and interactive tournament brackets",
        "Gamified battle bar state synchronization with coin-earning ledger",
        "Responsive, mobile-optimized gamer interface built with Tailwind CSS"
      ],
      stack: ["React 18", "TypeScript", "Vite", ".NET 10.0", "Tailwind CSS", "Nginx", "Docker"]
    },
    infraDetails: {
      title: "Under The Hood: Multi-Stage Container & Ingress Architecture",
      diagram: [
        { layer: "Edge Runtime", tech: "Nginx 1.25 Alpine Container", detail: "Serves compiled SPA static assets on port 80 with custom HTML5 pushstate routing in nginx.conf" },
        { layer: "Build Optimization", tech: "Node 22 Alpine Multi-Stage", detail: "Vite build embeds API variables (VITE_USER_API_URL, VITE_STREAM_API_URL) directly into static JS chunks" },
        { layer: "Backend Cluster", tech: "6x .NET 10 ASP.NET APIs", detail: "Containerized microservices (User, Stream, Tournament, Chat, Battle, Analytics) with health checks" },
        { layer: "Data & Storage", tech: "MySQL 8.0 & Sidecars", detail: "Database sidecars with automated migration polling and persistent transaction ledgers" },
        { layer: "Container Registry", tech: "GitHub Container Registry (GHCR)", detail: "Immutable Git SHA tagged images (:staging-<sha>, :<sha>) deployed to Azure App Services" }
      ],
      dockerComposeSnippet: `# Frontend Multi-Stage Dockerfile Pattern
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_USER_API_URL
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80`
    }
  },
  {
    id: "log-telemetry-hub",
    title: "Dockerized Real-Time Telemetry & Log Streamer",
    category: "DevOps Tooling",
    role: "System Engineer",
    badge: "Open Source Tool",
    description: "Lightweight container monitoring agent and WebSocket streaming dashboard that collects container stdout/stderr, CPU usage, and network I/O in real time.",
    uiOverview: {
      clientUrl: "https://github.com/hiruna-weerakoon/docker-telemetry",
      features: [
        "Live colorized terminal log streaming via WebSockets",
        "Interactive CPU, Memory, and Network I/O metrics charts",
        "One-click container restart, stop, and inspect operations",
        "Filter logs by severity, container tag, or timestamp"
      ],
      stack: ["Go / Node.js", "Docker Socket API", "WebSockets", "Chart.js", "Docker"]
    },
    infraDetails: {
      title: "Under The Hood: Docker Daemon Socket & Event Bridge",
      diagram: [
        { layer: "Host Socket", tech: "/var/run/docker.sock", detail: "Mounted read-only to monitor engine events and container metrics" },
        { layer: "Event Collector", tech: "Go Daemon Container", detail: "Multiplexes Docker engine events without imposing CPU overhead" },
        { layer: "Pub/Sub Broker", tech: "In-Memory WebSocket Hub", detail: "Broadcasts log deltas to connected browser clients under 15ms" },
        { layer: "Security Sandbox", tech: "Linux Capabilities (cap_drop: ALL)", detail: "Strict privilege drop to ensure non-root execution inside container" }
      ],
      dockerComposeSnippet: `services:
  telemetry-agent:
    image: hiruna/telemetry-agent:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
    ports:
      - "9090:9090"`
    }
  }
];

// TERMINAL CERTIFICATES
export const certificatesData = [
  {
    id: "kodekloud-docker-level1",
    command: "fetch kodekloud-engineer-docker-l1.crt",
    title: "KodeKloud Engineer - Docker (Level 1)",
    issuer: "KodeKloud",
    badgeName: "VERIFIED",
    certId: "KK-DOC-L1-2026-8819",
    issueDate: "2026",
    skillsCovered: ["Container Architecture", "Multi-stage Dockerfile Authoring", "Docker Networking", "Volume Mounts & Persistence", "Docker CLI Mastery"],
    verificationUrl: "https://kodekloud.com/certificate-verification",
    description: "Hands-on lab certification proving real-world mastery in provisioning, configuring, debugging, and managing containerized applications on Linux host environments."
  },
  {
    id: "kodekloud-linux-level1",
    command: "fetch kodekloud-engineer-linux-l1.crt",
    title: "KodeKloud Engineer - Linux (Level 1)",
    issuer: "KodeKloud",
    badgeName: "VERIFIED",
    certId: "KK-LNX-L1-2026-4432",
    issueDate: "2026",
    skillsCovered: ["Bash Scripting & Automation", "Systemd & Process Management", "User & Group Permissions", "SSH & Firewall Configuration (UFW/IPTables)", "Storage & LVM Partitioning"],
    verificationUrl: "https://kodekloud.com/certificate-verification",
    description: "Rigorous command-line validation verifying proficiency in Linux systems administration, performance diagnostics, server hardening, and automation."
  },
  {
    id: "docker-absolute-beginner",
    command: "fetch docker-training-beginner.crt",
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "Docker Training Academy",
    badgeName: "VERIFIED",
    certId: "DOC-BEG-2025-9931",
    issueDate: "2025",
    skillsCovered: ["Docker Architecture & Daemon", "Image Creation & Layers", "Port Binding & Isolation", "Docker Compose Multi-Container Orchestration"],
    verificationUrl: "https://kodekloud.com/certificates",
    description: "Foundational mastery of containerization concepts, decoupling monolithic workloads into lightweight, reproducible microservices."
  },
  {
    id: "sliit-cs-undergraduate",
    command: "fetch sliit-cs-undergraduate.crt",
    title: "B.Sc in Computer Science (Undergraduate)",
    issuer: "SLIIT (Sri Lanka Institute of Information Technology)",
    badgeName: "ACTIVE CANDIDATE",
    certId: "SLIIT-CS-2024-2028",
    issueDate: "Expected 2028",
    skillsCovered: ["Distributed Systems", "Computer Architecture", "Computer Networks & Security", "Data Structures & Algorithms"],
    verificationUrl: "https://sliit.lk",
    description: "Rigorous 4-year degree program focusing on software engineering, computer networks, distributed architectures, and cloud services."
  }
];
