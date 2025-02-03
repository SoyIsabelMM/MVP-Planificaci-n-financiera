from django.db import models
from users.models import User
from django.db.models import SET_NULL


class Onboarding(models.Model):
    INVESTMENT_CHOICES = [
        ('Plazo fijo', 'Plazo fijo'),
        ('Acciones', 'Acciones'),
        ('Bonos', 'Bonos'),
        ('Criptomonedas', 'Criptomonedas'),
        ('Fondos Comunes de Inversión', 'Fondos Comunes de Inversión'),
        ('Otros', 'Otros')
    ]
    
    KNOWLEDGE_CHOICES = [
        ('Básico', 'Conocimientos básicos sobre finanzas personales'),
        ('Intermedio', 'Cálculo de tasa de interés'),
        ('Avanzado', 'Impacto de la inflación en el poder de compra')
    ]
    
    EXPERIENCE_CHOICES = [
        ('Nunca he invertido', 'Nunca he invertido'),
        ('Principiante', 'He invertido ocasionalmente'),
        ('Avanzado', 'Tengo inversiones activas y hago seguimiento')
    ]
    
    SAVINGS_CAPACITY_CHOICES = [
        ('Menos de $200.000', 'Menos de $200.000'),
        ('Entre $200.000 a $600.000', 'Entre $200.000 a $600.000'),
        ('Más de $600.000', 'Más de $600.000')
    ]
    
    INVESTMENT_GOAL_CHOICES = [
        ('Mantener el valor de mis ahorros', 'Mantener el valor de mis ahorros'),
        ('Ganarle a la inflación', 'Ganarle a la inflación'),
        ('Obtener rendimientos superiores a la inflación', 'Obtener rendimientos superiores a la inflación')
    ]
    
    MONITORING_TOOLS_CHOICES = [
        ('Ninguna', 'Ninguna'),
        ('Medios de comunicación', 'Medios de comunicación'),
        ('Redes sociales', 'Redes sociales'),
        ('Diarios especializados', 'Diarios especializados'),
        ('Gráficos', 'Gráficos')
    ]
    
    INSURANCE_CHOICES = [
        ('Contra todo riesgo', 'Contra todo riesgo'),
        ('Destrucción parcial', 'Destrucción parcial'),
        ('Contra terceros', 'Contra terceros'),
        ('Ninguno', 'Ninguno si pudiera')
    ]
    
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    invested_before = models.CharField(max_length=50, choices=INVESTMENT_CHOICES, blank=True, null=True)
    financial_knowledge = models.CharField(max_length=50, choices=KNOWLEDGE_CHOICES)
    invest_savings = models.BooleanField(default=False)
    investment_experience = models.CharField(max_length=50, choices=EXPERIENCE_CHOICES)
    savings_percentage = models.IntegerField(help_text="Porcentaje de ingresos que puedes ahorrar")
    savings_capacity = models.CharField(max_length=50, choices=SAVINGS_CAPACITY_CHOICES)
    investment_percentage = models.IntegerField(help_text="Porcentaje de ahorros que invertirías")
    investment_duration = models.IntegerField(help_text="Tiempo en meses que mantendrías tu inversión")
    investment_goal = models.CharField(max_length=100, choices=INVESTMENT_GOAL_CHOICES)
    sell_threshold = models.IntegerField(help_text="Porcentaje de ganancias antes de vender")
    withdraw_threshold = models.IntegerField(help_text="Porcentaje de pérdidas antes de retirar")
    monitoring_tools = models.CharField(max_length=100, choices=MONITORING_TOOLS_CHOICES)
    car_insurance = models.CharField(max_length=50, choices=INSURANCE_CHOICES)
    
    def __str__(self):
        return f'Cuestionario de {self.id}'
