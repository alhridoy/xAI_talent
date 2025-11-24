# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Option 1: Automated Setup (Recommended)

Run the setup script:
```bash
./setup.sh
```

This will automatically set up both backend and frontend.

### Option 2: Manual Setup

#### Step 1: Setup Backend

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Mac/Linux
# OR
venv\Scripts\activate  # On Windows

# Install dependencies
pip install fastapi uvicorn pandas numpy sentence-transformers python-multipart pydantic
```

#### Step 2: Setup Frontend

```bash
cd frontend

# Install dependencies
npm install
```

#### Step 3: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
python main.py
```

Backend will be running at: http://localhost:8000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will be running at: http://localhost:3000

## Using the Scripts

If you've run the setup, you can use the convenience scripts:

**Start Backend:**
```bash
./start-backend.sh
```

**Start Frontend (in a new terminal):**
```bash
./start-frontend.sh
```

## First Run

⏳ **Important:** The first time you start the backend, it will generate embeddings for all researchers. This process takes a few minutes but only happens once. The embeddings are cached for future runs.

## Usage Examples

### 1. Browse All Researchers
Simply open http://localhost:3000 to see all researchers.

### 2. Semantic Search Examples
Try searching for:
- "researchers working on large language models"
- "computer vision experts at Google"
- "reinforcement learning specialists"
- "AI safety researchers"
- "natural language processing at OpenAI"

### 3. Filter by Company
- Use the "Filters" button to filter by specific companies
- Type company names like "Google DeepMind", "OpenAI", "Meta", etc.

### 4. Combine Search and Filters
- Search: "transformer models"
- Filter by: "Google DeepMind"
- Get results that match both criteria

## Features

- 🔍 **Semantic Search**: Natural language queries
- 🏢 **Company Filter**: Filter by organization
- 📊 **Rich Profiles**: Publications, patents, and social links
- 🎨 **Modern UI**: Responsive design with dark mode support
- ⚡ **Fast**: Cached embeddings for instant results

## Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Kill the process using port 8000
lsof -ti:8000 | xargs kill -9
```

**Dependencies not installing:**
```bash
# Upgrade pip first
pip install --upgrade pip

# Then install dependencies individually
pip install fastapi
pip install uvicorn
pip install pandas
pip install numpy
pip install sentence-transformers
```

### Frontend Issues

**Port already in use:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Connection to backend failing:**
- Make sure backend is running on port 8000
- Check `.env.local` file has correct API URL

## API Documentation

Once the backend is running, visit:
http://localhost:8000/docs

This provides interactive API documentation.

## Project Structure

```
xAI_talent/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── venv/               # Virtual environment
│   └── embeddings.npy      # Cached embeddings (generated)
├── frontend/
│   ├── app/
│   │   ├── page.tsx        # Main page
│   │   ├── layout.tsx      # Layout wrapper
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   └── ResearcherCard.tsx  # Researcher card component
│   ├── types/
│   │   └── researcher.ts   # TypeScript types
│   └── package.json        # Node dependencies
├── data/
│   └── senior_researchers_20251122_204419.csv  # Data source
└── README.md               # Full documentation
```

## Next Steps

1. ✅ Get the app running
2. 🔍 Try different search queries
3. 🎨 Explore the researcher profiles
4. 🛠️ Customize the UI (optional)
5. 🚀 Deploy to production (optional)

## Support

If you encounter any issues:
1. Check this guide first
2. Review the main README.md
3. Check the browser console for errors
4. Check the backend terminal for errors

Happy searching! 🎉
