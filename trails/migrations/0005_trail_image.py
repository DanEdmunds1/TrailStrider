# Generated by Django 5.0.1 on 2024-01-15 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trails', '0004_remove_trail_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='trail',
            name='image',
            field=models.TextField(blank=True, null=True),
        ),
    ]
