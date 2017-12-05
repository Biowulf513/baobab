from django.shortcuts import render
from app.models import Programs

# def index(request):
#     # return redirect('index')
#     return render(request, 'index.html')

def index(request):
    programs = Programs.objects.all()
    return render(request, 'work/index.html', {'programs':programs})

def test(request):
    programs = Programs.objects.all()
    return render(request, 'theme_2/index.html', {'programs':programs})

def test1(request):
    return render(request, 'style_test1.html')

def test2(request):
    return render(request, 'style_test2.html')