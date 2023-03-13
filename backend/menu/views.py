from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets,filters, status
from .models import Pide,Kebap,Doner,Salata,Tatli,Icecek,Masa_1,Masa_2,Masa_3,Masa_4
from .serializers import PideSerializer,KebapSerializer,Masa_1Serializer,Masa_2Serializer,Masa_3Serializer,Masa_4Serializer,DonerSerializer,IcecekSerializer,TatliSerializer,SalataSerializer
class PideView(viewsets.ModelViewSet):
    queryset = Pide.objects.all()
    serializer_class = PideSerializer
class KebapView(viewsets.ModelViewSet):
    queryset = Kebap.objects.all()
    serializer_class = KebapSerializer
class DonerView(viewsets.ModelViewSet):
    queryset = Doner.objects.all()
    serializer_class = DonerSerializer
class SalataView(viewsets.ModelViewSet):
    queryset = Salata.objects.all()
    serializer_class = SalataSerializer
class IcecekView(viewsets.ModelViewSet):
    queryset = Icecek.objects.all()
    serializer_class = IcecekSerializer
class TatliView(viewsets.ModelViewSet):
    queryset = Tatli.objects.all()
    serializer_class = TatliSerializer

class Masa_1View(viewsets.ModelViewSet):
    def delete(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset.delete()  
        return Response(status=status.HTTP_204_NO_CONTENT)
    queryset = Masa_1.objects.all()
    serializer_class =Masa_1Serializer
class Masa_2View(viewsets.ModelViewSet):
    def delete(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset.delete()  
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    queryset = Masa_2.objects.all()
    serializer_class =Masa_2Serializer


class Masa_3View(viewsets.ModelViewSet):
    def delete(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset.delete()  
        return Response(status=status.HTTP_204_NO_CONTENT)
    queryset = Masa_3.objects.all()
    serializer_class =Masa_3Serializer
class Masa_4View(viewsets.ModelViewSet):
    def delete(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset.delete()  
        return Response(status=status.HTTP_204_NO_CONTENT)
    queryset = Masa_4.objects.all()
    serializer_class =Masa_4Serializer

