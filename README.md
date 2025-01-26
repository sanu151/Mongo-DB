![image](https://github.com/user-attachments/assets/a32a5ef7-7669-44b2-be0d-6711a19c9dda)



# Mongo-DB
*A popular open-source NoSQL database*


The official website of MongoDB is **[https://www.mongodb.com/](https://www.mongodb.com/)**

You can find a wealth of information there, including:

* **Downloads:** Download the community edition of MongoDB or explore MongoDB Atlas, their cloud-based database service.
* **Documentation:** Access comprehensive documentation, tutorials, and API references.
* **Community:** Connect with other MongoDB users and developers through forums and communities.
* **Products:** Learn about MongoDB's various products and services.
* **Support:** Find support resources, including FAQs and contact information.


**MongoDB is a popular open-source NoSQL database known for its flexibility and scalability.**

**Key Characteristics:**

* **Document-Oriented:** Stores data in flexible, JSON-like documents. This allows for easy modeling of complex, hierarchical data structures.
* **Schema-Less (or Flexible Schema):** Documents within a collection don't have to follow a strict, predefined structure. This makes it easier to adapt to evolving data requirements.
* **Scalability:** Designed to handle massive amounts of data efficiently. Features like sharding (distributing data across multiple servers) enable horizontal scaling.
* **High Availability:** Supports replication, ensuring data redundancy and minimizing downtime.
* **Rich Query Language:** Offers powerful query capabilities beyond basic CRUD operations, enabling complex data retrieval and analysis.

**Use Cases:**

MongoDB is widely used in various applications, including:

* **Content Management Systems:** Handling dynamic content, user data, and multimedia.
* **E-commerce:** Storing product catalogs, user profiles, order history, and more.
* **Mobile Applications:** Supporting real-time data synchronization and personalized experiences.
* **IoT (Internet of Things):** Managing sensor data, device information, and location tracking.
* **Gaming:** Storing player data, game progress, and in-game items.

**Benefits:**

* **Agility:** Adapts easily to changing data models and evolving business needs.
* **Performance:** Handles high-volume read and write operations efficiently.
* **Developer-Friendly:** Provides a relatively easy-to-learn API and integrates well with various programming languages.

**1. Install MongoDB**

  * **Download:**
      * Visit the official MongoDB download page: [https://www.mongodb.com/try/download/community](https://www.google.com/url?sa=E&source=gmail&q=https://www.mongodb.com/try/download/community)
      * Choose the appropriate installer for your operating system (Windows, macOS, Linux).
  * **Installation:**
      * **Windows:**
          * Run the installer.
          * Accept the license agreement.
          * Choose the installation directory.
          * Select the installation options (e.g., install as a Windows service).
          * Complete the installation.
      * **macOS:**
          * Download the package.
          * Double-click the package file.
          * Follow the on-screen instructions.
      * **Linux:**
          * Use your distribution's package manager (e.g., `apt`, `yum`).
          * Refer to the official MongoDB documentation for specific commands.

**2. Install and Run MongoDB Shell (mongosh)**

  * **Windows:**
      * The MongoDB installer usually includes mongosh.
      * Open a command prompt.
      * Type `mongosh` and press Enter.
  * **macOS/Linux:**
      * If not included in the MongoDB package, install mongosh separately (refer to the MongoDB documentation for instructions).
      * Open a terminal.
      * Type `mongosh` and press Enter.

**3. Install MongoDB Compass**

  * **Download:**
      * Visit the MongoDB Compass download page: [https://www.mongodb.com/products/compass](https://www.google.com/url?sa=E&source=gmail&q=https://www.mongodb.com/products/compass)
      * Download the installer for your operating system.
  * **Installation:**
      * **Windows:** Run the installer and follow the on-screen instructions.
      * **macOS:** Open the downloaded package and drag the Compass application to your Applications folder.
      * **Linux:** Refer to the official MongoDB Compass documentation for installation instructions.

**4. Start MongoDB Server (if not already running)**

  * **Windows:**
      * If installed as a service, use the Windows Services console to start the MongoDB service.
      * Alternatively, start MongoDB from the command line using the `mongod` command.
  * **macOS/Linux:**
      * Use the appropriate command to start the MongoDB server (refer to the MongoDB documentation).

**5. Connect to MongoDB with Compass**

  * Open MongoDB Compass.
  * Click "Connect."
  * Enter the connection details (host, port, username, password).
  * Click "Connect."

**Note:**

  * For production environments, consider configuring MongoDB with a robust security setup (e.g., authentication, authorization).
  * Refer to the official MongoDB documentation for the most up-to-date and detailed installation and setup instructions.


### Table of common MongoDB shell commands with examples and descriptions:

| Command | Description | Example |
|---|---|---|
| **`show dbs`** | Displays a list of all available databases. | `show dbs` |
| **`use <database_name>`** | Selects the current database to work with. | `use myDatabase` | 
| **`db.createCollection("<collection_name>")`** | Creates a new collection within the current database. | `db.createCollection("users")` |
| **`db.<collection_name>.insertOne({ ... })`** | Inserts a single document into a collection. | `db.users.insertOne({ name: "John Doe", age: 30 })` |
| **`db.<collection_name>.insertMany([ { ... }, { ... } ])`** | Inserts multiple documents into a collection. | `db.users.insertMany([ { name: "Jane Doe", age: 25 }, { name: "Peter Jones", age: 35 } ])` |
| **`db.<collection_name>.find()`** | Retrieves all documents from a collection. | `db.users.find()` |
| **`db.<collection_name>.findOne()`** | Retrieves the first document that matches the query (or null if no match). | `db.users.findOne({ name: "John Doe" })` |
| **`db.<collection_name>.find({ <query> })`** | Retrieves documents that match the specified query. | `db.users.find({ age: { $gt: 30 } })` |
| **`db.<collection_name>.countDocuments({ <query> })`** | Counts the number of documents that match the specified query. | `db.users.countDocuments({ age: { $gt: 30 } })` |
| **`db.<collection_name>.updateOne({ <filter> }, { $set: { ... } })`** | Updates a single document that matches the filter. | `db.users.updateOne({ name: "John Doe" }, { $set: { age: 31 } })` |
| **`db.<collection_name>.updateMany({ <filter> }, { $set: { ... } })`** | Updates multiple documents that match the filter. | `db.users.updateMany({ age: { $lt: 30 } }, { $set: { isYoung: true } })` |
| **`db.<collection_name>.deleteOne({ <filter> })`** | Deletes a single document that matches the filter. | `db.users.deleteOne({ name: "John Doe" })` |
| **`db.<collection_name>.deleteMany({ <filter> })`** | Deletes multiple documents that match the filter. | `db.users.deleteMany({ age: { $lt: 25 } })` |
| **`db.<collection_name>.drop()`** | Deletes the entire collection. | `db.users.drop()` |
| **`db.dropDatabase()`** | Deletes the current database. | `db.dropDatabase()` | 
| **`help()`** | Displays a list of available shell commands. | `help()` |

**Note:**

* `<database_name>`, `<collection_name>`, and `<query>` should be replaced with the actual values.
* The `$gt`, `$lt`, and `$set` operators are examples of query operators and update operators, respectively. MongoDB provides a rich set of operators for complex queries and updates.

This table provides a basic overview of common MongoDB shell commands. For more advanced usage and detailed information, refer to the official MongoDB documentation.

### Start Mongo DB server

**1. Using the `mongod` command**

* **Open a terminal or command prompt.**
* **Navigate to the MongoDB bin directory.** 
    * On Windows: `cd C:\Program Files\MongoDB\Server\<version>\bin`
    * On macOS/Linux: `cd /usr/local/bin/` (or the directory where you installed MongoDB)
* **Run the `mongod` command.** 

   ```bash
   mongod 
   ```

   * This starts the MongoDB server with default settings.

* **(Optional) Specify a configuration file:**

   ```bash
   mongod -f <path/to/mongod.conf> 
   ```

   * Replace `<path/to/mongod.conf>` with the actual path to your MongoDB configuration file. This allows for more advanced configurations like data directory, port, and authentication settings.

**2. As a Windows Service**

* **If you installed MongoDB as a Windows service:**
    * Open the **Services** window (search for "services.msc" in the Start menu).
    * Locate the "MongoDB" service.
    * Right-click on the service and select **"Start"**.

**3. Using a systemd service (Linux)**

* **If you're using a systemd-based Linux distribution:**
    * Enable and start the MongoDB service:

       ```bash
       sudo systemctl enable mongod 
       sudo systemctl start mongod
       ```

**4. Verify Server Status**

* **Check the MongoDB logs:** Look for messages indicating a successful server startup.
* **Try connecting to the MongoDB shell:** 
    * Open a new terminal/command prompt.
    * Run: `mongo` 
    * If the connection is successful, you'll be presented with the MongoDB shell prompt.

**Important Notes:**

* **Data Directory:** Make sure you have created a data directory for MongoDB to store its data files. The default location is usually `data/db` within the MongoDB installation directory.
* **Firewall Rules:** If you're accessing MongoDB from another machine, ensure that your firewall rules allow connections to the MongoDB port (default is 27017).
* **Security:** For production environments, always enable authentication and authorization to secure your MongoDB server.

### The `show dbs` command in the MongoDB shell is used to list all the available databases in your MongoDB instance. 

**Here's how it works:**

1. **Open the MongoDB Shell:**
   - Launch the MongoDB shell by typing `mongosh` in your terminal or command prompt.

2. **Execute the command:**
   - Type `show dbs` and press Enter.

**Output:**

The command will display a list of databases, usually including:

- `admin`: A special database for administrative commands.
- `config`: Used by the MongoDB replica set to store configuration information.
- `local`: Stores local server-side data.
- Any other databases you have created.

**Example:**

```
> show dbs
admin
config
local
myDatabase1
myDatabase2 
```

**Note:**

- The `show dbs` command only lists databases that have data in them. Empty databases may not be displayed.
- To switch to a specific database, use the `use <database_name>` command. For example: `use myDatabase1`



### Create Database and insert data

In MongoDB, you don't explicitly create a database with a dedicated command. Instead, databases are created dynamically when you start inserting data into a collection within them. 

Here's how it works:

1. **Start the MongoDB Shell:**
   - Open your terminal or command prompt and type `mongosh` to start the MongoDB shell.

2. **Select or Create a Database (Implicitly):**
   - Use the `use <database_name>` command to select a database. If the database doesn't exist, MongoDB will create it for you. 

     ```javascript
     use myDatabase 
     ```

3. **Insert Data:**
   - Create a collection and insert data into it. This action will automatically create the database if it doesn't already exist.

     ```javascript
     db.myCollection.insertOne({ name: "John Doe", age: 30 }) 
     ```

4. **Verify Database Creation:**
   - Use the `show dbs` command to list all available databases. You should now see your newly created database in the list.

     ```javascript
     show dbs 
     ```

**Key Points:**

- Databases are created on-demand when you start inserting data into them.
- The `use <database_name>` command selects a database and implicitly creates it if it doesn't exist.
- MongoDB's dynamic nature makes database creation straightforward and efficient.

### In the MongoDB shell, the command to list all collections within the currently selected database is:

```
show collections
```

**Here's how it works:**

1. **Connect to MongoDB:**
   - Open your terminal or command prompt and start the MongoDB shell by typing `mongosh`.

2. **Select a Database:**
   - Use the `use <database_name>` command to select the database you want to list collections for. 

     ```javascript
     use myDatabase 
     ```

3. **List Collections:**
   - Type `show collections` and press Enter. This will display a list of all collections within the selected database.

**Example:**

```
> use myDatabase
switched to db myDatabase
> show collections
myCollection1
myCollection2 
```

**Alternative:**

You can also use the `db.getCollectionNames()` method:

```javascript
> db.getCollectionNames()
[ "myCollection1", "myCollection2" ]
```

This method returns an array of collection names, which can be more convenient for programmatic use.

### **Dropping a Database in MongoDB**

The `db.dropDatabase()` command in the MongoDB shell is used to permanently delete the currently selected database and all of its associated collections and data. 

**Here's the process:**

1. **Start the MongoDB Shell:**
   - Open your terminal or command prompt and type `mongosh` to start the MongoDB shell.

2. **Select the Database:**
   - Use the `use <database_name>` command to select the specific database you want to drop. 

     ```javascript
     use myDatabase 
     ```

3. **Drop the Database:**
   - Execute the `db.dropDatabase()` command.

     ```javascript
     db.dropDatabase() 
     ```

4. **Verify Deletion:**
   - Use the `show dbs` command to confirm that the database has been successfully removed from the list.

     ```javascript
     show dbs 
     ```

**Important Considerations:**

* **Irreversible:** Dropping a database is an irreversible action. **Always back up your data** before dropping any database.
* **Caution:** Use this command with caution, as it will permanently delete all data within the specified database.

**Example:**

```javascript
> use myDatabase 
switched to db myDatabase
> db.dropDatabase()
{ "dropped" : "myDatabase", "ok" : 1 }
> show dbs
admin
config
local 
```

In this example, we first select the `myDatabase` and then execute `db.dropDatabase()`. The output confirms that the database has been dropped, and the subsequent `show dbs` command does not list `myDatabase` anymore.

### **CRUD Operations in MongoDB**

CRUD stands for **Create, Read, Update, and Delete**. These are fundamental operations for interacting with data in any database system, and MongoDB provides efficient methods for performing these actions.

**1. Create**

* **`insertOne()`:** Inserts a single document into a collection.

   ```javascript
   db.myCollection.insertOne({ name: "John Doe", age: 30 }) 
   ```

* **`insertMany()`:** Inserts multiple documents into a collection.

   ```javascript
   db.myCollection.insertMany([
       { name: "Jane Doe", age: 25 }, 
       { name: "Peter Jones", age: 35 } 
   ])
   ```

**2. Read**

* **`find()`:** Retrieves all documents that match a specified query (or all documents if no query is provided).

   ```javascript
   db.myCollection.find() // Retrieves all documents
   db.myCollection.find({ age: { $gt: 30 } }) // Retrieves documents where age is greater than 30
   ```

* **`findOne()`:** Retrieves the first document that matches the query (or null if no match).

   ```javascript
   db.myCollection.findOne({ name: "John Doe" }) 
   ```

* **`countDocuments()`:** Counts the number of documents that match a specified query.

   ```javascript
   db.myCollection.countDocuments({ age: { $gt: 30 } }) 
   ```

**3. Update**

* **`updateOne()`:** Updates a single document that matches the filter.

   ```javascript
   db.myCollection.updateOne({ name: "John Doe" }, { $set: { age: 31 } }) 
   ```

* **`updateMany()`:** Updates multiple documents that match the filter.

   ```javascript
   db.myCollection.updateMany({ age: { $lt: 30 } }, { $set: { isYoung: true } }) 
   ```

**4. Delete**

* **`deleteOne()`:** Deletes a single document that matches the filter.

   ```javascript
   db.myCollection.deleteOne({ name: "John Doe" }) 
   ```

* **`deleteMany()`:** Deletes multiple documents that match the filter.

   ```javascript
   db.myCollection.deleteMany({ age: { $lt: 25 } }) 
   ```

* **`drop()`:** Deletes the entire collection.

   ```javascript
   db.myCollection.drop() 
   ```

**Key Concepts:**

* **Query Operators:** MongoDB provides a rich set of query operators (e.g., `$gt`, `$lt`, `$in`, `$regex`) for complex filtering.
* **Update Operators:** Update operators (e.g., `$set`, `$inc`, `$push`) allow you to modify specific fields within documents.

#### Example of Crate Database, Collection, insert, and find Data

```javaScript
> use usersDB
switched to db usersDB
usersDB> db.createCollection("users")
{ ok: 1 }
usersDB> db.users.insertOne({name: "Supriyo Das", age: 37, email: "das.supriyo07@gmail.com", languages: ["Bangla", "English", "Hindi"]})
{
  acknowledged: true,
  insertedId: ObjectId("6785efa4ad4aef8a084c6fc3")
}
usersDB> db.users.insertMany([{name: "Rupa Das", age: 27, email: "das.rupa2608@gmail.com", languages: ["Bangla", "Hindi"]}, {name: "Rishika Das", age: 6, email: "", languages: ["Bangla"]}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6785f053ad4aef8a084c6fc4"),
    '1': ObjectId("6785f053ad4aef8a084c6fc5")
  }
}
usersDB> db.users.insert([{name: "Sandhya Das", age: 55, email: "", languages: ["Bangla"]}])
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("6785f0abad4aef8a084c6fc6") }
}
usersDB>  db.users.find()
[
  {
    _id: ObjectId("6785efa4ad4aef8a084c6fc3"),
    name: 'Supriyo Das',
    age: 37,
    email: 'das.supriyo07@gmail.com',
    languages: [ 'Bangla', 'English', 'Hindi' ]
  },
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc4"),
    name: 'Rupa Das',
    age: 27,
    email: 'das.rupa2608@gmail.com',
    languages: [ 'Bangla', 'Hindi' ]
  },
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc5"),
    name: 'Rishika Das',
    age: 6,
    email: '',
    languages: [ 'Bangla' ]
  },
  {
    _id: ObjectId("6785f0abad4aef8a084c6fc6"),
    name: 'Sandhya Das',
    age: 55,
    email: '',
    languages: [ 'Bangla' ]
  }
]
usersDB> db.users.find({name: "Supriyo Das"}).pretty()
[
  {
    _id: ObjectId("6785efa4ad4aef8a084c6fc3"),
    name: 'Supriyo Das',
    age: 37,
    email: 'das.supriyo07@gmail.com',
    languages: [ 'Bangla', 'English', 'Hindi' ]
  }
]
usersDB>  db.users.find({languages: ["Bangla"]})
[
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc5"),
    name: 'Rishika Das',
    age: 6,
    email: '',
    languages: [ 'Bangla' ]
  },
  {
    _id: ObjectId("6785f0abad4aef8a084c6fc6"),
    name: 'Sandhya Das',
    age: 55,
    email: '',
    languages: [ 'Bangla' ]
  }
]
usersDB> db.users.find({languages: ["Bangla"]}).limit(1)
[
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc5"),
    name: 'Rishika Das',
    age: 6,
    email: '',
    languages: [ 'Bangla' ]
  }
]

```

**In MongoDB, `pretty()` and `limit()` are methods used to control the output of query results.**

* **`pretty()`:** 

    - **Purpose:** Formats the output of query results in a more readable and indented manner. 
    - **Usage:**
        ```javascript
        db.collectionName.find().pretty() 
        ```

* **`limit()`:**

    - **Purpose:** Specifies the maximum number of documents that should be returned in the query result. 
    - **Usage:**
        ```javascript
        db.collectionName.find().limit(10) // Limits the result to 10 documents
        ```

**Combining `pretty()` and `limit()`:**

You can combine these methods to get nicely formatted output with a limited number of documents:

```javascript
db.collectionName.find().limit(5).pretty() 
```

This will return the first 5 documents from the `collectionName` in a nicely formatted, indented JSON structure.

**Example:**

Let's say you have a collection called "customers" with the following documents:

```json
{ "_id" : ObjectId("..."), "name" : "Alice", "age" : 30 }
{ "_id" : ObjectId("..."), "name" : "Bob", "age" : 25 }
{ "_id" : ObjectId("..."), "name" : "Charlie", "age" : 35 }
{ "_id" : ObjectId("..."), "name" : "David", "age" : 28 }
{ "_id" : ObjectId("..."), "name" : "Eve", "age" : 22 }
{ "_id" : ObjectId("..."), "name" : "Frank", "age" : 40 } 
```

The following command:

```javascript
db.customers.find().limit(3).pretty()
```

Would output the first three documents in a readable format:

```json
{
        "_id" : ObjectId("..."),
        "name" : "Alice",
        "age" : 30
}
{
        "_id" : ObjectId("..."),
        "name" : "Bob",
        "age" : 25
}
{
        "_id" : ObjectId("..."),
        "name" : "Charlie",
        "age" : 35
}
```

#### Example of Update and Delete Data

```javaScript
usersDB>  db.users.update({name: "Rishika Das"}, {$set: {age: 7}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
usersDB> db.users.find({name: "Rishika Das"})
[
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc5"),
    name: 'Rishika Das',
    age: 7,
    email: '',
    languages: [ 'Bangla' ]
  }
]
usersDB>  db.users.deleteOne({name: "Sandhya Das"})
{ acknowledged: true, deletedCount: 1 }
usersDB> db.users.find()
[
  {
    _id: ObjectId("6785efa4ad4aef8a084c6fc3"),
    name: 'Supriyo Das',
    age: 37,
    email: 'das.supriyo07@gmail.com',
    languages: [ 'Bangla', 'English', 'Hindi' ]
  },
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc4"),
    name: 'Rupa Das',
    age: 27,
    email: 'das.rupa2608@gmail.com',
    languages: [ 'Bangla', 'Hindi' ]
  },
  {
    _id: ObjectId("6785f053ad4aef8a084c6fc5"),
    name: 'Rishika Das',
    age: 7,
    email: '',
    languages: [ 'Bangla' ]
  }
]
usersDB>

```

## MongoDB using Compass

To perform CRUD (Create, Read, Update, Delete) operations in MongoDB using Compass, you can: connect to your database, navigate to the desired collection, and then use the "Add Data" button to insert new documents (Create), use the filter bar to query and view existing documents (Read), click on a document to edit its fields (Update), and use the "Delete" option to remove documents from the collection (Delete). 

#### Detailed steps:  

**1. Connect to MongoDB:**     

• Open MongoDB Compass.   
• Click "New Connection" and enter your database connection details (hostname, port, username, password).   

![image](https://github.com/user-attachments/assets/1931f6e7-af36-496e-8272-b221f9a86323)


**2. Create (Insert) a document:**   

• Select the desired database and collection. 
• Click "Add Data" > "Insert Document". 
• Enter the key-value pairs for your new document and click "Insert".   

![image](https://github.com/user-attachments/assets/e4c188d9-1639-4e97-9b15-735f1a879aee)

![image](https://github.com/user-attachments/assets/b9b92b36-cffc-4e63-a5cd-d2433f6ef89e)

![image](https://github.com/user-attachments/assets/63c476b9-7668-451f-b72d-cf603124d4fe)


**3. Read (Query) documents:**   

• Use the filter bar to specify search criteria (e.g., "name: 'John'"). 
• You can use operators like "$gt", "$lt", "$in" to create complex queries.   

![image](https://github.com/user-attachments/assets/d9cd05bd-1d2e-4e94-856e-3948f8dd0a2a)


**4. Update a document:**   

• Click on the document you want to modify. 
• Edit the desired fields directly in the document view. 
• Click "Save" to apply changes.   

![image](https://github.com/user-attachments/assets/a91fc9ad-9751-404c-a525-9811394edecc)

![image](https://github.com/user-attachments/assets/e6bc91a1-a75d-445b-9341-694ac4ea6cb5)

![image](https://github.com/user-attachments/assets/ff9efe4a-8e5f-4bb4-aedb-4cc5fe6f040a)


**5. Delete a document:**   
* Select the document you want to delete and Click the "Delete" button.

![image](https://github.com/user-attachments/assets/2dbc404a-b796-4715-a1c4-dd388cbefd8c)

![image](https://github.com/user-attachments/assets/b10fd4e3-5d80-4655-91a8-08d95018485f)

![image](https://github.com/user-attachments/assets/b181f01d-ef70-44d1-b846-ecfb1e9bccde)

 
**Key points about using MongoDB Compass for CRUD:**   

• Visual interface: Compass provides a user-friendly graphical interface to manage your data, making it easier to understand and manipulate documents compared to raw MongoDB shell commands. 
• Data validation: Compass can help identify potential data inconsistencies by displaying data types and structures visually. 
• Bulk operations: You can perform bulk insert, update, and delete operations on multiple documents at once.   


## CRUD operations in MongoDB using Express.js, and Mongoose:

**1. Project Setup:**

*   Create a new project directory and initialize it with `npm init -y`.
*   Install dependencies:

    ```bash
    npm install express mongoose nodemon cors 
    ```

**2. Create `server.js`**

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); 

const app = express();
const port = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Use Routes
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

**3. Create `productRoutes.js`**

```javascript
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import Product model

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { product, price, description } = req.body;

    const newProduct = new Product({
      product,
      price,
      description,
      createdAt: Date.now(),
    });

    const savedProduct = await newProduct.save(); 
    res.status(201).json(savedProduct); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); 
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    const { product, price, description } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { 
      product, 
      price, 
      description 
    }, { new: true }); // Return the updated document
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id); 
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

**4. Create `Product.js` (Model)**

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
```

**Explanation:**

*   **`async/await`:** Used to handle asynchronous operations (database interactions) in a more readable and concise manner.
*   **Create:** 
    *   `POST /api/products`: Creates a new product document using `new Product()`.
*   **Read:**
    *   `GET /api/products`: Retrieves all products using `Product.find()`.
    *   `GET /api/products/:id`: Retrieves a single product by ID using `Product.findById()`.
*   **Update:**
    *   `PUT /api/products/:id`: Updates an existing product using `Product.findByIdAndUpdate()`. 
*   **Delete:**
    *   `DELETE /api/products/:id`: Deletes a product by ID using `Product.findByIdAndDelete()`.
*   **Error Handling:** 
    *   `try...catch` blocks are used to handle potential errors.
    *   Appropriate HTTP status codes are returned in the response.

This example provides a comprehensive implementation of CRUD operations for a Product model in MongoDB using Express.js and Mongoose with `async/await`. You can further enhance this by adding features like:

*   **Data validation:** Use Mongoose's built-in validation features to ensure data integrity.
*   **Pagination:** Implement pagination to handle large datasets.
*   **Search and filtering:** Add search and filtering capabilities using Mongoose query operators.
*   **Security measures:** Implement appropriate security measures, such as authentication and authorization.

### **Comparison Query Operators in MongoDB**

Comparison query operators in MongoDB allow you to filter documents based on comparisons between field values and specified values. Here are some of the most commonly used operators:

**1. `$eq` (Equal to)**

*   Matches values that are equal to a specified value.

    ```javascript
    db.collectionName.find({ age: { $eq: 30 } }) 
    ```

**2. `$ne` (Not Equal to)**

*   Matches all values that are not equal to a specified value.

    ```javascript
    db.collectionName.find({ age: { $ne: 30 } }) 
    ```

**3. `$gt` (Greater Than)**

*   Matches values that are greater than a specified value.

    ```javascript
    db.collectionName.find({ age: { $gt: 30 } }) 
    ```

**4. `gte` (Greater Than or Equal To)**

*   Matches values that are greater than or equal to a specified value.

    ```javascript
    db.collectionName.find({ age: { $gte: 30 } }) 
    ```

**5. `lt` (Less Than)**

*   Matches values that are less than a specified value.

    ```javascript
    db.collectionName.find({ age: { $lt: 30 } }) 
    ```

**6. `lte` (Less Than or Equal To)**

*   Matches values that are less than or equal to a specified value.

    ```javascript
    db.collectionName.find({ age: { $lte: 30 } }) 
    ```

**7. `in`**

*   Matches any of the values specified in an array.

    ```javascript
    db.collectionName.find({ age: { $in: [25, 30, 35] } }) 
    ```

**8. `nin` (Not In)**

*   Matches none of the values specified in an array.

    ```javascript
    db.collectionName.find({ age: { $nin: [25, 30, 35] } }) 
    ```

**Example:**

Let's say you have a collection named "products" with the following documents:

```json
{ "_id" : 1, "name" : "Product A", "price" : 50 }
{ "_id" : 2, "name" : "Product B", "price" : 30 }
{ "_id" : 3, "name" : "Product C", "price" : 70 }
{ "_id" : 4, "name" : "Product D", "price" : 30 }
```

**To find products with a price greater than 40:**

```javascript
db.products.find({ price: { $gt: 40 } }) 
```

**To find products with a price between 20 and 50 (inclusive):**

```javascript
db.products.find({ price: { $gte: 20, $lte: 50 } }) 
```

**To find products with a price that is not 30:**

```javascript
db.products.find({ price: { $ne: 30 } }) 
```

These comparison operators provide powerful ways to filter data in your MongoDB collections based on various criteria.


**Logical Query Operators in MongoDB**

Logical query operators in MongoDB allow you to combine multiple conditions to create more complex and precise queries. They help you filter documents based on the logical relationships between different criteria.

Here are the main logical operators:

**1. `$and`**

*   Matches documents that satisfy **all** the specified conditions.

    ```javascript
    db.collectionName.find({ 
        $and: [ 
            { age: { $gt: 30 } }, 
            { city: "New York" } 
        ] 
    }) 
    ```
    This query finds documents where the age is greater than 30 **and** the city is "New York".

**2. `$or`**

*   Matches documents that satisfy **at least one** of the specified conditions.

    ```javascript
    db.collectionName.find({ 
        $or: [ 
            { age: { $gt: 30 } }, 
            { city: "New York" } 
        ] 
    }) 
    ```
    This query finds documents where the age is greater than 30 **or** the city is "New York".

**3. `$nor`**

*   Matches documents that **do not** satisfy any of the specified conditions.

    ```javascript
    db.collectionName.find({ 
        $nor: [ 
            { age: { $gt: 30 } }, 
            { city: "New York" } 
        ] 
    }) 
    ```
    This query finds documents where the age is not greater than 30 **and** the city is not "New York".

**4. `$not`**

*   Inverts the effect of a query expression.

    ```javascript
    db.collectionName.find({ 
        age: { $not: { $gt: 30 } } 
    }) 
    ```
    This query finds documents where the age is **not** greater than 30.

**Example:**

Let's say you have a collection named "customers" with the following documents:

```json
{ "_id" : 1, "name" : "Alice", "age" : 30, "city" : "New York" }
{ "_id" : 2, "name" : "Bob", "age" : 25, "city" : "Los Angeles" }
{ "_id" : 3, "name" : "Charlie", "age" : 35, "city" : "New York" }
{ "_id" : 4, "name" : "David", "age" : 28, "city" : "Chicago" }
```

**To find customers who are older than 30 and live in New York:**

```javascript
db.customers.find({ 
    $and: [ 
        { age: { $gt: 30 } }, 
        { city: "New York" } 
    ] 
}) 
```

**To find customers who are older than 30 or live in New York:**

```javascript
db.customers.find({ 
    $or: [ 
        { age: { $gt: 30 } }, 
        { city: "New York" } 
    ] 
}) 
```

By using these logical operators, you can create complex and flexible queries to efficiently retrieve the data you need from your MongoDB collections.

**1. Counting Documents**

*   **`countDocuments()`:** This method returns the number of documents that match a specified query.

    ```javascript
    db.collectionName.countDocuments({ age: { $gt: 30 } }) 
    ```
    This counts the number of documents where the "age" field is greater than 30.

*   **`count()`:** (Deprecated) This method is similar to `countDocuments()`, but it's recommended to use `countDocuments()` for new applications.

**2. Sorting Documents**

*   **`sort()`:** This method sorts the results of a query in ascending or descending order.

    ```javascript
    // Sort by age in ascending order
    db.collectionName.find().sort({ age: 1 }) 

    // Sort by age in descending order
    db.collectionName.find().sort({ age: -1 }) 

    // Sort by multiple fields
    db.collectionName.find().sort({ age: 1, name: -1 }) 
    ```
    In the sort specification:
        *   `1` indicates ascending order.
        *   `-1` indicates descending order.

**3. Selecting Fields (Projection)**

*   **`find()` with projection:** You can specify which fields to include or exclude from the result using the projection option.

    ```javascript
    // Include only the "name" and "age" fields
    db.collectionName.find({}, { name: 1, age: 1 }) 

    // Exclude the "_id" field
    db.collectionName.find({}, { _id: 0 }) 

    // Include only the "name" field
    db.collectionName.find({}, { name: 1, _id: 0 }) 
    ```
    *   `1` indicates that the field should be included in the result.
    *   `0` indicates that the field should be excluded from the result.

**Example**

Let's say you have a collection named "products" with the following documents:

```json
{ "_id" : 1, "name" : "Product A", "price" : 50, "category" : "Electronics" }
{ "_id" : 2, "name" : "Product B", "price" : 30, "category" : "Clothing" }
{ "_id" : 3, "name" : "Product C", "price" : 70, "category" : "Electronics" }
{ "_id" : 4, "name" : "Product D", "price" : 30, "category" : "Books" }
```

**To find the total number of products:**

```javascript
db.products.countDocuments() 
```

**To find the number of products in the "Electronics" category:**

```javascript
db.products.countDocuments({ category: "Electronics" }) 
```

**To find the products sorted by price in ascending order:**

```javascript
db.products.find().sort({ price: 1 }) 
```

**To find the product names and prices:**

```javascript
db.products.find({}, { name: 1, price: 1, _id: 0 }) 
```

## Mongoose  built-in schema validation

* All ***SchemaTypes*** have the built-in ***required*** validator. The required validator uses the ***SchemaType's*** `checkRequired()` function to determine if the value satisfies the required validator.   
* ***Numbers*** have `min` and `max` validators.   
* ***Strings*** have `enum`, `match`, `minLength`, and `maxLength` validators.   


**1. Required Fields:**

*   Specify fields that must have a value using the `required: true` option.

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true,
  },
  // ... other fields
});
```

**2. Data Type Validation:**

*   Mongoose enforces data type validation by default. 
*   If you attempt to save a document with a field value of an incorrect type, it will result in a validation error.

```javascript
// Example: Age must be a number
const userSchema = new mongoose.Schema({
  age: {
    type: Number, 
  },
  // ... other fields
});
```

**3. Custom Validation:**

*   Define custom validation functions using the `validate()` method.

```javascript
const userSchema = new mongoose.Schema({
  age: {
    type: Number,
    validate: {
      validator: (v) => v >= 18, // Age must be greater than or equal to 18
      message: 'Age must be greater than or equal to 18',
    },
  },
  // ... other fields
});
```

**4. Unique Values:**

*   Ensure that a field has a unique value across all documents in the collection using the `unique: true` option.

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
  },
  // ... other fields
});
```

**5. Array Validation:**

*   Validate the elements within an array using the `validate()` method.

```javascript
const productSchema = new mongoose.Schema({
  tags: {
    type: Array,
    validate: {
      validator: (arr) => arr.length > 0, // Array must have at least one element
      message: 'Array of tags cannot be empty',
    },
  },
});
```

**6. Enum (Enumerated Values):**

*   Restrict the values of a field to a predefined set of options.

```javascript
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'], // Allowed roles
    required: true,
  },
});
```

**7. Min/Max Length:**

*   Enforce minimum and maximum length constraints on string fields.

```javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5, // Minimum length of 5 characters
    maxlength: 20, // Maximum length of 20 characters
    required: true,
  },
});
```

**Custom Error Messages**   
You can configure the error message for individual validators in your schema. There are two equivalent ways to set the validator error message:

```javaScript
Array syntax: min: [6, 'Must be at least 6, got {VALUE}']
Object syntax: enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }
```

Mongoose also supports rudimentary templating for error messages. Mongoose replaces **{VALUE}** with the value being validated.

```javaScript
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Must be at least 6, got {VALUE}'],
    max: 12
  },
  drink: {
    type: String,
    enum: {
      values: ['Coffee', 'Tea'],
      message: '{VALUE} is not supported'
    }
  }
});
const Breakfast = db.model('Breakfast', breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  drink: 'Milk'
});
const error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Must be at least 6, got 2');
assert.equal(error.errors['drink'].message, 'Milk is not supported');
```


**Mongoose's built-in schema validation features:**

| Validation Type | Description | Syntax | Example |
|---|---|---|---|
| **Required** | Ensures that a field must have a value. | `required: true` | `name: { type: String, required: true }` |
| **Type** | Enforces the data type of the field. | `type: String`, `type: Number`, `type: Boolean`, `type: Date`, `type: ObjectId`, `type: Array`, `type: Object`, `type: Buffer`, `type: Mixed` | `age: { type: Number }` |
| **Enum** | Restricts the field's value to a set of allowed options. | `enum: ['option1', 'option2', 'option3']` | `status: { type: String, enum: ['active', 'inactive', 'pending'] }` |
| **Min Length** | Specifies the minimum length for string fields. | `minlength: <number>` | `username: { type: String, minlength: 5 }` |
| **Max Length** | Specifies the maximum length for string fields. | `maxlength: <number>` | `password: { type: String, maxlength: 20 }` |
| **Min** | Specifies the minimum allowed value for numbers. | `min: <number>` | `age: { type: Number, min: 18 }` |
| **Max** | Specifies the maximum allowed value for numbers. | `max: <number>` | `rating: { type: Number, min: 0, max: 5 }` |
| **Unique** | Ensures that the value of the field is unique across all documents in the collection. | `unique: true` | `email: { type: String, unique: true }` |
| **Match** | Matches the field value against a regular expression. | `match: /<regex>/` | `email: { type: String, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }` |
| **Custom Validation** | Allows you to define custom validation logic. | `validate: { validator: <function>, message: <string> }` | 
  ```javascript
  age: {
    type: Number,
    validate: {
      validator: (v) => v >= 18, 
      message: 'Age must be greater than or equal to 18' 
    }
  }
  ```
| **Array Validation** | Allows you to validate the elements within an array. | `validate: { validator: <function>, message: <string> }` | 
  ```javascript
  tags: {
    type: Array,
    validate: {
      validator: (arr) => arr.length > 0,
      message: 'Array of tags cannot be empty'
    }
  }
  ```
| **Required by Default** | All fields within a schema are required by default. | - | `name: { type: String }` (implicitly required) |

This table provides a comprehensive overview of Mongoose's built-in schema validation features. By effectively utilizing these features, you can enhance the data integrity and reliability of your MongoDB applications.



**Handling Validation Errors:**

*   When saving a document with invalid data, Mongoose will throw a `ValidationError`. You can catch this error and handle it appropriately in your application (e.g., display error messages to the user).

