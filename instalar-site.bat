@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js nao foi encontrado no PATH.
  echo Instale a versao LTS em: https://nodejs.org/
  echo Depois feche e abra o terminal novamente.
  echo.
  pause
  exit /b 1
)

echo.
echo Instalando dependencias do projeto...
echo.
call npm install

if errorlevel 1 (
  echo.
  echo Houve um problema durante a instalacao.
  pause
  exit /b 1
)

echo.
echo Instalacao concluida com sucesso.
pause

endlocal
