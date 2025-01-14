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
usersDB>
```
