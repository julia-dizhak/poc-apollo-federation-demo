# Apollo Federation Demo

A learning example.

## Presentation

[download a presentation](https://github.com/julia-dizhak/poc-apollo-federation-demo/blob/main/presentation/GraphQL-federation.pptx)


### Frontend

The repo also includes a `client` folder, which includes the frontend for the an app. 

To run the client:

1. Open a new terminal window, and navigate to the `client` folder.
1. Run `npm install & npm start`. This will install all packages in the client and start the application in `localhost:3000`.


### Backend

You will work in three main folders:

- `router` (or gateway)
- `subgraph-projects`
- `subgraph-demands`


### Subgraph-projects

To run the servers in the `subgraph-projects` folder:

1. Open a new terminal window, and navigate to `subgraph-projects`.
1. Run `npm install && npm start`. This will install all packages in the main server, then start the main server at `http://localhost:4000`.
1. In a web browser, open Apollo Studio Sandbox for `http://localhost:4001`. You should be able to run queries against your gateway server. Some test queries are included in the following section.
1. Check sub-graph
```
rover subgraph check --name projects --schema  ./subgraph-projects/projects.graphql ${APOLLO_GRAPH_REF}@current

```
1. Publish sub-graph
```
rover subgraph publish ${APOLLO_GRAPH_REF}@current \
  --name projects \
  --schema ./subgraph-projects/projects.graphql 
```


### Subgraph-demands

To run the servers in the `subgraph-demands` folder:

1. Open a new terminal window, and navigate to `subgraph-demands`.
1. Run `npm install && npm start`. This will install all packages in the main server, then start the main server at `http://localhost:4002`.
1. In a web browser, open Apollo Studio Sandbox for `http://localhost:4001`. You should be able to run queries against your gateway server. Some test queries are included in the following section.


### Gateway

Run router

```APOLLO_KEY=service:Archlet-test-Graph:${APOLLO_KEY} APOLLO_GRAPH_REF=${APOLLO_GRAPH_REF}@current ./router --config ./config.yaml
```

### Queries

1. Get all projects

   ```graphql
   query GetProjects {
     projects {
       id
       name
       description
       type
       biddingTypeId
     }
   }
   ```
