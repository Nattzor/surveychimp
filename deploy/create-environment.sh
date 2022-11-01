doctl apps create --spec ./dev/create-surveychimp-production.yaml
doctl apps create --spec ./dev/create-surveychimp-dev.yaml


database=$(doctl databases create mongo-db --engine mongodb --version 5)

# doctl databases db create mongo-db prod
# doctl databases db create mongo-db dev
