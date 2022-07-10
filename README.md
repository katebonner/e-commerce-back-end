# Columbia University Coding Bootcamp - Object-Relational Mapping (ORM) Challenge: E-commerce Back End 

# Description
This project leverages the Express.js API and configure it to use Sequelize to interact with a MySQL database to create the back end for an e-commerce site.


# Demo
The following demonstrates how to create the schema from the MySQL shell, how to seed the database from the command line, and start the application's server:
https://user-images.githubusercontent.com/96092615/178162227-d85d3662-e6c1-4795-89e0-6e880ac5a8d8.mov


The following demonstrates the functionality of the GET routes for all categories, all products, and all tags being tested in Insomnia:
https://user-images.githubusercontent.com/96092615/178162230-ad6fdc68-8ea4-4d5b-9f70-079dd43bca3b.mov


The following demonstrates the functionality of the GET routes for a single category, a single product, and a single tag being tested in Insomnia:
https://user-images.githubusercontent.com/96092615/178162231-2b219567-b728-4706-ae75-ed211fcfa4b9.mov


The following demonstrates the functionality of the POST, PUT, and DELETE routes for categories being tested in Insomnia
https://user-images.githubusercontent.com/96092615/178162233-2efebe4f-039b-4bbf-8b2f-5d59c56a540a.mov


The following demonstrates the functionality of the POST, PUT, and DELETE routes for products being tested in Insomnia
https://user-images.githubusercontent.com/96092615/178162236-49c6c704-50a5-4f84-82f5-90eee19d50e1.mov


The following demonstrates the functionality of the POST, PUT, and DELETE routes for tags being tested in Insomnia
https://user-images.githubusercontent.com/96092615/178162238-65471b73-b166-4cdb-9075-7257e4e6a2ed.mov



## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

To install this project, navigate to your comand line console (for simplicity we will assume you are using terminal) and:

Clone this repository.
```md
git clone git@github.com:katebonner/e-commerce-back-end.git
```
ensure you have installed node.js by checking the version.
```md
node -v
```
if it has not been installed please navigate to https://nodejs.org/en/download/. lastly, ensure you have installed the node pkg inquirer and mysql2. If they have not been installed, install them.
```md
npm i
```


## Usage

This project provides an example of of how to leverage Express.js and configure it to use Sequelize to interact with a MySQL database.

## Credits

This project is derivative of starter code found here: 
https://github.com/coding-boot-camp/fantastic-umbrella


## License

MIT License

Copyright (c) 2022 Kate Bonner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
