# Generated by Django 4.2.3 on 2023-07-19 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("RentalApp", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="rentalapplication",
            name="child_support_balance",
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name="rentalapplication",
            name="child_support_creditor_owed",
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name="rentalapplication",
            name="child_support_creditor_phone",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name="rentalapplication",
            name="child_support_monthly_payment",
            field=models.CharField(blank=True, max_length=100),
        ),
    ]