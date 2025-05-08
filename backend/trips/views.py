from rest_framework import viewsets
from .models import Trip, Journey
from .serializers import TripSerializer, JourneySerializer

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all().order_by('-created_at')
    serializer_class = TripSerializer

class JourneyViewSet(viewsets.ModelViewSet):
    queryset = Journey.objects.all().order_by('date')
    serializer_class = JourneySerializer
