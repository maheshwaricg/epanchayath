from django.urls import path
from . import views
urlpatterns = [
    path('home',views.home),
    path('master/',views.masterpage),
    path('loginu/',views.loginuser),
    path('logins/',views.loginstaff),
    path('serviceu/',views.userservice),
    path('income/',views.income),
    path('caste/',views.caste),
    path('community/',views.community),
    path('domicile/',views.domicile),
    path('minority/',views.minority),
    path('nativity/',views.nativity),
    path('nonremarriage/',views.nonremarriage),
    path('ownership/',views.ownership),
    path('possession/',views.possession),
    path('staffpage/',views.staffpage),
    path('userprofile/',views.userprofile),
    path('about/',views.about),
    path('feedback/',views.feedback),


   


]