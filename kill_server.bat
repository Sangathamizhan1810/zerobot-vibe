@echo off
echo Killing process running on port 3000 (Next.js default port)...
FOR /F "tokens=5" %%T IN ('netstat -a -n -o ^| findstr "0.0.0.0:3000"') DO (
  echo Killing PID %%T
  taskkill /F /PID %%T
)
echo Done.
