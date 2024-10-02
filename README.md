<img width="1440" alt="Screenshot 2024-10-02 at 10 19 45" src="https://github.com/user-attachments/assets/f3ba759a-6e55-4832-bc87-71a1db0d62a5"># E-Commerce Website

This project is a dynamic and interactive eCommerce website built using Vue.js 3, Tailwind CSS, and Pinia for state management. The website allows users to browse products, add them to a cart, and view selected items.

## Features

- **Product Listing**: Display products fetched from an API.
- **Shopping Cart**: Users can add products to the cart, view their selections, and manage the quantity of items.
- **Responsive UI**: The website layout is built with Tailwind CSS to ensure it works well on all screen sizes.
- **State Management**: Pinia is used for managing the cart and product data.
- **Dynamic Navbar**: A navigation bar to browse between different sections.
- **Vue Components**: Modular design with Vue components for better maintainability and reusability.

## Technologies Used

- **Vue.js 3**: JavaScript framework used for building the interactive user interface.
- **Tailwind CSS**: Utility-first CSS framework for building responsive designs quickly.
- **Pinia**: State management library for Vue.js.
- **FontAwesome**: Icons used across the UI.
- **FetchApi**: For API requests to fetch product information.

## Project Setup

### Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** 
- **npm** 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cole15sky/E-commerce.git


   Navigate to the project directory:


cd your-ecommerce-repo
Install the dependencies:


npm install
Running the Application
To start the local development server, run the following command:


npm run dev
The application will be available at http://localhost:3000.

Build for Production
To build the project for production:


npm run build
The production-ready files will be output to the dist/ directory.

Linting and Formatting
To run the linter and fix formatting issues:


npm run lint
Folder Structure
src/
components/: Vue components such as CartUi, Navbar, Product, etc.
store/: Contains Pinia stores for managing global state, such as cart management.
assets/: Static assets like images, icons, and fonts.
views/: Different views for routing.
App.vue: Root Vue component.
main.js: Entry point of the application, including global imports and configurations.


**API Integration:**
The project fetches product data from an external API using fetchApi. Ensure the API URL is configured correctly in the code. The fetched data is displayed dynamically on the product page.
Use API from https://api.escuelajs.co/api/v1/products

<img width="1440" alt="Screenshot 2024-10-02 at 10 19 45" src="https://github.com/user-attachments/assets/f77ea61f-11e8-4fda-abed-020c22695e23">
<img width="1440" alt="Screenshot 2024-10-02 at 10 20 03" src="https://github.com/user-attachments/assets/92a326a8-e21b-40f4-bfe6-f2f4585c3e89">






