from django.urls import path
from . import views # This is the line that was added (the dot means the current directory)


urlpatterns = [
  
    path("myblog", views.myblog),
    path("http", views.http),
    path("internet", views.internet),
    
 
]