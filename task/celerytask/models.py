from django.db import models

# Create your models here.

class CleryTask(models.Model):
    task = models.CharField(max_length=500)
