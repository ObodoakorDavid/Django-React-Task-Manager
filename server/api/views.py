from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import TaskSerializer
from .models import Task
# Create your views here.

class TaskView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskList(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskRetrieve(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdate(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class TaskDelete(generics.RetrieveAPIView, generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    