#!/bin/bash
set -xe

# build frontend
cd frontend
npm install
npm run build
cd ..

# delete old public assets in backend
if [ -d "backend/src/main/resources/static" ]; then
  rm -rf backend/src/main/resources/static
fi
mkdir backend/src/main/resources/static

# copy frontend build to backend
cp -R frontend/build/* backend/src/main/resources/static

# build backend
cd backend
mvn clean package