from django.urls import path
from . import views

urlpatterns = [
    path(r'musics', views.MusicList.as_view(), name='music-list'),

]