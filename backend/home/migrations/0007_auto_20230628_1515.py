# Generated by Django 2.2.28 on 2023-06-28 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_delete_hey'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hi',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dssd', models.BigIntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Hello',
        ),
    ]