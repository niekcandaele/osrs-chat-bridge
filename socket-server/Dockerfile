FROM openjdk:16-alpine3.13

WORKDIR /app

COPY ./socket-server.jar socket-server.jar
COPY ./run.sh ./run.sh

CMD ["sh", "run.sh"]