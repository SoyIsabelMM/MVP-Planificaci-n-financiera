#!/bin/bash

pip install -r backend/requirements.txt

# Aplicar migraciones
python backend/manage.py migrate

# Recopilar archivos estáticos
python backend/manage.py collectstatic --noinput
