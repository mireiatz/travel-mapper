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
        fields = '__all__'
