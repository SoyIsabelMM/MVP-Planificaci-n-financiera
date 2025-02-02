from rest_framework import serializers
from users.models import User


class UserRegisterSerializers(serializers.ModelSerializer):
    """ Class Register User Serializers """
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'dni']
        extra_kwargs = {
            'username': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'dni': {'required': True},
        }


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [field.name for field in User._meta.fields if field.name != 'password']


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [field.name for field in User._meta.fields if field.name != 'password']
