from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import VehicleLocationViewSet, ProfileLocationViewSet, MapLocationViewSet

router = DefaultRouter()
router.register("profilelocation", ProfileLocationViewSet)
router.register("vehiclelocation", VehicleLocationViewSet)
router.register("maplocation", MapLocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
