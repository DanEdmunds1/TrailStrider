from rest_framework import serializers
from ..models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

    def get_owner_username(self, obj):
        return obj.owner.username if obj.owner else None