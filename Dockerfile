FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY backend/target/testme-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["/usr/bin/java"]
CMD ["-jar", "-Xmx128m", "app.jar"]
EXPOSE 8080