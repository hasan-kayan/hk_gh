from django.urls import path
from . import views # This is the line that was added (the dot means the current directory)


urlpatterns = [
  
    path("", views.home),
    path('contact/', views.contact, name='contact'),
    
 
]