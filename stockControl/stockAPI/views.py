from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny


# Create your views here.
class ItemList(generics.ListCreateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = (IsAuthenticated,)