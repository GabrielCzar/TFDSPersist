# Sharding Mongo DB 3.4
[Mongo Docs Sharding](https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/)
_Em caso de necessidade de modo root deve ser mantido para todos os comandos posteriores_

- Criando o Config Server

```
mkdir \data\configdb
mongod --configsvr --port 27008
mongod --configsvr --port 27009
mongod --configsvr --port 27010
```

- Criando o Router

_Para somente uma replica set_
```mongos --configdb replsetname/localhost:27010 --port 27011```

_Para utilizar mais de 1 config server adicione uma virgula_
```mongos --configdb localhost:27010,190.1.1.10:666,190.1.1.11:666, --port 27011```

- Criando os Shards

```
mkdir /data/shard1 && mkdir /data/shard2 && mkdir /data/shard3
mongod --port 27012 --dbpath /data/shard1
mongod --port 27013 --dbpath /data/shard2
mongod --port 27014 --dbpath /data/shard3
```

- Resgistrando os Shards no Router

```mongo --port 27011 --host localhost```	

```
mongos> sh.addShard("localhost:27012")  
mongos> sh.enableSharding("tfdspersist")  
mongos> sh.shardCollection("tfdspersist.posts", {"_id" : 1})    
```

- Enviando os dados para o Router
	
	- Devemos sempre enviar dados para o Router
- Dica:

O tamanho padrão do chunk de cada shard é 64MB, logo a coleção precisar ser maior que 64MB para que ocorra a divisão dos seus dados pela shard key
