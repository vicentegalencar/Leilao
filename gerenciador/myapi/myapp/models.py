from django.db import models

# Create your models here

from django.db.models.signals import post_save
from django.dispatch import receiver



class Leilao(models.Model):
    itemID = models.IntegerField()
    name = models.CharField(max_length=100, null=False, blank=False)
    owner = models.CharField(max_length=100, null=False, blank=False)
    firstBid = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)
    actualBid = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False, default=0)
    creation = models.DateTimeField(auto_now_add=True)
    endTime = models.DateTimeField()
    arrematante = models.CharField(max_length=100, default='')


    def __str__(self) -> str:
        return self.nome

#DataFlair Models
class Lance(models.Model):
    usuario = models.CharField(max_length = 100)
    valor = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)
    horario_lance = models.DateTimeField(auto_now_add=True)
    leilao = models.ForeignKey(Leilao, on_delete=models.CASCADE)
      


    def __str__(self):
        return self.name


@receiver(post_save, sender=Lance)
def my_handler(sender, instance, created, **kwargs):
    if created:
        instance.leilao.actualBid=instance.valor
        instance.leilao.save()
        


#class CriarLance(models.Model):
#    nome = models.CharField(max_length=100, null=False, blank=False)
#    id = models.DecimalField(max_digits=50, null=False, blank=False)
#    lance = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)

