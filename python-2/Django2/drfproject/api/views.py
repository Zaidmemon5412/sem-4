from django.shortcuts import render
from requests import Response
from .permissions import IsAdminOrReadOnly
from rest_framework.decorators import action

from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
# Create your views here.
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAdminOrReadOnly]
    
        