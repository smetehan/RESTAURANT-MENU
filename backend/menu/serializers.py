from rest_framework import serializers
from .models import Pide,Kebap,Doner,Salata,Tatli,Icecek,Masa_1,Masa_2,Masa_3,Masa_4


class PideSerializer(serializers.ModelSerializer):
      class Meta:
        model = Pide
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
            
        )
class KebapSerializer(serializers.ModelSerializer):
      class Meta:
        model = Kebap
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
            
        )
class DonerSerializer(serializers.ModelSerializer):
      class Meta:
        model = Doner
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
            
        )
class SalataSerializer(serializers.ModelSerializer):
      class Meta:
        model = Salata
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
            
        )
class IcecekSerializer(serializers.ModelSerializer):
      class Meta:
        model = Icecek
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
            
        )
class TatliSerializer(serializers.ModelSerializer):
      class Meta:
        model = Tatli
        fields = (
            'id',
            'title',
            'price',
            'user',
            'image',
     
            
        )

class Masa_1Serializer(serializers.ModelSerializer):
  
    class Meta:
        model=Masa_1
        fields = (
            "id",
            'title',
            'price',
            'image',
           
        )
class Masa_2Serializer(serializers.ModelSerializer):
  
    class Meta:
        model=Masa_2
        fields = (
            "id",
            'title',
            'price',
            'image',
           
        )
class Masa_3Serializer(serializers.ModelSerializer):
  
    class Meta:
        model=Masa_3
        fields = (
            "id",
            'title',
            'price',
            'image',
           
        )
class Masa_4Serializer(serializers.ModelSerializer):
  
    class Meta:
        model=Masa_4
        fields = (
            "id",
            'title',
            'price',
            'image',
           
        )