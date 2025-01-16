# Use OpenJDK 21 as the base image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file to the container
COPY target/bank-management-application.jar app.jar

# Expose the application port
EXPOSE 8080

LABEL author="nizaam"

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]