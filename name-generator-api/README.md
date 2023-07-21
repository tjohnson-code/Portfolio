## About

I created this API using Node.js to generate a random name from a JSON file containing an array of almost 2,000 names. I created this to demonstrate my ability to create an Express API.

I will be rewriting this in Next.js and utilizing serverless routes, so I don't have to host the API on a server.

#### Thoughts/Comments

This project was fun to build and first I started by gathering 1,000 male names and 1,000 female names into an array in a json file. I then used the .sort method to sort these names in alphabetical order and then created a new Set to remove any duplicates. The total list ended up to be 1,915 unique names.
