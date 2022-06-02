FROM node:16.14.2-slim as node
FROM ubuntu:focal-20220404 as base
COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/
# this assures we fix symlinks for npx, Yarn and PnPm
RUN corepack disable && corepack enable
# codebuild x509: certificate signed by unknown authority fix
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates git
#Commented out entrypoint, codebuild overrides it anyways
#ENTRYPOINT ["/usr/local/bin/node"]
