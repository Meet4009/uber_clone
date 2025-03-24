# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: `POST`

### Description:

This endpoint is used to register a new user in the system.

### Request Body:

The request body must be in JSON format and include the following fields:

-   `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
-   `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
-   `email` (string, required): The email address of the user. Must be a valid email format.
-   `password` (string, required): The password for the user. Must be at least 4 characters long.

### Example Request Body:

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

### Responses:

#### Success:

-   **Status Code:** `201 Created`
-   **Response Body:**
    ```json
    {
        "status": true,
        "message": "User Registered Successfully",
        "data": {
            "_id": "userId",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com"
        },
        "token": "jwtToken"
    }
    ```

#### Validation Errors:

-   **Status Code:** `400 Bad Request`
-   **Response Body:**
    ```json
    {
        "errors": [
            {
                "msg": "First name must be at least 3 character long",
                "param": "fullname.firstname",
                "location": "body"
            }
        ]
    }
    ```

#### User Already Exists:

-   **Status Code:** `400 Bad Request`
-   **Response Body:**
    ```json
    {
        "message": "user already exist"
    }
    ```

### Notes:

-   Ensure that the `email` field is unique.
-   Passwords are hashed before being stored in the database.
-   A JWT token is returned upon successful registration.

---

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: `POST`

### Description:

This endpoint is used to authenticate a user and provide a JWT token upon successful login.

### Request Body:

The request body must be in JSON format and include the following fields:

-   `email` (string, required): The email address of the user. Must be a valid email format.
-   `password` (string, required): The password for the user. Must be at least 4 characters long.

### Example Request Body:

```json
{
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

### Responses:

#### Success:

-   **Status Code:** `200 OK`
-   **Response Body:**
    ```json
    {
        "status": true,
        "message": "User Logged In Successfully",
        "token": "jwtToken"
    }
    ```

#### Validation Errors:

-   **Status Code:** `400 Bad Request`
-   **Response Body:**
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            }
        ]
    }
    ```

#### Invalid Credentials:

-   **Status Code:** `401 Unauthorized`
-   **Response Body:**
    ```json
    {
        "message": "Invalid Email or Password"
    }
    ```

### Notes:

-   Ensure the `email` exists in the database.
-   Passwords are compared using a secure hashing algorithm.
-   A JWT token is returned upon successful login.

---

# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: `GET`

### Description:

This endpoint is used to retrieve the profile of the authenticated user.

### Headers:

-   `Authorization` (string, required): Bearer token for authentication.

### Responses:

#### Success:

-   **Status Code:** `200 OK`
-   **Response Body:**
    ```json
    {
        "status": true,
        "message": "User Profile",
        "data": {
            "_id": "userId",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com"
        }
    }
    ```

#### Unauthorized:

-   **Status Code:** `401 Unauthorized`
-   **Response Body:**
    ```json
    {
        "error": "unauthorized token"
    }
    ```

#### Not Found:

-   **Status Code:** `404 Not Found`
-   **Response Body:**
    ```json
    {
        "message": "User not found"
    }
    ```

---

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: `GET`

### Description:

This endpoint is used to log out the authenticated user by clearing the token and blacklisting it.

### Headers:

-   `Authorization` (string, required): Bearer token for authentication.

### Responses:

#### Success:

-   **Status Code:** `200 OK`
-   **Response Body:**
    ```json
    {
        "status": true,
        "message": "User Logged out successfully"
    }
    ```

#### Unauthorized:

-   **Status Code:** `401 Unauthorized`
-   **Response Body:**
    ```json
    {
        "error": "unauthorized token"
    }
    ```
