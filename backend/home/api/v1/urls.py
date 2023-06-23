from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HelloViewSet,HeyViewSet,LeeViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('hello', HelloViewSet )
router.register('hey', HeyViewSet )
router.register('lee', LeeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
