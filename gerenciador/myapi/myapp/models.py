from django.db import models

# Create your models here

class Leilao(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    criador = models.CharField(max_length=100, null=False, blank=False)
    lance_inicial = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)
    lance_atual = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)
    data_criacao = models.DateTimeField(auto_now_add=True)
    data_encerramento = models.DateTimeField()
    arrematante = models.CharField(max_length=100)


    def __str__(self) -> str:
        return self.nome

#DataFlair Models
class Lance(models.Model):
    usuario = models.CharField(max_length = 50)
    valor = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)
    horario_lance = models.DateTimeField(auto_now_add=True)
    leilao = models.ForeignKey(Leilao, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

#class CriarLance(models.Model):
#    nome = models.CharField(max_length=100, null=False, blank=False)
#    id = models.DecimalField(max_digits=50, null=False, blank=False)
#    lance = models.DecimalField(max_digits=50, decimal_places=2, null=False, blank=False)

