from django import forms
from django.contrib.auth.password_validation import validate_password

class SignUpForm(forms.Form):
    email = forms.EmailField(max_length=150)
    first_name = forms.CharField(max_length=150)
    last_name = forms.CharField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput, validators=[validate_password])
    password_confirmation = forms.CharField(max_length=150, widget=forms.PasswordInput)
    # is_tenant = forms.BooleanField()
    # is_employee = forms.BooleanField()


class LoginForm(forms.Form):
    email = forms.EmailField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput)

class RentalApplication(forms.Form):
    first_name = forms.CharField(max_length=150)
    middle_name = forms.CharField(max_length=150)
    last_name = forms.CharField(max_length=150)
    email = forms.EmailField(max_length=150)
    ssn = forms.CharField(
        label='Social Security Number',
        max_length=11,
        widget=forms.TextInput(attrs={'placeholder': 'xxx-xx-xxxx'}),
        help_text='Please enter your Social Security Number in the format xxx-xx-xxxx.'
    )
