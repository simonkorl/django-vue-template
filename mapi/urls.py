from django.urls import path, include
from rest_framework import routers

from .views import index_view, MessageViewSet

from . import views

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)

urlpatterns = [
    # http://localhost:8000/
    path('', index_view, name='index'),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    path('api/news/', views.getNews)
]
