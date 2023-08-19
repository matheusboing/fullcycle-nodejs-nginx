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
