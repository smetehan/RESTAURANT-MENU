from django.urls import path
from rest_framework import routers
from .views import PideView,KebapView,DonerView,TatliView,IcecekView,SalataView,Masa_1View,Masa_2View,Masa_3View,Masa_4View

router = routers.DefaultRouter()

router.register("pide", PideView)
router.register("kebap", KebapView)
router.register("doner", DonerView)
router.register("tatli", TatliView)
router.register("icecek", IcecekView)
router.register("salata", SalataView)
router.register("masa-1", Masa_1View)
router.register("masa-2", Masa_2View)
router.register("masa-3", Masa_3View)
router.register("masa-4", Masa_4View)

urlpatterns = [
    
] + router.urls
