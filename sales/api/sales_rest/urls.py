from django.urls import path

from .views import api_sales_people, api_potential_customers, api_sale, api_sales, api_automobiles

urlpatterns = [
    path("salespeople/", api_sales_people, name="api_sales_people"),
    path("customers/", api_potential_customers, name="api_potential_customers"),
    path("sales/", api_sales, name="api_sales"),
    path("sales/<int:pk>/", api_sale, name="api_sale"),
    path("automobiles/", api_automobiles, name="api_autmobiles"),
]
