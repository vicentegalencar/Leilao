
from django.urls import path
from . import views

urlpatterns = [
    path('Leilao/<int:pk>/', views.ListaLeilao.as_view(), name='AListadeLeilao'),
    path('Leilao/', views.ListaLeilao.as_view(), name='ListaLeilao'),
    path('RetrieveLeilao/<int:pk>', views.RetrieveListaLeilao.as_view(), name='RetrieveListaLeilao'),
    path('Lance/<int:pk>', views.ListaLances.as_view(), name='AListadeLances'),
    path('Lance/', views.ListaLances.as_view(), name='ListaLances'),
    path('RetrieveLance/<int:pk>', views.RetrieveListaLances.as_view(), name='RetrieveListaLances')

]