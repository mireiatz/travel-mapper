from django.contrib import admin
from .models import Trip, Journey

@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'user', 'created_at')
    search_fields = ('name', 'user__username')
    list_filter = ('start_date', 'end_date')

@admin.register(Journey)
class JourneyAdmin(admin.ModelAdmin):
    list_display = ('from_location_name', 'from_location_lat', 'from_location_lng', 'to_location_name', 'to_location_lat', 'to_location_lng', 'transport_type', 'trip', 'order')
    list_filter = ('transport_type', 'trip')
    search_fields = ('from_location_name', 'to_location_name')
