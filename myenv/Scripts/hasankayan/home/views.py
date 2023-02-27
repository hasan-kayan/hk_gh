# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse # This is the line that was added
# E-mail configurations from Django documentation
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

# Create your views here.

 # This line allows us to render the index.html file and return it to the user 
    # at this part we give the path to the index.html file and the request object
def home(request):
    return render(request, "home/home.html")
def contact(request):
    if request.method == 'POST':
        # Get the form data from the request
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Send an email to your address using Django's send_mail function
        send_mail(
            subject='New message from your website',
            message=f'Name: {name}\nEmail: {email}\nMessage: {message}',
            from_email=email,
            recipient_list=['hasankayan.formal@gmail.com'],
        )

        # Redirect the user to a thank you page
        return HttpResponseRedirect(reverse('thank_you'))

    # If the request is not a POST request, show the contact form
    
    return render(request, "home/contact.html")
