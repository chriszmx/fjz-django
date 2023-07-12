from django import forms


class SignUpForm(forms.Form):
    email = forms.EmailField(max_length=150)
    first_name = forms.CharField(max_length=150)
    last_name = forms.CharField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput)
    password_confirmation = forms.CharField(max_length=150, widget=forms.PasswordInput)
    # is_tenant = forms.BooleanField()
    # is_employee = forms.BooleanField()


class LoginForm(forms.Form):
    email = forms.EmailField(max_length=150)
    password = forms.CharField(max_length=150, widget=forms.PasswordInput)
