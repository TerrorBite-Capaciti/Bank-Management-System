FROM openjdk:21-jdk-slim

WORKDIR /app

EXPOSE 8080

COPY target/*.jar app.jar

CMD ["java", "-jar", "/app/app.jar"]

LABEL author="nizaam"