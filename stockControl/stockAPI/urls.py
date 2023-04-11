from . import views
from django.urls import path

urlpatterns = [
    path(r'itens', views.ItemList.as_view(), name="itens"),
    path('RetrieveItens/<int:pk>', views.RetrieveItens.as_view(), name='RetrieveItens'),

]