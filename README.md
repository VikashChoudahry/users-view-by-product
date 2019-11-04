# Problem Statement

Design and write small program (Node.js and Mongo) to find total users and total unique users who viewed a product on daily/weekly/monthly/Custom date from the following collection.

    String : UserId;

    Date : ViewDate;

    String : ProductId;

It has million of documents in a collection name - userView and it gets populated whenever a user view a product on some site

## Solution

I have used mongoose with mongoDB for ease.
Solution assumes the following:

1. No index is present on the DB.
2. Database is available at _localhost:27017_, and db name is _userViews_.
3. The above can be customized from _config/dev.env_ file.

Core logic of the problem is present at _src/app/controllers/views.js_.

There is single controller _/views_, which has

1. a post method to post views document (as described in the problem statement), and
2. a get method which accepts
   a. ProductID as _MANDATORY_ JSON body: {"ProductID":"Hamburger"}
   b. isUnique as an _OPTIONAL_ query parameter to specify if views should be counted as unique by user; no need to assign any value to it.
   c. startAt and endAt as _OPTIONAL_ query parameters which take input as ISO date string.

querying is handled by getViewerList function under the same controller file.

Both REST API calls are included in _ProductViewProblem.postman_collection.json_ file.
Please note, the above file refers to server url as variable {server}, please use localhost:3000 as default value.

### Is `env.example` updated in your latest pull

Make sure that you have latest env setup, if there is any changes in env.example while you pull from parent branch, just copy the contents of it and replace it with `.env` file.

## How to Run

Just run npm install and then run npm run dev to initialize nodemon given env configurations.

## API Endpoints

1. /GET ?startAt=DATE1&endAt=DATE2
    OPTIONAL query parameters to specify start and end dates.

2. /GET?isUnique
    Specify, if you need unique users who visited or all users.

Note: Postman collection has been added (UsersViewsByProduct.postman_collection.json).
