from django.shortcuts import render


def homeView(request):
    # carousels = CarouselInfo.objects.all()
    # context = {"carousels":carousels}
    return render(request,"main_site/index.html")


def contactUsView(request):
    # form = ContactForm()
    # context = {"form":form}
    return render(request,"main_site/contact-us.html",)


def prayerRequestView(request):
    return render(request,'main_site/prayer-request.html')



def letsConnectView(request):
    return render(request,'main_site/lets-connect.html')



def newHereView(request):
    return render(request,"main_site/new-here.html")
