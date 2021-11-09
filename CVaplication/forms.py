from django import forms
from CVaplication.models import Profile, Experience, Education, Skills


class ProfileModelForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'

