#!/bin/sh
set -e

cd /backend
python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000 &

cd /app
exec node server.js
