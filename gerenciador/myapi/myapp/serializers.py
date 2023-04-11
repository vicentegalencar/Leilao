from rest_framework import serializers
from .models import Leilao
from .models import Lance


class LanceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Lance
        fields = '__all__'
        
class LeilaoSerializer(serializers.ModelSerializer):
    lance_set=LanceSerializer(many=True, read_only=True)

    class Meta:
        model = Leilao
        fields = '__all__'
        related_object = "lance"

