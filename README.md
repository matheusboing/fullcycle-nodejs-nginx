Para acessar o banco de dados e visualizar o usuário inserido nele:
```
docker exec -it db bash
mysql -uroot -p
pass: root
use nodedb;
select * from users;
```
