from rest_framework.serializers import ModelSerializer
from onboarding.models import Onboarding


class OnboardingSerializers(ModelSerializer):
    """ Serializer for the Game model."""
    class Meta:
        model = Onboarding
        fields = '__all__'
