import requests
from rest_framework import generics, mixins

from .mailService import MailService
from .models import Leilao
from .serializers import LeilaoSerializer
from .models import Lance
from .serializers import LanceSerializer
from datetime import datetime

# Create your views here.
class ListaLeilao(generics.ListCreateAPIView):

    def create(self, request, *args, **kwargs):
        print(request.data)
        # mailservice = MailService("http://localhost:4002")
        # mailservice.send([request.userInfo["email"]], "Seu novo leilão foi iniciado", f'Olá {request.userInfo["name"]}, \n\n Seu novo item foi colocado para leilão. Aqui estão as informações. \n\n{request.data}' )
        return super().create(request, *args, **kwargs)

    queryset = Leilao.objects.all()
    serializer_class = LeilaoSerializer


    def get_object(self):
        return self.queryset.get(pk=id)

class ListaLances(generics.ListCreateAPIView):

    queryset = Lance.objects.all()
    serializer_class = LanceSerializer
    def get_object(self):
        return self.queryset.get(pk=id)

class RetrieveListaLeilao(generics.RetrieveAPIView):

    queryset = Leilao.objects.all()
    serializer_class = LeilaoSerializer

class RetrieveListaLances(generics.RetrieveAPIView):

    queryset = Lance.objects.all()
    serializer_class = LanceSerializer
 
class ListaLeiloesAtivos(generics.ListAPIView):

    queryset = Leilao.objects.filter(endTime__lt=datetime.now())
    serializer_class = LeilaoSerializer

class HistoricoLances(generics.ListAPIView):

    queryset =  Lance.objects.filter()
    serializer_class = LanceSerializer