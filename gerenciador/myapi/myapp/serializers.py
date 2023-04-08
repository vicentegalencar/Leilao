from rest_framework import serializers
from .models import Leilao
from .models import Lance


class LeilaoSerializer(serializers.ModelSerializer):


    class Meta:
        model = Leilao
        fields = '__all__'


class LanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lance
        fields = '__all__'



