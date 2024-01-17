from .common import TrailSerializer
from reviews.serializers.common import ReviewSerializer
from regions.serializers.common import RegionSerializer

class PopulatedTrailSerializer(TrailSerializer):
    reviews = ReviewSerializer(many=True)