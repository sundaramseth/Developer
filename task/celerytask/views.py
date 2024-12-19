from django.shortcuts import render
from .models import CleryTask
from rest_framework import routers, serializers, viewsets


from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CleryTask
        fields = ['task']

class TaskViewSet(viewsets.ModelViewSet):
    queryset = CleryTask.objects.all()
    serializer_class = TaskSerializer

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)


@api_view(['GET', 'POST'])
def create_task(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = CleryTask.objects.all()
        serializer = TaskSerializer(snippets, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)