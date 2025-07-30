#!/bin/bash

# Fix Dependencies Script for Tour Operator Website
echo "🔧 Starting dependency fix process..."

# Step 1: Complete cleanup
echo "📦 Cleaning up corrupted files..."
rm -rf node_modules/
rm -f package-lock.json
rm -rf .next/

# Step 2: Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Step 3: Install dependencies with legacy peer deps
echo "⚡ Installing dependencies..."
npm install --legacy-peer-deps

# Step 4: Install additional required packages
echo "📚 Installing additional packages..."
npm install @portabletext/react@^3.2.1 --legacy-peer-deps

# Step 5: Try to start server
echo "🚀 Starting development server..."
npm run dev

echo "✅ Setup complete! Server should be running at http://localhost:3000"