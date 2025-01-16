# Use an OpenJDK base image
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file from the build context
COPY target/bank-management-application-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

LABEL author="nizaam"

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]