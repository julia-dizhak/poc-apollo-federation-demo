# Apollo Federation Demo

A learning example

## Presentation

You can download a presentation [here](https://github.com/julia-dizhak/poc-apollo-federation-demo/blob/main/presentation/GraphQL-federation.pptx)

## Prerequisites

You'll need to have either: Node version 16 and npm version 7.

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

| Server            | Port | Description                                 |
| ----------------- | ---- | ------------------------------------------- |
| router            | 4000 | The backend code for the router             |
| subgraph-projects | 4001 | The backend code for the projects subgraph. |
| subgraph-demands  | 4002 | The backend code for the demands subgraph.  |

### Subgraph-projects

To run the servers in the `subgraph-projects` folder:

1. Open a new terminal window, and navigate to `subgraph-projects`.
1. Run `npm install && npm start`. This will install all packages in the main server, then start the main server at `http://localhost:4000`.
1. In a web browser, open Apollo Studio Sandbox for `http://localhost:4001`. You should be able to run queries against your gateway server. Some test queries are included in the following section.
1. Check sub-graph projects

```
rover subgraph check --name projects --schema  ./subgraph-projects/projects.graphql ${APOLLO_GRAPH_REF}@current

```

1. Publish sub-graph projects

```
rover subgraph publish ${APOLLO_GRAPH_REF}@current \
  --name projects \
  --schema ./subgraph-projects/projects.graphql
```

### Subgraph-demands

To run the servers in the `subgraph-demands` folder:

1. Open a new terminal window, and navigate to `subgraph-demands`.
1. Run `npm install && npm start`. This will install all packages in the main server, then start the main server at `http://localhost:4000`.
1. In a web browser, open Apollo Studio Sandbox for `http://localhost:4002`. You should be able to run queries against your gateway server. Some test queries are included in the following section.
1. Check sub-graph demands

```
rover subgraph check --name demands --schema  ./subgraph-demands/demands.graphql ${APOLLO_GRAPH_REF}@current

```

1. Publish sub-graph demands

```
rover subgraph publish ${APOLLO_GRAPH_REF}@current \
  --name demands \
  --schema ./subgraph-demands/demands.graphql
```

### Gateway

Run router

```
APOLLO_KEY=service:Archlet-test-Graph:${APOLLO_KEY} APOLLO_GRAPH_REF=${APOLLO_GRAPH_REF}@current ./router --config ./config.yaml
```


Schema checks -  verify the safety of changes to your graph

Certain changes to your graph's schema (such as removing a field or type) might break one of your application's clients. 

You can review the results of schema checks inside Apollo Studio or run a command

```
rover subgraph check Archlet-test-Graph@current  --name projects --schema ./subgraph-projects/projects.graphql
```

Each change to the schema is labeled either PASS or FAIL.

Schema checks are especially useful when you add them to your CI pipeline.




### Queries examples

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

2. Get demands

   ```graphql
   query GetDemands {
     demands {
       id
       name
       volume
     }
   }
   ```
