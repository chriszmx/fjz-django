from django.shortcuts import redirect, render
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from accounts.forms import SignUpForm, LoginForm
from django.http import JsonResponse


# Create your views here.
def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            password_confirmation = form.cleaned_data['password_confirmation']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']

            if password == password_confirmation:
                user = User.objects.create_user(
                    email,
                    password=password,
                    first_name=first_name,
                    last_name=last_name,
                )
                login(request, user)
                return JsonResponse(
                    "You have been logged in."
                )
            else:
                form.add_error('password', 'passwords do not match')
    else:
        form = SignUpForm()
    context = {
        'form': form
    }
    return render(request, 'accounts/signup.html', context)


def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = authenticate(
                request,
                email=email,
                password=password,
            )
        if user is not None:
            login(request, user)
            return redirect("recipe_list")
    else:
        form = LoginForm()
        context = {
            'form': form
        }
    return render(request, 'accounts/login.html', context)


def user_logout(request):
    logout(request)
    return redirect('recipe_list')
