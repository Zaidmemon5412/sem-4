from django.shortcuts import render, get_object_or_404
from .models import Player


def home(request):
    players = Player.objects.all()

    pid = request.GET.get('pid', '')
    pname = request.GET.get('pname', '')
    team = request.GET.get('team', '')
    runs = request.GET.get('runs', '')
    bdate = request.GET.get('bdate', '')

    if pid:
        players = players.filter(id__icontains=pid)

    if pname:
        players = players.filter(player_name__icontains=pname)

    if team:
        players = players.filter(team_name__icontains=team)

    if runs:
        players = players.filter(runs__icontains=runs)

    if bdate:
        players = players.filter(birth_date__icontains=bdate)

    context = {
        'players': players
    }

    return render(request, 'home.html', context)


def about(request):
    return render(request, 'about.html')


def info(request, id):
    player = get_object_or_404(Player, id=id)

    return render(request, 'info.html', {
        'player': player
    })