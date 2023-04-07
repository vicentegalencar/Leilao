from rest_framework import generics, mixins

from .mailService import MailService
from .models import Leilao
from .serializers import LeilaoSerializer
from .models import Lance
from .serializers import LanceSerializer

# Create your views here.
class ListaLeilao(generics.ListCreateAPIView):

    def create(self, request, *args, **kwargs):
        mailservice = MailService("http://localhost:4002")
        mailservice.send(["gabriel.santossilva@outlook.com", "vicentegalencar@gmail.com"], "leiloes começando", "teste" )
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


