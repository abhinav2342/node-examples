# MonogoDB module

### - The following file contains a node.js module to perform CRUD operations on a mongoDB database using callbacks.

- The operations.js file contains a module of node.js that can be directly used for  **CRUD** operations in a mongo database. 
- Index.js uses the mongoclient to setup  connection with the server on which the db is hosted



### To run the program follow the following steps:
- Mongodb , mongo client and assert (these two are node modules) has been used in the module.
[x] Ensure that mongoDB is installed.

[ ] Install mongo client for node.js (type the following in terminal)
```
 npm install mongodb@3.0.10 --save
 npm install assert@1.4.1 --save
```

[ ] Start the mongodb 
  - Go to the directory where you want the data to be stored then use: (type the following in the terminal)
```terminal
  mongod --dbpath=data --bind_ip=127.0.0.1 
```
*the server will be hosted on 127.0.0.1*

[ ] Clone the files and run index.js by using
```terminal
  npm start
```

###### *The module uses callbacks and nested callbacks, therefore basic knowledge of the same is need.*
###### *index1.js is an example of how to do the operations directly without call-backs or seperate module.*

###### Same code using promises will be updated to avoid the callback pyramid.
