# Generated by Django 2.2.28 on 2023-07-17 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_auto_20230628_1515'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hello',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dsdds', models.BigIntegerField()),
                ('dssdsd', models.BigIntegerField()),
            ],
        ),
    ]
