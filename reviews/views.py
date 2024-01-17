from rest_framework.generics import DestroyAPIView
from .serializers.common import ReviewSerializer
from .models import Review
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
from .serializers.populated import PopulatedReviewSerializer

# Path: /reviews/
# Methods: GET, POST
class ReviewCreateView(OwnerListCreateView):
    queryset = Review.objects.all()
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedReviewSerializer
        return ReviewSerializer

# Path: /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]
