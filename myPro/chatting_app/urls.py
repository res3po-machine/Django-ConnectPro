from django.urls import path, re_path
from .views import on_chat, select_chat

urlpatterns = [
    path("", on_chat, name="chat"), 
    path('room/<int:roomId>/', on_chat, name='chat'),  # Using path() here for simplicity
    path("sel_chat/<int:curId>/", select_chat, name = "sel_chat"),
]