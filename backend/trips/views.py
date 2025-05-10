from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Max
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
    serializer_class = JourneySerializer

    def get_queryset(self):
        trip_id = self.kwargs['trip_pk']  # 'trip_pk' comes from the nested router
        return Journey.objects.filter(trip_id=trip_id).order_by('order')

    def perform_create(self, serializer):
        trip_id = self.kwargs['trip_pk']
        trip = Trip.objects.get(pk=trip_id)
        max_order = Journey.objects.filter(trip=trip).aggregate(Max('order'))['order__max'] or 0
        serializer.save(trip=trip, order=max_order + 1)

@api_view(['GET'])
def transport_types(request):
    types = [{"value": key, "label": label} for key, label in Journey.TRANSPORT_TYPES]
    return Response(types)