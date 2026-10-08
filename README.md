# Para ti — Gift romántico

Una experiencia web romántica interactiva hecha en HTML, CSS y JavaScript, lista para publicarse como sitio estático.

## Ejecutar en local

Usa un servidor estático para que el mapa, YouTube y las rutas relativas se comporten igual que en producción:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Personalización principal

Toda la configuración vive en `app.js`, dentro del objeto `DATA`.

Puedes cambiar:

- Nombres.
- Fecha de aniversario.
- Foto principal del hero.
- Canción de YouTube.
- Fotografías.
- Timeline.
- Lugares del mapa.
- Carta.
- Vales.
- Lista de sueños.
- Opciones de la ruleta.

## Foto principal del hero

La portada usa esta variable:

```js
heroPhoto: "assets/photos/hero.jpg"
```

Si quieres otra imagen, coloca el archivo dentro de `assets/photos/` y cambia esa ruta.

## Música con YouTube

La música ya no usa un archivo local. Ahora se configura así:

```js
song: {
  name: "Nuestra canción",
  youtubeUrl: "https://www.youtube.com/watch?v=REEMPLAZAR_VIDEO_ID"
}
```

Puedes usar enlaces como:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/watch?v=VIDEO_ID&t=43s`

La reproducción intenta comenzar cuando la persona pulsa `Entrar a nuestra historia`, que sí cuenta como interacción válida en PC, Android y iPhone.

## Mapa y Pins

El mapa usa Leaflet + OpenStreetMap.

Los Pins base siguen definidos en:

```js
places: [
  {name:"...",lat:10.391,lng:-75.4794,text:"..."}
]
```

Además, ahora puedes crear nuevos Pins directamente sobre el mapa:

1. Haz clic o toca cualquier punto del mapa.
2. Escribe nombre, descripción, fecha y recuerdo.
3. El nuevo Pin se guarda en `localStorage` del navegador.

Los Pins originales se mantienen visibles y los nuevos se añaden sin reemplazarlos.

## Datos persistentes

Se usa `localStorage` para guardar:

- Vales canjeados.
- Sueños completados.
- Pins creados desde el mapa.

Para reiniciar esos datos, borra los datos del sitio en el navegador.

## Publicación gratuita recomendada

El proyecto quedó preparado para despliegue en Vercel como sitio estático.

### Opción recomendada: Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra en Vercel y pulsa `Add New Project`.
3. Importa el repositorio.
4. Vercel detectará que es un sitio estático y publicará sin build especial.
5. Obtendrás una URL pública tipo `https://tu-proyecto.vercel.app`.

Si luego actualizas el repositorio, Vercel republica automáticamente.

### Alternativa

También puedes publicarlo en Netlify o GitHub Pages, porque no requiere backend ni build.

## Compatibilidad

Se ajustó el proyecto para que funcione mejor en:

- PC.
- Android.
- iPhone.

Puntos sensibles ya contemplados:

- Inicio de música tras interacción del usuario.
- YouTube en modo `playsinline` para móviles.
- Carta responsive sin desbordamiento horizontal.
- Reajuste del mapa cuando la app pasa de oculta a visible.

## Importante

Los textos, enlaces y coordenadas incluidos son ejemplos. Sustitúyelos por sus recuerdos reales.
