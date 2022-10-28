package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(postgres.Open("host=localhost user=postgres password=postgres dbname=task_db port=5432 sslmode=disable TimeZone=Asia/Shanghai"), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection

	//connection.AutoMigrate(&models.User{})
}
