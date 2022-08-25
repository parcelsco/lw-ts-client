#!/bin/sh

LEMONWAY_API_SWAGGER_URL=${LEMONWAY_API_SWAGGER_URL:-"https://sandbox-api.lemonway.fr/mb/myco/dev/directkitrest/v2/swagger"}
LEMONWAY_AUTH_SWAGGER_URL=${LEMONWAY_AUTH_SWAGGER_URL:-"https://sandbox-api.lemonway.fr/oauth/swagger/v1/swagger.json"}

BASEDIR=$(dirname 0)

java -jar swagger-codegen-cli-3.0.35.jar generate \
-i $LEMONWAY_API_SWAGGER_URL \
-l typescript-fetch -o $BASEDIR/src/api

java -jar swagger-codegen-cli-3.0.35.jar generate \
-i $LEMONWAY_AUTH_SWAGGER_URL \
-l typescript-fetch -o $BASEDIR/src/auth
