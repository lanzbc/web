from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import audioCVTSerializer      # add this
from .models import audioCVT                     # add this

class audioCVTView(viewsets.ModelViewSet):       # add this
    serializer_class = audioCVTSerializer          # add this
    queryset = audioCVT.objects.all()              # add this