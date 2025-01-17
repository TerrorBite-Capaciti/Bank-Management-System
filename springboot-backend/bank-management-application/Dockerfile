# Use a minimal JDK image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the JAR file into the container
COPY springboot-backendbank-management-application/target/bank-management-application-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "/app/app.jar"]
