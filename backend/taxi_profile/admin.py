from django.contrib import admin
from .models import Document, UserProfile, DriverProfile, InviteCode, Notification

admin.site.register(Notification)
admin.site.register(UserProfile)
admin.site.register(Document)
admin.site.register(InviteCode)
admin.site.register(DriverProfile)

# Register your models here.
