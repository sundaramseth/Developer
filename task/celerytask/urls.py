from django.urls import include, path
from .views import router

from rest_framework.urlpatterns import format_suffix_patterns
from . import views



urlpatterns = [
    path('', include(router.urls)),
    path('create_task/', views.create_task)
]