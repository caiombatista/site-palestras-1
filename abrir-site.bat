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
echo Gerando a versao pronta do site...
call npm run build
if errorlevel 1 (
  echo.
  echo Falha ao gerar o site.
  pause
  exit /b 1
)

echo.
echo Abrindo o site no navegador...
start "" cmd /c "timeout /t 3 >nul && start http://localhost:3000"
echo Iniciando o servidor local...
echo Para parar, pressione Ctrl+C nesta janela.
echo.
call npm run start

endlocal
