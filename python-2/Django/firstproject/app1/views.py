from django.shortcuts import render
from .models import Student


# Create your views here.
def Home(request):
    students = Student.objects.all()
    return render(request, 'home.html', {'students': students})
