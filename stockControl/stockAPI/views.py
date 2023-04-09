from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from django.http import JsonResponse
from .decorators import verify_token  # Importe o decorator token_required


# Create your views here.


class ItemList(generics.ListCreateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    # authentication_classes = [SessionAuthentication]
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return super().get_queryset()
    
    def create(self, request, *args, **kwargs):
        print(request.data["foto"])
        return super().create(request, *args, **kwargs)



