from django.urls import path

from .views import api_sales_people, api_potential_customers, api_record, api_records

urlpatterns = [
    path("salespeople/", api_sales_people, name="api_sales_people"),
    path("customers/", api_potential_customers, name="api_potential_customers"),
    path("records/", api_records, name="api_records"),
    path("records/<int:pk>/", api_record, name="api_record"),
]
