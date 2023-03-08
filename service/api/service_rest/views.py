from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "customer_name",
        # "date",
        "time",
        "reason",
        "vin",
        "technician",
    ]
    encoders = {
        "technician": TechnicianListEncoder(),
    }







@require_http_methods(["GET", "POST"])
def api_list_technicians(request):

    if request.method == "GET":

        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )




@require_http_methods(["GET", "POST"])
def api_list_appointments(request):

    if request.method == "GET":

        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)

        # try:
        technician_id = content["technician_id"]
        technician = Technician.objects.get(id=technician_id)
        content["technician"] = technician

        # except Technician.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "Invalid Technician"},
        #         status=400,
        #     )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )
