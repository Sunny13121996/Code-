###### Node Js + MongoDB ######

> Downloading Gitbash from official site (WIN 64 bit)

   GItbash is version controller of Git and is used to run commands of Git
   *Unwanted Gyan :- photopea is online photoshop

 <ctrl + ` :- To open terminal in visual studio code >
> To open project in Visual Studio Code
   Step 1 :- Make a directory
   Step 2 :- Go in that Directory
   Step 3 :- open CMD and type "code ." (code space .)
  
  -:-:-:Inside Visual Studio Code :-:-:-
   > powershell + Drop-down arrow
     ->Bash
     ->CMD
     ->Javascript
   > books   MIWNG64
   
 <touch abc.txt :- Makes files named abc >

# To Setup Node project 
    npm init - Y (Y is yes)
   This will initialize packet.JSON in your project
    
    touch app.js (Create file)

    npm i express --save

    <--save> will save express in your local project without it this will be stored gobally
>What is MongoDB
   Mongo is derived from word "Humongous". MongoDB is a database which is used to store data 
    
           Databasde(shop)
    Collection          user:     
    DOcument            {name: 'Sunny', age : '89'}  
  
   Collection is basically tables & Documents is basically records

    Object{name:'Sunny'}

   in above example
        the Objects are inside curly braces"{}". 
        key is "name:"
        value is " 'sunny' "        
 >Diffrence between MySQL and MongoDB
       MySQL        |        Mongo
                    |
    name     age    |   objects{name: 'Monu',age: 31},
    monu     32     |   {name: 'sumit'}
    sumit    null   |    
>Setup mongoshell(windows)
    1.C:\\Programs\Program files\MongoDB\Server\5.0\bin
    2.Search (Environment),Open Environment>Environment Variable>
       under variable Click on paths make new path entry with path of your mongo then click on apply and ok

# Mongo Shell
>show dbs --> it will show all list of database of mongodb.
    By default all databases are admin, config, local.

>use shop --> As we saw earlier show dbs showed us three database but there is no database named shop so, what mongo will do it will create a temp database in its memory when a collection or a database will be inserted then it will create both database and collection with your entered document on runtime.

>db.products.insertOne({}) :- It will create a product collection or using insertOne you can put your data in it.
    ex: db.procuts.insertOne({name: "A book", price: 12.99})
  
  Output:
    {
        "acknowledged" : true,
        "insertedId" : ObjectId("628c8220f1d2410bf2a9b83c")
    }
>db.proucts.find() <-- It is used to show all records in your products collectoin.
    ex: db.products.find()
  
  Output:
    { "_id" : ObjectId("628c8220f1d2410bf2a9b83c"), "name" : "A book", "price" : 12.99 }
>db.products.find().pretty() <-- It is used to show all records in your products collection.
    ex:db.products.find().pretty()  

  Output:
    {
        "_id" : ObjectId("628c8220f1d2410bf2a9b83c"),
        "name" : "A book",
        "price" : 12.99
    }
>Demonstration
    ex: db.products.insertOne({book: "Attack on Titan", price: 239.9, description: "Eren Yeager! Eren Yeager! Eren Yeager" })
  
  Output:
    {
        "acknowledged" : true,
        "insertedId" : ObjectId("628c858af1d2410bf2a9b83d")
    } 

    ex: db.products.find().pretty()
  Output:
    {
        "_id" : ObjectId("628c8220f1d2410bf2a9b83c"),
        "name" : "A book",
        "price" : 12.99
    }
    {
        "_id" : ObjectId("628c858af1d2410bf2a9b83d"),
        "book" : "Attack on Titan",
        "price" : 239.9,
        "description" : "Eren Yeager! Eren Yeager! Eren Yeager"
    }
# Mongo Drivers 
 Now we are using node js so we can start mongodb structure building in node js 
>npm i mongodb
   i is for install 
>npm i nodemon -g <-- To run your project so you can don't have to strat again and again after saving your changes
    ex: nodemon app.js
>Creating Node Server 
   express :- To create server of Node 
   path :- used to define path
# Understanding Databases, Collections and Documents
> mongod <-- It will start mongodb server 
  *Note : If you want to change your port to diffrent port not to the default one you will need to use this command.
     Ex: [sudo mongod --port 27018]
> mongo <-- To run mongo shell Interface 
   *Note : If you have changed your port of mongo then the mongo will start listening up on 27017.It will listen up to your current port so, as per chamges you have done you can run like this (mongo --port 27018)
       
    Database :- It is just bulk of collection in (mongo) or in other words collection of tables in (my SQL).
    Collection :- It is basically a tables in mongo known as collection (mongo) in my SQL these are just tables(my SQL)
    Documents :- They are records known as document in (mongo) they are records known as rows (my SQL)
# JSON vs BSON 
   BSON -> Binary JSON
  
   JSON                                           BSON

  {                        _________
         name: 'sun'    _ |  Mongo  | >       
         age: 82       |_ |   DB    |    >     Binary Data
  }                       | Drivers | >

* Behind the scene mongoDB actually uses BSON data.
>Binary Data
>THe JSON to BSON conversion is done by mongodb drivers basically takes your JSON code to Binary data. Because it is efficient from JSON data and easy to store instead of JSON data.
# Core diffrence between JSON and BSON
  In JSON body you can't make key of _Id:
  {
    name: 'sun',
    _Id: ObjectId("87654321678909876543")
  } 
If you add a _Id key to make custom object id you can do so but make sure that the Id is unique for each document.
# CRUD(Create, Read, Update and Delete) operations in Mongodb
>Create
 InsetOne

    insert(data,options)       //other parameters options which will be used later on 
    insertMany(data,options)

 InsertMany

    ex:db.products.insertMany([{name: "Monika", class: "BCA", Rollno: 4506},{name: "Akinom", class: "ACB", Rollno: 6054 }])
  Output:
       {
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("628cad63f1d2410bf2a9b83e"),
                ObjectId("628cad63f1d2410bf2a9b83f")
        ]
       }
    
    you can pass array of objects to make multiple insertions.
>Read
    find(filters,options)
    findOne(filters,options)
>Update
    UpdateOne(filters,data,options)
    UpdateMany(filters,data,options)
    filters :- which record 
    data :- What to change
>Delete
    deleteOne(filters,options)
    deleteMany(filter,options)
# Finding, Insreting, Deleting & operating
>Finding
    ex:db.products.find().pretty()
      
  Output:
     {
        "_id" : ObjectId("628c8220f1d2410bf2a9b83c"),
        "name" : "A book",
        "price" : 12.99
     }
     {
        "_id" : ObjectId("628c858af1d2410bf2a9b83d"),
        "book" : "Attack on Titan",
        "price" : 239.9,
        "description" : "Eren Yeager! Eren Yeager! Eren Yeager"
     }
>Delete
    ex:db.products.deleteOne({name: "A book"})

  Output:
     { "acknowledged" : true, "deletedCount" : 1 }

Left Items

    ex:db.products.find().pretty()

      {
        "_id" : ObjectId("628c858af1d2410bf2a9b83d"),
        "book" : "Attack on Titan",
        "price" : 239.9,
        "description" : "Eren Yeager! Eren Yeager! Eren Yeager"
     }

  DeleteMany
      
    ex:db.products.deleteMany({})

>Update
    ex:db.products.updateOne({book: "Attack on Titan"},{$set: {Type: "Manga"}})

  Output:
     { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
  Left items
     ex:db.products.find().pretty()                                             
      {
        "_id" : ObjectId("628c858af1d2410bf2a9b83d"),
        "book" : "Attack on Titan",
        "price" : 239.9,
        "description" : "Eren Yeager! Eren Yeager! Eren Yeager",
        "Type" : "Manga"
      } 
*Note: $set is used to set the data in particular object without it It'll give anatomic operator error.Everything in mongodb that starts with "$" is a reserved keyword.

  UpdateMany

    ex:db.products.updateOne({},{$set: {Type: "Manga"}})
>Replace
   ex: replaceOne(filter,data,options)

# Deep Dive into find()
    -->show dbs
    -->use dbsname
    -->db.products.find().pretty()
● ex:db.products.find({})
    
    db.products.find({price: 239.9}).pretty()
  Output:
    {
        "_id" : ObjectId("628c858af1d2410bf2a9b83d"),
        "book" : "Attack on Titan",
        "price" : 239.9,
        "description" : "Eren Yeager! Eren Yeager! Eren Yeager",
        "Type" : "Manga"
    }
● ex: db.products.find({price:{$gt: 200}}) <-- $gt is used to fetch records greater than conditions.
● ex: db.products.find({Rollno:{$lt:7000}}).pretty() <-- $lt is used to fetch records less than conditions.
  
    db.products.find({Rollno:{$lt:7000}}).pretty()
  Output:
    {
        "_id" : ObjectId("628cad63f1d2410bf2a9b83e"),
        "name" : "Monika",
        "class" : "BCA",
        "Rollno" : 4506
    }
    {
        "_id" : ObjectId("628cad63f1d2410bf2a9b83f"),
        "name" : "Akinom",
        "class" : "ACB",
        "Rollno" : 6054
    }
● ex: db.products.findOne({Rollno:{$gt:4000}})

    db.products.findOne({Rollno:{$gt:4000}})
  Output:
     {
        "_id" : ObjectId("628cad63f1d2410bf2a9b83e"),
        "name" : "Monika",
        "class" : "BCA",
        "Rollno" : 4506
     }
  or
     
      db.products.findOne({Rollno:{$lt: 6000}})
  *Note :- pretty() is not supported with findOne.
# Update Vs UpdateMany
● db.products.updateOne({}) <-- updates single record
   ex: db.products.updateOne({_id: ObjectId("628cad63f1d2410bf2a9b83e")},{$set:{delyed: true}})
  Output:
    { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

  modified item

  db.products.findOne({Rollno:{$lt: 6000}})
     {
        "_id" : ObjectId("628cad63f1d2410bf2a9b83e"),
        "name" : "Monika",
        "class" : "BCA",
        "Rollno" : 4506,
        "delyed" : true
     }
 above command will update the document with "Id: ObjectId("628cad63f1d2410bf2a9b83e")" by adding another key that is "delayed: true"
  ex: db.products.update.({_Id:ObjectId("628cad63f1d2410bf2a9b83e")},{$set:{delayed:true}})
  #Note: Now the delayed value is true so if we run as input delyed true it will be executed but the "nModified" indicates you 0 something like this "nModified":0.Now I have change the input delayed : false the output is "nModified":1 that means your document has been affected with somedata. So note that everytime you update the recods please keeo in mind you want use the another value to update the value of the key.
    Output:
      WriteResult({"nModified":1,"nUpserted":0, "nModified":1}) 
  

