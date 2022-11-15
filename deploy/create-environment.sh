doctl apps update 59fe9f72-9bd5-46fe-acbf-f5fd02f09be1 --spec ./dev/create-surveychimp-dev.yaml
# doctl apps update bc9defe3-ad90-4ca0-82da-e7230cdbc794 --spec ./dev/create-surveychimp-production.yaml
# doctl apps create --spec ./dev/create-surveychimp-production.yaml
# doctl apps create --spec ./dev/create-surveychimp-dev.yaml
# database=$(doctl databases create mongo-db --engine mongodb --version 5)
# doctl databases db create mongo-db prod
# doctl databases db create mongo-db dev
