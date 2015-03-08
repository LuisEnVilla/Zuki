# Zuki
Proyecto Zuki HACK CDMX

============


Hoy en día nosotros como sociedad necesitamos transparencia, manejo y gestión de la información que se crea según los movimientos de quienes nos gobiernan; por eso nos damos a la encomienda de crear un Aplicación web que permita observar claramente y a detalle estas situaciones.

Zuki es una plataforma especializada en la visualizacion de datos abiertos en la república mexicana. Es dinámica, de fácil uso y  orientada al público en general que busca respuestas, cumpliendo asi con los objetivos de este reto:
- Transparentar inteligentemente la información pública que se genera sobre los lugares de interes de los usuarios y las caracteristicas principales con las que cuenta sus delegaciones, para fomentar un debate público informado y rendir cuentas en la materia.
- Desarrollar una herramienta web de código abierto que pueda ser replicada a nivel nacional e internacional por otras instituciones públicas.
- Generar una primera práctica de reutilización de datos abiertos sobre geolocalizacion para retroalimentar un posible primer estándar de publicación de datos abiertos de geolocalizacion.
- Generar estadísticas y métricas sobre distintos aspectos de las delegaciones cercabas, así como visualizaciones que permitan realizar comparaciones históricas, temáticas y que faciliten el seguimiento y la evaluación.

Este proyecto esta basado en la nueva tendencia que google trae para nosotros: [“Google Material Design”]( http://www.google.com/design/spec/material-design/introduction.html#) con su interfaz práctica y manejable. Esta gran empresa tiene un lema… “Concentrate en el usurio y todo lo demás seguirá.”(“Focus on the user and all else will follow.”) por eso decidimos realizar una amplia investigación para lograr asi una implementación de Software inteligente y amigable con la sociedad, sin dejar de un lado el gran impacto que se pretende con el manejo de información e interaccion entre el usuario y Zuki. 


Por ser de uso General se podrá manipular usuario: Se refiere a público en General. 

API:
- Permitir el intercambio de la información por medio de esta App.
- Mostrar datos por medio de un TOP 4, además de hacer consultas según los lugares de interes, escuelas, instituciones y hospitales de manera específica, delimitando las respuestas según los criterios de búsqueda realizados por el usuario.

##Dependencias
- MongoDB ~ v2.6.4
- NodeJS ~ v0.10.30
- Phyton ~ v2.6
- Express ~ v4.9.0



##Instalación Rapida
Para lograr el buen funcionamiento de esta App Web se necesita instalar las Dependencias anteriormente mencionadas.

Despues de haber instalado las dependencias, clona el repositorio [Zuki](https://github.com/LuisEnVilla/Zuki.git).

`git clone git://github.com/LuisEnVilla/Zuki.git`

Asegurate que se esta ejecutando el servidor mongod, que se instala junto con MongoDB. Ejecuta mongorestore para importar la base de datos que esta en la carpeta BD del proyecto.


`mongorestore Zuki/BD/Zuki`

Una vez agregada la BD diriguete a la raíz del proyecto  e instala las dependencias necesarias con npm.

`npm install`


Sin dejar de ejecutar el servidor mongod, ejecuta como administrador o super usuario, el servidor NodeJs. Debido a que esta pogramado a ejecutarce en el puerto 80, pero lo puedes configurar en "Zuki/bin/www".

`npm start`


Ahora solo rediriguete en tu navegador a "localhost" y podras vizualizar la aplicación web funcionando.


Si necesitas mayor información visita nuestra [wiki.](https://github.com/LuisEnVilla/Zuki/wiki/Instalaci%C3%B3n-de-Dependencias:)

####Nota: Lo unico que no funcionaria es el motor de WhatsApp. Si quieres ver como instalarlo y arrancarlo, por favor visita nuestra gia paso a paso en la [wiki.](https://github.com/LuisEnVilla/Zuki/wiki/WhatsAppEgine)
