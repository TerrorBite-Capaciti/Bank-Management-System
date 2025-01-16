FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/bank-management-application-0.0.1-SNAPSHOT.jar bank-management-application-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]

CMD ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]


LABEL author="nizaam"