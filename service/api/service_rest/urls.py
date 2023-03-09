from django.urls import path

from .views import api_list_technicians, api_list_appointments, api_automobiles

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("automobiles/", api_automobiles, name="api_automobiles"),

]
