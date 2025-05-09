from rest_framework import serializers
from .models import Trip, Journey

class JourneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Journey
        fields = '__all__'

class TripSerializer(serializers.ModelSerializer):
    journeys = JourneySerializer(many=True, read_only=True)

    class Meta:
        model = Trip
        fields = ['id', 'name', 'start_date', 'end_date', 'user', 'created_at', 'journeys']
        read_only_fields = ['user', 'created_at', 'journeys']
