from django.db import models
from django.contrib.auth.models import User

class Trip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trips')
    name = models.CharField(max_length=100)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'trips'

    def __str__(self):
        return self.name

class Journey(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='journeys')
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    transport_type = models.CharField(max_length=50)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'trips'

    def __str__(self):
        return f"{self.from_location} → {self.to_location} on {self.date}"
