package models

type Order struct {
	Id     uint    `json:"id" gorm:"primaryKey" sql:"Id"`
	UserId uint    `json:"user-id" sql:"UserId"`
	Sum    float64 `json:"sum" sql:"Sum"`
	Status int     `json:"status" sql:"Status"`
}
type Order_product struct {
	Id        uint    `json:"id" gorm:"primaryKey" sql:"Id"`
	OrderId   uint    `json:"order-id" sql:"OrderId"`
	ProductId uint    `json:"product-id" sql:"ProductId"`
	Count     float64 `json:"count" sql:"Count"`
}
type Products struct {
	Id    uint    `json:"id" gorm:"primaryKey" sql:"Id"`
	Name  string  `json:"name" sql:"Name"`
	Price float64 `json:"price" sql:"Price"`
}
type Prod struct {
	Name string        `json:"name" sql:"Name"`
	Op   Order_product `json:"order_Product"`
}

type Orderliness struct {
	Ord      Order  `json:"ord"`
	Listprod []Prod `json:"listprod,omitempty"`
}
