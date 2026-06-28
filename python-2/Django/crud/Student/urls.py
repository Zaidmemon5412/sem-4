from django.contrib import admin
from django.urls import path
from .views import home,add_student,update_student,delete_student

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home,name='home'),
    path('add_student/',add_student,name='add_student'),
    path('update_student/<int:id>',update_student,name='update_student'),
    path('delete_student/<int:id>',delete_student,name='delete_student')
]
