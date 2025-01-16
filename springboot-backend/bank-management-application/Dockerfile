FROM openjdk:21-jdk-slim

#WORKDIR /target

VOLUME /tmp
COPY target/bank-management-application-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]

#CMD ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]


LABEL author="nizaam"