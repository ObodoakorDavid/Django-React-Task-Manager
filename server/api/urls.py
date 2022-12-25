from django.urls import path
from .views import TaskView, TaskList, TaskRetrieve, TaskDelete, TaskUpdate

urlpatterns = [
    path('', TaskView.as_view()),
    path('create/', TaskList.as_view()),
    path('detail/<int:pk>/',TaskRetrieve.as_view()),
    path('update/<int:pk>/', TaskUpdate.as_view()),
    path('delete/<int:pk>/', TaskDelete.as_view()),
]