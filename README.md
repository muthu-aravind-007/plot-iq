# PlotIQ

AI-powered Property Due Diligence Platform built using Mireye Earth.

PlotIQ helps investors, developers, and homebuyers evaluate land using geospatial intelligence before making investment decisions.

---

## Features

- Property Investment Score
- Terrain Analysis
- Flood Risk Assessment
- Wetland Detection
- Environmental Analysis
- Interactive Property Map
- Executive Summary
- Investment Recommendations
- PDF Report Generation

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Leaflet

### Backend

- FastAPI
- Python
- ReportLab
- Mireye Earth API

---

## Project Structure

frontend/
backend/

---

## Installation

### Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MIREYE_API_KEY=your_api_key
```

---

## Built With

- Mireye Earth API
- OpenStreetMap
- FastAPI
- React
- TailwindCSS

---

## Author

A. Muthu Aravind
