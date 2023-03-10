# CarCar

Team:

* Matthew - Automobile Service Service
* Richard - Sales Service

## Design

## Service microservice

We have the Technician, Appointment, and AutomobileVO models. The Technician is a simple model, and Appointment is a model that uses Technician as a Foreign Key. the Technician and Appointment models are used to make my forms and list pages.

The AutomobileVO model is what we use to populate information from the poller via the inventory api. We use it in the appointments list when searching for the VIN of cars that are currently in our incentory. When using the search function, it compares the VIN value in both the Appointment and AutomobileVO tables, and if there's a match, it shows those appointments in our Appointment list view.

## Sales microservice

We use four models: AutomobileVO, SalesPerson, PotentialCustomer, and SaleRecord. The AutomobileVO, SalesPerson, and PotentialCustomer models are all simple models; The SaleRecord model has foreignKeys to the three previous models and requires existing automobiles, sales people, and customers to create a sale.

The poller polls inventory-api:8000/api/automobiles for any new or changed automobiles and creates new or updates automobiles using the AutomobileVO model. The SaleForm compares the vins of cars in inventory with the vins of cars in already existing sales and populates the dropdown with vins of cars that exist in inventory but are not already part of a sale. When a sale is made the price, automobileVO vin, salesperson id, and potential customer id are passed as a POST request and a sale is saved. The vin data from AutomobileVO is used again in the SalesPersonSalesList.js file. There is a dropdown where one can choose the sales person they'd like to see the sales of. This will populate a table with sales of that person, which includes the vins of sold cars.
