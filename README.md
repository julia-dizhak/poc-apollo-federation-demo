# Apollo Federation Demo

A learning example.

## Presentation

url


### Backend

You will work in three main folders:

- `router (gateway)`
- `subgraph-projects`
- `subgraph-demands`


### Frontend

The repo also includes a `client` folder, which includes the frontend for the an app. 

To run the client:

1. Open a new terminal window, and navigate to the `client` folder.
1. Run `npm install & npm start`. This will install all packages in the client and start the application in `localhost:3000`.

### `final` folder

The repo also includes a `final` folder, to show what your code should look like once you've finished the course. You can use it to check your work if you get stuck.

To run the servers in the `final` folder:

1. Open a new terminal window, and navigate to `final/gateway`.
1. Run `npm install && npm start`. This will install all packages in the main server, then start the main server at `http://localhost:4000`.
1. Open another new terminal window, and navigate to `final/subgraph-locations`.
1. Run `npm install && npm start` again. This will install all packages for the `locations` subgraph, then start the subgraph at `http://localhost:4001`.
1. Open a third new terminal window, and navigate to `final/subgraph-reviews`.
1. Run `npm install && npm start` again. This will install all packages for the `reviews` subgraph, then start the subgraph at `http://localhost:4002`.
1. In a web browser, open Apollo Studio Sandbox for `http://localhost:4000`. You should be able to run queries against your gateway server. Some test queries are included in the following section.

### Queries

1. Get all locations for the homepage.

   ```graphql
   query getAllLocations {
     locations {
       id
       name
       photo
       description
       overallRating
     }
   }
   ```

1. Get the latest reviews for the homepage.

   ```graphql
   query LatestReviews {
     latestReviews {
       comment
       rating
       location {
         name
         description
       }
     }
   }
   ```

1. Get details for a specific location.

   ```graphql
   query getLocationDetails {
     location(id: "loc-1") {
       id
       name
       description
       photo
       overallRating
       reviews {
         comment
         rating
       }
     }
   }
   ```

1. Submit a review for a location.
   ```graphql
   mutation submitReview {
     submitReview(review: { comment: "Wow, such a great planet!", rating: 5, locationId: "1" }) {
       code
       success
       message
       review {
         id
         comment
         rating
       }
     }
   }
   ```

