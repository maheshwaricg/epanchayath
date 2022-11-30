from django.shortcuts import render

# Create your views here.
def home(request):
    return render (request,'epanchayathtemplates/home.html')

def loginuser(request):
    return render (request,'epanchayathtemplates/loginu.html')

def loginstaff(request):
    return render (request,'epanchayathtemplates/logins.html')

def userservice(request):
    return render (request,'epanchayathtemplates/serviceu.html')

def income(request):
    return render (request,'epanchayathtemplates/income.html')

def caste(request):
    return render (request,'epanchayathtemplates/caste.html')

def community(request):
    return render (request,'epanchayathtemplates/community.html')

def domicile(request):
    return render (request,'epanchayathtemplates/domicile.html')

def minority(request):
    return render (request,'epanchayathtemplates/minority.html')

def nativity(request):
    return render (request,'epanchayathtemplates/nativity.html')

def nonremarriage(request):
    return render (request,'epanchayathtemplates/nonremarriage.html')

def ownership(request):
    return render (request,'epanchayathtemplates/ownership.html')

def possession(request):
    return render (request,'epanchayathtemplates/possession.html')

def staffpage(request):
    return render (request,'epanchayathtemplates/staffpage.html')

def userprofile(request):
    return render (request,'epanchayathtemplates/userprofile.html')

def masterpage(request):
    return render (request,'epanchayathtemplates/master.html')

def about(request):
    return render (request,'epanchayathtemplates/about.html')

def feedback(request):
    return render (request,'epanchayathtemplates/feedback.html')