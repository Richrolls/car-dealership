from common.json import ModelEncoder
from .models import AutomobileVO, SaleRecord, SalesPerson, PotentialCustomer


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_id",
    ]


class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
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
        "salesperson": SalesPersonEncoder(),
        "potential_customer": PotentialCustomerEncoder(),
    }
