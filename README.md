# Curso de Backend con Node.js: Base de Datos con PostgreSQL

Profesor: Nicolas Molina

## Configuración de postgres en Docker

Para crear la instacia de base de datos en postgres, se debe ejecutar el siguiente comando:

```
docker-compose up -d postgres
```
Inspeccionar el contenedor corriendo
  
  ```
  docker-compose ps
  ```

Detener y remover la instancia de base de datos
  
  ```
  docker-compose down
  ```

Se creó un volumen para persistir información de la base de datos
  

https://hub.docker.com/_/postgres

## Explorando Postgres: interfaces gráficas vs. terminal

Ingresar al contenedor de docker desde la terminal
  
  ```
  docker-compose exec postgres bash
  ```

Ingresando a la base de datos
  
  ```
  psql -h localhost -d my_store -U cesar
  ```
  
  Comando para conocer la estructura de la base de datos

  ```
  \d+
  ```

  Salir de la base de datos

  ```
  \q
  ```

Salir del contenedor

  ```
  exit
  ```

Motor gráfico para conectarse a la base de datos:
https://www.pgadmin.org/

Iniciar la instancia de pgadmin

```
docker-compose up -d pgadmin
```

Ingresando a pgadmin

  ```
http://localhost:5050
  ```

Conectando pgadmin4 con instancia de postgres


Object > Register  > Server

![Conectando a postgres - pestaña general](./docs/pgadmin-1.png)
![Conectando a postgres - pestaña connection](./docs/pgadmin-2.png)

En host name se ingresó el nombre del servicio en docker-compose.yml: "postgres"

Para ejecutar querys se usa la herramienta query tool

![Abriendo query tool](./docs/pgadmin-3.png)

Creando tabla

``` 
CREATE TABLE tasks (
	id serial PRIMARY KEY,
	title VARCHAR ( 255 ) NOT NULL,
	completed boolean DEFAULT false
);
```

![Ejecutando consulta](./docs/pgadmin-4.png)

Consultando la tabla desde pgadmin4
![Refrescando la vista](./docs/pgadmin-5.png)
![Tabla creada](./docs/pgadmin-6.png)
![Consultando la tabla](./docs/pgadmin-7.png)

Consultano la tabla desde la terminal
![Postgres desde terminal](./docs/postgres-desde-terminal.png)
