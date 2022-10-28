package controllers

import (
	"github.com/gofiber/fiber/v2"
	"server/database"
	"server/models"
	"strconv"
)

func LoadData(c *fiber.Ctx) error {
	var T models.Tables
	database.DB.Table("Order").Find(&T.Order)
	database.DB.Table("Order_product").Find(&T.OrderProduct)
	database.DB.Table("Products").Find(&T.Products)

	return c.JSON(T)
}

// func AddOrder(c *fiber.Ctx) error {
//
// }
func AddProduct(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}
	type insert struct {
		Name  string
		Price float64
	}
	val, _ := strconv.ParseFloat(data["price"], 64)
	in := insert{data["name"], val}
	database.DB.Table("Products").Create(in)
	return nil
}
