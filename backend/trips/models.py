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
        ordering = ['name', 'start_date']

    def __str__(self):
        return self.name

class Journey(models.Model):
    TRANSPORT_TYPES = [
        ('walk', 'Walk'),
        ('bicycle', 'Bicycle'),
        ('car', 'Car'),
        ('bus', 'Bus'),
        ('train', 'Train'),
        ('ferry', 'Ferry'),
        ('plane', 'Plane'),
    ]

    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='journeys')
    order = models.PositiveIntegerField(default=0)

    from_location_name = models.CharField(max_length=255, null=True, blank=True)
    from_location_lat = models.FloatField(null=True, blank=True)
    from_location_lng = models.FloatField(null=True, blank=True)

    to_location_name = models.CharField(max_length=255, null=True, blank=True)
    to_location_lat = models.FloatField(null=True, blank=True)
    to_location_lng = models.FloatField(null=True, blank=True)

    transport_type = models.CharField(max_length=50, choices=TRANSPORT_TYPES, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'trips'
        ordering = ['order', 'start_date', 'created_at']

    def __str__(self):
        return f"{self.from_location_name} → {self.to_location_name}"
