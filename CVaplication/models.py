from django.db import models

# Create your models here.


class Profile(models.Model):
    picture = models.FileField(blank=True, null=True)
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=255)
    city = models.CharField(max_length=100, null=True)
    street = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    link = models.TextField()
    company = models.CharField(max_length=255)
    function = models.CharField(max_length=255)
    description = models.TextField()
    started = models.DateField()
    ended = models.DateField(null=True)
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    skill = models.TextField()
