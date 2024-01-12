# Generated by Django 5.0.1 on 2024-01-11 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('length', models.FloatField()),
                ('elevation', models.FloatField()),
                ('descent', models.FloatField()),
                ('description', models.CharField(max_length=2000)),
                ('difficulty', models.FloatField(default=0)),
            ],
        ),
    ]
