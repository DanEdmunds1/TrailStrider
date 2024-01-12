from .common import RegionSerializer
from countries.serializers.common import CountrySerializer

class PopulatedRegionSerializer(RegionSerializer):
    country = CountrySerializer