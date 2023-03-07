from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, SaleRecord, SalesPerson, PotentialCustomer

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_id",
    ]


class PotentialCustomerListEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]


class PotentialCustomerDetailEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "id",
        "name",
    ]


class SaleRecordListEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id",
        "price",
        "automobile",
        "salesperson",
        "potential_customer",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "potential_customer": PotentialCustomerDetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_sales_people(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_potential_customers(request):
    if request.method == "GET":
        potential_customers = PotentialCustomer.objects.all()
        return JsonResponse(
            {"potential_customers": potential_customers},
            encoder=PotentialCustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        potential_customer = PotentialCustomer.objects.create(**content)
        return JsonResponse(
            potential_customer,
            encoder=PotentialCustomerListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleRecordListEncoder,
        )
    else:
        content = json.loads(request.body)

        automobile_id = content["automobile_id"]
        automobile = AutomobileVO.objects.get(id=automobile_id)
        content["automobile"] = automobile


        salesperson_id = content["salesperson_id"]
        salesperson = SalesPerson.objects.get(pk=salesperson_id)
        content["salesperson"] = salesperson

        potential_customer_id = content["potential_customer_id"]
        potential_customer = PotentialCustomer.objects.get(pk=potential_customer_id)
        content["potential_customer"] = potential_customer

        sale = SaleRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleRecordListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_sale(request, pk):
    if request.method == "GET":
        try:
            sale = SaleRecord.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleRecordListEncoder,
                safe=False
            )
        except SaleRecord.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            sale = SaleRecord.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleRecordListEncoder,
                safe=False,
            )
        except SaleRecord.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
