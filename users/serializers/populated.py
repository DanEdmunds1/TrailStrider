from .common import RegistrationSerializer
from hikers.serializers.common import HikerSerializer
from reviews.serializers.common import ReviewSerializer

class PopulatedUserSerializer(RegistrationSerializer):
    hikers = HikerSerializer(many=True)
    reviews = ReviewSerializer(many=True)