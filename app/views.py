from django.shortcuts import render
from app.models import Programs

# def index(request):
#     # return redirect('index')
#     return render(request, 'index.html')

def index(request):
    programs = Programs.objects.all()
    return render(request, 'index.html', {'programs':programs})