from django.shortcuts import render,get_object_or_404,redirect
from .models import Student

# Create your views here.
def home(request):
    student= Student.objects.all()
    return render(request,'home.html',{'students':student})
def add_student(request):

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        age = request.POST.get('age')
        course = request.POST.get("course")
        city = request.POST.get("city")

        Student.objects.create(
            std_name=name,
            email = email,
            age = age,
            course = course,
            city = city
        )
        return redirect('home')
    return render(request,"add_student.html")

def update_student(request,id):
    student = get_object_or_404(Student,id=id)
    if request.method == 'POST':
        student.std_name = request.POST.get('name')
        student.email = request.POST.get("email")
        student.age = request.POST.get("age")
        student.course = request.POST.get("course")
        student.city = request.POST.get("city")
        student.save()
        return redirect('home')

    return render(request,'update_student.html',{'student':student})

def delete_student(request,id):
    student= get_object_or_404(Student,id=id)
    student.delete()
    
    return redirect('home')


