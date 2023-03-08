from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import AutomobileVO, SaleRecord, SalesPerson, PotentialCustomer
from.encoders import SaleRecordEncoder, SalesPersonEncoder, PotentialCustomerEncoder


@require_http_methods(["GET", "POST"])
def api_sales_people(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_potential_customers(request):
    if request.method == "GET":
        potential_customers = PotentialCustomer.objects.all()
        return JsonResponse(
            {"potential_customers": potential_customers},
            encoder=PotentialCustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        potential_customer = PotentialCustomer.objects.create(**content)
        return JsonResponse(
            potential_customer,
            encoder=PotentialCustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_id = content["automobile_id"]
            automobile = AutomobileVO.objects.get(pk=automobile_id)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile id does not exist."},
                status=404,
            )
        try:
            sales_person_id = content["sales_person_id"]
            sales_person = SalesPerson.objects.get(pk=sales_person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson id does not exist."},
                status=404,
            )
        try:
            potential_customer_id = content["potential_customer_id"]
            potential_customer = PotentialCustomer.objects.get(pk=potential_customer_id)
            content["potential_customer"] = potential_customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer id does not exist."},
                status=404,
            )

        sale = SaleRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_sale(request, pk):
    if request.method == "GET":
        try:
            sale = SaleRecord.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleRecordEncoder,
                safe=False
            )
        except SaleRecord.DoesNotExist:
            response = JsonResponse({"message": "Sale does not exist."})
            response.status_code = 404
            return response
    else:
        try:
            sale = SaleRecord.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleRecordEncoder,
                safe=False,
            )
        except SaleRecord.DoesNotExist:
            return JsonResponse({"message": "Sale does not exist."})
