from django.db import models

# Create your models here.
class Student(models.Model):
    std_name= models.CharField()
    email= models.EmailField()
    age = models.IntegerField()
    course = models.CharField()
    city = models.CharField()

    def __str__(self):
        return self.std_name
