from django.contrib import admin
from .models import Onboarding


class OnboardingAdmin(admin.ModelAdmin):
    """
    Configuration for the Onboarding model in the Django admin panel.

    - Lists key fields to facilitate management.
    - Enables search by user and prior investment.
    - Adds filters for experience, savings capacity, and investment goals.
    - Organizes data into sections for better visualization.
    """

    list_display = ('user', 'invested_before', 'investment_experience',
                    'savings_capacity', 'investment_goal')
    search_fields = ('user__username', 'invested_before')
    list_filter = ('investment_experience',
                   'savings_capacity', 'investment_goal')

    fieldsets = (
        ("User Information", {"fields": ("user",)}),
        ("Experience and Investments", {
            "fields": ("invested_before", "financial_knowledge",
                       "investment_experience", "invest_savings")
        }),
        ("Savings and Investment Capacity", {
            "fields": ("savings_percentage", "savings_capacity",
                       "investment_percentage", "investment_duration")
        }),
        ("Investment Strategy", {
            "fields": ("investment_goal",
                       "sell_threshold", "withdraw_threshold")
        }),
        ("Monitoring and Insurance", {
            "fields": ("monitoring_tools", "car_insurance")
        }),
    )


# Register the model in the admin panel
admin.site.register(Onboarding, OnboardingAdmin)
