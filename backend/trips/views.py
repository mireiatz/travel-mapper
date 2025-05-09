from rest_framework import viewsets
from .models import Trip, Journey
from .serializers import TripSerializer, JourneySerializer
from django.contrib.auth.models import User

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all().order_by('-created_at')
    serializer_class = TripSerializer

    def perform_create(self, serializer):
        # Use the first user as the default - remove when user logging is implemented
        default_user = User.objects.first()
        serializer.save(user=default_user)

class JourneyViewSet(viewsets.ModelViewSet):
    queryset = Journey.objects.all().order_by('date')
    serializer_class = JourneySerializer
