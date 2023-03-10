# CarCar

Team:

* Matthew - Automobile Service Service
* Richard - Sales Service

## Design

The AutomobileVO, Technician and Appointment models together form the 'Service' Bounded Context.

The AutomobileVO, SalesPerson, PotentialCustomer, and SaleRecord models together form the 'Sales' Bounded Context.

## Service microservice

We have the Technician, Appointment, and AutomobileVO models. The Technician is a simple model, and Appointment is a model that uses Technician as a Foreign Key. the Technician and Appointment models are used to make my forms and list pages.

The AutomobileVO model is what we use to populate information from the poller via the inventory api. We use it in the appointments list when searching for the VIN of cars that are currently in our incentory. When using the search function, it compares the VIN value in both the Appointment and AutomobileVO tables, and if there's a match, it shows those appointments in our Appointment list view.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
