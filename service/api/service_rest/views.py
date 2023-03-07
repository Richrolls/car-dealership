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
    ]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "picture_url",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "customer_name",
        "date",
        "time",
        "reason"
    ]

    def get_extra_data(self, o):
        return {"vin": o.automobile.vin}

    def get_extra_data(self, o):
        return {"technician": o.technician.name}






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
            encoder=TechnicianDetailEncoder,
            safe=False,
        )




@require_http_methods(["GET", "POST"])
def api_list_appointments(request, automobile_vo_id=None):

    if request.method == "GET":
        if automobile_vo_id is not None:
            appointments = Appointment.objects.filter(automobile=automobile_vo_id)
        else:
            appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Automobile vin"},
                status=400,
            )

        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentListEncoder,
            safe=False,
        )
