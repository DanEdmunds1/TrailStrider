from django.db import models

# Create your models here.
class Region(models.Model):
    name = models.CharField(max_length=100)
    country = models.ForeignKey(
        to='countries.Country',
        on_delete=models.CASCADE,
        related_name='regions'
    )

    def __str__(self):
        return f"{self.name} - {self.country}"