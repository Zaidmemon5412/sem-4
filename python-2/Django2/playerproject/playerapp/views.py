from django.shortcuts import render,redirect , get_object_or_404
from .models import Player

# Create your views here.
def welcome(request):
    return render(request,'welcome.html')

def home(request):
    query = request.GET.get('name')
    if query:
        players = Player.objects.filter(name__icontains=query)
    else:
        players = Player.objects.all()
    return render(request,'home.html', {'query': query,'players':players})

def add_player(request):
    if request.method == "POST":
        Player.objects.create(
            name = request.POST['name'],
            test_innings = request.POST['test_innings'],
            runs = request.POST['runs']
        )
        return redirect('home')
    return render(request,'add_player.html')

def edit_player(request,id):
    player = get_object_or_404(Player,id=id)
    if request.method =="POST":
        player.name = request.POST['name']
        player.test_innings = request.POST['test_innings']
        player.runs = request.POST['runs']

        player.save()
        return redirect('home')
    return render(request,'edit_player.html',{'player':player})

def delete_player(request,id):
    player = get_object_or_404(Player,id=id)
    player.delete()
    return redirect('home')