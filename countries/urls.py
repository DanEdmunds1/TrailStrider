from django.urls import path
from .views import CountryListCreateView, CountryDetailView

urlspatterns = [
    path('', CountryListCreateView.as_view()),
    path('<int:pk>/', CountryDetailView.as_view())
]