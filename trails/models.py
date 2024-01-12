from django.db import models

# Create your models here.
class Trail(models.Model):
    name = models.CharField(max_length=100)
    length = models.FloatField()
    elevation = models.FloatField()
    descent = models.FloatField()
    description = models.CharField(max_length=2000)
    difficulty = models.FloatField(default=0)
    region = models.ForeignKey(
        to='regions.Region',
        on_delete=models.CASCADE,
        related_name='trail_region'
    )
    owner = models.ForeignKey(
        to='users.User',
        on_delete=models.CASCADE,
        related_name='owned_trails',
        null=True
    )

    def __str__(self):
        return f"{self.name} - {self.length} m"
 
