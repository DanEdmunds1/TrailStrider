from django.urls import path
from .views import RegionListCreateView, RegionDetailView

urlpatterns = [
    path('', RegionListCreateView.as_view()),
    path('<int:pk>/', RegionDetailView.as_view())
]