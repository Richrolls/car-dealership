# Generated by Django 4.0.3 on 2023-03-10 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_alter_appointment_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.CharField(max_length=9),
        ),
    ]
