FROM openjdk:11
COPY ./Casasydeptos-1.0.0.jar /tmp/app.jar
WORKDIR /tmp
ENV SPRING_DATASOURCE_URL=jdbc:mysql://database-1.cpdelwz4zjs0.us-east-1.rds.amazonaws.com/mydb
ENV SPRING_DATASOURCE_USERNAME=admin
ENV SPRING_DATASOURCE_PASSWORD=admin123
CMD ["java","-jar","app.jar"]
EXPOSE 8000
