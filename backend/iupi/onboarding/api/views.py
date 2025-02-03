from onboarding.models import Onboarding
from onboarding.api.serializers import OnboardingSerializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly
)


class OnboardingModelViewSet(ModelViewSet):
    """ Model-based view for the Game resource"""
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = OnboardingSerializers
    queryset = Onboarding.objects.all()
