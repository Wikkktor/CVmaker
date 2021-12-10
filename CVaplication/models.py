from django.db import models

# Create your models here.


class Profile(models.Model):
    language_lvl = [
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
    subject = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    skill = models.TextField()
    certificate_name = models.CharField(max_length=255)
    certificate_institution = models.CharField(max_length=255)
    language_name = models.CharField(max_length=255)
    language_level = models.IntegerField(default=1, choices=language_lvl)
    about_me = models.TextField(null=True)
    company_started = models.DateField(null=True)
    company_ended = models.DateField(null=True)
