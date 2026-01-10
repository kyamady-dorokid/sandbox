# Spring Boot Simple CRUD API - Starter Code

This is a starter template for the Java/SpringBoot exercise (Issue #1).

## Quick Start

### Prerequisites
- Java 11+ (17 or 21 recommended)
- Maven 3.6+
- Git

### Setup

```bash
# Clone or copy this starter
cd skill-development/exercises/01-java-springboot/starter

# Build the project
./mvnw clean package

# Run the application
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`.

### API Documentation

Once running, visit Swagger UI for interactive API docs:
- Swagger UI: `http://localhost:8080/swagger-ui.html`

### Test

```bash
./mvnw test
```

## Project Structure

```
.
├── pom.xml                          # Maven dependencies
├── src/
│   ├── main/java/com/example/api/
│   │   ├── Application.java         # Spring Boot entry point
│   │   ├── controller/              # REST controllers
│   │   ├── model/                   # JPA entities
│   │   ├── repository/              # Spring Data JPA repositories
│   │   └── service/                 # Business logic
│   └── test/java/com/example/api/   # Unit tests
└── README.md
```

## Key Technologies

- **Spring Boot 3.x**
- **Spring Data JPA** (ORM)
- **H2 Database** (in-memory for testing)
- **JUnit 5 & Mockito** (testing)
- **Maven** (build)

## Next Steps

1. Implement REST endpoints (CRUD operations)
2. Add JPA entity models
3. Write service layer with business logic
4. Implement unit tests
5. Update API documentation in README

## References

- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Springdoc OpenAPI (Swagger)](https://springdoc.org/)
