# Surveychimp

**Surveychimp** är en fiktiv SaaS-tjänst som vi ska jobba med i kursens olika moment. I tjänsten kan man skicka ut ett enkelt formulär

Repot består av olika appar (microservices) och kodbibliotek. Det är skapat som monorepo med hjälp av [Nx](https://nx.dev).

## Komma igång

```bash
npm install
```

## Komponenter

### surveychimp-api

Rest-api som används av React-siten.

```bash
npx nx serve surveychimp-api
```

### survey-spa

React-sajt där man kan logga in och se sina todo-listor

```bash
npx nx serve surveychimp-spa
```

### surveychimp-ui

Komponentbibliotek med React-komponenter som kan användas på Reactsajten, Hemsidan eller andra platser. Använder Storybook för att visa upp komponenter.

```bash
npx nx serve surveychimp-api
```

### surveychimp-lib

Bibliotek för funktioner, types och annan kod som kan användas i olika appar


## Mackans anteckningar

### FRÅGOR.
Vi vill bara ge access till den ena av databaser till våra appar. TEX dev till surveymonkey-development och admin till production. Går det att göra?


### DEPLOY
från deploy skriv sh create-environment.sh

First user: doapps-8798f913-f489-4fc7-85ea-753d045f38c5
First password: 7p1z38V5XMs46no9

Second user: doapps-c76c4ab1-7e73-417a-9cec-ffb3f485c372
Second password: 6bTU12B9eX7S3P08

### DEV
MONGO_DATABASE_URI=mongodb+srv://doapps-c76c4ab1-7e73-417a-9cec-ffb3f485c372:6bTU12B9eX7S3P08@mongo-db-bd551dae.mongo.ondigitalocean.com/dev?tls=true&authSource=admin&replicaSet=mongo-db

### PROD
MONGO_DATABASE_URI=mongodb+srv://doapps-8798f913-f489-4fc7-85ea-753d045f38c5:7p1z38V5XMs46no9@mongo-db-bd551dae.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=mongo-db