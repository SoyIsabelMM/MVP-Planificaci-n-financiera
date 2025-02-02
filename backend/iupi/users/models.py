from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """ class User """
    email = models.EmailField(unique=True)
    dni = models.CharField(max_length=20, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']