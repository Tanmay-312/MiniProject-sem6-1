package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "021103"
	dbname   = "stocksdb"
)

func main() {
	dbinfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", dbinfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	app := fiber.New()

	app.Post("/register", RegisterHandler(db))
	app.Post("/login", LoginHandler(db))

	log.Fatal(app.Listen(":8080"))
}

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterHandler(db *sql.DB) fiber.Handler {
	return func(c *fiber.Ctx) error {
		var user User
		if err := c.BodyParser(&user); err != nil {
			return c.Status(http.StatusBadRequest).SendString(err.Error())
		}

		_, err := db.Exec("INSERT INTO login_info (username, password) VALUES ($1, $2)", user.Username, user.Password)
		if err != nil {
			return c.Status(http.StatusInternalServerError).SendString(err.Error())
		}

		return c.Status(http.StatusCreated).JSON(map[string]string{"message": "User registered successfully"})
	}
}

func LoginHandler(db *sql.DB) fiber.Handler {
	return func(c *fiber.Ctx) error {
		var user User
		if err := c.BodyParser(&user); err != nil {
			return c.Status(http.StatusBadRequest).SendString(err.Error())
		}

		var storedUsername, storedPassword string
		err := db.QueryRow("SELECT username, password FROM login_info WHERE username = $1", user.Username).Scan(&storedUsername, &storedPassword)
		if err != nil {
			if err == sql.ErrNoRows {
				return c.Status(http.StatusNotFound).SendString("User not found")
			}
			return c.Status(http.StatusInternalServerError).SendString(err.Error())
		}

		if storedPassword != user.Password {
			return c.Status(http.StatusUnauthorized).SendString("Incorrect password")
		}

		return c.Status(http.StatusOK).JSON(map[string]string{"message": "User logged in successfully"})
	}
}
