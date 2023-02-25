# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse # This is the line that was added

# Create your views here.

 # This line allows us to render the index.html file and return it to the user 
    # at this part we give the path to the index.html file and the request object
def base(request):
    return render(request, "projects/base.html")


    