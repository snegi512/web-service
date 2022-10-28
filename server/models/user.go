package models

type User struct {
	Id       uint   `json:"id" gorm:"primaryKey" sql:"id"`
	Login    string `json:"name" sql:"login"`
	Password string `json:"-" sql:"pas"`
	Role     int    `json:"role" sql:"role"`
}
