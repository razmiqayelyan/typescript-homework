"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
// Define the getData function
const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error:", error);
    }
};
// Call the getData function and log the data
getData(COMMENTS_URL)
    .then(data => {
    if (data) {
        data.forEach((comment) => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    }
});
