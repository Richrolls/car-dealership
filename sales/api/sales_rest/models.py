from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)

    def get_api_url(self):
        return reverse("", kwargs={"pk": self.id})

class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})


class PotentialCustomer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=12)

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})


class SaleRecord(models.Model):
    price = models.IntegerField()

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="salesperson",
        on_delete=models.CASCADE,
    )

    potential_customer = models.ForeignKey(
        PotentialCustomer,
        related_name="potential_customer",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_record", kwargs={"pk": self.id})
