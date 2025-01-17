# Use the official OpenJDK image from the Docker Hub
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the target directory to the working directory in the container
COPY target/bank-management-application-0.0.1-SNAPSHOT.jar bank-management-application-0.0.1-SNAPSHOT.jar

# Expose the port the application will run on
EXPOSE 8080

# Set the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/bank-management-application-0.0.1-SNAPSHOT.jar"]