from .common import CountrySerializer
from regions.serializers.common import RegionSerializer

class PopulatedCountrySerializer(CountrySerializer):
    regions = RegionSerializer(many=True)
