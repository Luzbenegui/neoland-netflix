# BASE DE DATOS
Se utilizará una única base de datos con la tecnología mongo. La base de datos se llamará "netflix" y tendrá 2 coleccciones:
    - users
    - films

## Crear base de datos
use netflix

### Crear colecciones
db.createCollection("users")
db.createCollection("films")

### Insertar el primer usuario
db.users.insert({name: "admin", email: "admin@gmail.com", password: "admin", age: 28}) mete un documento dentro de una colección llamada users

### Añadir campos a la base de datos
db.users.update({_id: ObjectId("XXXXXXXXXXXXXXXXXX")},{$set:{nuevoCampo: "Valor"}})