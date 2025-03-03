Prerequisites:
* Java Development Kit (JDK 17 or later)
* Apache Maven
* MySQL Server (or MySQL running in Docker)
* A database management tool

Instructions on how to run the project:
1. Start MySQL Server using:
    mysql -u root -p
2. Enter the JDBC password when prompted
    JDBC password: mysqlpass
3. Using your SQL management tool:
    a. Open and execute ddl.sql to create tables
    b. Open and execute data.sql to insert dummy data
4. Run the following command in the directory with pom.xml
    mvn spring-boot:run -Dspring-boot.run.jvmArguments='-Dserver.port=8081'
5. Open a browser and navigate to the URL: http://localhost:8081/
6. Create an account and login.

Contributors:
* Aysha: created and implemented all controller files and mustache files, created all models
* Kat: created datasource.txt and the Rmd file described within, implemented all service files
* Edwin: created db_design.pdf, data.sql, queries.sql
* Ezi: created ddl.sql, data.sql, perf.txt, prelim.pdf

Technologies used: 
* Docker
* VsCode
* GitHub
* R Studio
* SQL
* Springboot and its libraries


