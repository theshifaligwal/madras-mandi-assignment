# E-Commerce Assignment

<!-- ABOUT THE PROJECT -->
## About The Project

E-commerce (electronic commerce) refers to all online activity that involves the buying and selling of products and services. In other words, e-commerce is a process for conducting transactions online. When you go to your favorite online retailer to buy a new pair of shoes, you're engaging in e-commerce.


<!-- Built with section -->

## Built With

### Frameworks


- [StrapiJs](https://strapi.io/)
- [NodeJs](https://nodejs.org/en/docs/)
- [REST-API](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [React - Javascript](https://reactjs.org/)

<!-- GETTING STARTED -->
# Getting Started
### Installation

1. Clone the Project

   ```sh
   git clone https://github.com/theshifaligwal/madras-mandi-assignment.git
   ```

  ### Backend Setup
1. Go to folder
   ```sh
   cd ./server
   ```
2. Install yarn package
   ```sh
   yarn
   ```

3. Create ​`.env`​ file and use these API_KEYS
   ```sh
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=x4WnT8gDmF45n2SNiiw0TA==,NyYkSHkxPDFXavwZhr0bOA==,gd9/MciXBGlK0ZXQ8c6qsQ==,xaxu8FLRnIC1T19MWty2Ww==
    JWT_SECRET=0e64e8f3-9e9d-4fea-9e6e-20de4604db8f
    API_TOKEN_SALT=b5e40d556ad5359339b618a4cf5be776
    ```
   

4. Run the app in the development mode. 

   ```sh
   yarn run develop
   ```

5. Open Browser and Run [http://localhost:1337/admin](http://localhost:1337/admin) 
6. Go to [Strapi Admin](http://localhost:1337/admin) server, add some dummy data by login with your id.

### Frontend Setup
1. Go to folder
   ```sh
   cd .. && cd ./client
   ```
2. Install yarn package
   ```sh
   yarn
   ```

3.  Run the app in the development mode.
    ```sh
    yarn start
    ```
        

4. Open [​http://localhost:3000​](http://localhost:3000) to view it in the browser.