
from django.urls import path, include

from app1.views import Home

urlpatterns = [
    path('',Home),
]
