from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Country
from .serializers.common import CountrySerializer
from .serializers.populated import PopulatedCountrySerializer

# Create your views here.

# Path: /countries/
# Methods: GET, POST
class CountryListCreateView(ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

# Path: /countries/:pk/
# Methods: GET, PUT, PATCH, DELETE
class CountryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Country.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedCountrySerializer
        return CountrySerializer