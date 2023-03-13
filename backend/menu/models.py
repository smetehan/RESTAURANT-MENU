from django.db import models
from django.contrib.auth.models import User


class Pide(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()
class Doner(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()
class Kebap(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()
class Salata(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()
class Icecek(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()
class Tatli(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image= models.TextField()

class Masa_1(models.Model):
 
    title = models.CharField(max_length=20, blank=True)
    price = models.CharField(max_length=20, blank=True)
    # price_total = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    image= models.TextField(blank=True)
class Masa_2(models.Model):
 
    title = models.CharField(max_length=20, blank=True)
    price = models.CharField(max_length=20, blank=True)
    # price_total = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    image= models.TextField(blank=True)
class Masa_3(models.Model):
 
    title = models.CharField(max_length=20, blank=True)
    price = models.CharField(max_length=20, blank=True)
    # price_total = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    image= models.TextField(blank=True)
class Masa_4(models.Model):
 
    title = models.CharField(max_length=20, blank=True)
    price = models.CharField(max_length=20, blank=True)
    # price_total = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    image= models.TextField(blank=True)