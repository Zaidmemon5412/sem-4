from django.db import models

# Create your models here.
class Player(models.Model):
    player_name=models.CharField(max_length=100)
    team_name=models.CharField(max_length=100)
    description=models.TextField()
    profile_url=models.URLField()
    runs=models.IntegerField()
    birth_date=models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.player_name
    