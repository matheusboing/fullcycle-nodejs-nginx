First of all, comment out the images for Node and Nginx, and only create the database and access it this way: 
```
docker exec -it db bash
mysql -uroot -p
pass: root
use nodedb;

# You should create a table like this:
create table users(id int auto_increment, name varchar (255), primary key (id));
select * from users;

#  Then, uncomment the comments and rebuild again using docker-compose up --build.
```
