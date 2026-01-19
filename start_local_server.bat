@echo off
set PORT=8000

echo Starting local server on port %PORT%...
start chrome http://localhost:%PORT%

py -3 -m http.server %PORT%

pause
