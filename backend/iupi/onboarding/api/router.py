from rest_framework.routers import DefaultRouter
from onboarding.api.views import OnboardingModelViewSet

router_onboarding = DefaultRouter()

router_onboarding.register(prefix='onboarding', basename='onboarding', viewset=OnboardingModelViewSet)
