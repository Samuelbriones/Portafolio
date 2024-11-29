from django.urls import path
from APP.main.view import main,about,content,books

app_name = 'main'

urlpatterns = [
    path('', main.MainTemplateView.as_view(), name='index'), 
    path('about/', about.AboutTemplateView.as_view(),name = 'about'),
    path('content/',content.ContentTemplateView.as_view(), name= 'content'),
    path('books/',books.BooksTemplateView.as_view(), name= 'books')
]