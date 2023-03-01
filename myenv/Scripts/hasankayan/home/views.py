from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import EmailMessage
from django.urls import reverse

# Create your views here.

 # This line allows us to render the index.html file and return it to the user 
    # at this part we give the path to the index.html file and the request object
def home(request):
    return render(request, "home/home.html")
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Send email notification
        email_subject = 'New contact form submission'
        email_body = f'Name: {name}\nEmail: {email}\nMessage: {message}'
        recipient_email = 'hasankayan.formal@gmail.com'
        sender_email = email
        email = EmailMessage(
            email_subject,
            email_body,
            sender_email,
            [recipient_email],
        )
        email.send()

        return HttpResponseRedirect(reverse('contact'))

    
    return render(request, "home/contact.html")
