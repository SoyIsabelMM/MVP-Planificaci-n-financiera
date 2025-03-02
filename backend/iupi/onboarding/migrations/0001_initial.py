# Generated by Django 5.1.2 on 2025-02-02 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OnboardingQuestionnaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invested_before', models.CharField(blank=True, choices=[('Plazo fijo', 'Plazo fijo'), ('Acciones', 'Acciones'), ('Bonos', 'Bonos'), ('Criptomonedas', 'Criptomonedas'), ('Fondos Comunes de Inversión', 'Fondos Comunes de Inversión'), ('Otros', 'Otros')], max_length=50, null=True)),
                ('financial_knowledge', models.CharField(choices=[('Básico', 'Conocimientos básicos sobre finanzas personales'), ('Intermedio', 'Cálculo de tasa de interés'), ('Avanzado', 'Impacto de la inflación en el poder de compra')], max_length=50)),
                ('invest_savings', models.BooleanField(default=False)),
                ('investment_experience', models.CharField(choices=[('Nunca he invertido', 'Nunca he invertido'), ('Principiante', 'He invertido ocasionalmente'), ('Avanzado', 'Tengo inversiones activas y hago seguimiento')], max_length=50)),
                ('savings_percentage', models.IntegerField(help_text='Porcentaje de ingresos que puedes ahorrar')),
                ('savings_capacity', models.CharField(choices=[('Menos de $200.000', 'Menos de $200.000'), ('Entre $200.000 a $600.000', 'Entre $200.000 a $600.000'), ('Más de $600.000', 'Más de $600.000')], max_length=50)),
                ('investment_percentage', models.IntegerField(help_text='Porcentaje de ahorros que invertirías')),
                ('investment_duration', models.IntegerField(help_text='Tiempo en meses que mantendrías tu inversión')),
                ('investment_goal', models.CharField(choices=[('Mantener el valor de mis ahorros', 'Mantener el valor de mis ahorros'), ('Ganarle a la inflación', 'Ganarle a la inflación'), ('Obtener rendimientos superiores a la inflación', 'Obtener rendimientos superiores a la inflación')], max_length=100)),
                ('sell_threshold', models.IntegerField(help_text='Porcentaje de ganancias antes de vender')),
                ('withdraw_threshold', models.IntegerField(help_text='Porcentaje de pérdidas antes de retirar')),
                ('monitoring_tools', models.CharField(choices=[('Ninguna', 'Ninguna'), ('Medios de comunicación', 'Medios de comunicación'), ('Redes sociales', 'Redes sociales'), ('Diarios especializados', 'Diarios especializados'), ('Gráficos', 'Gráficos')], max_length=100)),
                ('car_insurance', models.CharField(choices=[('Contra todo riesgo', 'Contra todo riesgo'), ('Destrucción parcial', 'Destrucción parcial'), ('Contra terceros', 'Contra terceros'), ('Ninguno', 'Ninguno si pudiera')], max_length=50)),
            ],
        ),
    ]
