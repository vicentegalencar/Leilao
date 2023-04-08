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
        requests.post('http://localhost:9000/itens', json={"name":request.data["nome"], "owner": request.data["criador"], "usage_time": "2 anos", "category": "item"}, headers={"x-access-token": request.headers.get("X-Access-Token")})
        mailservice = MailService("http://localhost:4002")
        mailservice.send([request.userInfo["email"]], "Seu novo leilão foi iniciado", f'Olá {request.userInfo["name"]}, \n\n Seu novo item foi colocado para leilão. Aqui estão as informações. \n\n{request.data}' )
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

    queryset = Leilao.objects.filter(data_encerramento__lt=datetime.now())
    serializer_class = LeilaoSerializer

