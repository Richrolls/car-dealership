from django.urls import path

from .views import api_list_technicians, api_list_appointments, api_automobiles, api_appointment

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:id>/", api_appointment, name="api_appointment"),
    path("automobiles/", api_automobiles, name="api_automobiles"),
]
