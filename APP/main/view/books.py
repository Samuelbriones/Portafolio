from django.views.generic import TemplateView

class BooksTemplateView(TemplateView):
    template_name = 'books.html'
