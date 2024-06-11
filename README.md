# Personal Bookshelf

A React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Pages](#pages)
  - [Book Search Page](#book-search-page)
  - [Personal Bookshelf Page](#personal-bookshelf-page)
- [Project Structure](#project-structure)


## Demo

Check out the live demo of the application: [Live Demo](#) (https://prasanth-marquee-bookshelf.vercel.app)

## Features

- Real-time book search using the Open Library API.
- Add books to your personal bookshelf.
- Persist bookshelf data using localStorage.
- Responsive design for mobile and desktop.

## Tech Stack

- React
- React Router
- Styled Components
- Open Library API
- React Hooks


## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js (>= 14)
- npm (>= 6)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/prasanth-p8/marquee-personal-bookshelf-assessment.git
    cd marquee-personal-bookshelf-assessment-main
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Pages

### Book Search Page

- **Input Field**: Type the name of a book to search.
- **Input Field is Invalid**: Display the image showing there is no books for your search.
- **Real-Time Search Results**: Displays search results as you type.
- **Add to Bookshelf**: Option to add books to your personal bookshelf.
- **Remove from Bookshelf**: Option to remove books from your personal bookshelf.

### Personal Bookshelf Page

- **Empty Bookshelf**: There is no books in your bookshelf empty image will be shown.
- **View Bookshelf**: Displays books added to your bookshelf.
- **Remove from Bookshelf**: Option to remove books from your personal bookshelf.

### Not Found Page

- **Not a Valid Url**: Redirected to NotFound Route indicates that you are on wrong URL path.
- **Go to Home**: Button used to navigate you to the Home Page.

## Project Structure

marquee-personal-bookshelf/
|── node_modules
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── components/
│ │ ├── Booklist/
│ │ ├── Bookshelf/
│ │ ├── Header/
│ │ ├── Home/
│ │ └── NotFound/
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
