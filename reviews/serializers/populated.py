from .common import ReviewSerializer
from users.serializers.common import UserSerializer

class PopulatedReviewSerializer(ReviewSerializer):
    owner = UserSerializer