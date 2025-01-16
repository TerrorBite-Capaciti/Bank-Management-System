FROM maven:3.8.6-eclipse-temurin-17 as build

WORKDIR /app

COPY ./ /app

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/bank-management-application.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "/app/app.jar"]