package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"server/database"
	"server/models"
)

func GetOrder(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})
	if err != nil {
		return err
	}
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("User").Where("id = ?", claims.Issuer).First(&user)
	var orders []models.Order

	database.DB.Table("Order").Where(map[string]interface{}{"UserId": user.Id}).Find(&orders)

	var result []models.Orderliness
	for _, order := range orders {
		var op []models.Order_product
		database.DB.Table("Order_product").Where(map[string]interface{}{"OrderId": order.Id}).Find(&op)
		var lp []models.Prod
		for _, obj := range op {
			var product models.Products
			database.DB.Table("Products").Where(map[string]interface{}{"id": obj.ProductId}).First(&product)
			lp = append(lp, models.Prod{string(product.Name), obj})
		}
		result = append(result, models.Orderliness{order, lp})
	}
	return c.JSON(result)
}
