# Generated by Django 4.0.3 on 2023-03-09 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_alter_appointment_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateTimeField(null=True),
        ),
    ]
