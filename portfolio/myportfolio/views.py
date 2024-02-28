from django.shortcuts import render

# Create your views here.
def myportfolio(request):
    return render(request,'index.html')