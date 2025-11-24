# Deployment Guide

This guide covers multiple deployment options for the xAI Talent Search application.

## 🚀 Recommended: Vercel (Frontend) + Railway (Backend)

**Best for**: Quick deployment, free tiers available, minimal setup

### Backend on Railway

1. **Sign up** at [railway.app](https://railway.app)
2. **Create new project** → "Deploy from GitHub repo"
3. **Select your repository** → Choose `backend` folder as root
4. **Set environment variables**:
   - `OPENAI_API_KEY` - Your OpenAI API key
   - `OPENAI_EMBED_MODEL` - (optional) Default: `text-embedding-3-small`
   - `OPENAI_EMBED_BATCH` - (optional) Default: `50`
5. **Deploy** - Railway will auto-detect Python and install dependencies
6. **Copy your Railway URL** (e.g., `https://your-app.railway.app`)

### Frontend on Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import your GitHub repository**
3. **Configure project**:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. **Add environment variable**:
   - `NEXT_PUBLIC_API_URL` - Your Railway backend URL (e.g., `https://your-app.railway.app`)
5. **Deploy** - Vercel will build and deploy automatically

### Update CORS in Backend

After deploying, update `backend/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-frontend.vercel.app"  # Add your Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 🐳 Option 2: Docker Compose (Self-Hosted)

**Best for**: Full control, single server deployment

### Prerequisites
- Docker and Docker Compose installed
- Server with at least 2GB RAM

### Deploy

1. **Clone repository**:
```bash
git clone https://github.com/alhridoy/xAI_talent.git
cd xAI_talent
```

2. **Create `.env` file**:
```bash
OPENAI_API_KEY=your_key_here
OPENAI_EMBED_MODEL=text-embedding-3-small
OPENAI_EMBED_BATCH=50
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. **Build and start**:
```bash
docker-compose up -d --build
```

4. **Access**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

### Production Tips

- Use a reverse proxy (nginx) for SSL
- Set up environment variables securely
- Use Docker volumes for data persistence
- Configure firewall rules

---

## ☁️ Option 3: AWS/GCP/Azure

**Best for**: Enterprise, high scalability

### AWS Setup

#### Backend (ECS/Fargate)
1. Create ECR repository
2. Build and push Docker image
3. Create ECS task definition
4. Deploy to Fargate
5. Set up Application Load Balancer

#### Frontend (Amplify/S3+CloudFront)
1. Build Next.js: `cd frontend && npm run build`
2. Deploy to Amplify or S3+CloudFront
3. Configure environment variables

### GCP Setup

#### Backend (Cloud Run)
1. Build container: `gcloud builds submit --tag gcr.io/PROJECT_ID/backend`
2. Deploy: `gcloud run deploy --image gcr.io/PROJECT_ID/backend`
3. Set environment variables in Cloud Run

#### Frontend (Cloud Run or Firebase Hosting)
- Cloud Run: Similar to backend
- Firebase: `firebase deploy`

---

## 🔧 Environment Variables

### Backend
- `OPENAI_API_KEY` (required) - OpenAI API key for embeddings
- `OPENAI_EMBED_MODEL` (optional) - Embedding model name
- `OPENAI_EMBED_BATCH` (optional) - Batch size for embeddings

### Frontend
- `NEXT_PUBLIC_API_URL` (required) - Backend API URL

---

## 📊 Data Files

The app requires data files in the `data/` directory:
- `senior_researchers_20251122_204419.csv` - Main researcher dataset
- `ai_talent_knowledge_graph.json` - Knowledge graph data
- `researcher_embeddings.npz` - Cached embeddings (auto-generated)

**For production**, ensure these files are:
- Included in Docker image (if using Docker)
- Uploaded to your hosting platform
- Or mounted as volumes

---

## 🔒 Security Checklist

- [ ] Never commit `.env` files
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (SSL/TLS)
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Use secure API keys
- [ ] Enable firewall rules
- [ ] Regular security updates

---

## 🚨 Troubleshooting

### Backend won't start
- Check Python version (3.9+)
- Verify all dependencies installed
- Check data files exist
- Review logs for errors

### Frontend can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS settings in backend
- Ensure backend is accessible
- Check network/firewall rules

### Slow performance
- Embeddings generation takes time on first run
- Check server resources (CPU/RAM)
- Consider caching strategies
- Optimize data file sizes

---

## 📈 Monitoring

Recommended tools:
- **Backend**: Railway/Render built-in logs, or Sentry
- **Frontend**: Vercel Analytics, or Google Analytics
- **APM**: New Relic, Datadog (for production)

---

## 🔄 CI/CD

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        run: railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 💰 Cost Estimates

### Free Tier Options
- **Vercel**: Free (hobby plan)
- **Railway**: $5/month free credit
- **Render**: Free tier available

### Paid Options
- **Vercel Pro**: $20/month
- **Railway**: Pay-as-you-go (~$5-20/month)
- **AWS/GCP**: Variable, ~$10-50/month for small apps

---

## 📞 Support

For deployment issues, check:
1. Platform-specific documentation
2. Application logs
3. Environment variable configuration
4. Network connectivity

