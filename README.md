# Game of Thrones API Explorer
Una aplicación web interactiva construida con React 19 y Tailwind CSS 4 que consume la ThronesAPI para visualizar información detallada sobre los personajes y la geografía de Poniente y Essos.

## 🚀 Despliegue en vivo: 

https://game-of-throne-api-react.vercel.app/

## ✨ Características Principales
Explorador de Personajes: Visualización dinámica de personajes mediante tarjetas detalladas que incluyen nombre, título y casa.

Normalización de Datos: Lógica personalizada para corregir errores ortográficos de la API (ej: "Lanister" a "Lannister") y asignar colores temáticos según la casa.

Mapa Interactivo de Continentes: Representación visual de los continentes (Westeros, Essos, Sothoryos, Ulthos) con etiquetas posicionadas dinámicamente sobre un mapa.

Diseño Temático: Interfaz oscura inspirada en la estética de la serie, utilizando la tipografía Cinzel y colores heráldicos específicos para cada casa nobiliaria.

Responsive Design: Adaptabilidad completa para dispositivos móviles, tablets y escritorio mediante el sistema de grid de Tailwind.

## 🛠️ Tecnologías Utilizadas
Core: React 19

Herramienta de Construcción: Vite 7

Estilos: Tailwind CSS 4 (usando el nuevo motor @theme)

Peticiones HTTP: Axios

Fuentes: Google Fonts (Cinzel)

## 📁 Estructura del Proyecto
Plaintext
src/
├── components/          # Componentes reutilizables (Card, Header, Footer)
├── services/            # Lógica de consumo de API (CharactersAPIServices)
├── App.jsx              # Punto de entrada de la aplicación
├── index.css            # Configuración global y temas de Tailwind 4
└── main.jsx             # Renderizado principal
public/
└── images/              # Activos locales (Sigilos de casas y mapas)

## ⚙️ Instalación y Configuración
Si deseas ejecutar el proyecto localmente, sigue estos pasos:

Clonar el repositorio:

Bash
git clone https://github.com/tu-usuario/game-api-react.git
cd game-api-react
Instalar dependencias:

Bash
npm install
Ejecutar en modo desarrollo:

## 🛡️ Detalles Técnicos Destacados
Corrección de Familias: El componente Card.jsx incluye un motor de normalización que limpia los strings de la API (ej: elimina el prefijo "House") para asegurar que los sigilos e imágenes se carguen correctamente.

Optimización de UI: Se filtran personajes específicos (como el ID 7) para gestionar inconsistencias en los datos de origen.

Tematización Variable: Uso de variables CSS personalizadas en Tailwind 4 para gestionar los colores de identidad de las casas Stark, Lannister, Targaryen, entre otras.

### 👥 Créditos
Desarrollado por Facundo siguiendo el trabajo del Equipo 3 en JM Factoria.

Aviso Legal: Proyecto con fines exclusivamente educativos. Los derechos de Game of Thrones pertenecen a HBO® y George R. R. Martin.