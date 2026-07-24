from django.urls import path,include
from rest_framework import routers
from .views import CompanyViewSet,EmployeeViewSet

router = routers.DefaultRouter()
router.register(f"companies",CompanyViewSet, basename='companies')
router.register(f"employees",EmployeeViewSet, basename='employees')


urlpatterns = [
    path('',include(router.urls))
]