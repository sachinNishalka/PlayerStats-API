# Player Statistics API

This is a simple Node.js Express API project that demonstrates CRUD (Create, Read, Update, Delete) operations for managing player statistics.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/player-stats-api.git
   ```
2. Install dependencies

   ```bash
   cd player-stats-api
   npm install

   ```

3. Start the server

   ```bash
   npm start
   ```

## Endpoints

### Get Player Statistics by ID

- **URL**: `/api/v1/stats/:id`
- **Method**: `GET`
- **Description**: Retrieve player statistics by ID.
- **Response**: JSON object of the player's statistics.

### Update Player Statistics by ID

- **URL**: `/api/v1/stats/:id`
- **Method**: `PUT`
- **Description**: Update player statistics by ID.
- **Request Body**: JSON object with updated player data (e.g., name, score).
- **Response**: JSON object of the updated player.

### Delete Player Statistics by ID

- **URL**: `/api/v1/stats/:id`
- **Method**: `DELETE`
- **Description**: Delete player statistics by ID.
- **Response**: JSON object confirming deletion.

### Create New Player Statistics

- **URL**: `/api/v1/stats`
- **Method**: `POST`
- **Description**: Add a new player's statistics.
- **Request Body**: JSON object with player data (e.g., name, score).
- **Response**: JSON object of the newly added player.

---

To make requests to these endpoints, use the appropriate HTTP methods and the provided URLs. Make sure to include the necessary data in the request body when applicable.

### Examples

#### Get Player Statistics

```bash
    http://localhost:3000/api/v1/stats/101
```

Response:

    {
    "id": 123,
    "name": "Player Name",
    "score": 1500
    // Other player data...
    }

#### Update Player Statistics

```bash
    PUT /api/v1/stats/123

```

{
"name": "Updated Player Name",
"score": 1700
// Other updated data...
}

Response:

{
"id": 123,
"name": "Updated Player Name",
"score": 1700
// Other updated data...
}

#### Delete Player Statistics

```bash
DELETE /api/v1/stats/123

```
