from django.contrib import admin
from .models import audioCVT

class audioCVTAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

admin.site.register(audioCVT, audioCVTAdmin)
