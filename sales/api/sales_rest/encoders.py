from common.json import ModelEncoder
from .models import AutomobileVO, SaleRecord, SalesPerson, PotentialCustomer


class AutomobileVOEncoder(ModelEncoder):
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


class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id",
        "price",
        "automobile",
        "salesperson",
        "potential_customer",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "potential_customer": PotentialCustomerEncoder(),
    }
