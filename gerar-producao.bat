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

if not exist "node_modules" (
  echo.
  echo Dependencias nao encontradas. Instalando agora...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo Falha ao instalar as dependencias.
    pause
    exit /b 1
  )
)

echo.
echo Gerando build de producao...
echo.
call npm run build

if errorlevel 1 (
  echo.
  echo O build falhou.
  pause
  exit /b 1
)

echo.
echo Build concluido com sucesso.
echo Para publicar, use a pasta gerada pelo Next.js ou rode: npm start
pause

endlocal
