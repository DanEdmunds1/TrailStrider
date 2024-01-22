from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Region
from .serializers.common import RegionSerializer
from .serializers.populated import PopulatedRegionSerializer

# Create your views here.

# Path: /regions/
# Methods: GET, POST
class RegionListCreateView(ListCreateAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

# Path: /regions/:pk/
# Methods: GET, PUT, PATCH, DELETE
class RegionDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Region.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedRegionSerializer
        return RegionSerializer