from .common import TrailSerializer
from reviews.serializers.common import ReviewSerializer
from countries.serializers.common import CountrySerializer
from regions.serializers.common import RegionSerializer

class PopulatedTrailSerializer(TrailSerializer):
    reviews = ReviewSerializer(many=True)
    region = RegionSerializer()