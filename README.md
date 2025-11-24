# xAI Talent Search

A clean, minimalist semantic search engine for discovering top AI researchers and engineers at leading organizations. Inspired by the design simplicity of classes.wtf.

## Features

- 🔍 **Semantic Search**: Natural language search that understands context and meaning
- ⚡ **Auto-Search**: Results update automatically as you type (300ms debounce)
- 🎯 **Smart Filtering**: Simple checkbox and inline company filter
- 📊 **Rich Profiles**: Publications, patents, and social links (LinkedIn, Google Scholar, GitHub, Twitter, Website)
- 🎨 **Clean UI**: Minimalist, list-based interface for efficient scanning
- ⏱️ **Performance Display**: See result count and search time for each query
- 📱 **Responsive**: Works great on desktop, tablet, and mobile

## Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Axios** for API calls

### Backend
- **FastAPI** for high-performance API
- **Sentence Transformers** for semantic search
- **Pandas** for data processing
- **NumPy** for vector operations

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the backend server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Design Philosophy

This application follows a **minimalist, content-first** design inspired by [classes.wtf](https://classes.wtf):

- **Clean list-based layout** instead of cards for faster scanning
- **Automatic search** as you type (no need to click search button)
- **Clear visual hierarchy** with typography and spacing
- **Minimal color usage** - blue accents on white background
- **Performance metrics** displayed for transparency
- **Focused experience** with maximum content width of ~900px

See [DESIGN_UPDATE.md](DESIGN_UPDATE.md) for detailed design decisions.

## Usage

1. **Start Typing**: Search updates automatically as you type
2. **Natural Language**: Try queries like:
   - "researchers working on large language models"
   - "computer vision experts at Google"
   - "AI safety researchers"
   - "transformer models"
3. **Filter by Company**: 
   - Uncheck "Show all organizations"
   - Type company name in filter field
4. **Browse Results**: Scroll through the list
5. **View Profiles**: Click social links (LinkedIn, Scholar, GitHub, etc.)

## Data Format

The application expects a CSV file with the following columns:
- name
- title
- company
- location
- linkedin_url
- twitter
- google_scholar
- github
- personal_website
- about
- current_role
- total_publications
- total_patents
- source_query

## API Endpoints

- `GET /api/researchers` - Get all researchers (paginated)
- `POST /api/search` - Semantic search for researchers
- `GET /api/stats` - Get database statistics

## Performance

- The first time you run the backend, it will generate embeddings for all researchers. This may take a few minutes but only happens once.
- Embeddings are cached in `backend/embeddings.npy` for fast subsequent startups.

## Customization

### Change the embedding model
In `backend/main.py`, modify:
```python
model = SentenceTransformer('all-MiniLM-L6-v2')
```

### Adjust search results
In `frontend/app/page.tsx`, modify the `limit` parameter:
```typescript
params: { limit: 50 }  // Change to your preferred number
```

## Deployment

### Backend
- Deploy to Heroku, Railway, or any Python hosting service
- Set environment variables for production database

### Frontend
- Deploy to Vercel, Netlify, or any static hosting
- Update `NEXT_PUBLIC_API_URL` to your production API URL

## Contributing

Feel free to open issues or submit pull requests!

## License

MIT License
