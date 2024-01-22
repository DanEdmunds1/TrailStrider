from rest_framework.generics import CreateAPIView
from .serializers.common import RegistrationSerializer, UserSerializer
from django.contrib.auth import get_user_model
from lib.views import OwnerListCreateView
from .serializers.common import UserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

User = get_user_model()

# Create your views here.
class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
