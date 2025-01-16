FROM openjdk:21-jdk-slim

WORKDIR /target

COPY target/bank-management-application-0.0.1-SNAPSHOT.jar bank-management-application-0.0.1-SNAPSHOT.jar

#EXPOSE 8080
ADD target/bank-management-application-0.0.1-SNAPSHOT.jar bank-management-application-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]

CMD ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]


LABEL author="nizaam"