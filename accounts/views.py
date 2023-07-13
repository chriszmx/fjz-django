from django.shortcuts import redirect, render
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from accounts.forms import SignUpForm, LoginForm
from django.http import JsonResponse
import json


# Create your views here.
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        form = SignUpForm(data)
        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]
            password_confirmation = form.cleaned_data["password_confirmation"]
            first_name = form.cleaned_data["first_name"]
            last_name = form.cleaned_data["last_name"]

            if User.objects.filter(email=email).exists():
                return JsonResponse(
                    {"email": "User with this email already exists."}, status=400
                )


            if password == password_confirmation:
                user = User.objects.create_user(
                    username=email,
                    email=email,
                    password=password,
                    first_name=first_name,
                    last_name=last_name,
                )
                user.profile.user_type = 'non_tenant'
                user.profile.save()
                user = authenticate(request, username=email, password=password)
                if user is not None:
                    login(request, user)
                    return JsonResponse({"message": "You have been logged in."})
                else:
                    return JsonResponse({"message": "User authentication failed."})
            else:
                form.add_error("password", "passwords do not match")
    else:
        form = SignUpForm()

    errors = form.errors.get_json_data(escape_html=True)
    return JsonResponse(errors, status=400)


def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]
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
        context = {"form": form}
    return render(request, "accounts/login.html", context)


def user_logout(request):
    logout(request)
    return redirect("recipe_list")
