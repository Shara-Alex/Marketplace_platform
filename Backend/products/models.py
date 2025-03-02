from django.db import models
from users.models import CustomUser

class Product(models.Model):
    retailer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)