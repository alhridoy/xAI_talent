#!/bin/bash

echo "🚀 Setting up xAI Talent Search..."

# Backend setup
echo "📦 Setting up backend..."
cd backend

if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing Python dependencies (this may take a few minutes)..."
pip install --upgrade pip
pip install fastapi uvicorn pandas numpy python-multipart pydantic "redis[hiredis]"

echo "✅ Backend setup complete!"

# Frontend setup
echo "📦 Setting up frontend..."
cd ../frontend

if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install
fi

echo "✅ Frontend setup complete!"

echo ""
echo "🎉 Setup complete! To start the application:"
echo ""
echo "1. Start the backend:"
echo "   cd backend && source venv/bin/activate && python main.py"
echo ""
echo "2. In a new terminal, start the frontend:"
echo "   cd frontend && npm run dev"
echo ""
echo "3. Open http://localhost:3000 in your browser"
