package routes

import (
	"github.com/gofiber/fiber/v2"
	"server/controllers"
)

func Setup(app *fiber.App) {

	//app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)
	app.Post("/api/Get_order", controllers.GetOrder)
	app.Get("/api/LoadData", controllers.LoadData)
	app.Post("/api/AddProduct", controllers.AddProduct)
}
