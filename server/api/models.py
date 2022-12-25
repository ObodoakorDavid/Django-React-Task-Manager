from django.db import models

# Create your models here.

class Task(models.Model):
    task = models.CharField(max_length=50)
    description = models.CharField(max_length=150, default='', blank=False)
    tags = models.ForeignKey('Tag', on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.task

class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
