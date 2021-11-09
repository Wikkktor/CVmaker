from django.views import View
from django.shortcuts import render

# Create your views here.
from django.views.generic import CreateView

from CVaplication import forms
from CVaplication.models import Profile


class MainPageView(View):
    # Main Page view
    def get(self, request):
        response = render(request, 'main_page.html')
        return response


class ProfileAddPage(CreateView):
    # Adding data to profile table
    model = Profile
    form_class = forms.ProfileModelForm
    template_name = 'profile_add.html'
    success_url = "/"
