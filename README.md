
## Lemonway Typescript client

Project initialized with yarn v2, using vscode sdk and typescript plugin.

### Requirements

- Swagger Codegen : 
```
wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/3.0.35/swagger-codegen-cli-3.0.35.jar -O swagger-codegen-cli.jar
```

### Generate the client

```
java -jar swagger-codegen-cli-3.0.35.jar generate \
   -i https://sandbox-api.lemonway.fr/mb/myco/dev/directkitrest/v2/swagger -l typescript-node -o src/api
```