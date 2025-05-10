from rest_framework import serializers
from .models import Trip, Journey

class JourneySerializer(serializers.ModelSerializer):

    class Meta:
        model = Journey
        fields = '__all__'
        read_only_fields = ['trip']

class TripSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = '__all__'
        read_only_fields = ['user']
