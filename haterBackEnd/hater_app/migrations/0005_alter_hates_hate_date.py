# Generated by Django 4.0.4 on 2022-05-08 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hater_app', '0004_alter_hates_hate_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hates',
            name='hate_date',
            field=models.DateTimeField(default='2022-05-08 03:08'),
        ),
    ]
