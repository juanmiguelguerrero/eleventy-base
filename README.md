# Starter project for static site using Eleventy

This is a startup project based on [Eleventy](https://www.11ty.io), a great and simple Static Site Generator.

The configuration of this work environment includes:

- A scaffold to start building quickly with Eleventy.
- Webpack configuration for development and production environments.
- Preprocessing SASS files to CSS.
- Transpiled from Typescript to Javascript.
- Nunjuck configuration as template engine.
- Compile from Vue Single File Components.
- CSS and Javascript minified bundles.
- Asset management and optimization.
- Configuration file for publish in Netlify.



### Instalación

```
$ npm i
```

### Modo Desarrollo

```
$ npm run dev
```

Development mode runs a local web server with hot-reloading function at http: // localhost: 8080

### Modo Producción

El modo producción genera el precompilado de las plantillas, optimizado de los estilos CSS y archivos javascript dejando el sitio web listo para su publicación en la carpeta ```/dist```.

The production mode generates precompiled templates, optimized CSS styles and javascript files building the website ready for publication in the ```/dist``` folder.

```
$ npm run build
```



# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).



## [0.0.1] - 2019-08-23

### Added
- README.md including Project Changelog.