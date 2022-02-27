from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from main_site import views as main_site_views


app_name = "main_site"
urlpatterns = [
    path('', main_site_views.homeView, name='home'),
    path('contact-us/',main_site_views.contactUsView, name="contact-us"),
    path('prayer-request/',main_site_views.prayerRequestView, name="prayer-request"),
    path('lets-connect/',main_site_views.letsConnectView, name="lets-connect"),
    path('i\'m-new/',main_site_views.newHereView, name="new-here"),

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
