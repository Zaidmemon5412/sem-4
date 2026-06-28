from django.http import HttpResponse
from django.shortcuts import render

def Home(request):
    return render(request,'index.html')
def About(request):
    return HttpResponse("hello World About")
def Contact(request):
    return HttpResponse("hello World  contact")