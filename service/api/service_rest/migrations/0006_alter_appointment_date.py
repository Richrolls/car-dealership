# Generated by Django 4.0.3 on 2023-03-08 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_remove_appointment_automobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]
