from rest_framework import serializers
from .models import Trip, Journey

class JourneySerializer(serializers.ModelSerializer):
    from_location = serializers.SerializerMethodField()
    to_location = serializers.SerializerMethodField()

    class Meta:
        model = Journey
        fields = '__all__'
        read_only_fields = ['trip']

    def get_from_location(self, obj):
        return {
            "name": obj.from_location_name,
            "lat": obj.from_location_lat,
            "lng": obj.from_location_lng,
        }

    def get_to_location(self, obj):
        return {
            "name": obj.to_location_name,
            "lat": obj.to_location_lat,
            "lng": obj.to_location_lng,
        }

    def create(self, validated_data):
        from_location = validated_data.pop("from_location", {})
        to_location = validated_data.pop("to_location", {})

        journey = Journey.objects.create(
            **validated_data,
            from_location_name=from_location.get("name", ""),
            from_location_lat=from_location.get("lat"),
            from_location_lng=from_location.get("lng"),
            to_location_name=to_location.get("name", ""),
            to_location_lat=to_location.get("lat"),
            to_location_lng=to_location.get("lng"),
        )

        return journey

    def update(self, instance, validated_data):
        from_location = validated_data.pop("from_location", {})
        to_location = validated_data.pop("to_location", {})

        instance.from_location_name = from_location.get("name", instance.from_location_name)
        instance.from_location_lat = from_location.get("lat", instance.from_location_lat)
        instance.from_location_lng = from_location.get("lng", instance.from_location_lng)

        instance.to_location_name = to_location.get("name", instance.to_location_name)
        instance.to_location_lat = to_location.get("lat", instance.to_location_lat)
        instance.to_location_lng = to_location.get("lng", instance.to_location_lng)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

class TripSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = '__all__'
        read_only_fields = ['user']
