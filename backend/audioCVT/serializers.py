from rest_framework import serializers
from .models import audioCVT

class audioCVTSerializer(serializers.ModelSerializer):
    class Meta:
        model = audioCVT
        fields = ('id', 'title', 'description', 'completed')