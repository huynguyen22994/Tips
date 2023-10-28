# Replica Set in MongoDb

## Command
```
docker network create <network name>
docker run -d -p 27001:27017 --net mongoNet --name r0 mongo:5.0.3 --replSet mongoRepSet
docker run -d -p 27002:27017 --net mongoNet --name r1 mongo:5.0.3 --replSet mongoRepSet
docker run -d -p 27003:27017 --net mongoNet --name r2 mongo:5.0.3 --replSet mongoRepSet
```

## Config
```
config = {
    "_id": "mongoRepSet",
    "members": [
        {
            "_id": 0,
            "host": <host>:27001
        },
        {
            "_id": 2,
            "host": <host>:27002
        },
        {
            "_id": 2,
            "host": <host>:27003
        }
    ]
}
```

## Set Config
```
rs.status()
res.initate(config)
```