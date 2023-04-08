from . import views
from django.urls import path

urlpatterns = [
    path(r'itens', views.ItemList.as_view(), name="itens"),

]