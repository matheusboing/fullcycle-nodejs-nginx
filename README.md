This is a challenge proposed by the FullCycle course. It's a simple application using Docker knowledge, which runs a Node.js application using Nginx as a reverse proxy server. And after running the application, a data is inserted into the MySQL database.
To run this application:
```
docker-compose up --build
```
To access database and view the data inserted after run the application:

```
docker exec -it db bash
```
```
mysql -uroot -p
```
```
pass: MYSQL_ROOT_PASSWORD
```
```
use nodedb;
```
```
SELECT * FROM users;
```
