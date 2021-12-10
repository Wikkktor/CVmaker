from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Profile(models.Model):
    LANGUAGE_LVL = [
        (1, 'A1'),
        (2, 'A2'),
        (3, 'B1'),
        (4, 'B2'),
        (5, 'C1'),
        (6, 'C2'),

    ]
    picture = models.FileField(blank=True, null=True)
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=255)
    city = models.CharField(max_length=100, null=True)
    street = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255, null= True)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    link = models.TextField(null=True)
    company = models.CharField(max_length=255, null=True)
    function = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    started = models.CharField(max_length=255, null=True)
    ended = models.CharField(max_length=255, null=True)
    school = models.CharField(max_length=255)
    subject = models.CharField(max_length=255, null=True)
    degree = models.CharField(max_length=255, null=True)
    skill = models.TextField(null=True)
    certificate_name = models.CharField(max_length=255, null=True)
    certificate_institution = models.CharField(max_length=255, null=True)
    language_name = models.CharField(max_length=255, null=True)
    language_level = models.CharField(default='A1', choices=LANGUAGE_LVL, max_length=255, null=True)
    about_me = models.TextField(null=True)
    company_started = models.CharField(max_length=255, null=True)
    company_ended = models.CharField(null=True, max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
