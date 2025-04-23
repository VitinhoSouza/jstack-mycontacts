# Welcome to **jstack-mycontacts** 📞
This is an API that has ten endpoints related to contacts and their categories. Are they:
- **List Categories** (*GET*): 'baseUrl/categories';
- **Create Category** (*POST*): 'baseUrl/categories', which expects an object {name: (string)} in JSON format;
- **Update Category** (*PUT*): 'baseUrl/categories/:categoryId', which expects an object {name: (string)} in JSON format;
- **Find Category By Id** (*GET*): 'baseUrl/categories/:categoryId';
- **Delete Category** (*Delete*): 'baseUrl/categories/:categoryId';

- **List Contacts** (*GET*): 'baseUrl/contacts?orderBy=asc';
- **Create Contact** (*POST*): 'baseUrl/contacts', which expects an object 
{name: (string), email: (string), phone (string), category_id (string)} in JSON format;
- **Update Contact** (*PUT*): 'baseUrl/contacts/:contactId', which expects an object
{name: (string), email: (string), phone (string), category_id (string)} in JSON format;
- **Find Contact By Id** (*GET*): 'baseUrl/contacts/:contactId';
- **Delete Contact** (*Delete*): 'baseUrl/contacts/:contactId';

## A preview of the endpoints:
https://github.com/user-attachments/assets/58487501-3cce-436d-af48-9e0ee1e4d158



## Techs:
Built with **Express** + **Node**. Also used:
- **Eslint** to better formatting and identification of problems in the code;
- **Nodemon** to better expierence in development;
- **pg** to model data and interact from Node.js to PostgreSQL;
- **express-async-errors** to handle asynchronous errors;

## Get started:
- Open the terminal inside the project folder and do: *yarn*. When all packages are installed, do *yarn dev* or *yarn dev* to start in development mode.
- You need to have PostgreSQL configured and running on your machine.
