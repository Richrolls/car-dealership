from django.db import models
from django.urls import reverse



class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)

    def get_api_url(self):
        return reverse("", kwargs={"id": self.id})


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=100)


    def get_api_url(self):
        return reverse("", kwargs={"id": self.id})


class Appointment(models.Model):
    customer_name = models.CharField(max_length=200)
    # date = models.CharField(max_length=50)
    time = models.CharField(max_length=50)
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=17)

    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )


    def get_api_url(self):
        return reverse("", kwargs={"id": self.id})
