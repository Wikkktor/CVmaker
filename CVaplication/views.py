from django.views import View
from django.shortcuts import render

class MainPageView(View):
    # Main Page view
    def get(self, request):
        response = render(request, 'main_page.html')
        return response


class ResumeCreator(View):
    def get(self, request):
        response = render(request, 'profile_add.html')
        return response
