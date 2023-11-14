

export const errores = ()=>{
    return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Error 404 - Página no encontrada</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                flex-direction: column;
            }
    
            .error-container {
                text-align: center;
            }
    
            .error-code {
                font-size: 5em;
                color: #555;
                margin: 0;
            }
    
            .error-message {
                font-size: 1.5em;
                color: #777;
                margin: 10px 0;
            }
    
            .home-link {
                text-decoration: none;
                padding: 10px 20px;
                background-color: #3498db;
                color: #fff;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }
    
            .home-link:hover {
                background-color: #2980b9;
            }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Lo sentimos, la página que buscas no se pudo encontrar.</p>
            <a href="/" class="home-link">Volver a la página principal</a>
        </div>
    </body>
    </html>
    `
}